import type { Subject } from '../../../types/study';
import { fer202PastMeta } from './subject';
import { fer202PastChapters } from './chapters';
import { fer202PastQuestions as baseFer202PastQuestions } from './questions';
import { fa26Mock1Questions } from './fa26Mock1';
import { fa26Mock2Questions } from './fa26Mock2';
import { fa26Mock3Questions } from './fa26Mock3';
import { fer202PastExamPacks } from './exams';

export const fer202PastQuestions = [
  ...baseFer202PastQuestions,
  ...fa26Mock1Questions,
  ...fa26Mock2Questions,
  ...fa26Mock3Questions,
];

export const fer202PastSubject: Subject = {
  ...fer202PastMeta,
  chapters: fer202PastChapters,
  questions: fer202PastQuestions,
  examPacks: fer202PastExamPacks,
};

export * from './subject';
export * from './chapters';
export * from './exams';
