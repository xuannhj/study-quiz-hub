import { describe, it, expect } from 'vitest';
import type { Subject, Question, ExamPack } from '../../types/study';
import {
  shuffleArray,
  isAnswerCorrect,
  buildExamQuestions,
  gradeExam,
  createDynamicExamPack,
} from './examEngine';

const makeQuestion = (
  id: string,
  chapterId: string,
  overrides: Partial<Question> = {}
): Question => ({
  id,
  subjectId: 'swr',
  chapterId,
  source: 'slide-generated',
  examTarget: 'both',
  difficulty: 'understand',
  type: 'single',
  prompt: `Question ${id}`,
  options: [
    { id: 'a', text: 'Option A' },
    { id: 'b', text: 'Option B' },
    { id: 'c', text: 'Option C' },
  ],
  correctOptionIds: ['a'],
  explanation: `Explanation ${id}`,
  ...overrides,
});

const makeSubject = (): Subject => ({
  id: 'swr',
  code: 'SWR302',
  name: 'Software Requirements',
  description: 'SWR course',
  chapters: [
    { id: 'ch1', order: 1, title: 'Chapter 1', summary: '', sections: [] },
    { id: 'ch2', order: 2, title: 'Chapter 2', summary: '', sections: [] },
  ],
  questions: [
    makeQuestion('q1', 'ch1', { examTarget: 'quiz' }),
    makeQuestion('q2', 'ch1', { examTarget: 'both' }),
    makeQuestion('q3', 'ch1', { examTarget: 'final' }),
    makeQuestion('q4', 'ch2', {
      examTarget: 'both',
      type: 'multiple',
      correctOptionIds: ['a', 'c'],
    }),
    makeQuestion('q5', 'ch2', { examTarget: 'final' }),
  ],
  examPacks: [],
});

describe('examEngine', () => {
  it('evaluates single and multiple choice answers accurately regardless of order', () => {
    const single = makeQuestion('s1', 'ch1', { type: 'single', correctOptionIds: ['b'] });
    const multi = makeQuestion('m1', 'ch1', {
      type: 'multiple',
      correctOptionIds: ['a', 'c'],
    });

    expect(isAnswerCorrect(single, ['b'])).toBe(true);
    expect(isAnswerCorrect(single, ['a'])).toBe(false);
    expect(isAnswerCorrect(single, [])).toBe(false);

    expect(isAnswerCorrect(multi, ['c', 'a'])).toBe(true);
    expect(isAnswerCorrect(multi, ['a'])).toBe(false);
    expect(isAnswerCorrect(multi, ['a', 'b', 'c'])).toBe(false);
    expect(isAnswerCorrect(multi, [])).toBe(false);
  });

  it('shuffles array without mutating input', () => {
    const input = [1, 2, 3, 4];
    const shuffled = shuffleArray(input, () => 0.2);
    expect(input).toEqual([1, 2, 3, 4]);
    expect(shuffled).toHaveLength(4);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4]);
  });

  it('builds balanced questions across chapters and caps gracefully when pool is smaller than requested', () => {
    const subject = makeSubject();
    const pack = createDynamicExamPack({
      subjectId: 'swr',
      category: 'final',
      title: 'Final Mock',
      chapterIds: ['ch1', 'ch2'],
      questionCount: 60,
      durationMinutes: 60,
    });

    const built = buildExamQuestions(subject, pack, {
      shuffleQuestions: true,
      shuffleOptions: true,
      rng: () => 0.1,
    });

    expect(built.map((q) => q.id).sort()).toEqual(['q2', 'q3', 'q4', 'q5']);
    expect(subject.questions[0].options.map((o) => o.id)).toEqual(['a', 'b', 'c']);
  });

  it('respects fixedQuestionIds when provided on ExamPack', () => {
    const subject = makeSubject();
    const pack: ExamPack = {
      id: 'fixed-quiz',
      subjectId: 'swr',
      category: 'quiz',
      title: 'Fixed Quiz',
      durationMinutes: 15,
      questionCount: 2,
      chapterIds: ['ch1', 'ch2'],
      fixedQuestionIds: ['q4', 'q1'],
      passScorePercent: 50,
    };

    const built = buildExamQuestions(subject, pack, {
      shuffleQuestions: false,
      shuffleOptions: false,
    });

    expect(built.map((q) => q.id)).toEqual(['q4', 'q1']);
  });

  it('returns empty array when no questions match the pack', () => {
    const subject = makeSubject();
    const emptyPack = createDynamicExamPack({
      subjectId: 'swr',
      category: 'quiz',
      title: 'Empty Chapter',
      chapterIds: ['non-existent'],
      questionCount: 10,
      durationMinutes: 10,
    });

    expect(buildExamQuestions(subject, emptyPack)).toEqual([]);
  });

  it('grades exam and produces per-chapter accuracy breakdown', () => {
    const subject = makeSubject();
    const questions = [subject.questions[0], subject.questions[3]];
    const answers: Record<string, string[]> = {
      q1: ['a'],
      q4: ['a'],
    };

    const summary = gradeExam(subject, questions, answers, 50);

    expect(summary.totalCount).toBe(2);
    expect(summary.correctCount).toBe(1);
    expect(summary.scorePercent).toBe(50);
    expect(summary.passed).toBe(true);
    expect(summary.chapterBreakdown).toEqual([
      {
        chapterId: 'ch1',
        chapterTitle: 'Chapter 1',
        correct: 1,
        total: 1,
        accuracyPercent: 100,
      },
      {
        chapterId: 'ch2',
        chapterTitle: 'Chapter 2',
        correct: 0,
        total: 1,
        accuracyPercent: 0,
      },
    ]);
  });
});
