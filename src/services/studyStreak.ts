export const STREAK_STORAGE_KEY = 'xuannhi_study_streak_v1';
export const STREAK_UPDATED_EVENT = 'xuannhi-streak-updated';
export const DEFAULT_DAILY_EXAM_GOAL = 5;
export const DAILY_CHAPTER_GOAL = 5;
export const DAILY_QUESTION_GOAL = 50;

export interface StudyStreakState {
  activeDates: string[];
  secondsByDate: Record<string, number>;
  answeredByDate: Record<string, number>;
  correctByDate: Record<string, number>;
  examsByDate: Record<string, number>;
  chaptersByDate: Record<string, number>;
  dailyExamGoal: number;
  totalSeconds: number;
  totalCorrectAnswers: number;
  completedFocusSessions: number;
  daysAwaySessionDate?: string;
  daysAwayCount?: number;
}

export interface StudyStreakDaySummary {
  dateKey: string;
  shortLabel: string;
  active: boolean;
  minutes: number;
}

export interface StudyStreakStats {
  currentStreakDays: number;
  longestStreakDays: number;
  todaySeconds: number;
  totalSeconds: number;
  todayAnsweredCount: number;
  todayCorrectCount: number;
  todayExamsCount: number;
  todayChaptersCount: number;
  dailyExamGoal: number;
  totalCorrectAnswers: number;
  completedFocusSessions: number;
  fireflyCount: number;
  daysAwayBeforeToday: number;
  last7Days: StudyStreakDaySummary[];
}

function emptyState(): StudyStreakState {
  return {
    activeDates: [],
    secondsByDate: {},
    answeredByDate: {},
    correctByDate: {},
    examsByDate: {},
    chaptersByDate: {},
    dailyExamGoal: DEFAULT_DAILY_EXAM_GOAL,
    totalSeconds: 0,
    totalCorrectAnswers: 0,
    completedFocusSessions: 0,
  };
}

export function getLocalDateKey(date: Date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function shiftDate(date: Date, deltaDays: number): Date {
  const next = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  next.setDate(next.getDate() + deltaDays);
  return next;
}

function parseDateKey(dateKey: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateKey);
  if (!match) return null;
  const year = Number(match[1]);
  const month = Number(match[2]) - 1;
  const day = Number(match[3]);
  return new Date(year, month, day);
}

function daysBetweenKeys(prevKey: string, nextKey: string): number {
  const a = parseDateKey(prevKey);
  const b = parseDateKey(nextKey);
  if (!a || !b) return 999;
  const msPerDay = 24 * 60 * 60 * 1000;
  return Math.round((b.getTime() - a.getTime()) / msPerDay);
}

function getStorage(): Storage | undefined {
  try {
    if (
      typeof window !== 'undefined' &&
      window.localStorage &&
      typeof window.localStorage.getItem === 'function'
    ) {
      return window.localStorage;
    }
  } catch {
    return undefined;
  }
  return undefined;
}

function parseNumericDateMap(raw: unknown): Record<string, number> {
  const map: Record<string, number> = {};
  if (!raw || typeof raw !== 'object') return map;
  for (const [k, v] of Object.entries(raw as Record<string, unknown>)) {
    if (parseDateKey(k) && typeof v === 'number' && Number.isFinite(v) && v >= 0) {
      map[k] = Math.floor(v);
    }
  }
  return map;
}

export function loadStreakState(storage?: Storage): StudyStreakState {
  const target = storage ?? getStorage();
  if (!target) return emptyState();
  try {
    const raw = target.getItem(STREAK_STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as Partial<StudyStreakState>;
    if (!parsed || typeof parsed !== 'object') return emptyState();

    const activeDates = Array.isArray(parsed.activeDates)
      ? Array.from(
          new Set(
            parsed.activeDates.filter(
              (d) => typeof d === 'string' && parseDateKey(d)
            )
          )
        ).sort()
      : [];

    const secondsByDate = parseNumericDateMap(parsed.secondsByDate);
    const answeredByDate = parseNumericDateMap(parsed.answeredByDate);
    const correctByDate = parseNumericDateMap(parsed.correctByDate);
    const examsByDate = parseNumericDateMap(parsed.examsByDate);
    const chaptersByDate = parseNumericDateMap(parsed.chaptersByDate);

    const dailyExamGoal =
      typeof parsed.dailyExamGoal === 'number' &&
      parsed.dailyExamGoal >= 1 &&
      parsed.dailyExamGoal <= 20
        ? Math.floor(parsed.dailyExamGoal)
        : DEFAULT_DAILY_EXAM_GOAL;

    const totalSeconds =
      typeof parsed.totalSeconds === 'number' &&
      Number.isFinite(parsed.totalSeconds)
        ? Math.max(0, Math.floor(parsed.totalSeconds))
        : Object.values(secondsByDate).reduce((sum, n) => sum + n, 0);

    const totalCorrectAnswers =
      typeof parsed.totalCorrectAnswers === 'number' &&
      Number.isFinite(parsed.totalCorrectAnswers)
        ? Math.max(0, Math.floor(parsed.totalCorrectAnswers))
        : Object.values(correctByDate).reduce((sum, n) => sum + n, 0);

    const completedFocusSessions =
      typeof parsed.completedFocusSessions === 'number' &&
      Number.isFinite(parsed.completedFocusSessions)
        ? Math.max(0, Math.floor(parsed.completedFocusSessions))
        : 0;

    return {
      activeDates,
      secondsByDate,
      answeredByDate,
      correctByDate,
      examsByDate,
      chaptersByDate,
      dailyExamGoal,
      totalSeconds,
      totalCorrectAnswers,
      completedFocusSessions,
      daysAwaySessionDate:
        typeof parsed.daysAwaySessionDate === 'string'
          ? parsed.daysAwaySessionDate
          : undefined,
      daysAwayCount:
        typeof parsed.daysAwayCount === 'number' &&
        Number.isFinite(parsed.daysAwayCount)
          ? Math.max(0, Math.floor(parsed.daysAwayCount))
          : 0,
    };
  } catch {
    return emptyState();
  }
}

function saveStreakState(state: StudyStreakState, storage?: Storage): void {
  const target = storage ?? getStorage();
  if (!target) return;
  try {
    target.setItem(STREAK_STORAGE_KEY, JSON.stringify(state));
    if (!storage && typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent(STREAK_UPDATED_EVENT));
    }
  } catch {
    // Ignore storage quota errors safely.
  }
}

function ensureActiveDate(
  state: StudyStreakState,
  dateKey: string
): StudyStreakState {
  if (state.activeDates.includes(dateKey)) return state;
  const prevKey =
    state.activeDates.length > 0
      ? state.activeDates[state.activeDates.length - 1]
      : null;
  const gapDays =
    prevKey && prevKey < dateKey ? Math.max(0, daysBetweenKeys(prevKey, dateKey) - 1) : 0;

  return {
    ...state,
    activeDates: [...state.activeDates, dateKey].sort(),
    daysAwaySessionDate: dateKey,
    daysAwayCount: gapDays,
  };
}

export function markStudyDayActive(
  now: Date = new Date(),
  storage?: Storage
): StudyStreakState {
  const current = loadStreakState(storage);
  const key = getLocalDateKey(now);
  const next = ensureActiveDate(current, key);
  if (next !== current) {
    saveStreakState(next, storage);
  }
  return next;
}

export function recordStudySeconds(
  deltaSeconds: number,
  now: Date = new Date(),
  storage?: Storage
): StudyStreakState {
  const clamped = Math.min(120, Math.max(0, Math.floor(deltaSeconds)));
  if (clamped <= 0) return markStudyDayActive(now, storage);

  const key = getLocalDateKey(now);
  const current = ensureActiveDate(loadStreakState(storage), key);
  const next: StudyStreakState = {
    ...current,
    secondsByDate: {
      ...current.secondsByDate,
      [key]: (current.secondsByDate[key] ?? 0) + clamped,
    },
    totalSeconds: current.totalSeconds + clamped,
  };
  saveStreakState(next, storage);
  return next;
}

export function recordAnsweredQuestions(
  totalAnswered: number,
  correctCount: number,
  now: Date = new Date(),
  storage?: Storage
): StudyStreakState {
  const safeTotal = Math.max(0, Math.floor(totalAnswered));
  const safeCorrect = Math.min(safeTotal, Math.max(0, Math.floor(correctCount)));
  if (safeTotal === 0) return markStudyDayActive(now, storage);

  const key = getLocalDateKey(now);
  const current = ensureActiveDate(loadStreakState(storage), key);
  const next: StudyStreakState = {
    ...current,
    answeredByDate: {
      ...current.answeredByDate,
      [key]: (current.answeredByDate[key] ?? 0) + safeTotal,
    },
    correctByDate: {
      ...current.correctByDate,
      [key]: (current.correctByDate[key] ?? 0) + safeCorrect,
    },
    totalCorrectAnswers: current.totalCorrectAnswers + safeCorrect,
  };
  saveStreakState(next, storage);
  return next;
}

export function recordCompletedExam(
  now: Date = new Date(),
  storage?: Storage
): StudyStreakState {
  const key = getLocalDateKey(now);
  const current = ensureActiveDate(loadStreakState(storage), key);
  const next: StudyStreakState = {
    ...current,
    examsByDate: {
      ...current.examsByDate,
      [key]: (current.examsByDate[key] ?? 0) + 1,
    },
  };
  saveStreakState(next, storage);
  return next;
}

export function recordCompletedChapter(
  now: Date = new Date(),
  storage?: Storage
): StudyStreakState {
  const key = getLocalDateKey(now);
  const current = ensureActiveDate(loadStreakState(storage), key);
  const next: StudyStreakState = {
    ...current,
    chaptersByDate: {
      ...current.chaptersByDate,
      [key]: (current.chaptersByDate[key] ?? 0) + 1,
    },
  };
  saveStreakState(next, storage);
  return next;
}

export function setDailyExamGoal(
  goal: number,
  storage?: Storage
): StudyStreakState {
  const safeGoal = Math.min(10, Math.max(1, Math.floor(goal)));
  const current = loadStreakState(storage);
  const next: StudyStreakState = {
    ...current,
    dailyExamGoal: safeGoal,
  };
  saveStreakState(next, storage);
  return next;
}

export function recordFocusCompletion(
  now: Date = new Date(),
  storage?: Storage
): StudyStreakState {
  const key = getLocalDateKey(now);
  const current = ensureActiveDate(loadStreakState(storage), key);
  const next: StudyStreakState = {
    ...current,
    completedFocusSessions: current.completedFocusSessions + 1,
  };
  saveStreakState(next, storage);
  return next;
}

const WEEKDAY_LABELS = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

export function computeStreakStats(
  state: StudyStreakState,
  now: Date = new Date()
): StudyStreakStats {
  const activeSet = new Set(state.activeDates);
  const sorted = [...activeSet].sort();
  const todayKey = getLocalDateKey(now);
  const yesterdayKey = getLocalDateKey(shiftDate(now, -1));

  let currentStreakDays = 0;
  let cursor = activeSet.has(todayKey)
    ? new Date(now.getFullYear(), now.getMonth(), now.getDate())
    : activeSet.has(yesterdayKey)
      ? shiftDate(now, -1)
      : null;

  while (cursor && activeSet.has(getLocalDateKey(cursor))) {
    currentStreakDays += 1;
    cursor = shiftDate(cursor, -1);
  }

  let longestStreakDays = 0;
  let run = 0;
  for (let i = 0; i < sorted.length; i += 1) {
    if (i === 0 || daysBetweenKeys(sorted[i - 1], sorted[i]) !== 1) {
      run = 1;
    } else {
      run += 1;
    }
    if (run > longestStreakDays) longestStreakDays = run;
  }

  const last7Days: StudyStreakDaySummary[] = [];
  for (let offset = -6; offset <= 0; offset += 1) {
    const dayDate = shiftDate(now, offset);
    const key = getLocalDateKey(dayDate);
    last7Days.push({
      dateKey: key,
      shortLabel: offset === 0 ? 'Nay' : WEEKDAY_LABELS[dayDate.getDay()],
      active: activeSet.has(key),
      minutes: Math.floor((state.secondsByDate[key] ?? 0) / 60),
    });
  }

  const fireflyCount =
    Math.floor(state.totalCorrectAnswers / 10) + state.completedFocusSessions;

  return {
    currentStreakDays,
    longestStreakDays,
    todaySeconds: state.secondsByDate[todayKey] ?? 0,
    totalSeconds: state.totalSeconds,
    todayAnsweredCount: state.answeredByDate[todayKey] ?? 0,
    todayCorrectCount: state.correctByDate[todayKey] ?? 0,
    todayExamsCount: state.examsByDate[todayKey] ?? 0,
    todayChaptersCount: state.chaptersByDate[todayKey] ?? 0,
    dailyExamGoal: state.dailyExamGoal,
    totalCorrectAnswers: state.totalCorrectAnswers,
    completedFocusSessions: state.completedFocusSessions,
    fireflyCount,
    daysAwayBeforeToday:
      state.daysAwaySessionDate === todayKey ? state.daysAwayCount ?? 0 : 0,
    last7Days,
  };
}

export function formatStudyDuration(totalSeconds: number): string {
  const safe = Math.max(0, Math.floor(totalSeconds));
  const totalMinutes = Math.floor(safe / 60);
  if (totalMinutes < 1) {
    return safe > 0 ? `${safe} giây` : '0 phút';
  }
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  if (hours === 0) return `${mins} phút`;
  return mins > 0 ? `${hours}g ${mins}p` : `${hours} giờ`;
}
