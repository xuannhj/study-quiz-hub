import { describe, it, expect, beforeEach } from 'vitest';
import {
  computeStreakStats,
  formatStudyDuration,
  getLocalDateKey,
  loadStreakState,
  markStudyDayActive,
  recordAnsweredQuestions,
  recordCompletedChapter,
  recordCompletedExam,
  recordFocusCompletion,
  recordStudySeconds,
  setDailyExamGoal,
} from './studyStreak';

describe('studyStreak service', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('tracks consecutive days streak and daily/total study durations accurately', () => {
    const day1 = new Date(2026, 10, 10, 20, 0, 0);
    const day2 = new Date(2026, 10, 11, 21, 0, 0);
    const day3 = new Date(2026, 10, 12, 23, 0, 0);

    recordStudySeconds(60, day1);
    recordStudySeconds(90, day2);
    markStudyDayActive(day3);
    recordStudySeconds(45, day3);
    recordAnsweredQuestions(12, 10, day3);
    recordCompletedExam(day3);
    recordCompletedChapter(day3);
    setDailyExamGoal(7);
    recordFocusCompletion(day3);

    const stats = computeStreakStats(loadStreakState(), day3);
    expect(stats.currentStreakDays).toBe(3);
    expect(stats.longestStreakDays).toBe(3);
    expect(stats.todaySeconds).toBe(45);
    expect(stats.totalSeconds).toBe(195);
    expect(stats.todayAnsweredCount).toBe(12);
    expect(stats.todayCorrectCount).toBe(10);
    expect(stats.todayExamsCount).toBe(1);
    expect(stats.todayChaptersCount).toBe(1);
    expect(stats.dailyExamGoal).toBe(7);
    expect(stats.fireflyCount).toBe(2);
    expect(stats.completedFocusSessions).toBe(1);
    expect(stats.last7Days).toHaveLength(7);
    expect(stats.last7Days[6]).toMatchObject({
      dateKey: getLocalDateKey(day3),
      shortLabel: 'Nay',
      active: true,
    });
  });

  it('keeps longestStreakDays intact when a gap breaks the current streak', () => {
    const d1 = new Date(2026, 10, 1, 10, 0, 0);
    const d2 = new Date(2026, 10, 2, 10, 0, 0);
    const d5 = new Date(2026, 10, 5, 10, 0, 0);

    markStudyDayActive(d1);
    markStudyDayActive(d2);
    markStudyDayActive(d5);

    const stats = computeStreakStats(loadStreakState(), d5);
    expect(stats.currentStreakDays).toBe(1);
    expect(stats.longestStreakDays).toBe(2);
  });

  it('formats study duration concisely in Vietnamese', () => {
    expect(formatStudyDuration(0)).toBe('0 phút');
    expect(formatStudyDuration(40)).toBe('40 giây');
    expect(formatStudyDuration(900)).toBe('15 phút');
    expect(formatStudyDuration(5100)).toBe('1g 25p');
    expect(formatStudyDuration(7200)).toBe('2 giờ');
  });
});

