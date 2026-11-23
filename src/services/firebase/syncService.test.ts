import { describe, it, expect } from 'vitest';
import {
  sanitizeSyncCode,
  generateRandomSyncCode,
  mergeAppPayload,
  mergeStreakState,
} from './syncService';
import type { AppStoragePayload } from '../../types/study';
import type { StudyStreakState } from '../studyStreak';

describe('syncService - unit logic', () => {
  describe('sanitizeSyncCode', () => {
    it('normalizes Vietnamese accents and special characters', () => {
      expect(sanitizeSyncCode('Xuân Nhi')).toBe('xuan-nhi');
      expect(sanitizeSyncCode('  nhi_2026  ')).toBe('nhi_2026');
      expect(sanitizeSyncCode('XN--8823!!@#')).toBe('xn-8823');
    });

    it('falls back to "user" if completely empty or stripped', () => {
      expect(sanitizeSyncCode('')).toBe('user');
      expect(sanitizeSyncCode('   ')).toBe('user');
      expect(sanitizeSyncCode('!@#$%^')).toBe('user');
    });
  });

  describe('generateRandomSyncCode', () => {
    it('generates a clean code starting with xn-', () => {
      const code = generateRandomSyncCode();
      expect(code.startsWith('xn-')).toBe(true);
      expect(code.length).toBe(7);
    });
  });

  describe('mergeAppPayload', () => {
    it('unions completed chapters and merges wrong questions safely', () => {
      const local: AppStoragePayload = {
        version: 1,
        customSubjects: [],
        subjectExtensions: {},
        progressBySubject: {
          fer202: {
            subjectId: 'fer202',
            completedChapterIds: ['fer202-ch1'],
            bookmarkedQuestionIds: ['q1'],
            wrongQuestionStats: {
              q1: {
                wrongCount: 2,
                lastWrongAt: '2026-11-20T10:00:00.000Z',
                mastered: false,
              },
            },
            attempts: [],
          },
        },
        notes: [
          {
            id: 'n1',
            subjectId: 'fer202',
            content: 'Note local',
            createdAt: '2026-11-20T10:00:00.000Z',
            updatedAt: '2026-11-20T10:00:00.000Z',
            isCompleted: false,
          },
        ],
      };

      const remote: AppStoragePayload = {
        version: 1,
        customSubjects: [],
        subjectExtensions: {},
        progressBySubject: {
          fer202: {
            subjectId: 'fer202',
            completedChapterIds: ['fer202-ch2'],
            bookmarkedQuestionIds: ['q2'],
            wrongQuestionStats: {
              q1: {
                wrongCount: 3,
                lastWrongAt: '2026-11-21T12:00:00.000Z',
                mastered: true,
              },
              q3: {
                wrongCount: 1,
                lastWrongAt: '2026-11-21T12:00:00.000Z',
                mastered: false,
              },
            },
            attempts: [],
          },
          swt301: {
            subjectId: 'swt301',
            completedChapterIds: ['swt301-ch1'],
            bookmarkedQuestionIds: [],
            wrongQuestionStats: {},
            attempts: [],
          },
        },
        notes: [
          {
            id: 'n1',
            subjectId: 'fer202',
            content: 'Note remote updated',
            createdAt: '2026-11-20T10:00:00.000Z',
            updatedAt: '2026-11-22T10:00:00.000Z',
            isCompleted: true,
          },
          {
            id: 'n2',
            subjectId: 'swt301',
            content: 'Note 2',
            createdAt: '2026-11-22T10:00:00.000Z',
            updatedAt: '2026-11-22T10:00:00.000Z',
            isCompleted: false,
          },
        ],
      };

      const merged = mergeAppPayload(local, remote);

      // fer202 completed chapters should contain both ch1 and ch2
      expect(merged.progressBySubject.fer202.completedChapterIds).toContain('fer202-ch1');
      expect(merged.progressBySubject.fer202.completedChapterIds).toContain('fer202-ch2');

      // bookmarks should contain both q1 and q2
      expect(merged.progressBySubject.fer202.bookmarkedQuestionIds).toContain('q1');
      expect(merged.progressBySubject.fer202.bookmarkedQuestionIds).toContain('q2');

      // wrong stats: q1 max count should be 3, lastWrongAt newer
      expect(merged.progressBySubject.fer202.wrongQuestionStats.q1.wrongCount).toBe(3);
      expect(merged.progressBySubject.fer202.wrongQuestionStats.q1.lastWrongAt).toBe(
        '2026-11-21T12:00:00.000Z'
      );
      // q3 should be present
      expect(merged.progressBySubject.fer202.wrongQuestionStats.q3).toBeDefined();

      // swt301 should be added
      expect(merged.progressBySubject.swt301).toBeDefined();

      // Notes: n1 should take the newer remote content, n2 should be added
      expect(merged.notes?.length).toBe(2);
      const n1 = merged.notes?.find((n) => n.id === 'n1');
      expect(n1?.content).toBe('Note remote updated');
      expect(n1?.isCompleted).toBe(true);
    });
  });

  describe('mergeStreakState', () => {
    it('merges active dates and takes maximum counts', () => {
      const local: StudyStreakState = {
        activeDates: ['2026-11-20', '2026-11-21'],
        secondsByDate: { '2026-11-20': 1200, '2026-11-21': 600 },
        answeredByDate: { '2026-11-20': 20 },
        correctByDate: { '2026-11-20': 18 },
        examsByDate: { '2026-11-20': 1 },
        chaptersByDate: {},
        dailyExamGoal: 5,
        totalSeconds: 1800,
        totalCorrectAnswers: 18,
        completedFocusSessions: 1,
      };

      const remote: StudyStreakState = {
        activeDates: ['2026-11-21', '2026-11-22'],
        secondsByDate: { '2026-11-21': 900, '2026-11-22': 1500 },
        answeredByDate: { '2026-11-22': 30 },
        correctByDate: { '2026-11-22': 28 },
        examsByDate: { '2026-11-22': 2 },
        chaptersByDate: {},
        dailyExamGoal: 5,
        totalSeconds: 2400,
        totalCorrectAnswers: 28,
        completedFocusSessions: 2,
      };

      const merged = mergeStreakState(local, remote);
      expect(merged.activeDates).toEqual(['2026-11-20', '2026-11-21', '2026-11-22']);
      expect(merged.secondsByDate['2026-11-21']).toBe(900); // max of 600 and 900
      expect(merged.totalSeconds).toBe(2400);
      expect(merged.totalCorrectAnswers).toBe(28);
      expect(merged.completedFocusSessions).toBe(2);
    });
  });
});
