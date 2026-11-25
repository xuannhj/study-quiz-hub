/// <reference types="vite/client" />
import { describe, it, expect } from 'vitest';
import { BUILT_IN_SUBJECTS } from './index';
import { buildExamQuestions } from '../../services/exam/examEngine';
import type { Subject } from '../../types/study';

const PUBLIC_IMAGES = new Set([
  ...Object.keys(import.meta.glob('../../../public/images/**/*')).map((p) =>
    p.replace(/^.*\/public/, '')
  ),
  ...Object.keys(import.meta.glob('../../../public/materials/**/*')).map((p) =>
    p.replace(/^.*\/public/, '')
  ),
]);

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
    if (q.imageUrl) {
      expect(PUBLIC_IMAGES.has(q.imageUrl)).toBe(true);
    }
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

  it('registers FER202 slide & modern React subject with 15 chapters, 195 questions, and 12 exam packs', () => {
    const fer = BUILT_IN_SUBJECTS.find((s) => s.id === 'fer202');
    expect(fer).toBeDefined();
    assertSubjectIntegrity(fer!, 15, 195, 8, 4);
  });

  it('registers FER202-PAST subject with 10 term chapters, 954 questions, and 21 exam packs', () => {
    const ferPast = BUILT_IN_SUBJECTS.find((s) => s.id === 'fer202-past');
    expect(ferPast).toBeDefined();
    assertSubjectIntegrity(ferPast!, 10, 954, 1, 20);
  });

  it('registers SWT301 software testing subject with 7 chapters, 150 questions, 14 exam packs, and 8 PE practical exams', () => {
    const swt = BUILT_IN_SUBJECTS.find((s) => s.id === 'swt');
    expect(swt).toBeDefined();
    assertSubjectIntegrity(swt!, 7, 150, 10, 4);
    expect(swt!.practicalExams).toBeDefined();
    expect(swt!.practicalExams!.length).toBe(8);
  });

  it('registers SWT-PAST subject with 11 term chapters, 627 crawled questions, 12 exam packs, and 8 PE exams', () => {
    const swtPast = BUILT_IN_SUBJECTS.find((s) => s.id === 'swt-past');
    expect(swtPast).toBeDefined();
    assertSubjectIntegrity(swtPast!, 11, 627, 0, 12);
    expect(swtPast!.practicalExams).toBeDefined();
    expect(swtPast!.practicalExams!.length).toBe(8);
  });
});

