import type { Subject } from '../../../types/study';
import { fer202Meta } from './subject';
import { fer202Chapters } from './chapters';
import { fer202Questions as baseFer202Questions } from './questions';
import { fer202FocusDrillQuestions } from './focusDrillQuestions';
import { fer202ExamPacks } from './exams';

export const fer202Questions = [
  ...baseFer202Questions,
  ...fer202FocusDrillQuestions,
];

export const fer202Subject: Subject = {
  ...fer202Meta,
  chapters: fer202Chapters,
  questions: fer202Questions,
  examPacks: fer202ExamPacks,
};

export * from './subject';
export * from './chapters';
export * from './exams';

