import { type StudyStreakStats } from './studyStreak';

export interface SessionCompanionInput {
  total: number;
  correct: number;
  wrong: number;
  minutes: number;
  streak: number;
  subjectName: string;
  daysAway: number;
  date?: Date;
}

const NORMAL_MOTIVATION_LINES = [
  'Mỗi câu một chút, em đang tiến lên đó.',
  'Em đã ngồi đây rồi, vậy là giỏi rồi.',
  'Từ từ thôi, em làm được mà.',
] as const;

/**
 * Generates warm, zero-pressure companion feedback after completing an exam/practice session.
 */
export function generateSessionCompanionNote({
  total,
  correct,
  wrong,
  minutes,
  streak,
  subjectName,
  daysAway,
  date = new Date(),
}: SessionCompanionInput): string {
  const hour = date.getHours();
  const isNight = hour >= 19 || hour < 5;
  const safeMinutes = Math.max(1, minutes);

  if (daysAway >= 2) {
    return `Chào mừng em bé quay lại sau ${daysAway} ngày! Mở web ra học lại ${total} câu môn ${subjectName} là bước khó nhất rồi, mà Xuân Nhi làm được rồi nè. Mình cứ ôn nhẹ nhàng thôi, lát uống ngụm nước ấm nha.`;
  }

  const accuracy = total > 0 ? correct / total : 0;

  if (wrong > 0 && accuracy < 0.6) {
    const contextScene = isNight ? 'giữa đêm mưa yên tĩnh' : 'bên khung cửa sổ nhỏ';
    return `Hôm nay có ${correct}/${total} câu em nhớ được, ${wrong} câu còn lại sẽ quay lại sau nha — não mình đang làm quen với chúng đó. Quan trọng là Xuân Nhi đã ngồi đây học ${safeMinutes} phút ${contextScene}, vậy là giỏi lắm rồi.`;
  }

  if (accuracy >= 0.8 && total > 0) {
    const fireflyLine = 'Đom đóm trong lọ lại sáng thêm nhờ em rồi.';
    const endCue = isNight
      ? 'Thư giãn mắt chút rồi uống ngụm nước ấm nha 🌧️'
      : 'Nghỉ tay chút cho dịu mắt rồi hẳn đi tiếp nhé ✨';
    return `Xuân Nhi ơi, ${correct}/${total} câu môn ${subjectName} luôn đó (${safeMinutes} phút giữ nhịp ${streak} ngày), giỏi quá trời! ${fireflyLine} ${endCue}`;
  }

  return `Hôm nay em bé đã ôn ${total} câu môn ${subjectName} trong ${safeMinutes} phút và giữ chuỗi ${streak} ngày rồi nè${wrong > 0 ? `, ${wrong} câu kia mình hẹn gặp lại sau nha` : ''}. Ngồi thêm chút trà ấm hoặc nghe tiếng mưa thư giãn một lát nhé.`;
}

/**
 * Picks a single ultra-short (<= 10 words), warm motivational headline based on real context.
 */
export function pickSingleMotivationHeadline(
  stats: StudyStreakStats,
  nearestExamDays: number | null,
  randomFn: () => number = Math.random
): string {
  if (stats.todayExamsCount > 0 || stats.todayAnsweredCount > 0) {
    return 'Hôm nay em làm tốt lắm, nghỉ một chút nhé.';
  }

  if (stats.daysAwayBeforeToday >= 2) {
    return 'Chào mừng em quay lại, mình học nhẹ nhàng thôi.';
  }

  if (nearestExamDays !== null && nearestExamDays >= 0 && nearestExamDays <= 3) {
    return 'Gần tới rồi, em đã chuẩn bị tốt hơn em nghĩ.';
  }

  if (stats.currentStreakDays >= 2) {
    return `${stats.currentStreakDays} ngày liên tiếp, em bé siêu quá!`;
  }

  const idx = Math.floor(randomFn() * NORMAL_MOTIVATION_LINES.length);
  return NORMAL_MOTIVATION_LINES[
    Math.min(NORMAL_MOTIVATION_LINES.length - 1, Math.max(0, idx))
  ];
}
