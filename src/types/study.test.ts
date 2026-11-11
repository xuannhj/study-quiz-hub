import { describe, it, expect } from 'vitest';
import type { Subject, Question, ExamPack } from './study';

describe('study domain types', () => {
  it('supports creating valid Subject, Question, and ExamPack objects', () => {
    const question: Question = {
      id: 'q1',
      subjectId: 'swr',
      chapterId: 'ch1',
      source: 'slide-generated',
      examTarget: 'both',
      difficulty: 'understand',
      type: 'multiple',
      prompt: 'Choose 2 valid non-functional requirement categories.',
      options: [
        { id: 'a', text: 'Performance' },
        { id: 'b', text: 'Security' },
        { id: 'c', text: 'User login action' },
      ],
      correctOptionIds: ['a', 'b'],
      explanation: 'Performance and Security describe quality attributes.',
    };

    const pack: ExamPack = {
      id: 'quiz-1',
      subjectId: 'swr',
      category: 'quiz',
      title: 'Quiz 1',
      durationMinutes: 20,
      questionCount: 20,
      chapterIds: ['ch1'],
      passScorePercent: 50,
    };

    const subject: Subject = {
      id: 'swr',
      code: 'SWR302',
      name: 'Software Requirements',
      description: 'Core SWR study guide & exam bank',
      chapters: [],
      questions: [question],
      examPacks: [pack],
    };

    expect(subject.questions).toHaveLength(1);
    expect(subject.examPacks[0].category).toBe('quiz');
  });
});

