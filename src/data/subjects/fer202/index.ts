import type { Subject } from '../../../types/study';
import { fer202Meta } from './subject';
import { fer202Chapters } from './chapters';
import { fer202Questions } from './questions';
import { fer202ExamPacks } from './exams';

export const fer202Subject: Subject = {
  ...fer202Meta,
  chapters: fer202Chapters,
  questions: fer202Questions,
  examPacks: fer202ExamPacks,
};

export * from './subject';
export * from './chapters';
export * from './questions';
export * from './exams';

