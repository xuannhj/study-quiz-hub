import type { Subject } from '../../../types/study';
import { swrPastMeta } from './subject';
import { swrPastChapters } from './chapters';
import { swrPastQuestions } from './questions';
import { swrPastExamPacks } from './exams';
import { swrPracticalExams } from '../swr/practicalExams';

export const swrPastSubject: Subject = {
  ...swrPastMeta,
  chapters: swrPastChapters,
  questions: swrPastQuestions,
  examPacks: swrPastExamPacks,
  practicalExams: swrPracticalExams,
};
