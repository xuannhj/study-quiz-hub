import type { Subject } from "../../../types/study";
import { swtPastMeta } from "./subject";
import { swtPastChapters } from "./chapters";
import { swtPastQuestions as baseQuestions } from "./questions";
import { ftesSwtQuestions } from "./ftesQuestions";
import { swtPastExamPacks } from "./exams";
import { swtPastPracticalExams } from "./practicalExams";

const swtPastQuestions = [...baseQuestions, ...ftesSwtQuestions];

export const swtPastSubject: Subject = {
  ...swtPastMeta,
  chapters: swtPastChapters,
  questions: swtPastQuestions,
  examPacks: swtPastExamPacks,
  practicalExams: swtPastPracticalExams,
};

export { swtPastMeta, swtPastChapters, swtPastQuestions, swtPastExamPacks, swtPastPracticalExams };
