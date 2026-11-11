import type {
  ActiveExamSession,
  AppStoragePayload,
  Chapter,
  CustomSubjectInput,
  ExamAttempt,
  ExamPack,
  Question,
  Subject,
  UserSubjectProgress,
} from '../../types/study';

export const STORAGE_KEY = 'study_quiz_hub_v1';
const CURRENT_VERSION = 1;

export function createEmptyProgress(subjectId: string): UserSubjectProgress {
  return {
    subjectId,
    completedChapterIds: [],
    bookmarkedQuestionIds: [],
    wrongQuestionStats: {},
    attempts: [],
  };
}

function emptyPayload(): AppStoragePayload {
  return {
    version: CURRENT_VERSION,
    customSubjects: [],
    subjectExtensions: {},
    progressBySubject: {},
  };
}

function safeParsePayload(raw: string | null): AppStoragePayload {
  if (!raw) return emptyPayload();
  try {
    const parsed = JSON.parse(raw) as Partial<AppStoragePayload>;
    if (!parsed || typeof parsed !== 'object') return emptyPayload();
    return {
      version: CURRENT_VERSION,
      customSubjects: Array.isArray(parsed.customSubjects)
        ? parsed.customSubjects
        : [],
      subjectExtensions:
        parsed.subjectExtensions && typeof parsed.subjectExtensions === 'object'
          ? parsed.subjectExtensions
          : {},
      progressBySubject:
        parsed.progressBySubject && typeof parsed.progressBySubject === 'object'
          ? parsed.progressBySubject
          : {},
    };
  } catch {
    return emptyPayload();
  }
}

export interface StorageService {
  getSubjects(): Subject[];
  getSubjectById(subjectId: string): Subject | undefined;
  createSubject(input: CustomSubjectInput): Subject;
  addChapterToSubject(
    subjectId: string,
    chapter: Omit<Chapter, 'id' | 'order'>
  ): Chapter;
  importQuestionsToSubject(
    subjectId: string,
    newQuestions: Omit<Question, 'id' | 'subjectId'>[]
  ): Question[];
  deleteImportedQuestion(subjectId: string, questionId: string): void;
  getProgress(subjectId: string): UserSubjectProgress;
  toggleChapterComplete(
    subjectId: string,
    chapterId: string
  ): UserSubjectProgress;
  toggleBookmark(subjectId: string, questionId: string): UserSubjectProgress;
  saveActiveSession(subjectId: string, session: ActiveExamSession): void;
  clearActiveSession(subjectId: string): void;
  recordExamAttempt(
    subjectId: string,
    attempt: ExamAttempt
  ): UserSubjectProgress;
  exportBackupJson(): string;
  importBackupJson(
    jsonText: string
  ): { ok: true; subjectCount: number } | { ok: false; error: string };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createStorageService(
  builtInSubjects: readonly Subject[],
  storage?: Storage
): StorageService {
  const browserStorage =
    typeof window !== 'undefined' &&
    window.localStorage &&
    typeof window.localStorage.getItem === 'function'
      ? window.localStorage
      : undefined;
  const targetStorage = storage ?? browserStorage;

  const read = (): AppStoragePayload =>
    safeParsePayload(targetStorage?.getItem(STORAGE_KEY) ?? null);

  const write = (payload: AppStoragePayload): void => {
    targetStorage?.setItem(STORAGE_KEY, JSON.stringify(payload));
  };

  const mergeSubject = (
    base: Subject,
    payload: AppStoragePayload
  ): Subject => {
    const ext = payload.subjectExtensions[base.id];
    if (!ext) return base;
    return {
      ...base,
      chapters: [...base.chapters, ...(ext.chapters ?? [])],
      questions: [...base.questions, ...(ext.questions ?? [])],
      examPacks: [...base.examPacks, ...(ext.examPacks ?? [])],
    };
  };

  const getSubjects = (): Subject[] => {
    const payload = read();
    const builtInMerged = builtInSubjects.map((s) => mergeSubject(s, payload));
    const customMerged = payload.customSubjects.map((s) =>
      mergeSubject(s, payload)
    );
    return [...builtInMerged, ...customMerged];
  };

  const getSubjectById = (subjectId: string): Subject | undefined =>
    getSubjects().find((s) => s.id === subjectId);

  const ensureProgress = (
    payload: AppStoragePayload,
    subjectId: string
  ): UserSubjectProgress => {
    const existing = payload.progressBySubject[subjectId];
    if (!existing) return createEmptyProgress(subjectId);
    return {
      subjectId,
      completedChapterIds: existing.completedChapterIds ?? [],
      bookmarkedQuestionIds: existing.bookmarkedQuestionIds ?? [],
      wrongQuestionStats: existing.wrongQuestionStats ?? {},
      attempts: existing.attempts ?? [],
      activeSession: existing.activeSession,
    };
  };

  return {
    getSubjects,
    getSubjectById,

    createSubject(input: CustomSubjectInput): Subject {
      const payload = read();
      const baseSlug = slugify(input.code || input.name) || 'subject';
      const id = `${baseSlug}-${Date.now().toString(36)}`;
      const defaultChapter: Chapter = {
        id: `${id}-ch1`,
        order: 1,
        title: 'Chương 1: Tổng quan & Câu hỏi chung',
        summary: 'Chương mặc định chứa các câu hỏi mới import cho môn học.',
        sections: [],
      };
      const defaultQuizPack: ExamPack = {
        id: `${id}-quiz-all`,
        subjectId: id,
        category: 'quiz',
        title: 'Quiz Tổng Hợp',
        durationMinutes: 20,
        questionCount: 20,
        chapterIds: [defaultChapter.id],
        passScorePercent: 50,
      };
      const defaultFinalPack: ExamPack = {
        id: `${id}-final-all`,
        subjectId: id,
        category: 'final',
        title: 'Final Exam Mock',
        durationMinutes: 60,
        questionCount: 50,
        chapterIds: [defaultChapter.id],
        passScorePercent: 50,
      };

      const subject: Subject = {
        id,
        code: input.code.trim().toUpperCase() || 'CUSTOM',
        name: input.name.trim(),
        description: input.description.trim(),
        chapters: [defaultChapter],
        questions: [],
        examPacks: [defaultQuizPack, defaultFinalPack],
      };

      payload.customSubjects.push(subject);
      write(payload);
      return subject;
    },

    addChapterToSubject(
      subjectId: string,
      chapterInput: Omit<Chapter, 'id' | 'order'>
    ): Chapter {
      const payload = read();
      const subject = getSubjects().find((s) => s.id === subjectId);
      const nextOrder = (subject?.chapters.length ?? 0) + 1;
      const chapter: Chapter = {
        id: `${subjectId}-ch${nextOrder}-${Date.now().toString(36)}`,
        order: nextOrder,
        ...chapterInput,
      };
      const ext = payload.subjectExtensions[subjectId] ?? {
        chapters: [],
        questions: [],
        examPacks: [],
      };
      ext.chapters.push(chapter);
      payload.subjectExtensions[subjectId] = ext;
      write(payload);
      return chapter;
    },

    importQuestionsToSubject(
      subjectId: string,
      newQuestions: Omit<Question, 'id' | 'subjectId'>[]
    ): Question[] {
      const payload = read();
      const ext = payload.subjectExtensions[subjectId] ?? {
        chapters: [],
        questions: [],
        examPacks: [],
      };

      const now = Date.now();
      const created: Question[] = newQuestions.map((q, idx) => ({
        ...q,
        id: `${subjectId}-imp-${now}-${idx}`,
        subjectId,
        source: 'imported',
      }));

      ext.questions.push(...created);
      payload.subjectExtensions[subjectId] = ext;
      write(payload);
      return created;
    },

    deleteImportedQuestion(subjectId: string, questionId: string): void {
      const payload = read();
      const ext = payload.subjectExtensions[subjectId];
      if (!ext) return;
      ext.questions = ext.questions.filter((q) => q.id !== questionId);
      write(payload);
    },

    getProgress(subjectId: string): UserSubjectProgress {
      return ensureProgress(read(), subjectId);
    },

    toggleChapterComplete(
      subjectId: string,
      chapterId: string
    ): UserSubjectProgress {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      const exists = progress.completedChapterIds.includes(chapterId);
      progress.completedChapterIds = exists
        ? progress.completedChapterIds.filter((id) => id !== chapterId)
        : [...progress.completedChapterIds, chapterId];
      payload.progressBySubject[subjectId] = progress;
      write(payload);
      return progress;
    },

    toggleBookmark(
      subjectId: string,
      questionId: string
    ): UserSubjectProgress {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      const exists = progress.bookmarkedQuestionIds.includes(questionId);
      progress.bookmarkedQuestionIds = exists
        ? progress.bookmarkedQuestionIds.filter((id) => id !== questionId)
        : [...progress.bookmarkedQuestionIds, questionId];
      payload.progressBySubject[subjectId] = progress;
      write(payload);
      return progress;
    },

    saveActiveSession(subjectId: string, session: ActiveExamSession): void {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      progress.activeSession = session;
      payload.progressBySubject[subjectId] = progress;
      write(payload);
    },

    clearActiveSession(subjectId: string): void {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      delete progress.activeSession;
      payload.progressBySubject[subjectId] = progress;
      write(payload);
    },

    recordExamAttempt(
      subjectId: string,
      attempt: ExamAttempt
    ): UserSubjectProgress {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      progress.attempts = [attempt, ...progress.attempts];
      delete progress.activeSession;

      for (const ans of attempt.answers) {
        const current = progress.wrongQuestionStats[ans.questionId];
        if (!ans.isCorrect) {
          progress.wrongQuestionStats[ans.questionId] = {
            wrongCount: (current?.wrongCount ?? 0) + 1,
            lastWrongAt: attempt.completedAt,
            mastered: false,
          };
        } else if (current) {
          progress.wrongQuestionStats[ans.questionId] = {
            ...current,
            mastered: true,
          };
        }
      }

      payload.progressBySubject[subjectId] = progress;
      write(payload);
      return progress;
    },

    exportBackupJson(): string {
      return JSON.stringify(read(), null, 2);
    },

    importBackupJson(
      jsonText: string
    ): { ok: true; subjectCount: number } | { ok: false; error: string } {
      try {
        const parsed = JSON.parse(jsonText) as Partial<AppStoragePayload>;
        if (
          !parsed ||
          typeof parsed !== 'object' ||
          typeof parsed.version !== 'number'
        ) {
          return {
            ok: false,
            error: 'File backup không đúng định dạng Study & Quiz Hub.',
          };
        }
        const normalized = safeParsePayload(jsonText);
        write(normalized);
        return {
          ok: true,
          subjectCount:
            builtInSubjects.length + normalized.customSubjects.length,
        };
      } catch {
        return { ok: false, error: 'Không thể đọc JSON từ file backup.' };
      }
    },
  };
}
