import { describe, it, expect } from 'vitest';
import { BUILT_IN_SUBJECTS } from './index';

describe('BUILT_IN_SUBJECTS integrity', () => {
  it('registers SWR subject with all 19 chapters, 60 slide-generated questions, and Quiz/Final packs', () => {
    const swr = BUILT_IN_SUBJECTS.find((s) => s.id === 'swr');
    expect(swr).toBeDefined();
    expect(swr!.chapters).toHaveLength(19);
    expect(swr!.questions.length).toBeGreaterThanOrEqual(60);

    const chapterIds = new Set(swr!.chapters.map((c) => c.id));
    for (const ch of swr!.chapters) {
      expect(ch.sections.length).toBeGreaterThanOrEqual(2);
      const count = swr!.questions.filter((q) => q.chapterId === ch.id).length;
      expect(count).toBeGreaterThanOrEqual(2);
    }

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

    expect(swr!.examPacks.filter((p) => p.category === 'quiz').length).toBe(3);
    expect(swr!.examPacks.filter((p) => p.category === 'final').length).toBe(2);
  });
});
