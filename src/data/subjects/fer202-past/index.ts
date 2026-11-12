import type { Subject } from '../../../types/study';
import { fer202PastMeta } from './subject';
import { fer202PastChapters } from './chapters';
import { fer202PastQuestions } from './questions';
import { fer202PastExamPacks } from './exams';

export const fer202PastSubject: Subject = {
  ...fer202PastMeta,
  chapters: fer202PastChapters,
  questions: fer202PastQuestions,
  examPacks: fer202PastExamPacks,
};

export * from './subject';
export * from './chapters';
export * from './questions';
export * from './exams';
