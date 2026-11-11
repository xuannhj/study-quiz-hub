import type { ExamMode, ExamPack } from '../../types/study';

export interface ExamLaunchState {
  pack: ExamPack;
  mode: ExamMode;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}
