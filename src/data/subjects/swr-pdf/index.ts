import type { Subject } from '../../../types/study';
import { swrPdfMeta } from './subject';
import { swrPdfChapters } from './chapters';
import { swrPdfQuestions } from './questions';
import { swrPdfExamPacks } from './exams';

export const swrPdfSubject: Subject = {
  ...swrPdfMeta,
  chapters: swrPdfChapters,
  questions: swrPdfQuestions,
  examPacks: swrPdfExamPacks,
};

