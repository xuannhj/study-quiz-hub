import { doc, getDoc, onSnapshot, setDoc, type Unsubscribe } from 'firebase/firestore';
import { firestoreDb } from './firebaseConfig';
import type { AppStoragePayload } from '../../types/study';
import type { StudyStreakState } from '../studyStreak';
import { STORAGE_KEY } from '../storage/storageService';
import { STREAK_STORAGE_KEY, STREAK_UPDATED_EVENT } from '../studyStreak';

export const SYNC_CODE_STORAGE_KEY = 'xuannhi_cloud_sync_code';
export const LAST_SYNCED_STORAGE_KEY = 'xuannhi_cloud_last_synced';
export const DEVICE_ID_STORAGE_KEY = 'xuannhi_device_id';
export const CLOUD_SYNC_EVENT = 'xuannhi-cloud-synced';
export const EXAM_DATE_STORAGE_KEY = 'xuannhi_exam_schedule_date';
export const CUSTOM_ROOMS_KEY = 'xuannhi_custom_rooms';

const FIRESTORE_COLLECTION = 'study_sync_rooms';

export interface CloudSyncDocument {
  version: number;
  syncCode: string;
  lastUpdated: string;
  updatedByDeviceId: string;
  appData: string;
  streakData?: string;
  scheduleDate?: string;
  customRooms?: string;
}

export interface SyncStatus {
  connected: boolean;
  syncCode: string | null;
  lastSyncedAt: string | null;
  isSyncing: boolean;
  error: string | null;
}

export function sanitizeSyncCode(code: string): string {
  // Normalize vietnamese accents to ASCII
  const normalized = code
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
  return normalized.slice(0, 32) || 'user';
}

export function generateRandomSyncCode(): string {
  const chars = 'abcdefghjkmnpqrstuvwxyz23456789';
  let result = 'xn-';
  for (let i = 0; i < 4; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}

export function getOrCreateDeviceId(): string {
  if (typeof window === 'undefined') return 'server';
  try {
    let id = window.localStorage.getItem(DEVICE_ID_STORAGE_KEY);
    if (!id) {
      id = 'dev_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
      window.localStorage.setItem(DEVICE_ID_STORAGE_KEY, id);
    }
    return id;
  } catch {
    return 'fallback-dev';
  }
}

export function mergeAppPayload(
  local: AppStoragePayload,
  remote: AppStoragePayload
): AppStoragePayload {
  const customSubjectMap = new Map<string, any>();
  for (const s of local.customSubjects || []) customSubjectMap.set(s.id, s);
  for (const s of remote.customSubjects || []) customSubjectMap.set(s.id, s);

  const subjectExtensions = { ...(local.subjectExtensions || {}) };
  for (const [subId, ext] of Object.entries(remote.subjectExtensions || {})) {
    if (!subjectExtensions[subId]) {
      subjectExtensions[subId] = ext;
    } else {
      const existing = subjectExtensions[subId];
      const chMap = new Map<string, any>();
      for (const c of existing.chapters || []) chMap.set(c.id, c);
      for (const c of ext.chapters || []) chMap.set(c.id, c);

      const qMap = new Map<string, any>();
      for (const q of existing.questions || []) qMap.set(q.id, q);
      for (const q of ext.questions || []) qMap.set(q.id, q);

      const epMap = new Map<string, any>();
      for (const p of existing.examPacks || []) epMap.set(p.id, p);
      for (const p of ext.examPacks || []) epMap.set(p.id, p);

      subjectExtensions[subId] = {
        chapters: Array.from(chMap.values()),
        questions: Array.from(qMap.values()),
        examPacks: Array.from(epMap.values()),
      };
    }
  }

  const progressBySubject = { ...(local.progressBySubject || {}) };
  for (const [subId, remoteProg] of Object.entries(remote.progressBySubject || {})) {
    const localProg = progressBySubject[subId];
    if (!localProg) {
      progressBySubject[subId] = remoteProg;
      continue;
    }

    const completedSet = new Set([
      ...(localProg.completedChapterIds || []),
      ...(remoteProg.completedChapterIds || []),
    ]);

    const bookmarkSet = new Set([
      ...(localProg.bookmarkedQuestionIds || []),
      ...(remoteProg.bookmarkedQuestionIds || []),
    ]);

    const wrongStats = { ...(localProg.wrongQuestionStats || {}) };
    for (const [qId, rStat] of Object.entries(remoteProg.wrongQuestionStats || {})) {
      const lStat = wrongStats[qId];
      if (!lStat) {
        wrongStats[qId] = rStat;
      } else {
        const newerDate =
          !lStat.lastWrongAt || (rStat.lastWrongAt && rStat.lastWrongAt > lStat.lastWrongAt)
            ? rStat.lastWrongAt
            : lStat.lastWrongAt;

        // If one is mastered, check if the other has a newer wrong attempt
        let mastered = false;
        if (lStat.mastered && rStat.mastered) {
          mastered = true;
        } else if (lStat.mastered) {
          mastered = !(rStat.lastWrongAt && (!lStat.lastWrongAt || rStat.lastWrongAt > lStat.lastWrongAt));
        } else if (rStat.mastered) {
          mastered = !(lStat.lastWrongAt && (!rStat.lastWrongAt || lStat.lastWrongAt > rStat.lastWrongAt));
        }

        wrongStats[qId] = {
          wrongCount: Math.max(lStat.wrongCount || 0, rStat.wrongCount || 0),
          lastWrongAt: newerDate,
          mastered,
        };
      }
    }

    const attemptMap = new Map<string, any>();
    for (const a of localProg.attempts || []) attemptMap.set(a.id, a);
    for (const a of remoteProg.attempts || []) attemptMap.set(a.id, a);
    const sortedAttempts = Array.from(attemptMap.values()).sort(
      (a, b) => new Date(b.completedAt).getTime() - new Date(a.completedAt).getTime()
    );

    progressBySubject[subId] = {
      subjectId: subId,
      completedChapterIds: Array.from(completedSet),
      bookmarkedQuestionIds: Array.from(bookmarkSet),
      wrongQuestionStats: wrongStats,
      attempts: sortedAttempts,
      activeSession: localProg.activeSession || remoteProg.activeSession,
    };
  }

  const noteMap = new Map<string, any>();
  for (const n of local.notes || []) noteMap.set(n.id, n);
  for (const n of remote.notes || []) {
    const existing = noteMap.get(n.id);
    if (!existing) {
      noteMap.set(n.id, n);
    } else {
      const existingTime = new Date(existing.updatedAt || 0).getTime();
      const remoteTime = new Date(n.updatedAt || 0).getTime();
      if (remoteTime >= existingTime) {
        noteMap.set(n.id, n);
      }
    }
  }

  return {
    version: 1,
    customSubjects: Array.from(customSubjectMap.values()),
    subjectExtensions,
    progressBySubject,
    notes: Array.from(noteMap.values()),
  };
}

export function mergeStreakState(
  local: StudyStreakState,
  remote: StudyStreakState
): StudyStreakState {
  const activeDates = Array.from(
    new Set([...(local.activeDates || []), ...(remote.activeDates || [])])
  ).sort();

  const mergeMap = (a: Record<string, number> = {}, b: Record<string, number> = {}) => {
    const res: Record<string, number> = { ...a };
    for (const [k, v] of Object.entries(b)) {
      res[k] = Math.max(res[k] || 0, v || 0);
    }
    return res;
  };

  return {
    activeDates,
    secondsByDate: mergeMap(local.secondsByDate, remote.secondsByDate),
    answeredByDate: mergeMap(local.answeredByDate, remote.answeredByDate),
    correctByDate: mergeMap(local.correctByDate, remote.correctByDate),
    examsByDate: mergeMap(local.examsByDate, remote.examsByDate),
    chaptersByDate: mergeMap(local.chaptersByDate, remote.chaptersByDate),
    dailyExamGoal: remote.dailyExamGoal || local.dailyExamGoal || 5,
    totalSeconds: Math.max(local.totalSeconds || 0, remote.totalSeconds || 0),
    totalCorrectAnswers: Math.max(
      local.totalCorrectAnswers || 0,
      remote.totalCorrectAnswers || 0
    ),
    completedFocusSessions: Math.max(
      local.completedFocusSessions || 0,
      remote.completedFocusSessions || 0
    ),
    daysAwayCount: local.daysAwayCount || remote.daysAwayCount,
    daysAwaySessionDate: local.daysAwaySessionDate || remote.daysAwaySessionDate,
  };
}

class CloudSyncService {
  private activeUnsubscribe: Unsubscribe | null = null;
  private pushDebounceTimer: any = null;
  private isPushing = false;
  private listeners: Set<(status: SyncStatus) => void> = new Set();
  private status: SyncStatus = {
    connected: false,
    syncCode: null,
    lastSyncedAt: null,
    isSyncing: false,
    error: null,
  };

  constructor() {
    if (typeof window !== 'undefined') {
      const savedCode = window.localStorage.getItem(SYNC_CODE_STORAGE_KEY);
      const savedLastSynced = window.localStorage.getItem(LAST_SYNCED_STORAGE_KEY);
      if (savedCode) {
        this.status.syncCode = savedCode;
        this.status.connected = true;
        this.status.lastSyncedAt = savedLastSynced;
      }

      // Listen for local updates to auto-push
      window.addEventListener('study-storage-updated', () => {
        this.scheduleAutoPush();
      });
      window.addEventListener(STREAK_UPDATED_EVENT, () => {
        this.scheduleAutoPush();
      });
    }
  }

  public getStatus(): SyncStatus {
    return { ...this.status };
  }

  public subscribeStatus(cb: (status: SyncStatus) => void): () => void {
    this.listeners.add(cb);
    cb(this.getStatus());
    return () => this.listeners.delete(cb);
  }

  private notifyStatus(patch?: Partial<SyncStatus>) {
    if (patch) {
      this.status = { ...this.status, ...patch };
    }
    const current = this.getStatus();
    this.listeners.forEach((cb) => cb(current));
  }

  public async connect(syncCodeInput: string): Promise<{ ok: boolean; error?: string }> {
    const code = sanitizeSyncCode(syncCodeInput);
    if (!code) {
      return { ok: false, error: 'Mã đồng bộ không hợp lệ. Vui lòng nhập ít nhất 3 ký tự.' };
    }

    try {
      this.notifyStatus({ isSyncing: true, error: null });

      // Save code locally
      window.localStorage.setItem(SYNC_CODE_STORAGE_KEY, code);
      this.status.syncCode = code;
      this.status.connected = true;

      // Unsubscribe previous room if any
      if (this.activeUnsubscribe) {
        this.activeUnsubscribe();
        this.activeUnsubscribe = null;
      }

      // Initial Fetch & Merge
      const roomRef = doc(firestoreDb, FIRESTORE_COLLECTION, code);
      const snap = await getDoc(roomRef);

      if (snap.exists()) {
        const remoteDoc = snap.data() as CloudSyncDocument;
        this.applyRemoteData(remoteDoc);
      }

      // Push current combined local state up to Cloud so Cloud is immediately complete
      await this.pushNow();

      // Start real-time listener for remote changes
      this.startRealtimeListener(code);

      const nowIso = new Date().toISOString();
      window.localStorage.setItem(LAST_SYNCED_STORAGE_KEY, nowIso);
      this.notifyStatus({ isSyncing: false, lastSyncedAt: nowIso, connected: true });

      return { ok: true };
    } catch (err: any) {
      const msg = err?.message || 'Không thể kết nối đến máy chủ đồng bộ Firebase.';
      this.notifyStatus({ isSyncing: false, error: msg });
      return { ok: false, error: msg };
    }
  }

  public disconnect(): void {
    if (this.activeUnsubscribe) {
      this.activeUnsubscribe();
      this.activeUnsubscribe = null;
    }
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(SYNC_CODE_STORAGE_KEY);
      window.localStorage.removeItem(LAST_SYNCED_STORAGE_KEY);
    }
    this.notifyStatus({
      connected: false,
      syncCode: null,
      lastSyncedAt: null,
      isSyncing: false,
      error: null,
    });
  }

  public startRealtimeListener(code: string): void {
    if (this.activeUnsubscribe) {
      this.activeUnsubscribe();
    }

    const roomRef = doc(firestoreDb, FIRESTORE_COLLECTION, code);
    this.activeUnsubscribe = onSnapshot(
      roomRef,
      (snapshot) => {
        if (!snapshot.exists()) return;
        const remoteData = snapshot.data() as CloudSyncDocument;

        // Ignore updates created by this device
        const myDeviceId = getOrCreateDeviceId();
        if (remoteData.updatedByDeviceId === myDeviceId) {
          return;
        }

        this.applyRemoteData(remoteData);
      },
      (error) => {
        console.warn('Firestore sync listener error:', error);
      }
    );
  }

  private applyRemoteData(remoteDoc: CloudSyncDocument): void {
    if (typeof window === 'undefined') return;

    try {
      // 1. Merge AppStoragePayload
      if (remoteDoc.appData) {
        const remoteApp = JSON.parse(remoteDoc.appData) as AppStoragePayload;
        const localRaw = window.localStorage.getItem(STORAGE_KEY);
        const localApp = localRaw ? (JSON.parse(localRaw) as AppStoragePayload) : {
          version: 1,
          customSubjects: [],
          subjectExtensions: {},
          progressBySubject: {},
          notes: [],
        };
        const mergedApp = mergeAppPayload(localApp, remoteApp);
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedApp));
      }

      // 2. Merge StudyStreakState
      if (remoteDoc.streakData) {
        const remoteStreak = JSON.parse(remoteDoc.streakData) as StudyStreakState;
        const localRaw = window.localStorage.getItem(STREAK_STORAGE_KEY);
        const localStreak: StudyStreakState = localRaw ? JSON.parse(localRaw) : {
          activeDates: [],
          secondsByDate: {},
          answeredByDate: {},
          correctByDate: {},
          examsByDate: {},
          chaptersByDate: {},
          dailyExamGoal: 5,
          totalSeconds: 0,
          totalCorrectAnswers: 0,
          completedFocusSessions: 0,
        };
        const mergedStreak = mergeStreakState(localStreak, remoteStreak);
        window.localStorage.setItem(STREAK_STORAGE_KEY, JSON.stringify(mergedStreak));
      }

      // 3. Exam schedules
      if (remoteDoc.scheduleDate && !window.localStorage.getItem(EXAM_DATE_STORAGE_KEY)) {
        window.localStorage.setItem(EXAM_DATE_STORAGE_KEY, remoteDoc.scheduleDate);
      }
      if (remoteDoc.customRooms && !window.localStorage.getItem(CUSTOM_ROOMS_KEY)) {
        window.localStorage.setItem(CUSTOM_ROOMS_KEY, remoteDoc.customRooms);
      }

      const nowIso = new Date().toISOString();
      window.localStorage.setItem(LAST_SYNCED_STORAGE_KEY, nowIso);
      this.notifyStatus({ lastSyncedAt: nowIso });

      // Notify UI to refresh
      window.dispatchEvent(new CustomEvent(CLOUD_SYNC_EVENT));
      window.dispatchEvent(new CustomEvent(STREAK_UPDATED_EVENT));
    } catch (e) {
      console.error('Failed to merge remote sync data:', e);
    }
  }

  public scheduleAutoPush(): void {
    if (!this.status.connected || !this.status.syncCode) return;
    if (this.pushDebounceTimer) {
      clearTimeout(this.pushDebounceTimer);
    }
    this.pushDebounceTimer = setTimeout(() => {
      this.pushNow().catch((e) => console.warn('Cloud auto-push error:', e));
    }, 1500);
  }

  public async pushNow(): Promise<void> {
    const code = this.status.syncCode;
    if (!code) return;
    if (this.isPushing) return;

    this.isPushing = true;
    this.notifyStatus({ isSyncing: true });

    try {
      const myDeviceId = getOrCreateDeviceId();
      const nowIso = new Date().toISOString();

      const localAppRaw = window.localStorage.getItem(STORAGE_KEY) || '{}';
      const localStreakRaw = window.localStorage.getItem(STREAK_STORAGE_KEY) || '{}';
      const localDate = window.localStorage.getItem(EXAM_DATE_STORAGE_KEY) || '';
      const localRooms = window.localStorage.getItem(CUSTOM_ROOMS_KEY) || '';

      const roomRef = doc(firestoreDb, FIRESTORE_COLLECTION, code);
      const payload: CloudSyncDocument = {
        version: 1,
        syncCode: code,
        lastUpdated: nowIso,
        updatedByDeviceId: myDeviceId,
        appData: localAppRaw,
        streakData: localStreakRaw,
        scheduleDate: localDate,
        customRooms: localRooms,
      };

      await setDoc(roomRef, payload);

      window.localStorage.setItem(LAST_SYNCED_STORAGE_KEY, nowIso);
      this.notifyStatus({ isSyncing: false, lastSyncedAt: nowIso, error: null });
    } catch (err: any) {
      const msg = err?.message || 'Lỗi khi tải dữ liệu lên đám mây.';
      this.notifyStatus({ isSyncing: false, error: msg });
      throw err;
    } finally {
      this.isPushing = false;
    }
  }

  public initializeAutoConnect(): void {
    if (typeof window === 'undefined') return;
    const savedCode = window.localStorage.getItem(SYNC_CODE_STORAGE_KEY);
    if (savedCode && !this.activeUnsubscribe) {
      this.startRealtimeListener(savedCode);
    }
  }
}

export const cloudSyncService = new CloudSyncService();
