import type { Subject } from '../../../types/study';
import { swtMeta } from './subject';
import { swtChapters } from './chapters';
import { swtQuestions } from './questions';
import { swtExamPacks } from './exams';
import { swtPracticalExams } from './practicalExams';

export const swtSubject: Subject = {
  ...swtMeta,
  chapters: swtChapters,
  questions: swtQuestions,
  examPacks: swtExamPacks,
  practicalExams: swtPracticalExams,
};

export { swtMeta, swtChapters, swtQuestions, swtExamPacks, swtPracticalExams };
