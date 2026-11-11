import { describe, it, expect } from 'vitest';
import {
  parseRawQuestionsText,
  parseJsonQuestionsImport,
} from './questionParser';

describe('questionParser', () => {
  it('parses numbered English and Vietnamese questions with single and multiple answers', () => {
    const raw = `
Câu 1: Functional requirements define what?
A. System behavior and services
B. Server hardware cost
C. Coding style
*D. Specific features the system must perform
Đáp án: A, D
Giải thích: Functional requirements describe what the system should do.

2. Which document defines high-level user needs?
A) Vision and Scope Document
B) Unit Test Report
Answer: A
Explanation: Vision and Scope captures business and user scope.
`;

    const result = parseRawQuestionsText(raw, {
      defaultChapterId: 'swr-ch1',
      defaultExamTarget: 'quiz',
    });

    expect(result.issues.filter((i) => i.severity === 'error')).toEqual([]);
    expect(result.questions).toHaveLength(2);

    expect(result.questions[0]).toMatchObject({
      chapterId: 'swr-ch1',
      source: 'imported',
      examTarget: 'quiz',
      type: 'multiple',
      prompt: 'Functional requirements define what?',
      correctOptionIds: ['a', 'd'],
      explanation: 'Functional requirements describe what the system should do.',
    });
    expect(result.questions[0].options).toHaveLength(4);

    expect(result.questions[1]).toMatchObject({
      type: 'single',
      correctOptionIds: ['a'],
      explanation: 'Vision and Scope captures business and user scope.',
    });
  });

  it('supports inline asterisk markers without separate Answer line', () => {
    const raw = `
Q1) What is SRS?
A. Software Review Sheet
*B. Software Requirements Specification
C. System Resource Service
`;

    const result = parseRawQuestionsText(raw);
    expect(result.questions).toHaveLength(1);
    expect(result.questions[0].correctOptionIds).toEqual(['b']);
    expect(result.questions[0].options[1].text).toBe(
      'Software Requirements Specification'
    );
  });

  it('reports explicit errors for missing correct answers and warnings for duplicate prompts', () => {
    const raw = `
1. Existing question prompt?
A. Opt 1
B. Opt 2
Answer: A

2. Question missing answer key?
A. One
B. Two
`;

    const result = parseRawQuestionsText(raw, {
      existingPrompts: ['existing question prompt?'],
    });

    expect(result.questions).toHaveLength(1);
    expect(
      result.issues.some((i) => i.severity === 'warning' && i.index === 1)
    ).toBe(true);
    expect(
      result.issues.some((i) => i.severity === 'error' && i.index === 2)
    ).toBe(true);
  });

  it('parses valid JSON array and reports error on invalid JSON', () => {
    const invalid = parseJsonQuestionsImport('{bad json');
    expect(invalid.questions).toEqual([]);
    expect(invalid.issues[0].severity).toBe('error');

    const validJson = JSON.stringify([
      {
        prompt: 'Which is non-functional?',
        options: [
          { id: 'a', text: 'Availability' },
          { id: 'b', text: 'Print invoice' },
        ],
        correctOptionIds: ['a'],
        explanation: 'Availability is a quality attribute.',
      },
    ]);

    const parsed = parseJsonQuestionsImport(validJson, {
      defaultChapterId: 'swr-ch2',
    });
    expect(parsed.issues).toEqual([]);
    expect(parsed.questions).toHaveLength(1);
    expect(parsed.questions[0].chapterId).toBe('swr-ch2');
    expect(parsed.questions[0].source).toBe('imported');
  });

  it('keeps prompt, options, answer, and explanation together when blank lines appear inside a question', () => {
    const raw = `
1. What is a Context Diagram?

A. Top-level DFD showing system boundary

B. Detailed database table schema

Answer: A

Explanation: Context diagram sits at DFD level 0 parent.

2. Second question without blank lines?
A. Yes
B. No
Answer: A
`;

    const result = parseRawQuestionsText(raw);
    expect(result.issues.filter((i) => i.severity === 'error')).toEqual([]);
    expect(result.questions).toHaveLength(2);
    expect(result.questions[0].correctOptionIds).toEqual(['a']);
    expect(result.questions[0].explanation).toBe(
      'Context diagram sits at DFD level 0 parent.'
    );
  });
});
