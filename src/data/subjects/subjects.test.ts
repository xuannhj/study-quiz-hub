import { describe, it, expect } from 'vitest';
import { BUILT_IN_SUBJECTS } from './index';

describe('BUILT_IN_SUBJECTS integrity', () => {
  it('registers SWR subject with chapters, slide-generated questions, and Quiz/Final packs', () => {
    const swr = BUILT_IN_SUBJECTS.find((s) => s.id === 'swr');
    expect(swr).toBeDefined();
    expect(swr!.chapters.length).toBeGreaterThanOrEqual(2);
    expect(swr!.questions.length).toBeGreaterThanOrEqual(8);

    const chapterIds = new Set(swr!.chapters.map((c) => c.id));
    for (const q of swr!.questions) {
      expect(chapterIds.has(q.chapterId)).toBe(true);
      expect(q.options.length).toBeGreaterThanOrEqual(2);
      expect(q.correctOptionIds.length).toBeGreaterThanOrEqual(1);
      const optionIds = new Set(q.options.map((o) => o.id));
      for (const correctId of q.correctOptionIds) {
        expect(optionIds.has(correctId)).toBe(true);
      }
      expect(q.explanation.trim().length).toBeGreaterThan(0);
    }

    expect(swr!.examPacks.some((p) => p.category === 'quiz')).toBe(true);
    expect(swr!.examPacks.some((p) => p.category === 'final')).toBe(true);
  });
});
