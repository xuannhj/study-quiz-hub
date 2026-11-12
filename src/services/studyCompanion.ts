import {
  DAILY_CHAPTER_GOAL,
  type StudyStreakStats,
} from './studyStreak';

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

/**
 * Generates warm, zero-pressure companion feedback following Xuan Nhi's supportive rules:
 * no harsh words, always cites real numbers, comforts on mistakes or return after break,
 * gently praises real effort, and ends with a cozy next cue.
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
    const fireflyLine =
      'Đom đóm trong lọ lại sáng thêm nhờ em rồi.';
    const endCue = isNight
      ? 'Thư giãn mắt chút rồi uống ngụm nước ấm nha 🌧️'
      : 'Nghỉ tay chút cho dịu mắt rồi hẳn đi tiếp nhé ✨';
    return `Xuân Nhi ơi, ${correct}/${total} câu môn ${subjectName} luôn đó (${safeMinutes} phút giữ nhịp ${streak} ngày), giỏi quá trời! ${fireflyLine} ${endCue}`;
  }

  return `Hôm nay em bé đã ôn ${total} câu môn ${subjectName} trong ${safeMinutes} phút và giữ chuỗi ${streak} ngày rồi nè${wrong > 0 ? `, ${wrong} câu kia mình hẹn gặp lại sau nha` : ''}. Ngồi thêm chút trà ấm hoặc nghe tiếng mưa thư giãn một lát nhé.`;
}

/**
 * Single contextual whisper line for the header banner (replaces repetitive encouragement).
 */
export function getContextualHeaderWhisper(
  stats: StudyStreakStats,
  date: Date = new Date()
): string {
  if (stats.daysAwayBeforeToday >= 2) {
    return `Mừng em bé quay lại sau ${stats.daysAwayBeforeToday} ngày — hôm nay mình ôn thật nhẹ nhàng thôi nha.`;
  }

  if (
    stats.todayExamsCount >= stats.dailyExamGoal ||
    stats.todayChaptersCount >= DAILY_CHAPTER_GOAL
  ) {
    return `Xong mục tiêu hôm nay (${stats.todayExamsCount} đề · ${stats.todayChaptersCount} chương) rồi nè, trời như hửng sáng cùng Xuân Nhi luôn ✨`;
  }

  if (stats.todayExamsCount > 0 || stats.todayAnsweredCount > 0) {
    return `Hôm nay Xuân Nhi đã làm ${stats.todayExamsCount} đề (${stats.todayAnsweredCount} câu) rồi — giữ nhịp chắc tay này nhé.`;
  }

  const hour = date.getHours();
  if (hour >= 22 || hour < 5) {
    return 'Đêm khuya yên tĩnh bên khung cửa sổ — có mình ngồi học cùng Xuân Nhi đây.';
  }
  if (hour >= 18) {
    return 'Buổi tối dịu nhẹ rồi, làm gọn một lượt ngắn cùng cây nhỏ và lọ đom đóm nha Nhi.';
  }
  if (hour >= 12) {
    return 'Buổi chiều bình yên nè, chọn một phần nhỏ em muốn ôn là đủ đẹp ngày hôm nay rồi.';
  }
  return 'Sáng mới tinh khôi, bắt đầu thật nhẹ nhàng cùng Xuân Nhi nhé.';
}

