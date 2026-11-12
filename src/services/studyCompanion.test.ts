import { describe, it, expect } from 'vitest';
import {
  generateSessionCompanionNote,
  pickSingleMotivationHeadline,
} from './studyCompanion';
import type { StudyStreakStats } from './studyStreak';

const FORBIDDEN_HARSH_WORDS = ['sai', 'kém', 'yếu', 'tệ', 'phải'];

function makeStats(overrides: Partial<StudyStreakStats> = {}): StudyStreakStats {
  return {
    currentStreakDays: 1,
    longestStreakDays: 1,
    todaySeconds: 0,
    totalSeconds: 0,
    todayAnsweredCount: 0,
    todayCorrectCount: 0,
    todayExamsCount: 0,
    todayChaptersCount: 0,
    dailyExamGoal: 5,
    totalCorrectAnswers: 0,
    completedFocusSessions: 0,
    fireflyCount: 0,
    daysAwayBeforeToday: 0,
    last7Days: [],
    ...overrides,
  };
}

function assertKindAndSpecific(note: string, expectedSubstrings: string[]) {
  const lower = note.toLowerCase();
  for (const bad of FORBIDDEN_HARSH_WORDS) {
    expect(lower).not.toMatch(new RegExp(`\\b${bad}\\b`, 'i'));
  }
  for (const part of expectedSubstrings) {
    expect(note).toContain(part);
  }
}

describe('studyCompanion warm session feedback & single dashboard headline', () => {
  it('welcomes returning learner gently after missed days', () => {
    const note = generateSessionCompanionNote({
      total: 8,
      correct: 5,
      wrong: 3,
      minutes: 6,
      streak: 1,
      subjectName: 'SWR302',
      daysAway: 3,
    });

    assertKindAndSpecific(note, ['3 ngày', '8 câu', 'SWR302']);
  });

  it('comforts learner on low score without harsh judgment', () => {
    const note = generateSessionCompanionNote({
      total: 10,
      correct: 4,
      wrong: 6,
      minutes: 7,
      streak: 2,
      subjectName: 'SWR-PDF',
      daysAway: 0,
      date: new Date(2026, 10, 12, 23, 0),
    });

    assertKindAndSpecific(note, ['4/10', '6 câu', 'sẽ quay lại sau nha', '7 phút']);
  });

  it('celebrates high accuracy gently with firefly imagery', () => {
    const note = generateSessionCompanionNote({
      total: 10,
      correct: 9,
      wrong: 1,
      minutes: 5,
      streak: 4,
      subjectName: 'SWR302',
      daysAway: 0,
      date: new Date(2026, 10, 12, 21, 0),
    });

    assertKindAndSpecific(note, ['9/10', 'SWR302', 'Đom đóm']);
  });

  it('picks short (<=10 words) situational dashboard headlines', () => {
    expect(
      pickSingleMotivationHeadline(makeStats({ todayExamsCount: 1 }), 5)
    ).toBe('Hôm nay em làm tốt lắm, nghỉ một chút nhé.');
    expect(
      pickSingleMotivationHeadline(makeStats({ daysAwayBeforeToday: 2 }), 5)
    ).toBe('Chào mừng em quay lại, mình học nhẹ nhàng thôi.');
    expect(pickSingleMotivationHeadline(makeStats(), 2)).toBe(
      'Gần tới rồi, em đã chuẩn bị tốt hơn em nghĩ.'
    );
    expect(
      pickSingleMotivationHeadline(makeStats({ currentStreakDays: 4 }), 6)
    ).toBe('4 ngày liên tiếp, em bé siêu quá!');
    expect(
      pickSingleMotivationHeadline(makeStats(), 6, () => 0.5).split(/\s+/).length
    ).toBeLessThanOrEqual(10);
  });
});
