import type { Subject } from '../../../types/study';
import { swrMeta } from './subject';
import { swrChapters } from './chapters';
import { swrQuestions } from './questions';
import { swrExamPacks } from './exams';
import { swrPracticalExams } from './practicalExams';

export const swrSubject: Subject = {
  ...swrMeta,
  chapters: swrChapters,
  questions: swrQuestions,
  examPacks: swrExamPacks,
  practicalExams: swrPracticalExams,
};


