import { describe, it, expect, beforeEach } from 'vitest';
import type { Subject, ActiveExamSession, ExamAttempt } from '../../types/study';
import { createStorageService, STORAGE_KEY } from './storageService';

function createMemoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear: () => map.clear(),
    getItem: (key: string) => map.get(key) ?? null,
    key: (index: number) => Array.from(map.keys())[index] ?? null,
    removeItem: (key: string) => {
      map.delete(key);
    },
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
  };
}

const seedBuiltIn = (): Subject[] => [
  {
    id: 'swr',
    code: 'SWR302',
    name: 'Software Requirements',
    description: 'Built-in SWR',
    chapters: [{ id: 'swr-ch1', order: 1, title: 'Ch 1', summary: '', sections: [] }],
    questions: [
      {
        id: 'swr-q1',
        subjectId: 'swr',
        chapterId: 'swr-ch1',
        source: 'slide-generated',
        examTarget: 'both',
        difficulty: 'remember',
        type: 'single',
        prompt: 'Built-in Q1',
        options: [
          { id: 'a', text: 'Yes' },
          { id: 'b', text: 'No' },
        ],
        correctOptionIds: ['a'],
        explanation: 'Exp',
      },
    ],
    examPacks: [],
  },
];

describe('storageService', () => {
  let memoryStorage: Storage;

  beforeEach(() => {
    memoryStorage = createMemoryStorage();
  });

  it('merges built-in subjects with user-imported questions and preserves them across built-in updates', () => {
    const svc1 = createStorageService(seedBuiltIn(), memoryStorage);
    const imported = svc1.importQuestionsToSubject('swr', [
      {
        chapterId: 'swr-ch1',
        source: 'imported',
        examTarget: 'quiz',
        difficulty: 'understand',
        type: 'single',
        prompt: 'Imported Q1',
        options: [
          { id: 'a', text: 'A' },
          { id: 'b', text: 'B' },
        ],
        correctOptionIds: ['b'],
        explanation: 'User note',
      },
    ]);

    expect(imported).toHaveLength(1);
    expect(svc1.getSubjectById('swr')?.questions).toHaveLength(2);

    const updatedBuiltIn = seedBuiltIn();
    updatedBuiltIn[0].questions.push({
      ...updatedBuiltIn[0].questions[0],
      id: 'swr-q2',
      prompt: 'Built-in Q2',
    });

    const svc2 = createStorageService(updatedBuiltIn, memoryStorage);
    const merged = svc2.getSubjectById('swr');
    expect(merged?.questions.map((q) => q.prompt)).toEqual([
      'Built-in Q1',
      'Built-in Q2',
      'Imported Q1',
    ]);
  });

  it('recovers gracefully from corrupted localStorage JSON', () => {
    memoryStorage.setItem(STORAGE_KEY, '{corrupted json!!!');
    const svc = createStorageService(seedBuiltIn(), memoryStorage);
    const subjects = svc.getSubjects();
    expect(subjects).toHaveLength(1);
    expect(subjects[0].id).toBe('swr');
  });

  it('tracks wrong questions, masters them on correct answer, and persists active session', () => {
    const svc = createStorageService(seedBuiltIn(), memoryStorage);

    const wrongAttempt: ExamAttempt = {
      id: 'att-1',
      examPackId: 'quiz-1',
      examTitle: 'Quiz 1',
      category: 'quiz',
      mode: 'exam',
      completedAt: '2026-11-11T10:00:00Z',
      scorePercent: 0,
      correctCount: 0,
      totalCount: 1,
      passed: false,
      durationSpentSeconds: 30,
      answers: [{ questionId: 'swr-q1', selectedOptionIds: ['b'], isCorrect: false }],
    };

    const p1 = svc.recordExamAttempt('swr', wrongAttempt);
    expect(p1.wrongQuestionStats['swr-q1']).toMatchObject({
      wrongCount: 1,
      mastered: false,
    });

    const correctAttempt: ExamAttempt = {
      ...wrongAttempt,
      id: 'att-2',
      scorePercent: 100,
      correctCount: 1,
      passed: true,
      answers: [{ questionId: 'swr-q1', selectedOptionIds: ['a'], isCorrect: true }],
    };

    const p2 = svc.recordExamAttempt('swr', correctAttempt);
    expect(p2.wrongQuestionStats['swr-q1'].mastered).toBe(true);

    const session: ActiveExamSession = {
      id: 'sess-1',
      subjectId: 'swr',
      examPackId: 'quiz-1',
      examTitle: 'Quiz 1',
      category: 'quiz',
      mode: 'exam',
      durationMinutes: 20,
      passScorePercent: 50,
      shuffleQuestions: true,
      shuffleOptions: true,
      snapshots: [{ questionId: 'swr-q1', optionOrder: ['b', 'a'] }],
      answers: { 'swr-q1': ['a'] },
      checkedQuestionIds: [],
      flaggedQuestionIds: ['swr-q1'],
      currentIndex: 0,
      remainingSeconds: 1140,
      startedAt: '2026-11-11T10:01:00Z',
      updatedAt: '2026-11-11T10:02:00Z',
    };

    svc.saveActiveSession('swr', session);
    expect(svc.getProgress('swr').activeSession?.remainingSeconds).toBe(1140);
    svc.clearActiveSession('swr');
    expect(svc.getProgress('swr').activeSession).toBeUndefined();
  });

  it('creates custom subjects and supports backup export/import', () => {
    const svc = createStorageService(seedBuiltIn(), memoryStorage);
    const created = svc.createSubject({
      code: 'PRJ301',
      name: 'Java Web Application',
      description: 'Servlet & JSP',
    });
    expect(created.id).toContain('prj301');
    expect(svc.getSubjects()).toHaveLength(2);

    const backup = svc.exportBackupJson();
    memoryStorage.clear();

    const freshSvc = createStorageService(seedBuiltIn(), memoryStorage);
    expect(freshSvc.getSubjects()).toHaveLength(1);
    const restored = freshSvc.importBackupJson(backup);
    expect(restored.ok).toBe(true);
    expect(freshSvc.getSubjects()).toHaveLength(2);
  });
});
