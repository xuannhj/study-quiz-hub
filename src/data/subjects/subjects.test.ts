import { describe, it, expect } from 'vitest';
import { BUILT_IN_SUBJECTS } from './index';
import { buildExamQuestions } from '../../services/exam/examEngine';
import type { Subject } from '../../types/study';

function assertSubjectIntegrity(
  subject: Subject,
  expectedChapters: number,
  minQuestions: number,
  expectedQuizPacks: number,
  expectedFinalPacks: number
) {
  expect(subject.chapters).toHaveLength(expectedChapters);
  expect(subject.questions.length).toBeGreaterThanOrEqual(minQuestions);

  const chapterIds = new Set(subject.chapters.map((c) => c.id));
  for (const ch of subject.chapters) {
    expect(ch.sections.length).toBeGreaterThanOrEqual(2);
    const count = subject.questions.filter((q) => q.chapterId === ch.id).length;
    expect(count).toBeGreaterThanOrEqual(4);
  }

  const questionIds = new Set<string>();
  for (const q of subject.questions) {
    expect(q.subjectId).toBe(subject.id);
    expect(questionIds.has(q.id)).toBe(false);
    questionIds.add(q.id);
    expect(chapterIds.has(q.chapterId)).toBe(true);
    expect(q.options.length).toBeGreaterThanOrEqual(2);
    expect(q.correctOptionIds.length).toBeGreaterThanOrEqual(1);
    if (q.type === 'single') {
      expect(q.correctOptionIds).toHaveLength(1);
    } else {
      expect(q.correctOptionIds.length).toBeGreaterThanOrEqual(2);
    }
    const optionIds = new Set(q.options.map((o) => o.id));
    for (const correctId of q.correctOptionIds) {
      expect(optionIds.has(correctId)).toBe(true);
    }
    expect(q.explanation.trim().length).toBeGreaterThan(0);
  }

  const packIds = new Set<string>();
  for (const pack of subject.examPacks) {
    expect(pack.subjectId).toBe(subject.id);
    expect(packIds.has(pack.id)).toBe(false);
    packIds.add(pack.id);
    for (const chId of pack.chapterIds) {
      expect(chapterIds.has(chId)).toBe(true);
    }
    if (pack.fixedQuestionIds) {
      expect(pack.fixedQuestionIds.length).toBe(pack.questionCount);
      for (const qId of pack.fixedQuestionIds) {
        expect(questionIds.has(qId)).toBe(true);
      }
    }
    expect(buildExamQuestions(subject, pack)).toHaveLength(pack.questionCount);
  }

  expect(subject.examPacks.filter((p) => p.category === 'quiz').length).toBe(
    expectedQuizPacks
  );
  expect(subject.examPacks.filter((p) => p.category === 'final').length).toBe(
    expectedFinalPacks
  );
}

describe('BUILT_IN_SUBJECTS integrity', () => {
  it('registers SWR subject with all 19 chapters and expanded question bank', () => {
    const swr = BUILT_IN_SUBJECTS.find((s) => s.id === 'swr');
    expect(swr).toBeDefined();
    assertSubjectIntegrity(swr!, 19, 118, 5, 3);
  });

  it('registers standalone SWR-PDF subject with 6 PDF lessons, 80 questions, and 11 dedicated exams', () => {
    const swrPdf = BUILT_IN_SUBJECTS.find((s) => s.id === 'swr-pdf');
    expect(swrPdf).toBeDefined();
    assertSubjectIntegrity(swrPdf!, 6, 80, 8, 3);
  });
});
