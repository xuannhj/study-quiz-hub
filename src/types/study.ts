export type StudySectionType = 'concept' | 'comparison' | 'keywords' | 'exam_tip';

export interface StudySection {
  id: string;
  type: StudySectionType;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  order: number;
  title: string;
  summary: string;
  sections: StudySection[];
}

export type QuestionSource = 'slide-generated' | 'imported';
export type ExamTarget = 'quiz' | 'final' | 'both';
export type QuestionDifficulty = 'remember' | 'understand' | 'scenario';
export type QuestionType = 'single' | 'multiple';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  subjectId: string;
  chapterId: string;
  source: QuestionSource;
  examTarget: ExamTarget;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  prompt: string;
  imageUrl?: string;
  imageCaption?: string;
  options: QuestionOption[];
  correctOptionIds: string[];
  explanation: string;
}

export type ExamCategory = 'chapter' | 'quiz' | 'final' | 'mistake';

export interface ExamPack {
  id: string;
  subjectId: string;
  category: ExamCategory;
  title: string;
  description?: string;
  durationMinutes: number;
  questionCount: number;
  chapterIds: string[];
  fixedQuestionIds?: string[];
  passScorePercent: number;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  description: string;
  chapters: Chapter[];
  questions: Question[];
  examPacks: ExamPack[];
}

export interface WrongQuestionStat {
  wrongCount: number;
  lastWrongAt: string;
  mastered: boolean;
}

export type ExamMode = 'practice' | 'exam';

export interface ExamAnswerRecord {
  questionId: string;
  selectedOptionIds: string[];
  isCorrect: boolean;
}

export interface ExamAttempt {
  id: string;
  examPackId: string;
  examTitle: string;
  category: ExamCategory;
  mode: ExamMode;
  completedAt: string;
  scorePercent: number;
  correctCount: number;
  totalCount: number;
  passed: boolean;
  durationSpentSeconds: number;
  answers: ExamAnswerRecord[];
}

export interface ActiveExamQuestionSnapshot {
  questionId: string;
  optionOrder: string[];
}

export interface ActiveExamSession {
  id: string;
  subjectId: string;
  examPackId: string;
  examTitle: string;
  category: ExamCategory;
  mode: ExamMode;
  durationMinutes: number;
  passScorePercent: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  snapshots: ActiveExamQuestionSnapshot[];
  answers: Record<string, string[]>;
  checkedQuestionIds: string[];
  flaggedQuestionIds: string[];
  currentIndex: number;
  remainingSeconds: number;
  startedAt: string;
  updatedAt: string;
}

export interface UserSubjectProgress {
  subjectId: string;
  completedChapterIds: string[];
  bookmarkedQuestionIds: string[];
  wrongQuestionStats: Record<string, WrongQuestionStat>;
  attempts: ExamAttempt[];
  activeSession?: ActiveExamSession;
}

export interface CustomSubjectInput {
  code: string;
  name: string;
  description: string;
}

export interface SubjectExtensionData {
  chapters: Chapter[];
  questions: Question[];
  examPacks: ExamPack[];
}

export interface AppStoragePayload {
  version: number;
  customSubjects: Subject[];
  subjectExtensions: Record<string, SubjectExtensionData>;
  progressBySubject: Record<string, UserSubjectProgress>;
}
