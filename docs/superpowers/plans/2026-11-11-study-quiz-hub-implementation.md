# Study & Quiz Hub Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the multi-subject Study & Quiz Hub web application at `E:\SELF-STUDY\study-quiz-hub` starting with SWR (Software Requirements), featuring slide-based Study Guides, Chapter Practice, Quiz Tests, Final Exams, Mistake Review, and Smart Import/Backup.

**Architecture:** Client-side React 18 + TypeScript + Vite SPA using a Hybrid Data Service (`src/services/storage/storageService.ts`) that merges built-in subject modules in `src/data/subjects/` with user-imported subjects/questions and learning progress persisted in `localStorage`. Core exam generation, shuffling, and grading live in a pure functional engine (`src/services/exam/examEngine.ts`), decoupled from React UI under `src/features/`.

**Tech Stack:** React 18, TypeScript, Vite, Tailwind CSS 3, React Router v6, Lucide React, Vitest, Testing Library (`@testing-library/react`, `@testing-library/jest-dom`, `jsdom`).

**Spec:** `docs/superpowers/specs/2026-11-11-study-quiz-hub-design.md`

## Global Constraints

- Project root is `E:\SELF-STUDY\study-quiz-hub`, with built-in subject data under `src/data/subjects/` (starting with `src/data/subjects/swr/`).
- Tech stack is React 18 + TypeScript + Vite + Tailwind CSS + Lucide React + React Router + Vitest.
- Every `Subject` supports 4 core experiences: Study Guide (`chapters`), Quiz Tests (`category: 'quiz'`), Final Exams (`category: 'final'`), and Mistake & Bookmark Review (`wrongQuestionStats` / `bookmarkedQuestionIds`).
- Questions support both `single` and `multiple` choice types with `explanation` citing the relevant slide/chapter concept.
- Both `practice` mode (instant check + explanation) and `exam` mode (countdown timer, submit to grade) support optional question shuffling and option shuffling.
- Hybrid storage merges built-in code subjects with user-imported content without losing user progress or imported questions when built-in subjects update.
- All user-facing UI labels and helper messages are in clear, natural Vietnamese (with standard English software engineering terms like Quiz, Final, Functional Requirement where appropriate).

## Review Focus

- Multiple-choice grading with shuffled options: `isAnswerCorrect` must match exact option ID sets regardless of display order and reject partial or empty selections (`Task 2`).
- Page reload mid-exam: `ActiveExamSession` must restore exact question order, shuffled option order, current answers, flagged questions, and remaining seconds without resetting (`Task 4`, `Task 8`).
- Hybrid storage resilience: updating built-in `swr` code data must preserve user `imported` questions and `wrongQuestionStats`, and corrupted `localStorage` JSON must recover cleanly (`Task 4`).
- Messy pasted text during Smart Import: mixed numbering (`1.`, `Câu 1:`, `Q1)`), multi-answer keys (`Đáp án: A, C`), missing answer keys, and duplicate prompts must emit explicit issues rather than silently corrupting the bank (`Task 3`).
- Undersized or empty question pool: requesting a 60-question Final or Mistake Review when fewer questions exist must cap cleanly or inform the user without crashing (`Task 2`, `Task 7`).

---

### Task 1: Project Scaffolding & Core TypeScript Interfaces

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\.gitignore`
- Create: `E:\SELF-STUDY\study-quiz-hub\package.json`
- Create: `E:\SELF-STUDY\study-quiz-hub\tsconfig.json`
- Create: `E:\SELF-STUDY\study-quiz-hub\tsconfig.app.json`
- Create: `E:\SELF-STUDY\study-quiz-hub\tsconfig.node.json`
- Create: `E:\SELF-STUDY\study-quiz-hub\vite.config.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\tailwind.config.js`
- Create: `E:\SELF-STUDY\study-quiz-hub\postcss.config.js`
- Create: `E:\SELF-STUDY\study-quiz-hub\index.html`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\index.css`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\main.tsx`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\types\study.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\test\setup.ts`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\types\study.test.ts`

**Interfaces:**
- Consumes: none (root task)
- Produces: All types exported from `src/types/study.ts`: `StudySectionType`, `StudySection`, `Chapter`, `QuestionSource`, `ExamTarget`, `QuestionDifficulty`, `QuestionType`, `QuestionOption`, `Question`, `ExamCategory`, `ExamPack`, `Subject`, `WrongQuestionStat`, `ExamMode`, `ExamAnswerRecord`, `ExamAttempt`, `ActiveExamQuestionSnapshot`, `ActiveExamSession`, `UserSubjectProgress`, `CustomSubjectInput`, `AppStoragePayload`.

- [ ] **Step 1: Create `.gitignore`, `package.json`, TypeScript, Vite, Tailwind, and Vitest config files**

Write `E:\SELF-STUDY\study-quiz-hub\.gitignore`:

```text
node_modules
dist
.DS_Store
*.local
```

Write `E:\SELF-STUDY\study-quiz-hub\package.json`:

```json
{
  "name": "study-quiz-hub",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "lucide-react": "^0.460.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.1.0",
    "@types/react": "^18.3.12",
    "@types/react-dom": "^18.3.1",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.6.3",
    "vite": "^6.0.1",
    "vitest": "^2.1.8"
  }
}
```

Write `E:\SELF-STUDY\study-quiz-hub\tsconfig.json`:

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

Write `E:\SELF-STUDY\study-quiz-hub\tsconfig.app.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "types": ["vitest/globals", "@testing-library/jest-dom"]
  },
  "include": ["src"]
}
```

Write `E:\SELF-STUDY\study-quiz-hub\tsconfig.node.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

Write `E:\SELF-STUDY\study-quiz-hub\vite.config.ts`:

```ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
  },
});
```

Write `E:\SELF-STUDY\study-quiz-hub\tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

Write `E:\SELF-STUDY\study-quiz-hub\postcss.config.js`:

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

Write `E:\SELF-STUDY\study-quiz-hub\index.html`:

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Study & Quiz Hub — Học Lý Thuyết & Luyện Thi</title>
  </head>
  <body class="bg-slate-50 text-slate-900 antialiased">
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

Write `E:\SELF-STUDY\study-quiz-hub\src\index.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Write `E:\SELF-STUDY\study-quiz-hub\src\test\setup.ts`:

```ts
import '@testing-library/jest-dom/vitest';
```

Write `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`:

```tsx
export function App() {
  return <div className="p-6 text-slate-800">Study & Quiz Hub</div>;
}

export default App;
```

Write `E:\SELF-STUDY\study-quiz-hub\src\main.tsx`:

```tsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

- [ ] **Step 2: Install npm dependencies**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npm install`
Expected: `node_modules` installed cleanly with exit code 0.

- [ ] **Step 3: Write the failing smoke test for `src/types/study.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\types\study.test.ts`:

```ts
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
```

- [ ] **Step 4: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/types/study.test.ts`
Expected: FAIL because `src/types/study.ts` does not exist yet (or build fails on missing module).

- [ ] **Step 5: Implement `src/types/study.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\types\study.ts`:

```ts
export type StudySectionType = 'concept' | 'comparison' | 'keywords' | 'exam_tip';

export interface StudySection {
  id: string;
  type: StudySectionType;
  title: string;
  content: string;
}

export interface Chapter {
  id: string;
  order: number;
  title: string;
  summary: string;
  sections: StudySection[];
}

export type QuestionSource = 'slide-generated' | 'imported';
export type ExamTarget = 'quiz' | 'final' | 'both';
export type QuestionDifficulty = 'remember' | 'understand' | 'scenario';
export type QuestionType = 'single' | 'multiple';

export interface QuestionOption {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  subjectId: string;
  chapterId: string;
  source: QuestionSource;
  examTarget: ExamTarget;
  difficulty: QuestionDifficulty;
  type: QuestionType;
  prompt: string;
  options: QuestionOption[];
  correctOptionIds: string[];
  explanation: string;
}

export type ExamCategory = 'chapter' | 'quiz' | 'final' | 'mistake';

export interface ExamPack {
  id: string;
  subjectId: string;
  category: ExamCategory;
  title: string;
  description?: string;
  durationMinutes: number;
  questionCount: number;
  chapterIds: string[];
  fixedQuestionIds?: string[];
  passScorePercent: number;
}

export interface Subject {
  id: string;
  code: string;
  name: string;
  description: string;
  chapters: Chapter[];
  questions: Question[];
  examPacks: ExamPack[];
}

export interface WrongQuestionStat {
  wrongCount: number;
  lastWrongAt: string;
  mastered: boolean;
}

export type ExamMode = 'practice' | 'exam';

export interface ExamAnswerRecord {
  questionId: string;
  selectedOptionIds: string[];
  isCorrect: boolean;
}

export interface ExamAttempt {
  id: string;
  examPackId: string;
  examTitle: string;
  category: ExamCategory;
  mode: ExamMode;
  completedAt: string;
  scorePercent: number;
  correctCount: number;
  totalCount: number;
  passed: boolean;
  durationSpentSeconds: number;
  answers: ExamAnswerRecord[];
}

export interface ActiveExamQuestionSnapshot {
  questionId: string;
  optionOrder: string[];
}

export interface ActiveExamSession {
  id: string;
  subjectId: string;
  examPackId: string;
  examTitle: string;
  category: ExamCategory;
  mode: ExamMode;
  durationMinutes: number;
  passScorePercent: number;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
  snapshots: ActiveExamQuestionSnapshot[];
  answers: Record<string, string[]>;
  checkedQuestionIds: string[];
  flaggedQuestionIds: string[];
  currentIndex: number;
  remainingSeconds: number;
  startedAt: string;
  updatedAt: string;
}

export interface UserSubjectProgress {
  subjectId: string;
  completedChapterIds: string[];
  bookmarkedQuestionIds: string[];
  wrongQuestionStats: Record<string, WrongQuestionStat>;
  attempts: ExamAttempt[];
  activeSession?: ActiveExamSession;
}

export interface CustomSubjectInput {
  code: string;
  name: string;
  description: string;
}

export interface SubjectExtensionData {
  chapters: Chapter[];
  questions: Question[];
  examPacks: ExamPack[];
}

export interface AppStoragePayload {
  version: number;
  customSubjects: Subject[];
  subjectExtensions: Record<string, SubjectExtensionData>;
  progressBySubject: Record<string, UserSubjectProgress>;
}
```

- [ ] **Step 6: Run test and TypeScript check to verify Task 1 passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npm test && npm run build`
Expected: 1 test passes; `tsc -b && vite build` succeeds cleanly.

- [ ] **Step 7: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add .gitignore package.json package-lock.json tsconfig.json tsconfig.app.json tsconfig.node.json vite.config.ts tailwind.config.js postcss.config.js index.html src/
git commit -m "chore: scaffold React TypeScript Vite Tailwind app and domain types"
```

---

### Task 2: Exam Engine — Shuffling, Balanced Sampling, Grading & Breakdown

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\services\exam\examEngine.ts`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\services\exam\examEngine.test.ts`

**Interfaces:**
- Consumes: `Subject`, `Question`, `ExamPack`, `ExamCategory` from `src/types/study.ts`.
- Produces:
  - `shuffleArray<T>(items: readonly T[], rng?: () => number): T[]`
  - `buildExamQuestions(subject: Subject, pack: ExamPack, options?: { shuffleQuestions?: boolean; shuffleOptions?: boolean; rng?: () => number }): Question[]`
  - `isAnswerCorrect(question: Question, selectedOptionIds: readonly string[]): boolean`
  - `ChapterBreakdownItem`, `GradedQuestionResult`, `ExamGradeSummary`
  - `gradeExam(subject: Subject, questions: readonly Question[], answers: Record<string, string[]>, passScorePercent: number): ExamGradeSummary`
  - `createDynamicExamPack(params: { subjectId: string; category: ExamCategory; title: string; chapterIds: string[]; questionCount: number; durationMinutes: number; passScorePercent?: number; fixedQuestionIds?: string[] }): ExamPack`

- [ ] **Step 1: Write the failing unit tests for `examEngine.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\services\exam\examEngine.test.ts`:

```ts
import { describe, it, expect } from 'vitest';
import type { Subject, Question, ExamPack } from '../../types/study';
import {
  shuffleArray,
  isAnswerCorrect,
  buildExamQuestions,
  gradeExam,
  createDynamicExamPack,
} from './examEngine';

const makeQuestion = (
  id: string,
  chapterId: string,
  overrides: Partial<Question> = {}
): Question => ({
  id,
  subjectId: 'swr',
  chapterId,
  source: 'slide-generated',
  examTarget: 'both',
  difficulty: 'understand',
  type: 'single',
  prompt: `Question ${id}`,
  options: [
    { id: 'a', text: 'Option A' },
    { id: 'b', text: 'Option B' },
    { id: 'c', text: 'Option C' },
  ],
  correctOptionIds: ['a'],
  explanation: `Explanation ${id}`,
  ...overrides,
});

const makeSubject = (): Subject => ({
  id: 'swr',
  code: 'SWR302',
  name: 'Software Requirements',
  description: 'SWR course',
  chapters: [
    { id: 'ch1', order: 1, title: 'Chapter 1', summary: '', sections: [] },
    { id: 'ch2', order: 2, title: 'Chapter 2', summary: '', sections: [] },
  ],
  questions: [
    makeQuestion('q1', 'ch1', { examTarget: 'quiz' }),
    makeQuestion('q2', 'ch1', { examTarget: 'both' }),
    makeQuestion('q3', 'ch1', { examTarget: 'final' }),
    makeQuestion('q4', 'ch2', {
      examTarget: 'both',
      type: 'multiple',
      correctOptionIds: ['a', 'c'],
    }),
    makeQuestion('q5', 'ch2', { examTarget: 'final' }),
  ],
  examPacks: [],
});

describe('examEngine', () => {
  it('evaluates single and multiple choice answers accurately regardless of order', () => {
    const single = makeQuestion('s1', 'ch1', { type: 'single', correctOptionIds: ['b'] });
    const multi = makeQuestion('m1', 'ch1', {
      type: 'multiple',
      correctOptionIds: ['a', 'c'],
    });

    expect(isAnswerCorrect(single, ['b'])).toBe(true);
    expect(isAnswerCorrect(single, ['a'])).toBe(false);
    expect(isAnswerCorrect(single, [])).toBe(false);

    // Order-independent exact match for multiple choice
    expect(isAnswerCorrect(multi, ['c', 'a'])).toBe(true);
    // Partial selection or extra wrong option must fail
    expect(isAnswerCorrect(multi, ['a'])).toBe(false);
    expect(isAnswerCorrect(multi, ['a', 'b', 'c'])).toBe(false);
    expect(isAnswerCorrect(multi, [])).toBe(false);
  });

  it('shuffles array without mutating input', () => {
    const input = [1, 2, 3, 4];
    const shuffled = shuffleArray(input, () => 0.2);
    expect(input).toEqual([1, 2, 3, 4]);
    expect(shuffled).toHaveLength(4);
    expect(shuffled.sort()).toEqual([1, 2, 3, 4]);
  });

  it('builds balanced questions across chapters and caps gracefully when pool is smaller than requested', () => {
    const subject = makeSubject();
    const pack = createDynamicExamPack({
      subjectId: 'swr',
      category: 'final',
      title: 'Final Mock',
      chapterIds: ['ch1', 'ch2'],
      questionCount: 60, // larger than available 4 final/both questions
      durationMinutes: 60,
    });

    const built = buildExamQuestions(subject, pack, {
      shuffleQuestions: true,
      shuffleOptions: true,
      rng: () => 0.1,
    });

    // q1 has examTarget: 'quiz', so final pack picks q2, q3, q4, q5 (4 total)
    expect(built.map((q) => q.id).sort()).toEqual(['q2', 'q3', 'q4', 'q5']);
    // Original subject options must not be mutated
    expect(subject.questions[0].options.map((o) => o.id)).toEqual(['a', 'b', 'c']);
  });

  it('respects fixedQuestionIds when provided on ExamPack', () => {
    const subject = makeSubject();
    const pack: ExamPack = {
      id: 'fixed-quiz',
      subjectId: 'swr',
      category: 'quiz',
      title: 'Fixed Quiz',
      durationMinutes: 15,
      questionCount: 2,
      chapterIds: ['ch1', 'ch2'],
      fixedQuestionIds: ['q4', 'q1'],
      passScorePercent: 50,
    };

    const built = buildExamQuestions(subject, pack, {
      shuffleQuestions: false,
      shuffleOptions: false,
    });

    expect(built.map((q) => q.id)).toEqual(['q4', 'q1']);
  });

  it('returns empty array when no questions match the pack', () => {
    const subject = makeSubject();
    const emptyPack = createDynamicExamPack({
      subjectId: 'swr',
      category: 'quiz',
      title: 'Empty Chapter',
      chapterIds: ['non-existent'],
      questionCount: 10,
      durationMinutes: 10,
    });

    expect(buildExamQuestions(subject, emptyPack)).toEqual([]);
  });

  it('grades exam and produces per-chapter accuracy breakdown', () => {
    const subject = makeSubject();
    const questions = [subject.questions[0], subject.questions[3]]; // q1 (ch1), q4 (ch2, multi a+c)
    const answers: Record<string, string[]> = {
      q1: ['a'], // correct
      q4: ['a'], // partial -> wrong
    };

    const summary = gradeExam(subject, questions, answers, 50);

    expect(summary.totalCount).toBe(2);
    expect(summary.correctCount).toBe(1);
    expect(summary.scorePercent).toBe(50);
    expect(summary.passed).toBe(true);
    expect(summary.chapterBreakdown).toEqual([
      {
        chapterId: 'ch1',
        chapterTitle: 'Chapter 1',
        correct: 1,
        total: 1,
        accuracyPercent: 100,
      },
      {
        chapterId: 'ch2',
        chapterTitle: 'Chapter 2',
        correct: 0,
        total: 1,
        accuracyPercent: 0,
      },
    ]);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/services/exam/examEngine.test.ts`
Expected: FAIL with missing module `./examEngine`.

- [ ] **Step 3: Implement `src/services/exam/examEngine.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\services\exam\examEngine.ts`:

```ts
import type {
  ExamCategory,
  ExamPack,
  Question,
  Subject,
} from '../../types/study';

export interface ChapterBreakdownItem {
  chapterId: string;
  chapterTitle: string;
  correct: number;
  total: number;
  accuracyPercent: number;
}

export interface GradedQuestionResult {
  question: Question;
  selectedOptionIds: string[];
  isCorrect: boolean;
}

export interface ExamGradeSummary {
  totalCount: number;
  correctCount: number;
  scorePercent: number;
  passed: boolean;
  results: GradedQuestionResult[];
  chapterBreakdown: ChapterBreakdownItem[];
}

export interface BuildExamOptions {
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
  rng?: () => number;
}

export function shuffleArray<T>(
  items: readonly T[],
  rng: () => number = Math.random
): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function isAnswerCorrect(
  question: Question,
  selectedOptionIds: readonly string[]
): boolean {
  if (question.correctOptionIds.length === 0) return false;
  const uniqueSelected = new Set(selectedOptionIds);
  const expected = new Set(question.correctOptionIds);
  if (uniqueSelected.size !== expected.size) return false;
  for (const id of expected) {
    if (!uniqueSelected.has(id)) return false;
  }
  return true;
}

function matchesPackTarget(question: Question, category: ExamCategory): boolean {
  if (category === 'chapter' || category === 'mistake') return true;
  if (category === 'quiz') {
    return question.examTarget === 'quiz' || question.examTarget === 'both';
  }
  if (category === 'final') {
    return question.examTarget === 'final' || question.examTarget === 'both';
  }
  return true;
}

function sampleBalancedByChapter(
  pool: readonly Question[],
  chapterIds: readonly string[],
  limit: number,
  shouldShuffle: boolean,
  rng: () => number
): Question[] {
  if (pool.length <= limit) {
    return shouldShuffle ? shuffleArray(pool, rng) : [...pool];
  }

  const orderedChapters =
    chapterIds.length > 0
      ? chapterIds
      : Array.from(new Set(pool.map((q) => q.chapterId)));

  const buckets = new Map<string, Question[]>();
  for (const chId of orderedChapters) {
    const items = pool.filter((q) => q.chapterId === chId);
    if (items.length > 0) {
      buckets.set(chId, shouldShuffle ? shuffleArray(items, rng) : [...items]);
    }
  }

  // Round-robin selection across chapters so Final/Quiz spreads coverage evenly
  const selected: Question[] = [];
  const activeBuckets = Array.from(buckets.values());
  while (selected.length < limit && activeBuckets.some((b) => b.length > 0)) {
    for (const bucket of activeBuckets) {
      if (selected.length >= limit) break;
      const next = bucket.shift();
      if (next) selected.push(next);
    }
  }

  return shouldShuffle ? shuffleArray(selected, rng) : selected;
}

export function buildExamQuestions(
  subject: Subject,
  pack: ExamPack,
  options: BuildExamOptions = {}
): Question[] {
  const {
    shuffleQuestions = false,
    shuffleOptions = false,
    rng = Math.random,
  } = options;

  let chosen: Question[];

  if (pack.fixedQuestionIds && pack.fixedQuestionIds.length > 0) {
    const byId = new Map(subject.questions.map((q) => [q.id, q]));
    const resolved = pack.fixedQuestionIds
      .map((id) => byId.get(id))
      .filter((q): q is Question => Boolean(q));
    chosen = shuffleQuestions ? shuffleArray(resolved, rng) : resolved;
  } else {
    const chapterSet = new Set(pack.chapterIds);
    const eligible = subject.questions.filter((q) => {
      const inChapter = chapterSet.size === 0 || chapterSet.has(q.chapterId);
      return inChapter && matchesPackTarget(q, pack.category);
    });
    const limit = Math.min(pack.questionCount, eligible.length);
    chosen = sampleBalancedByChapter(
      eligible,
      pack.chapterIds,
      limit,
      shuffleQuestions,
      rng
    );
  }

  return chosen.map((q) => ({
    ...q,
    options: shuffleOptions ? shuffleArray(q.options, rng) : [...q.options],
  }));
}

export function gradeExam(
  subject: Subject,
  questions: readonly Question[],
  answers: Record<string, string[]>,
  passScorePercent: number
): ExamGradeSummary {
  const chapterMap = new Map(subject.chapters.map((c) => [c.id, c]));
  const chapterStats = new Map<string, { correct: number; total: number }>();

  let correctCount = 0;
  const results: GradedQuestionResult[] = questions.map((question) => {
    const selectedOptionIds = answers[question.id] ?? [];
    const correct = isAnswerCorrect(question, selectedOptionIds);
    if (correct) correctCount += 1;

    const current = chapterStats.get(question.chapterId) ?? { correct: 0, total: 0 };
    chapterStats.set(question.chapterId, {
      correct: current.correct + (correct ? 1 : 0),
      total: current.total + 1,
    });

    return {
      question,
      selectedOptionIds,
      isCorrect: correct,
    };
  });

  const totalCount = questions.length;
  const scorePercent =
    totalCount === 0 ? 0 : Math.round((correctCount / totalCount) * 100);

  const chapterBreakdown: ChapterBreakdownItem[] = Array.from(
    chapterStats.entries()
  ).map(([chapterId, stat]) => ({
    chapterId,
    chapterTitle: chapterMap.get(chapterId)?.title ?? 'Khác',
    correct: stat.correct,
    total: stat.total,
    accuracyPercent:
      stat.total === 0 ? 0 : Math.round((stat.correct / stat.total) * 100),
  }));

  return {
    totalCount,
    correctCount,
    scorePercent,
    passed: totalCount > 0 && scorePercent >= passScorePercent,
    results,
    chapterBreakdown,
  };
}

export function createDynamicExamPack(params: {
  subjectId: string;
  category: ExamCategory;
  title: string;
  description?: string;
  chapterIds: string[];
  questionCount: number;
  durationMinutes: number;
  passScorePercent?: number;
  fixedQuestionIds?: string[];
}): ExamPack {
  return {
    id: `dynamic-${params.category}-${Date.now()}`,
    subjectId: params.subjectId,
    category: params.category,
    title: params.title,
    description: params.description,
    durationMinutes: params.durationMinutes,
    questionCount: params.questionCount,
    chapterIds: params.chapterIds,
    fixedQuestionIds: params.fixedQuestionIds,
    passScorePercent: params.passScorePercent ?? 50,
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/services/exam/examEngine.test.ts`
Expected: PASS (5 tests passing).

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/services/exam/examEngine.ts src/services/exam/examEngine.test.ts
git commit -m "feat: add exam engine for balanced sampling, shuffling, and grading"
```

---

### Task 3: Smart Question Importer & Text/JSON Parser

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\services\importer\questionParser.ts`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\services\importer\questionParser.test.ts`

**Interfaces:**
- Consumes: `Question`, `ExamTarget` from `src/types/study.ts`.
- Produces:
  - `ParseIssue { index: number; severity: 'error' | 'warning'; message: string; rawSnippet: string }`
  - `ParsedImportResult { questions: Omit<Question, 'id' | 'subjectId'>[]; issues: ParseIssue[] }`
  - `parseRawQuestionsText(rawText: string, options?: { defaultChapterId?: string; defaultExamTarget?: ExamTarget; existingPrompts?: readonly string[] }): ParsedImportResult`
  - `parseJsonQuestionsImport(jsonText: string, options?: { defaultChapterId?: string; defaultExamTarget?: ExamTarget; existingPrompts?: readonly string[] }): ParsedImportResult`

- [ ] **Step 1: Write failing tests for `questionParser.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\services\importer\questionParser.test.ts`:

```ts
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

    expect(result.questions).toHaveLength(1); // Question 1 parsed with duplicate warning
    expect(result.issues.some((i) => i.severity === 'warning' && i.index === 1)).toBe(true);
    expect(result.issues.some((i) => i.severity === 'error' && i.index === 2)).toBe(true);
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
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/services/importer/questionParser.test.ts`
Expected: FAIL with missing module `./questionParser`.

- [ ] **Step 3: Implement `src/services/importer/questionParser.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\services\importer\questionParser.ts`:

```ts
import type {
  ExamTarget,
  Question,
  QuestionOption,
} from '../../types/study';

export interface ParseIssue {
  index: number;
  severity: 'error' | 'warning';
  message: string;
  rawSnippet: string;
}

export interface ParsedImportResult {
  questions: Omit<Question, 'id' | 'subjectId'>[];
  issues: ParseIssue[];
}

export interface ParseOptions {
  defaultChapterId?: string;
  defaultExamTarget?: ExamTarget;
  existingPrompts?: readonly string[];
}

const QUESTION_START_RE = /^(?:(?:Câu|Question|Q)\s*\d+\s*[:.)-]|\d+\s*[.)])\s*(.+)$/i;
const OPTION_LINE_RE = /^(\*?)\s*([A-F])\s*[.)\]:-]\s*(.+)$/i;
const ANSWER_LINE_RE = /^(?:Answer|Ans|Đáp án|Key)\s*[:.-]\s*(.+)$/i;
const EXPLANATION_LINE_RE = /^(?:Explanation|Explain|Giải thích|Note)\s*[:.-]\s*(.+)$/i;

function normalizePrompt(text: string): string {
  return text.trim().toLowerCase().replace(/\s+/g, ' ');
}

function splitBlocks(rawText: string): string[][] {
  const lines = rawText.replace(/\r\n/g, '\n').split('\n');
  const blocks: string[][] = [];
  let current: string[] = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      if (current.length > 0) {
        blocks.push(current);
        current = [];
      }
      continue;
    }
    if (QUESTION_START_RE.test(trimmed) && current.length > 0) {
      blocks.push(current);
      current = [trimmed];
    } else {
      current.push(trimmed);
    }
  }
  if (current.length > 0) blocks.push(current);
  return blocks;
}

export function parseRawQuestionsText(
  rawText: string,
  options: ParseOptions = {}
): ParsedImportResult {
  const {
    defaultChapterId = 'general',
    defaultExamTarget = 'both',
    existingPrompts = [],
  } = options;

  const knownPrompts = new Set(existingPrompts.map(normalizePrompt));
  const blocks = splitBlocks(rawText);
  const questions: Omit<Question, 'id' | 'subjectId'>[] = [];
  const issues: ParseIssue[] = [];

  blocks.forEach((lines, idx) => {
    const blockNumber = idx + 1;
    const rawSnippet = lines.slice(0, 2).join(' ').slice(0, 100);

    const promptLines: string[] = [];
    const parsedOptions: QuestionOption[] = [];
    const starredOptionIds: string[] = [];
    let answerLineIds: string[] = [];
    const explanationLines: string[] = [];
    let inExplanation = false;

    for (const line of lines) {
      const ansMatch = line.match(ANSWER_LINE_RE);
      if (ansMatch) {
        inExplanation = false;
        const letters = ansMatch[1]
          .toUpperCase()
          .match(/[A-F]/g);
        if (letters) {
          answerLineIds = letters.map((l) => l.toLowerCase());
        }
        continue;
      }

      const expMatch = line.match(EXPLANATION_LINE_RE);
      if (expMatch) {
        inExplanation = true;
        explanationLines.push(expMatch[1].trim());
        continue;
      }

      const optMatch = line.match(OPTION_LINE_RE);
      if (optMatch) {
        inExplanation = false;
        const isStarred = optMatch[1] === '*';
        const optionId = optMatch[2].toLowerCase();
        const optionText = optMatch[3].trim();
        parsedOptions.push({ id: optionId, text: optionText });
        if (isStarred) starredOptionIds.push(optionId);
        continue;
      }

      if (inExplanation) {
        explanationLines.push(line);
        continue;
      }

      if (parsedOptions.length === 0) {
        const qMatch = line.match(QUESTION_START_RE);
        promptLines.push(qMatch ? qMatch[1].trim() : line);
      } else {
        // Continuation of previous option text
        const last = parsedOptions[parsedOptions.length - 1];
        last.text = `${last.text} ${line}`.trim();
      }
    }

    const prompt = promptLines.join(' ').trim();
    if (!prompt) {
      issues.push({
        index: blockNumber,
        severity: 'error',
        message: `Khối #${blockNumber}: Thiếu nội dung câu hỏi.`,
        rawSnippet,
      });
      return;
    }

    if (parsedOptions.length < 2) {
      issues.push({
        index: blockNumber,
        severity: 'error',
        message: `Câu #${blockNumber}: Cần ít nhất 2 lựa chọn (A, B...).`,
        rawSnippet,
      });
      return;
    }

    const validOptionIds = new Set(parsedOptions.map((o) => o.id));
    const combinedCorrect = Array.from(
      new Set([...answerLineIds, ...starredOptionIds])
    ).filter((id) => validOptionIds.has(id));

    if (combinedCorrect.length === 0) {
      issues.push({
        index: blockNumber,
        severity: 'error',
        message: `Câu #${blockNumber}: Chưa xác định đáp án đúng (thêm "Đáp án: A" hoặc đánh dấu * trước lựa chọn đúng).`,
        rawSnippet,
      });
      return;
    }

    const normalized = normalizePrompt(prompt);
    if (knownPrompts.has(normalized)) {
      issues.push({
        index: blockNumber,
        severity: 'warning',
        message: `Câu #${blockNumber}: Nội dung câu hỏi có thể bị trùng với câu đã có.`,
        rawSnippet,
      });
    }
    knownPrompts.add(normalized);

    questions.push({
      chapterId: defaultChapterId,
      source: 'imported',
      examTarget: defaultExamTarget,
      difficulty: 'understand',
      type: combinedCorrect.length > 1 ? 'multiple' : 'single',
      prompt,
      options: parsedOptions,
      correctOptionIds: combinedCorrect,
      explanation: explanationLines.join(' ').trim(),
    });
  });

  return { questions, issues };
}

export function parseJsonQuestionsImport(
  jsonText: string,
  options: ParseOptions = {}
): ParsedImportResult {
  const {
    defaultChapterId = 'general',
    defaultExamTarget = 'both',
    existingPrompts = [],
  } = options;

  let parsed: unknown;
  try {
    parsed = JSON.parse(jsonText);
  } catch {
    return {
      questions: [],
      issues: [
        {
          index: 1,
          severity: 'error',
          message: 'File JSON không hợp lệ, không thể phân tích cú pháp.',
          rawSnippet: jsonText.slice(0, 80),
        },
      ],
    };
  }

  const rawItems: unknown[] = Array.isArray(parsed)
    ? parsed
    : typeof parsed === 'object' &&
        parsed !== null &&
        Array.isArray((parsed as { questions?: unknown[] }).questions)
      ? (parsed as { questions: unknown[] }).questions
      : [];

  if (rawItems.length === 0) {
    return {
      questions: [],
      issues: [
        {
          index: 1,
          severity: 'error',
          message: 'Không tìm thấy mảng câu hỏi hợp lệ trong JSON.',
          rawSnippet: jsonText.slice(0, 80),
        },
      ],
    };
  }

  const knownPrompts = new Set(existingPrompts.map(normalizePrompt));
  const questions: Omit<Question, 'id' | 'subjectId'>[] = [];
  const issues: ParseIssue[] = [];

  rawItems.forEach((item, idx) => {
    const number = idx + 1;
    if (typeof item !== 'object' || item === null) {
      issues.push({
        index: number,
        severity: 'error',
        message: `Mục #${number} không phải đối tượng câu hỏi hợp lệ.`,
        rawSnippet: String(item),
      });
      return;
    }

    const record = item as Partial<Question>;
    const prompt = typeof record.prompt === 'string' ? record.prompt.trim() : '';
    const opts = Array.isArray(record.options)
      ? record.options.filter(
          (o): o is QuestionOption =>
            Boolean(o) &&
            typeof o.id === 'string' &&
            typeof o.text === 'string' &&
            o.text.trim().length > 0
        )
      : [];
    const validIds = new Set(opts.map((o) => o.id));
    const correctIds = Array.isArray(record.correctOptionIds)
      ? record.correctOptionIds.filter((id) => typeof id === 'string' && validIds.has(id))
      : [];

    if (!prompt || opts.length < 2 || correctIds.length === 0) {
      issues.push({
        index: number,
        severity: 'error',
        message: `Mục #${number}: Thiếu prompt, options (>=2), hoặc correctOptionIds hợp lệ.`,
        rawSnippet: prompt.slice(0, 80) || `#${number}`,
      });
      return;
    }

    const normalized = normalizePrompt(prompt);
    if (knownPrompts.has(normalized)) {
      issues.push({
        index: number,
        severity: 'warning',
        message: `Mục #${number}: Câu hỏi bị trùng lặp nội dung.`,
        rawSnippet: prompt.slice(0, 80),
      });
    }
    knownPrompts.add(normalized);

    questions.push({
      chapterId:
        typeof record.chapterId === 'string' && record.chapterId
          ? record.chapterId
          : defaultChapterId,
      source: 'imported',
      examTarget: record.examTarget ?? defaultExamTarget,
      difficulty: record.difficulty ?? 'understand',
      type: correctIds.length > 1 ? 'multiple' : record.type ?? 'single',
      prompt,
      options: opts,
      correctOptionIds: correctIds,
      explanation:
        typeof record.explanation === 'string' ? record.explanation : '',
    });
  });

  return { questions, issues };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/services/importer/questionParser.test.ts`
Expected: PASS (4 tests passing).

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/services/importer/questionParser.ts src/services/importer/questionParser.test.ts
git commit -m "feat: add smart raw-text and JSON question importer with validation"
```

---

### Task 4: Hybrid Storage Service & Backup/Restore

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\services\storage\storageService.ts`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\services\storage\storageService.test.ts`

**Interfaces:**
- Consumes: `Subject`, `Question`, `UserSubjectProgress`, `ActiveExamSession`, `ExamAttempt`, `CustomSubjectInput`, `AppStoragePayload` from `src/types/study.ts`.
- Produces:
  - `STORAGE_KEY = 'study_quiz_hub_v1'`
  - `StorageService` interface & `createStorageService(builtInSubjects: readonly Subject[], storage?: Storage): StorageService`
  - `createEmptyProgress(subjectId: string): UserSubjectProgress`

- [ ] **Step 1: Write failing tests for `storageService.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\services\storage\storageService.test.ts`:

```ts
import { describe, it, expect, beforeEach } from 'vitest';
import type { Subject, ActiveExamSession, ExamAttempt } from '../../types/study';
import { createStorageService, STORAGE_KEY } from './storageService';

function createMemoryStorage(): Storage {
  const map = new Map<string, string>();
  return {
    get length() {
      return map.size;
    },
    clear: () => map.clear(),
    getItem: (key: string) => map.get(key) ?? null,
    key: (index: number) => Array.from(map.keys())[index] ?? null,
    removeItem: (key: string) => {
      map.delete(key);
    },
    setItem: (key: string, value: string) => {
      map.set(key, value);
    },
  };
}

const seedBuiltIn = (): Subject[] => [
  {
    id: 'swr',
    code: 'SWR302',
    name: 'Software Requirements',
    description: 'Built-in SWR',
    chapters: [{ id: 'swr-ch1', order: 1, title: 'Ch 1', summary: '', sections: [] }],
    questions: [
      {
        id: 'swr-q1',
        subjectId: 'swr',
        chapterId: 'swr-ch1',
        source: 'slide-generated',
        examTarget: 'both',
        difficulty: 'remember',
        type: 'single',
        prompt: 'Built-in Q1',
        options: [
          { id: 'a', text: 'Yes' },
          { id: 'b', text: 'No' },
        ],
        correctOptionIds: ['a'],
        explanation: 'Exp',
      },
    ],
    examPacks: [],
  },
];

describe('storageService', () => {
  let memoryStorage: Storage;

  beforeEach(() => {
    memoryStorage = createMemoryStorage();
  });

  it('merges built-in subjects with user-imported questions and preserves them across built-in updates', () => {
    const svc1 = createStorageService(seedBuiltIn(), memoryStorage);
    const imported = svc1.importQuestionsToSubject('swr', [
      {
        chapterId: 'swr-ch1',
        source: 'imported',
        examTarget: 'quiz',
        difficulty: 'understand',
        type: 'single',
        prompt: 'Imported Q1',
        options: [
          { id: 'a', text: 'A' },
          { id: 'b', text: 'B' },
        ],
        correctOptionIds: ['b'],
        explanation: 'User note',
      },
    ]);

    expect(imported).toHaveLength(1);
    expect(svc1.getSubjectById('swr')?.questions).toHaveLength(2);

    // Simulate code update adding a second built-in question
    const updatedBuiltIn = seedBuiltIn();
    updatedBuiltIn[0].questions.push({
      ...updatedBuiltIn[0].questions[0],
      id: 'swr-q2',
      prompt: 'Built-in Q2',
    });

    const svc2 = createStorageService(updatedBuiltIn, memoryStorage);
    const merged = svc2.getSubjectById('swr');
    expect(merged?.questions.map((q) => q.prompt)).toEqual([
      'Built-in Q1',
      'Built-in Q2',
      'Imported Q1',
    ]);
  });

  it('recovers gracefully from corrupted localStorage JSON', () => {
    memoryStorage.setItem(STORAGE_KEY, '{corrupted json!!!');
    const svc = createStorageService(seedBuiltIn(), memoryStorage);
    const subjects = svc.getSubjects();
    expect(subjects).toHaveLength(1);
    expect(subjects[0].id).toBe('swr');
  });

  it('tracks wrong questions, masters them on correct answer, and persists active session', () => {
    const svc = createStorageService(seedBuiltIn(), memoryStorage);

    const wrongAttempt: ExamAttempt = {
      id: 'att-1',
      examPackId: 'quiz-1',
      examTitle: 'Quiz 1',
      category: 'quiz',
      mode: 'exam',
      completedAt: '2026-11-11T10:00:00Z',
      scorePercent: 0,
      correctCount: 0,
      totalCount: 1,
      passed: false,
      durationSpentSeconds: 30,
      answers: [{ questionId: 'swr-q1', selectedOptionIds: ['b'], isCorrect: false }],
    };

    const p1 = svc.recordExamAttempt('swr', wrongAttempt);
    expect(p1.wrongQuestionStats['swr-q1']).toMatchObject({
      wrongCount: 1,
      mastered: false,
    });

    const correctAttempt: ExamAttempt = {
      ...wrongAttempt,
      id: 'att-2',
      scorePercent: 100,
      correctCount: 1,
      passed: true,
      answers: [{ questionId: 'swr-q1', selectedOptionIds: ['a'], isCorrect: true }],
    };

    const p2 = svc.recordExamAttempt('swr', correctAttempt);
    expect(p2.wrongQuestionStats['swr-q1'].mastered).toBe(true);

    const session: ActiveExamSession = {
      id: 'sess-1',
      subjectId: 'swr',
      examPackId: 'quiz-1',
      examTitle: 'Quiz 1',
      category: 'quiz',
      mode: 'exam',
      durationMinutes: 20,
      passScorePercent: 50,
      shuffleQuestions: true,
      shuffleOptions: true,
      snapshots: [{ questionId: 'swr-q1', optionOrder: ['b', 'a'] }],
      answers: { 'swr-q1': ['a'] },
      checkedQuestionIds: [],
      flaggedQuestionIds: ['swr-q1'],
      currentIndex: 0,
      remainingSeconds: 1140,
      startedAt: '2026-11-11T10:01:00Z',
      updatedAt: '2026-11-11T10:02:00Z',
    };

    svc.saveActiveSession('swr', session);
    expect(svc.getProgress('swr').activeSession?.remainingSeconds).toBe(1140);
    svc.clearActiveSession('swr');
    expect(svc.getProgress('swr').activeSession).toBeUndefined();
  });

  it('creates custom subjects and supports backup export/import', () => {
    const svc = createStorageService(seedBuiltIn(), memoryStorage);
    const created = svc.createSubject({
      code: 'PRJ301',
      name: 'Java Web Application',
      description: 'Servlet & JSP',
    });
    expect(created.id).toContain('prj301');
    expect(svc.getSubjects()).toHaveLength(2);

    const backup = svc.exportBackupJson();
    memoryStorage.clear();

    const freshSvc = createStorageService(seedBuiltIn(), memoryStorage);
    expect(freshSvc.getSubjects()).toHaveLength(1);
    const restored = freshSvc.importBackupJson(backup);
    expect(restored.ok).toBe(true);
    expect(freshSvc.getSubjects()).toHaveLength(2);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/services/storage/storageService.test.ts`
Expected: FAIL with missing module `./storageService`.

- [ ] **Step 3: Implement `src/services/storage/storageService.ts`**

Write `E:\SELF-STUDY\study-quiz-hub\src\services\storage\storageService.ts`:

```ts
import type {
  ActiveExamSession,
  AppStoragePayload,
  Chapter,
  CustomSubjectInput,
  ExamAttempt,
  ExamPack,
  Question,
  Subject,
  UserSubjectProgress,
} from '../../types/study';

export const STORAGE_KEY = 'study_quiz_hub_v1';
const CURRENT_VERSION = 1;

export function createEmptyProgress(subjectId: string): UserSubjectProgress {
  return {
    subjectId,
    completedChapterIds: [],
    bookmarkedQuestionIds: [],
    wrongQuestionStats: {},
    attempts: [],
  };
}

function emptyPayload(): AppStoragePayload {
  return {
    version: CURRENT_VERSION,
    customSubjects: [],
    subjectExtensions: {},
    progressBySubject: {},
  };
}

function safeParsePayload(raw: string | null): AppStoragePayload {
  if (!raw) return emptyPayload();
  try {
    const parsed = JSON.parse(raw) as Partial<AppStoragePayload>;
    if (!parsed || typeof parsed !== 'object') return emptyPayload();
    return {
      version: CURRENT_VERSION,
      customSubjects: Array.isArray(parsed.customSubjects)
        ? parsed.customSubjects
        : [],
      subjectExtensions:
        parsed.subjectExtensions && typeof parsed.subjectExtensions === 'object'
          ? parsed.subjectExtensions
          : {},
      progressBySubject:
        parsed.progressBySubject && typeof parsed.progressBySubject === 'object'
          ? parsed.progressBySubject
          : {},
    };
  } catch {
    return emptyPayload();
  }
}

export interface StorageService {
  getSubjects(): Subject[];
  getSubjectById(subjectId: string): Subject | undefined;
  createSubject(input: CustomSubjectInput): Subject;
  addChapterToSubject(subjectId: string, chapter: Omit<Chapter, 'id' | 'order'>): Chapter;
  importQuestionsToSubject(
    subjectId: string,
    newQuestions: Omit<Question, 'id' | 'subjectId'>[]
  ): Question[];
  deleteImportedQuestion(subjectId: string, questionId: string): void;
  getProgress(subjectId: string): UserSubjectProgress;
  toggleChapterComplete(subjectId: string, chapterId: string): UserSubjectProgress;
  toggleBookmark(subjectId: string, questionId: string): UserSubjectProgress;
  saveActiveSession(subjectId: string, session: ActiveExamSession): void;
  clearActiveSession(subjectId: string): void;
  recordExamAttempt(subjectId: string, attempt: ExamAttempt): UserSubjectProgress;
  exportBackupJson(): string;
  importBackupJson(
    jsonText: string
  ): { ok: true; subjectCount: number } | { ok: false; error: string };
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createStorageService(
  builtInSubjects: readonly Subject[],
  storage?: Storage
): StorageService {
  const targetStorage =
    storage ?? (typeof window !== 'undefined' ? window.localStorage : undefined);

  const read = (): AppStoragePayload =>
    safeParsePayload(targetStorage?.getItem(STORAGE_KEY) ?? null);

  const write = (payload: AppStoragePayload): void => {
    targetStorage?.setItem(STORAGE_KEY, JSON.stringify(payload));
  };

  const mergeSubject = (
    base: Subject,
    payload: AppStoragePayload
  ): Subject => {
    const ext = payload.subjectExtensions[base.id];
    if (!ext) return base;
    return {
      ...base,
      chapters: [...base.chapters, ...(ext.chapters ?? [])],
      questions: [...base.questions, ...(ext.questions ?? [])],
      examPacks: [...base.examPacks, ...(ext.examPacks ?? [])],
    };
  };

  const getSubjects = (): Subject[] => {
    const payload = read();
    const builtInMerged = builtInSubjects.map((s) => mergeSubject(s, payload));
    const customMerged = payload.customSubjects.map((s) =>
      mergeSubject(s, payload)
    );
    return [...builtInMerged, ...customMerged];
  };

  const getSubjectById = (subjectId: string): Subject | undefined =>
    getSubjects().find((s) => s.id === subjectId);

  const ensureProgress = (
    payload: AppStoragePayload,
    subjectId: string
  ): UserSubjectProgress => {
    const existing = payload.progressBySubject[subjectId];
    if (!existing) return createEmptyProgress(subjectId);
    return {
      subjectId,
      completedChapterIds: existing.completedChapterIds ?? [],
      bookmarkedQuestionIds: existing.bookmarkedQuestionIds ?? [],
      wrongQuestionStats: existing.wrongQuestionStats ?? {},
      attempts: existing.attempts ?? [],
      activeSession: existing.activeSession,
    };
  };

  return {
    getSubjects,
    getSubjectById,

    createSubject(input: CustomSubjectInput): Subject {
      const payload = read();
      const baseSlug = slugify(input.code || input.name) || 'subject';
      const id = `${baseSlug}-${Date.now().toString(36)}`;
      const defaultChapter: Chapter = {
        id: `${id}-ch1`,
        order: 1,
        title: 'Chương 1: Tổng quan & Câu hỏi chung',
        summary: 'Chương mặc định chứa các câu hỏi mới import cho môn học.',
        sections: [],
      };
      const defaultQuizPack: ExamPack = {
        id: `${id}-quiz-all`,
        subjectId: id,
        category: 'quiz',
        title: 'Quiz Tổng Hợp',
        durationMinutes: 20,
        questionCount: 20,
        chapterIds: [defaultChapter.id],
        passScorePercent: 50,
      };
      const defaultFinalPack: ExamPack = {
        id: `${id}-final-all`,
        subjectId: id,
        category: 'final',
        title: 'Final Exam Mock',
        durationMinutes: 60,
        questionCount: 50,
        chapterIds: [defaultChapter.id],
        passScorePercent: 50,
      };

      const subject: Subject = {
        id,
        code: input.code.trim().toUpperCase() || 'CUSTOM',
        name: input.name.trim(),
        description: input.description.trim(),
        chapters: [defaultChapter],
        questions: [],
        examPacks: [defaultQuizPack, defaultFinalPack],
      };

      payload.customSubjects.push(subject);
      write(payload);
      return subject;
    },

    addChapterToSubject(
      subjectId: string,
      chapterInput: Omit<Chapter, 'id' | 'order'>
    ): Chapter {
      const payload = read();
      const subject = getSubjects().find((s) => s.id === subjectId);
      const nextOrder = (subject?.chapters.length ?? 0) + 1;
      const chapter: Chapter = {
        id: `${subjectId}-ch${nextOrder}-${Date.now().toString(36)}`,
        order: nextOrder,
        ...chapterInput,
      };
      const ext = payload.subjectExtensions[subjectId] ?? {
        chapters: [],
        questions: [],
        examPacks: [],
      };
      ext.chapters.push(chapter);
      payload.subjectExtensions[subjectId] = ext;
      write(payload);
      return chapter;
    },

    importQuestionsToSubject(
      subjectId: string,
      newQuestions: Omit<Question, 'id' | 'subjectId'>[]
    ): Question[] {
      const payload = read();
      const ext = payload.subjectExtensions[subjectId] ?? {
        chapters: [],
        questions: [],
        examPacks: [],
      };

      const now = Date.now();
      const created: Question[] = newQuestions.map((q, idx) => ({
        ...q,
        id: `${subjectId}-imp-${now}-${idx}`,
        subjectId,
        source: 'imported',
      }));

      ext.questions.push(...created);
      payload.subjectExtensions[subjectId] = ext;
      write(payload);
      return created;
    },

    deleteImportedQuestion(subjectId: string, questionId: string): void {
      const payload = read();
      const ext = payload.subjectExtensions[subjectId];
      if (!ext) return;
      ext.questions = ext.questions.filter((q) => q.id !== questionId);
      write(payload);
    },

    getProgress(subjectId: string): UserSubjectProgress {
      return ensureProgress(read(), subjectId);
    },

    toggleChapterComplete(subjectId: string, chapterId: string): UserSubjectProgress {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      const exists = progress.completedChapterIds.includes(chapterId);
      progress.completedChapterIds = exists
        ? progress.completedChapterIds.filter((id) => id !== chapterId)
        : [...progress.completedChapterIds, chapterId];
      payload.progressBySubject[subjectId] = progress;
      write(payload);
      return progress;
    },

    toggleBookmark(subjectId: string, questionId: string): UserSubjectProgress {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      const exists = progress.bookmarkedQuestionIds.includes(questionId);
      progress.bookmarkedQuestionIds = exists
        ? progress.bookmarkedQuestionIds.filter((id) => id !== questionId)
        : [...progress.bookmarkedQuestionIds, questionId];
      payload.progressBySubject[subjectId] = progress;
      write(payload);
      return progress;
    },

    saveActiveSession(subjectId: string, session: ActiveExamSession): void {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      progress.activeSession = session;
      payload.progressBySubject[subjectId] = progress;
      write(payload);
    },

    clearActiveSession(subjectId: string): void {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      delete progress.activeSession;
      payload.progressBySubject[subjectId] = progress;
      write(payload);
    },

    recordExamAttempt(subjectId: string, attempt: ExamAttempt): UserSubjectProgress {
      const payload = read();
      const progress = ensureProgress(payload, subjectId);
      progress.attempts = [attempt, ...progress.attempts];
      delete progress.activeSession;

      for (const ans of attempt.answers) {
        const current = progress.wrongQuestionStats[ans.questionId];
        if (!ans.isCorrect) {
          progress.wrongQuestionStats[ans.questionId] = {
            wrongCount: (current?.wrongCount ?? 0) + 1,
            lastWrongAt: attempt.completedAt,
            mastered: false,
          };
        } else if (current) {
          progress.wrongQuestionStats[ans.questionId] = {
            ...current,
            mastered: true,
          };
        }
      }

      payload.progressBySubject[subjectId] = progress;
      write(payload);
      return progress;
    },

    exportBackupJson(): string {
      return JSON.stringify(read(), null, 2);
    },

    importBackupJson(
      jsonText: string
    ): { ok: true; subjectCount: number } | { ok: false; error: string } {
      try {
        const parsed = JSON.parse(jsonText) as Partial<AppStoragePayload>;
        if (
          !parsed ||
          typeof parsed !== 'object' ||
          typeof parsed.version !== 'number'
        ) {
          return {
            ok: false,
            error: 'File backup không đúng định dạng Study & Quiz Hub.',
          };
        }
        const normalized = safeParsePayload(jsonText);
        write(normalized);
        return {
          ok: true,
          subjectCount:
            builtInSubjects.length + normalized.customSubjects.length,
        };
      } catch {
        return { ok: false, error: 'Không thể đọc JSON từ file backup.' };
      }
    },
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/services/storage/storageService.test.ts`
Expected: PASS (4 tests passing).

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/services/storage/storageService.ts src/services/storage/storageService.test.ts
git commit -m "feat: add hybrid local storage service with progress tracking and backup"
```

---

### Task 5: Built-In Subject Registry & SWR Starter Content

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\subject.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\chapters.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\questions.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\exams.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\index.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\index.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\services\storage\index.ts`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\subjects.test.ts`

**Interfaces:**
- Consumes: `Subject`, `Chapter`, `Question`, `ExamPack` from `src/types/study.ts`, `createStorageService` from `src/services/storage/storageService.ts`.
- Produces:
  - `BUILT_IN_SUBJECTS: Subject[]` from `src/data/subjects/index.ts`
  - `storageService` singleton from `src/services/storage/index.ts`

- [ ] **Step 1: Write failing integrity test for built-in subjects**

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\subjects.test.ts`:

```ts
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
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/data/subjects/subjects.test.ts`
Expected: FAIL with missing `./index`.

- [ ] **Step 3: Create SWR starter dataset & registry**

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\subject.ts`:

```ts
export const swrMeta = {
  id: 'swr',
  code: 'SWR302',
  name: 'Software Requirements',
  description:
    'Bộ dữ liệu khởi đầu môn Software Requirements (SWR). Hãy gửi thêm slide bài giảng vào thư mục slides/swr/ để mở rộng đầy đủ từng chương.',
};
```

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\chapters.ts`:

```ts
import type { Chapter } from '../../../types/study';

export const swrChapters: Chapter[] = [
  {
    id: 'swr-ch1',
    order: 1,
    title: 'Chương 1: Tổng quan & Phân loại Yêu cầu Phần mềm (Starter)',
    summary:
      'Phân biệt các cấp độ yêu cầu (Business, User, Functional) và yêu cầu phi chức năng (Non-Functional Requirements), cùng vai trò của tài liệu SRS.',
    sections: [
      {
        id: 'swr-ch1-sec1',
        type: 'concept',
        title: 'Ba cấp độ yêu cầu cốt lõi (Karl Wiegers)',
        content:
          '- **Business Requirements (Yêu cầu nghiệp vụ):** Giải thích *tại sao* tổ chức đầu tư xây dựng hệ thống (mục tiêu kinh doanh, ROI). Thường nằm trong **Vision and Scope Document**.\n- **User Requirements (Yêu cầu người dùng):** Mô tả *tác vụ* người dùng cần thực hiện với hệ thống (Use Cases, User Stories).\n- **Functional Requirements (Yêu cầu chức năng):** Mô tả *hành vi cụ thể* mà phần mềm phải thực hiện dưới dạng đầu vào, xử lý, đầu ra (được đặc tả trong **SRS**).',
      },
      {
        id: 'swr-ch1-sec2',
        type: 'comparison',
        title: 'Phân biệt Functional vs Non-Functional Requirements',
        content:
          '| Tiêu chí | Functional Requirements (FR) | Non-Functional Requirements (NFR) |\n|---|---|---|\n| Câu hỏi trả lời | Hệ thống **làm gì**? (What) | Hệ thống làm **tốt đến mức nào**? (How well) |\n| Ví dụ | Cho phép đặt hàng, xuất hóa đơn PDF | Thời gian phản hồi < 2s, uptime 99.9%, mã hóa AES-256 |\n| Nhóm con thường gặp | Tính năng, quy tắc xử lý | Quality Attributes (Hiệu năng, Bảo mật), Constraints |',
      },
      {
        id: 'swr-ch1-sec3',
        type: 'keywords',
        title: 'Từ khóa nhận diện nhanh khi làm đề',
        content:
          '- `Vision and Scope` → Gắn liền với **Business Requirements** & ranh giới dự án.\n- `Use Case / User Story` → Gắn liền với **User Requirements**.\n- `Quality Attributes (Usability, Reliability, Security)` → Thuộc **Non-Functional Requirements**.\n- `Business Rules` → Quy định/chính sách của tổ chức (không phải là functional requirement trực tiếp, nhưng sinh ra chúng).',
      },
      {
        id: 'swr-ch1-sec4',
        type: 'exam_tip',
        title: 'Bẫy hay gặp trong Quiz & Final',
        content:
          'Đề thi hay gài câu hỏi liệt kê **Business Rules** (ví dụ: chính sách giảm giá 10% cho VIP) hoặc **Design Constraints** (ví dụ: phải chạy trên PostgreSQL) và hỏi có phải Functional Requirement không — câu trả lời là **KHÔNG**.',
      },
    ],
  },
  {
    id: 'swr-ch2',
    order: 2,
    title: 'Chương 2: Khai thác Yêu cầu & Phân tích Stakeholder (Starter)',
    summary:
      'Quy trình tìm hiểu Stakeholder, các kỹ thuật khai thác yêu cầu (Elicitation Techniques) và cách chọn kỹ thuật phù hợp theo bối cảnh.',
    sections: [
      {
        id: 'swr-ch2-sec1',
        type: 'concept',
        title: 'Kỹ thuật Khai thác Yêu cầu (Elicitation Techniques)',
        content:
          '- **Interviews (Phỏng vấn):** Hiệu quả để lấy góc nhìn sâu từ stakeholder chủ chốt hoặc chuyên gia nghiệp vụ.\n- **Workshops (Hội thảo JAD):** Nhanh chóng thống nhất yêu cầu và giải quyết xung đột giữa nhiều nhóm stakeholder.\n- **Observation / Job Shadowing (Quan sát thực tế):** Tốt nhất để phát hiện các bước làm việc ngầm định (tacit knowledge) mà người dùng quên kể.\n- **Document Analysis:** Khai thác tài liệu, biểu mẫu, hệ thống cũ có sẵn.\n- **Prototyping:** Dùng bản mẫu giao diện để xác nhận nhanh khi yêu cầu còn mơ hồ.',
      },
      {
        id: 'swr-ch2-sec2',
        type: 'comparison',
        title: 'Chọn kỹ thuật phù hợp theo tình huống',
        content:
          '| Tình huống trong đề | Kỹ thuật ưu tiên |\n|---|---|\n| Thu thập ý kiến từ hàng trăm người dùng ở xa | **Questionnaire / Survey** |\n| Giải quyết bất đồng giữa 2 phòng ban | **Facilitated Workshop** |\n| Người dùng khó diễn đạt thao tác lặp hàng ngày | **Observation (Quan sát)** |\n| Khách hàng chưa hình dung được giao diện | **Prototyping** |',
      },
      {
        id: 'swr-ch2-sec3',
        type: 'exam_tip',
        title: 'Mẹo loại trừ nhanh',
        content:
          'Một trong những nguyên nhân lớn nhất gây thiếu sót yêu cầu là **bỏ sót Stakeholder** (đặc biệt là người vận hành, bảo trì, pháp chế, hoặc người dùng gián tiếp), chứ không phải chỉ phỏng vấn end-user.',
      },
    ],
  },
];
```

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\questions.ts`:

```ts
import type { Question } from '../../../types/study';

export const swrQuestions: Question[] = [
  {
    id: 'swr-q-001',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Tài liệu nào thường dùng để ghi nhận Business Requirements và ranh giới tổng thể của dự án phần mềm?',
    options: [
      { id: 'a', text: 'Vision and Scope Document' },
      { id: 'b', text: 'Unit Test Specification' },
      { id: 'c', text: 'Database Schema Design' },
      { id: 'd', text: 'Deployment Checklist' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Theo Chương 1, Business Requirements (mục tiêu tổ chức, lý do đầu tư) và ranh giới dự án được tổng hợp trong Vision and Scope Document.',
  },
  {
    id: 'swr-q-002',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Phát biểu nào sau đây mô tả đúng nhất về Functional Requirement (Yêu cầu chức năng)?',
    options: [
      { id: 'a', text: 'Hệ thống phải đạt thời gian phản hồi dưới 1.5 giây với 1.000 người dùng đồng thời.' },
      { id: 'b', text: 'Hệ thống cho phép giảng viên xuất bảng điểm lớp học ra định dạng CSV.' },
      { id: 'c', text: 'Ứng dụng bắt buộc phải triển khai trên máy chủ Linux.' },
      { id: 'd', text: 'Tất cả mật khẩu phải được băm bằng thuật toán Argon2.' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Xuất bảng điểm CSV mô tả hành vi/tính năng cụ thể hệ thống phải làm (Functional). Các lựa chọn còn lại thuộc Hiệu năng, Ràng buộc thiết kế và Bảo mật (Non-Functional).',
  },
  {
    id: 'swr-q-003',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 mục thuộc nhóm Non-Functional Requirements (Quality Attributes & Constraints):',
    options: [
      { id: 'a', text: 'Hệ thống đạt độ sẵn sàng (Availability) tối thiểu 99.9% mỗi năm.' },
      { id: 'b', text: 'Người dùng có thể lọc danh sách đơn hàng theo ngày tạo.' },
      { id: 'c', text: 'Giao diện đáp ứng chuẩn truy cập WCAG 2.1 AA cho người khiếm thị.' },
      { id: 'd', text: 'Hệ thống gửi email xác nhận sau khi thanh toán thành công.' },
    ],
    correctOptionIds: ['a', 'c'],
    explanation:
      'Availability (độ sẵn sàng) và Accessibility/Usability (khả năng tiếp cận) là các thuộc tính chất lượng thuộc Non-Functional Requirements.',
  },
  {
    id: 'swr-q-004',
    subjectId: 'swr',
    chapterId: 'swr-ch1',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Một công ty quy định: "Khách hàng hạng Vàng được miễn phí vận chuyển cho đơn hàng từ 500.000đ trở lên." Trong phân loại yêu cầu, quy định này là gì?',
    options: [
      { id: 'a', text: 'Business Rule (Quy tắc nghiệp vụ)' },
      { id: 'b', text: 'Design Constraint (Ràng buộc thiết kế)' },
      { id: 'c', text: 'Quality Attribute (Thuộc tính chất lượng)' },
      { id: 'd', text: 'System Interface Requirement' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Chính sách giảm giá hoặc miễn phí vận chuyển là Business Rule — quy định kinh doanh của tổ chức làm cơ sở sinh ra các yêu cầu chức năng tương ứng.',
  },
  {
    id: 'swr-q-005',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'quiz',
    difficulty: 'scenario',
    type: 'single',
    prompt:
      'Nhân viên kho thường thực hiện nhiều thao tác quen tay mà họ không nhớ để kể lại khi phỏng vấn. Kỹ thuật khai thác nào hiệu quả nhất để phát hiện các bước ẩn này?',
    options: [
      { id: 'a', text: 'Gửi bảng khảo sát trực tuyến (Questionnaire)' },
      { id: 'b', text: 'Quan sát trực tiếp tại nơi làm việc (Observation / Job Shadowing)' },
      { id: 'c', text: 'Đọc lại hợp đồng mua phần mềm cũ' },
      { id: 'd', text: 'Tổ chức họp trực tuyến với ban giám đốc' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Theo Chương 2, Observation (quan sát trực tiếp) giúp BA nhìn thấy quy trình thực tế và tri thức ngầm định (tacit knowledge) mà người dùng bỏ qua khi phỏng vấn.',
  },
  {
    id: 'swr-q-006',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'both',
    difficulty: 'understand',
    type: 'single',
    prompt:
      'Khi có xung đột yêu cầu giữa bộ phận Kế toán và bộ phận Bán hàng, kỹ thuật nào giúp hai bên thảo luận và thống nhất nhanh nhất?',
    options: [
      { id: 'a', text: 'Facilitated Requirements Workshop' },
      { id: 'b', text: 'Questionnaire ẩn danh' },
      { id: 'c', text: 'Phỏng vấn riêng từng lập trình viên' },
      { id: 'd', text: 'Viết mã nguồn thử nghiệm rồi bàn sau' },
    ],
    correctOptionIds: ['a'],
    explanation:
      'Workshop có người điều phối (Facilitated Workshop) quy tụ các bên liên quan cùng giải quyết mâu thuẫn và chốt ưu tiên ngay trong phiên làm việc.',
  },
  {
    id: 'swr-q-007',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'understand',
    type: 'multiple',
    prompt:
      'Chọn 2 lợi ích chính của việc sử dụng Prototype trong quá trình khai thác yêu cầu (Requirements Elicitation):',
    options: [
      { id: 'a', text: 'Giúp khách hàng hình dung trực quan và phản hồi sớm khi yêu cầu còn mơ hồ.' },
      { id: 'b', text: 'Thay thế hoàn toàn việc viết tài liệu SRS và kiểm thử tích hợp.' },
      { id: 'c', text: 'Phát hiện sớm các hiểu lầm về luồng thao tác trước khi lập trình chính thức.' },
      { id: 'd', text: 'Đảm bảo không bao giờ phát sinh thay đổi yêu cầu ở các giai đoạn sau.' },
    ],
    correctOptionIds: ['a', 'c'],
    explanation:
      'Prototyping làm rõ yêu cầu mơ hồ và phát hiện hiểu lầm sớm; nó không thay thế hoàn toàn đặc tả hay loại bỏ 100% thay đổi sau này.',
  },
  {
    id: 'swr-q-008',
    subjectId: 'swr',
    chapterId: 'swr-ch2',
    source: 'slide-generated',
    examTarget: 'final',
    difficulty: 'remember',
    type: 'single',
    prompt:
      'Kỹ thuật nào phù hợp nhất để thu thập ý kiến thống kê từ 500 người dùng phân tán ở nhiều chi nhánh khác nhau với chi phí thấp?',
    options: [
      { id: 'a', text: 'Phỏng vấn trực tiếp 1-1 toàn bộ 500 người' },
      { id: 'b', text: 'Khảo sát bằng bảng câu hỏi (Questionnaire / Survey)' },
      { id: 'c', text: 'Job Shadowing từng người một' },
      { id: 'd', text: 'Hội thảo tập trung 500 người cùng lúc' },
    ],
    correctOptionIds: ['b'],
    explanation:
      'Questionnaire / Survey là kỹ thuật tối ưu khi cần thu thập dữ liệu có cấu trúc từ số lượng lớn stakeholder ở xa nhau.',
  },
];
```

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\exams.ts`:

```ts
import type { ExamPack } from '../../../types/study';

export const swrExamPacks: ExamPack[] = [
  {
    id: 'swr-quiz-1',
    subjectId: 'swr',
    category: 'quiz',
    title: 'Quiz 1 (Starter): Chương 1 - Chương 2',
    description:
      'Bài Quiz mẫu kiểm tra khái niệm phân loại yêu cầu và kỹ thuật khai thác (Elicitation).',
    durationMinutes: 15,
    questionCount: 6,
    chapterIds: ['swr-ch1', 'swr-ch2'],
    passScorePercent: 60,
  },
  {
    id: 'swr-final-1',
    subjectId: 'swr',
    category: 'final',
    title: 'Final Exam Mock #1 (Starter)',
    description:
      'Đề thi thử Final mẫu tổng hợp câu hỏi trọng tâm từ toàn bộ các chương hiện có.',
    durationMinutes: 60,
    questionCount: 50,
    chapterIds: ['swr-ch1', 'swr-ch2'],
    passScorePercent: 50,
  },
];
```

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\swr\index.ts`:

```ts
import type { Subject } from '../../../types/study';
import { swrMeta } from './subject';
import { swrChapters } from './chapters';
import { swrQuestions } from './questions';
import { swrExamPacks } from './exams';

export const swrSubject: Subject = {
  ...swrMeta,
  chapters: swrChapters,
  questions: swrQuestions,
  examPacks: swrExamPacks,
};
```

Write `E:\SELF-STUDY\study-quiz-hub\src\data\subjects\index.ts`:

```ts
import type { Subject } from '../../types/study';
import { swrSubject } from './swr';

export const BUILT_IN_SUBJECTS: Subject[] = [swrSubject];
```

Write `E:\SELF-STUDY\study-quiz-hub\src\services\storage\index.ts`:

```ts
import { BUILT_IN_SUBJECTS } from '../../data/subjects';
import { createStorageService } from './storageService';

export const storageService = createStorageService(BUILT_IN_SUBJECTS);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/data/subjects/subjects.test.ts`
Expected: PASS (1 test passing).

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/data/subjects/ src/services/storage/index.ts
git commit -m "feat: add built-in subject registry and SWR starter study/quiz dataset"
```

---

### Task 6: App Shell, Study Content Renderer & Dashboard View

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\components\Layout.tsx`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\components\StudyContentRenderer.tsx`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\dashboard\DashboardView.tsx`
- Modify: `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\features\dashboard\DashboardView.test.tsx`

**Interfaces:**
- Consumes: `storageService` from `src/services/storage/index.ts`, `Subject` from `src/types/study.ts`.
- Produces:
  - `Layout` component (top navbar linking `/` Dashboard and `/import` Import & Backup)
  - `StudyContentRenderer({ content: string })` (renders markdown-style paragraphs, bullet lists `- `, inline `**bold**` and `` `code` ``, and `| pipe |` tables cleanly)
  - `DashboardView` (lists subjects with chapter/question/Quiz/Final/mistake stats, search box, `+ Thêm Môn Học` modal)
  - `App.tsx` with `BrowserRouter` routes (`/`, `/subjects/:subjectId`, `/subjects/:subjectId/study/:chapterId`, `/subjects/:subjectId/exam`, `/import`)

- [ ] **Step 1: Write failing test for `DashboardView`**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\dashboard\DashboardView.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { DashboardView } from './DashboardView';
import { STORAGE_KEY } from '../../services/storage/storageService';

describe('DashboardView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('renders built-in SWR subject card and allows creating a new subject', () => {
    render(
      <MemoryRouter>
        <DashboardView />
      </MemoryRouter>
    );

    expect(screen.getByText('SWR302')).toBeInTheDocument();
    expect(screen.getByText('Software Requirements')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /thêm môn học/i }));

    fireEvent.change(screen.getByLabelText(/mã môn/i), {
      target: { value: 'SWP391' },
    });
    fireEvent.change(screen.getByLabelText(/tên môn học/i), {
      target: { value: 'Software Development Project' },
    });
    fireEvent.click(screen.getByRole('button', { name: /lưu môn học/i }));

    expect(screen.getByText('SWP391')).toBeInTheDocument();
    expect(screen.getByText('Software Development Project')).toBeInTheDocument();
    expect(window.localStorage.getItem(STORAGE_KEY)).toContain('SWP391');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/dashboard/DashboardView.test.tsx`
Expected: FAIL with missing `./DashboardView`.

- [ ] **Step 3: Implement `Layout.tsx`, `StudyContentRenderer.tsx`, `DashboardView.tsx`, and temporary route wiring in `App.tsx`**

Write `E:\SELF-STUDY\study-quiz-hub\src\components\Layout.tsx`:

```tsx
import type { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpenCheck, Upload } from 'lucide-react';

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isImport = location.pathname.startsWith('/import');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-2.5 font-semibold text-slate-900 hover:text-indigo-600 transition-colors"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <BookOpenCheck className="h-4 w-4" />
            </span>
            <span>Study &amp; Quiz Hub</span>
          </Link>

          <nav className="flex items-center gap-2">
            <Link
              to="/"
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                !isImport
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              Môn học
            </Link>
            <Link
              to="/import"
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                isImport
                  ? 'bg-indigo-50 text-indigo-700'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Upload className="h-4 w-4" />
              Import &amp; Backup
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 py-6">
        {children}
      </main>
    </div>
  );
}
```

Write `E:\SELF-STUDY\study-quiz-hub\src\components\StudyContentRenderer.tsx`:

```tsx
import { Fragment } from 'react';

function renderInline(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, idx) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={idx} className="font-semibold text-slate-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return (
        <em key={idx} className="italic">
          {part.slice(1, -1)}
        </em>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code
          key={idx}
          className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-mono text-indigo-700"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={idx}>{part}</Fragment>;
  });
}

function parseTable(lines: string[]) {
  const rows = lines
    .map((line) =>
      line
        .trim()
        .replace(/^\|/, '')
        .replace(/\|$/, '')
        .split('|')
        .map((c) => c.trim())
    )
    .filter(
      (cells) => !cells.every((cell) => /^:?-{2,}:?$/.test(cell))
    );
  const [header, ...body] = rows;
  return { header: header ?? [], body };
}

export function StudyContentRenderer({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/);

  return (
    <div className="space-y-3 text-sm leading-relaxed text-slate-700">
      {blocks.map((block, bIdx) => {
        const lines = block
          .split('\n')
          .map((l) => l.trim())
          .filter(Boolean);

        if (lines.length >= 2 && lines.every((l) => l.startsWith('|'))) {
          const { header, body } = parseTable(lines);
          return (
            <div
              key={bIdx}
              className="overflow-x-auto rounded-lg border border-slate-200"
            >
              <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                <thead className="bg-slate-100 text-slate-800">
                  <tr>
                    {header.map((cell, cIdx) => (
                      <th key={cIdx} className="px-3 py-2 font-semibold">
                        {renderInline(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 bg-white">
                  {body.map((row, rIdx) => (
                    <tr key={rIdx}>
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-3 py-2 align-top">
                          {renderInline(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }

        if (lines.every((l) => l.startsWith('- '))) {
          return (
            <ul key={bIdx} className="list-disc pl-5 space-y-1.5">
              {lines.map((line, lIdx) => (
                <li key={lIdx}>{renderInline(line.slice(2))}</li>
              ))}
            </ul>
          );
        }

        return (
          <div key={bIdx} className="space-y-1.5">
            {lines.map((line, lIdx) =>
              line.startsWith('- ') ? (
                <div key={lIdx} className="flex gap-2 pl-2">
                  <span className="text-indigo-500">•</span>
                  <span>{renderInline(line.slice(2))}</span>
                </div>
              ) : (
                <p key={lIdx}>{renderInline(line)}</p>
              )
            )}
          </div>
        );
      })}
    </div>
  );
}
```

Write `E:\SELF-STUDY\study-quiz-hub\src\features\dashboard\DashboardView.tsx`:

```tsx
import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  BookOpen,
  FileQuestion,
  GraduationCap,
  Plus,
  Search,
  X,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import type { Subject } from '../../types/study';

export function DashboardView() {
  const [subjects, setSubjects] = useState<Subject[]>(() =>
    storageService.getSubjects()
  );
  const [query, setQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const filtered = subjects.filter((s) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.code.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
    );
  });

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    storageService.createSubject({ code, name, description });
    setSubjects(storageService.getSubjects());
    setCode('');
    setName('');
    setDescription('');
    setShowCreateModal(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Không gian Học &amp; Luyện Thi
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Học lý thuyết trọng tâm từ slide, làm bài Quiz định kỳ và thi thử Final Exam theo từng môn học.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Thêm Môn Học
        </button>
      </div>

      <div className="relative">
        <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm môn học theo mã môn hoặc tên (VD: SWR302)..."
          className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
          Không tìm thấy môn học phù hợp với "{query}".
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((subject) => {
            const progress = storageService.getProgress(subject.id);
            const wrongCount = Object.values(
              progress.wrongQuestionStats
            ).filter((w) => !w.mastered).length;
            const quizCount = subject.examPacks.filter(
              (p) => p.category === 'quiz'
            ).length;
            const finalCount = subject.examPacks.filter(
              (p) => p.category === 'final'
            ).length;

            return (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                      {subject.code}
                    </span>
                    {wrongCount > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {wrongCount} câu cần ôn lại
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {subject.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                    {subject.description || 'Chưa có mô tả cho môn học này.'}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
                    <span>
                      {progress.completedChapterIds.length}/{subject.chapters.length} chương
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileQuestion className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{subject.questions.length} câu hỏi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5 text-violet-500" />
                    <span>
                      {quizCount} Quiz • {finalCount} Final
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Thêm Môn Học Mới
              </h2>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="subject-code"
                  className="block text-sm font-medium text-slate-700"
                >
                  Mã môn
                </label>
                <input
                  id="subject-code"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="VD: SWP391, PRN212..."
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject-name"
                  className="block text-sm font-medium text-slate-700"
                >
                  Tên môn học
                </label>
                <input
                  id="subject-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="VD: Software Development Project"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject-desc"
                  className="block text-sm font-medium text-slate-700"
                >
                  Mô tả ngắn
                </label>
                <textarea
                  id="subject-desc"
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mục tiêu ôn thi hoặc ghi chú cho môn..."
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  Lưu môn học
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
```

Update `E:\SELF-STUDY\study-quiz-hub\src\App.tsx` with router structure (pointing subject/exam/import routes to placeholders until Tasks 7–9 replace them):

```tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardView } from './features/dashboard/DashboardView';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 4: Run tests to verify Task 6 passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/dashboard/DashboardView.test.tsx && npm run build`
Expected: PASS and build succeeds.

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/components/Layout.tsx src/components/StudyContentRenderer.tsx src/features/dashboard/ src/App.tsx
git commit -m "feat: add app layout, markdown study renderer, and multi-subject dashboard"
```

---

### Task 7: Subject Hub & Study Chapter Views (Học Lý Thuyết, Thi Quiz, Thi Final, Kho Câu Sai)

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\exam\types.ts`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\study\StudyChapterView.tsx`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\subject-detail\SubjectHubView.tsx`
- Modify: `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\features\subject-detail\SubjectHubView.test.tsx`

**Interfaces:**
- Consumes: `storageService`, `createDynamicExamPack`, `StudyContentRenderer`.
- Produces: `ExamLaunchState` in `src/features/exam/types.ts`, `StudyChapterView`, `SubjectHubView`.

- [ ] **Step 1: Create shared exam launch type and write failing test for `SubjectHubView` & `StudyChapterView`**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\exam\types.ts`:

```ts
import type { ExamMode, ExamPack } from '../../types/study';

export interface ExamLaunchState {
  pack: ExamPack;
  mode: ExamMode;
  shuffleQuestions: boolean;
  shuffleOptions: boolean;
}
```

Write `E:\SELF-STUDY\study-quiz-hub\src\features\subject-detail\SubjectHubView.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SubjectHubView } from './SubjectHubView';
import { StudyChapterView } from '../study/StudyChapterView';
import { storageService } from '../../services/storage';

describe('SubjectHubView and StudyChapterView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('switches between Study Guide, Quiz, Final, and Mistake tabs and reads a chapter', () => {
    render(
      <MemoryRouter initialEntries={['/subjects/swr']}>
        <Routes>
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
          <Route
            path="/subjects/:subjectId/study/:chapterId"
            element={<StudyChapterView />}
          />
        </Routes>
      </MemoryRouter>
    );

    expect(
      screen.getByRole('heading', { name: 'Software Requirements' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Chương 1:/i })
    ).toBeInTheDocument();

    // Switch to Quiz tab
    fireEvent.click(screen.getByRole('button', { name: /thi quiz/i }));
    expect(screen.getByText(/Quiz 1 \(Starter\)/i)).toBeInTheDocument();

    // Switch to Final tab
    fireEvent.click(screen.getByRole('button', { name: /thi final/i }));
    expect(screen.getByText(/Final Exam Mock #1/i)).toBeInTheDocument();

    // Switch back to Study tab and open Chapter 1
    fireEvent.click(screen.getByRole('button', { name: /học lý thuyết/i }));
    fireEvent.click(screen.getAllByRole('link', { name: /đọc bài học/i })[0]);

    expect(screen.getByText(/Ba cấp độ yêu cầu cốt lõi/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /đánh dấu đã học/i }));
    expect(storageService.getProgress('swr').completedChapterIds).toContain(
      'swr-ch1'
    );
  });

  it('shows empty state cleanly on Mistake Review tab when no wrong/bookmarked questions exist', () => {
    render(
      <MemoryRouter initialEntries={['/subjects/swr']}>
        <Routes>
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
        </Routes>
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', { name: /kho câu sai/i }));
    expect(
      screen.getByText(/chưa có câu hỏi làm sai hoặc đánh dấu sao/i)
    ).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/subject-detail/SubjectHubView.test.tsx`
Expected: FAIL with missing modules `./SubjectHubView` and `../study/StudyChapterView`.

- [ ] **Step 3: Implement `StudyChapterView.tsx` and `SubjectHubView.tsx`**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\study\StudyChapterView.tsx`:

```tsx
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Lightbulb,
  Play,
  Sparkles,
  Table2,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import { StudyContentRenderer } from '../../components/StudyContentRenderer';
import type { StudySectionType } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';

const SECTION_META: Record<
  StudySectionType,
  { label: string; badgeClass: string; cardClass: string; Icon: typeof Sparkles }
> = {
  concept: {
    label: 'Khái niệm cốt lõi',
    badgeClass: 'bg-indigo-100 text-indigo-700',
    cardClass: 'border-slate-200 bg-white',
    Icon: Sparkles,
  },
  comparison: {
    label: 'Bảng phân biệt',
    badgeClass: 'bg-sky-100 text-sky-700',
    cardClass: 'border-sky-200 bg-sky-50/30',
    Icon: Table2,
  },
  keywords: {
    label: 'Từ khóa nhận diện',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    cardClass: 'border-emerald-200 bg-emerald-50/30',
    Icon: Bookmark,
  },
  exam_tip: {
    label: 'Bẫy & Mẹo đi thi',
    badgeClass: 'bg-amber-100 text-amber-800',
    cardClass: 'border-amber-200 bg-amber-50/40',
    Icon: Lightbulb,
  },
};

export function StudyChapterView() {
  const { subjectId = '', chapterId = '' } = useParams();
  const navigate = useNavigate();
  const subject = storageService.getSubjectById(subjectId);
  const [progress, setProgress] = useState(() =>
    storageService.getProgress(subjectId)
  );

  if (!subject) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center border border-slate-200">
        <p className="text-slate-600">Không tìm thấy môn học.</p>
        <Link to="/" className="mt-3 inline-block text-sm font-medium text-indigo-600">
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  const chapterIndex = subject.chapters.findIndex((c) => c.id === chapterId);
  const chapter = subject.chapters[chapterIndex];

  if (!chapter) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center border border-slate-200">
        <p className="text-slate-600">Không tìm thấy chương học này.</p>
        <Link
          to={`/subjects/${subject.id}`}
          className="mt-3 inline-block text-sm font-medium text-indigo-600"
        >
          Quay lại môn {subject.code}
        </Link>
      </div>
    );
  }

  const isCompleted = progress.completedChapterIds.includes(chapter.id);
  const chapterQuestions = subject.questions.filter(
    (q) => q.chapterId === chapter.id
  );
  const prevChapter = chapterIndex > 0 ? subject.chapters[chapterIndex - 1] : undefined;
  const nextChapter =
    chapterIndex < subject.chapters.length - 1
      ? subject.chapters[chapterIndex + 1]
      : undefined;

  const handleToggleComplete = () => {
    setProgress(storageService.toggleChapterComplete(subject.id, chapter.id));
  };

  const handlePracticeChapter = () => {
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'chapter',
      title: `Ôn tập: ${chapter.title}`,
      chapterIds: [chapter.id],
      questionCount: Math.max(chapterQuestions.length, 1),
      durationMinutes: 15,
      passScorePercent: 50,
    });
    const state: ExamLaunchState = {
      pack,
      mode: 'practice',
      shuffleQuestions: false,
      shuffleOptions: true,
    };
    navigate(`/subjects/${subject.id}/exam`, { state });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại {subject.code}
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            {isCompleted ? 'Đã học xong chương này' : 'Đánh dấu đã học'}
          </button>

          {chapterQuestions.length > 0 && (
            <button
              type="button"
              onClick={handlePracticeChapter}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Play className="h-4 w-4" />
              Luyện {chapterQuestions.length} câu chương này
            </button>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {subject.code} • Chương {chapter.order}
        </span>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">
          {chapter.title}
        </h1>
        {chapter.summary && (
          <p className="mt-2 text-sm text-slate-600">{chapter.summary}</p>
        )}
      </div>

      <div className="space-y-4">
        {chapter.sections.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            Chưa có nội dung lý thuyết cho chương này. Hãy gửi slide vào thư mục{' '}
            <code className="font-mono">slides/{subject.id}/</code> để biên soạn chi tiết.
          </div>
        ) : (
          chapter.sections.map((section) => {
            const meta = SECTION_META[section.type];
            const Icon = meta.Icon;
            return (
              <section
                key={section.id}
                className={`rounded-2xl border p-5 shadow-sm ${meta.cardClass}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${meta.badgeClass}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <StudyContentRenderer content={section.content} />
              </section>
            );
          })
        )}
      </div>

      <div className="flex items-center justify-between pt-2">
        {prevChapter ? (
          <Link
            to={`/subjects/${subject.id}/study/${prevChapter.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Chương trước
          </Link>
        ) : (
          <span />
        )}
        {nextChapter && (
          <Link
            to={`/subjects/${subject.id}/study/${nextChapter.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Chương tiếp theo
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
```

Write `E:\SELF-STUDY\study-quiz-hub\src\features\subject-detail\SubjectHubView.tsx`:

```tsx
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  Bookmark,
  BookOpen,
  CheckCircle2,
  Clock,
  FileQuestion,
  GraduationCap,
  History,
  Play,
  RotateCcw,
  Shuffle,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import type { ExamMode, ExamPack } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';

type SubjectTab = 'study' | 'quiz' | 'final' | 'mistakes';

export function SubjectHubView() {
  const { subjectId = '' } = useParams();
  const navigate = useNavigate();
  const subject = storageService.getSubjectById(subjectId);
  const progress = storageService.getProgress(subjectId);

  const [activeTab, setActiveTab] = useState<SubjectTab>('study');
  const [selectedPack, setSelectedPack] = useState<ExamPack | null>(null);
  const [launchMode, setLaunchMode] = useState<ExamMode>('exam');
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);

  const [customQuizChapters, setCustomQuizChapters] = useState<string[]>([]);
  const [customQuizCount, setCustomQuizCount] = useState(20);
  const [finalCount, setFinalCount] = useState(50);

  if (!subject) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">Không tìm thấy môn học.</p>
        <Link to="/" className="mt-3 inline-block text-sm font-medium text-indigo-600">
          Quay về danh sách môn học
        </Link>
      </div>
    );
  }

  const quizPacks = subject.examPacks.filter((p) => p.category === 'quiz');
  const finalPacks = subject.examPacks.filter((p) => p.category === 'final');

  const unmasteredWrongIds = Object.entries(progress.wrongQuestionStats)
    .filter(([, stat]) => !stat.mastered)
    .map(([qId]) => qId);
  const reviewQuestionIds = Array.from(
    new Set([...unmasteredWrongIds, ...progress.bookmarkedQuestionIds])
  );
  const reviewQuestions = subject.questions.filter((q) =>
    reviewQuestionIds.includes(q.id)
  );

  const openLaunchConfig = (pack: ExamPack, defaultMode: ExamMode) => {
    setSelectedPack(pack);
    setLaunchMode(defaultMode);
  };

  const confirmLaunch = () => {
    if (!selectedPack) return;
    const state: ExamLaunchState = {
      pack: selectedPack,
      mode: launchMode,
      shuffleQuestions,
      shuffleOptions,
    };
    setSelectedPack(null);
    navigate(`/subjects/${subject.id}/exam`, { state });
  };

  const handleCreateCustomQuiz = () => {
    const targetChapters =
      customQuizChapters.length > 0
        ? customQuizChapters
        : subject.chapters.map((c) => c.id);
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'quiz',
      title: `Quiz Tùy Chọn (${targetChapters.length} chương)`,
      chapterIds: targetChapters,
      questionCount: customQuizCount,
      durationMinutes: Math.max(10, Math.round(customQuizCount * 1.2)),
      passScorePercent: 60,
    });
    openLaunchConfig(pack, 'practice');
  };

  const handleCreateRandomFinal = () => {
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'final',
      title: `Final Exam Ngẫu Nhiên (${finalCount} câu)`,
      chapterIds: subject.chapters.map((c) => c.id),
      questionCount: finalCount,
      durationMinutes: 60,
      passScorePercent: 50,
    });
    openLaunchConfig(pack, 'exam');
  };

  const handleReviewMistakes = () => {
    if (reviewQuestions.length === 0) return;
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'mistake',
      title: 'Ôn tập Câu Sai & Đánh Dấu',
      chapterIds: subject.chapters.map((c) => c.id),
      questionCount: reviewQuestions.length,
      durationMinutes: Math.max(10, reviewQuestions.length * 2),
      fixedQuestionIds: reviewQuestions.map((q) => q.id),
      passScorePercent: 80,
    });
    openLaunchConfig(pack, 'practice');
  };

  const resumeActiveSession = () => {
    navigate(`/subjects/${subject.id}/exam`, { state: { resume: true } });
  };

  const tabClass = (tab: SubjectTab) =>
    `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
      activeTab === tab
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
    }`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Danh sách môn học
        </Link>

        <Link
          to={`/import?subject=${subject.id}`}
          className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          + Nạp thêm câu hỏi cho {subject.code}
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
            {subject.code}
          </span>
          <span className="text-xs text-slate-500">
            {subject.chapters.length} chương • {subject.questions.length} câu hỏi
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">{subject.name}</h1>
        <p className="mt-1 text-sm text-slate-600">{subject.description}</p>

        {progress.activeSession && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3">
            <div className="text-sm text-indigo-900">
              Bạn đang làm dở: <strong>{progress.activeSession.examTitle}</strong> (còn{' '}
              {Math.ceil(progress.activeSession.remainingSeconds / 60)} phút)
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => storageService.clearActiveSession(subject.id)}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100"
              >
                Bỏ qua
              </button>
              <button
                type="button"
                onClick={resumeActiveSession}
                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Làm tiếp ngay
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('study')}
          className={tabClass('study')}
        >
          <BookOpen className="h-4 w-4" />
          Học Lý Thuyết
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className={tabClass('quiz')}
        >
          <FileQuestion className="h-4 w-4" />
          Thi Quiz ({quizPacks.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('final')}
          className={tabClass('final')}
        >
          <GraduationCap className="h-4 w-4" />
          Thi Final ({finalPacks.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('mistakes')}
          className={tabClass('mistakes')}
        >
          <RotateCcw className="h-4 w-4" />
          Kho Câu Sai &amp; Đánh Dấu ({reviewQuestions.length})
        </button>
      </div>

      {activeTab === 'study' && (
        <div className="space-y-3">
          {subject.chapters.map((chapter) => {
            const done = progress.completedChapterIds.includes(chapter.id);
            const qCount = subject.questions.filter(
              (q) => q.chapterId === chapter.id
            ).length;
            return (
              <div
                key={chapter.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-indigo-600">
                      Chương {chapter.order}
                    </span>
                    {done && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        <CheckCircle2 className="h-3 w-3" />
                        Đã học
                      </span>
                    )}
                    <span className="text-xs text-slate-500">• {qCount} câu hỏi</span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    {chapter.title}
                  </h2>
                  <p className="text-sm text-slate-600">{chapter.summary}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={`/subjects/${subject.id}/study/${chapter.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    <BookOpen className="h-4 w-4" />
                    Đọc bài học
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            {quizPacks.map((pack) => (
              <div
                key={pack.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pack.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{pack.description}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <FileQuestion className="h-3.5 w-3.5" />
                      Tối đa {pack.questionCount} câu
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {pack.durationMinutes} phút
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openLaunchConfig(pack, 'practice')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <Play className="h-4 w-4" />
                  Bắt đầu Quiz
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Tạo nhanh bài Quiz theo Chương
            </h3>
            <div className="flex flex-wrap gap-2">
              {subject.chapters.map((ch) => {
                const selected = customQuizChapters.includes(ch.id);
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() =>
                      setCustomQuizChapters((prev) =>
                        selected
                          ? prev.filter((id) => id !== ch.id)
                          : [...prev, ch.id]
                      )
                    }
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
                      selected
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Chương {ch.order}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <label className="text-sm text-slate-700 flex items-center gap-2">
                Số câu hỏi:
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={customQuizCount}
                  onChange={(e) => setCustomQuizCount(Number(e.target.value) || 10)}
                  className="w-20 rounded-lg border border-slate-300 px-2.5 py-1 text-sm"
                />
              </label>
              <button
                type="button"
                disabled={subject.questions.length === 0}
                onClick={handleCreateCustomQuiz}
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 disabled:opacity-50"
              >
                <Shuffle className="h-4 w-4" />
                Tạo bài Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'final' && (
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            {finalPacks.map((pack) => (
              <div
                key={pack.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="inline-block rounded-md bg-violet-50 px-2 py-0.5 text-xs font-semibold text-violet-700">
                    Final Exam
                  </span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {pack.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">{pack.description}</p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span>
                      {Math.min(pack.questionCount, subject.questions.length)}/{pack.questionCount} câu khả dụng
                    </span>
                    <span>• {pack.durationMinutes} phút</span>
                    <span>• Đạt {pack.passScorePercent}%</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openLaunchConfig(pack, 'exam')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
                >
                  <GraduationCap className="h-4 w-4" />
                  Vào thi Final
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Sinh Đề Final Ngẫu Nhiên Toàn Môn
              </h3>
              <p className="text-sm text-slate-600">
                Tự động bốc câu hỏi rải đều qua tất cả các chương (tối đa theo ngân hàng hiện có: {subject.questions.length} câu).
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={finalCount}
                onChange={(e) => setFinalCount(Number(e.target.value))}
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
              >
                <option value={30}>30 câu</option>
                <option value={50}>50 câu</option>
                <option value={60}>60 câu</option>
              </select>
              <button
                type="button"
                disabled={subject.questions.length === 0}
                onClick={handleCreateRandomFinal}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
              >
                <Shuffle className="h-4 w-4" />
                Tạo đề Final ngay
              </button>
            </div>
          </div>

          {progress.attempts.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <History className="h-4 w-4 text-slate-500" />
                Lịch sử làm bài gần đây
              </h3>
              <div className="divide-y divide-slate-100">
                {progress.attempts.slice(0, 5).map((att) => (
                  <div
                    key={att.id}
                    className="py-2.5 flex items-center justify-between text-sm"
                  >
                    <div>
                      <p className="font-medium text-slate-800">{att.examTitle}</p>
                      <p className="text-xs text-slate-500">
                        {att.mode === 'exam' ? 'Thi bấm giờ' : 'Ôn tập'} •{' '}
                        {new Date(att.completedAt).toLocaleString('vi-VN')}
                      </p>
                    </div>
                    <span
                      className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                        att.passed
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-rose-50 text-rose-700'
                      }`}
                    >
                      {att.correctCount}/{att.totalCount} ({att.scorePercent}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'mistakes' && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          {reviewQuestions.length === 0 ? (
            <div className="text-center py-6 text-sm text-slate-500">
              Hiện chưa có câu hỏi làm sai hoặc đánh dấu sao nào cho môn này.
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Danh sách câu cần ôn lại ({reviewQuestions.length} câu)
                  </h3>
                  <p className="text-sm text-slate-600">
                    Làm đúng lại câu đã sai sẽ tự động đánh dấu Đã thuộc (Mastered).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReviewMistakes}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
                >
                  <Play className="h-4 w-4" />
                  Làm lại toàn bộ ngay
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {reviewQuestions.map((q) => {
                  const wrongStat = progress.wrongQuestionStats[q.id];
                  const isBookmarked = progress.bookmarkedQuestionIds.includes(q.id);
                  return (
                    <div key={q.id} className="py-3 flex items-start justify-between gap-4">
                      <p className="text-sm text-slate-800">{q.prompt}</p>
                      <div className="flex items-center gap-2 shrink-0">
                        {wrongStat && !wrongStat.mastered && (
                          <span className="inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 text-xs text-rose-700">
                            <AlertTriangle className="h-3 w-3" />
                            Sai {wrongStat.wrongCount} lần
                          </span>
                        )}
                        {isBookmarked && (
                          <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 text-xs text-amber-700">
                            <Bookmark className="h-3 w-3" />
                            Đã lưu
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {selectedPack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              Cấu hình bài làm: {selectedPack.title}
            </h2>

            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">Chọn chế độ:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLaunchMode('practice')}
                  className={`rounded-xl border p-3 text-left text-sm ${
                    launchMode === 'practice'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold">Ôn tập (Practice)</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Hiện đáp án &amp; giải thích ngay sau mỗi câu
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setLaunchMode('exam')}
                  className={`rounded-xl border p-3 text-left text-sm ${
                    launchMode === 'exam'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold">Thi thử (Timed)</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Đếm ngược {selectedPack.durationMinutes} phút, nộp bài mới chấm
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-sm text-slate-700">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                />
                Đảo ngẫu nhiên thứ tự câu hỏi
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shuffleOptions}
                  onChange={(e) => setShuffleOptions(e.target.checked)}
                />
                Đảo thứ tự các đáp án A/B/C/D
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedPack(null)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={confirmLaunch}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
              >
                Bắt đầu làm bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
```

Update `E:\SELF-STUDY\study-quiz-hub\src\App.tsx` to include `/subjects/:subjectId` and `/subjects/:subjectId/study/:chapterId`:

```tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardView } from './features/dashboard/DashboardView';
import { SubjectHubView } from './features/subject-detail/SubjectHubView';
import { StudyChapterView } from './features/study/StudyChapterView';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
          <Route
            path="/subjects/:subjectId/study/:chapterId"
            element={<StudyChapterView />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 4: Run test and build to verify Task 7 passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/subject-detail/SubjectHubView.test.tsx && npm run build`
Expected: PASS (2 tests passing) and build succeeds.

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/features/exam/types.ts src/features/study/ src/features/subject-detail/ src/App.tsx
git commit -m "feat: add subject hub tabs and chapter study guide reader"
```

---

### Task 8: Exam Runner, Keyboard Shortcuts, Session Resume & Result View

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\exam\ExamResultView.tsx`
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\exam\ExamRunnerView.tsx`
- Modify: `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\features\exam\ExamRunnerView.test.tsx`

**Interfaces:**
- Consumes: `storageService`, `buildExamQuestions`, `gradeExam`, `isAnswerCorrect`, `ExamLaunchState`.
- Produces: `ExamRunnerView` (with practice check, timed countdown, auto-saved `ActiveExamSession`, resume support, keyboard shortcuts `1-6`, `ArrowLeft`/`ArrowRight`, `F`, `Enter`, bookmark toggle) and `ExamResultView` (summary, per-chapter breakdown, filterable question review, retry wrong questions).

- [ ] **Step 1: Write failing tests for `ExamRunnerView` covering Practice Mode, Timed Exam Mode, and Session Resume**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\exam\ExamRunnerView.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { ExamRunnerView } from './ExamRunnerView';
import { storageService } from '../../services/storage';
import type { ExamLaunchState } from './types';

function renderExamWithState(state: ExamLaunchState | { resume: true }) {
  return render(
    <MemoryRouter
      initialEntries={[{ pathname: '/subjects/swr/exam', state }]}
    >
      <Routes>
        <Route path="/subjects/:subjectId/exam" element={<ExamRunnerView />} />
        <Route
          path="/subjects/:subjectId"
          element={<div>Subject Hub Page</div>}
        />
      </Routes>
    </MemoryRouter>
  );
}

describe('ExamRunnerView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('reveals explanation immediately on check in Practice Mode and navigates with keyboard', () => {
    renderExamWithState({
      pack: {
        id: 'test-practice',
        subjectId: 'swr',
        category: 'quiz',
        title: 'Practice Pack',
        durationMinutes: 15,
        questionCount: 2,
        chapterIds: ['swr-ch1'],
        fixedQuestionIds: ['swr-q-001', 'swr-q-002'],
        passScorePercent: 50,
      },
      mode: 'practice',
      shuffleQuestions: false,
      shuffleOptions: false,
    });

    expect(screen.getByText(/Câu 1 \/ 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Vision and Scope Document/i)).toBeInTheDocument();

    // Keyboard '1' selects option A, 'Enter' checks answer in practice mode
    fireEvent.keyDown(window, { key: '1' });
    fireEvent.keyDown(window, { key: 'Enter' });

    expect(screen.getByText(/Giải thích:/i)).toBeInTheDocument();
    expect(screen.getByText(/Chính xác!/i)).toBeInTheDocument();

    // Navigate next with ArrowRight
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(screen.getByText(/Câu 2 \/ 2/i)).toBeInTheDocument();
  });

  it('submits Timed Exam, records attempt/wrong stats, and restores saved session on reload', () => {
    const launchState: ExamLaunchState = {
      pack: {
        id: 'test-timed',
        subjectId: 'swr',
        category: 'final',
        title: 'Timed Final',
        durationMinutes: 30,
        questionCount: 2,
        chapterIds: ['swr-ch1'],
        fixedQuestionIds: ['swr-q-001', 'swr-q-002'],
        passScorePercent: 50,
      },
      mode: 'exam',
      shuffleQuestions: false,
      shuffleOptions: false,
    };

    const { unmount } = renderExamWithState(launchState);

    // Select option B (wrong for swr-q-001) and flag question
    fireEvent.click(screen.getByText(/Unit Test Specification/i));
    fireEvent.click(screen.getByRole('button', { name: /cắm cờ/i }));

    // Saved in localStorage before unmount
    const saved = storageService.getProgress('swr').activeSession;
    expect(saved?.answers['swr-q-001']).toEqual(['b']);
    expect(saved?.flaggedQuestionIds).toContain('swr-q-001');

    // Simulate reload without location state -> restores saved activeSession!
    unmount();
    render(
      <MemoryRouter initialEntries={['/subjects/swr/exam']}>
        <Routes>
          <Route path="/subjects/:subjectId/exam" element={<ExamRunnerView />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/Timed Final/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /nộp bài/i }));

    expect(screen.getByText(/Kết quả làm bài/i)).toBeInTheDocument();
    expect(storageService.getProgress('swr').attempts).toHaveLength(1);
    expect(
      storageService.getProgress('swr').wrongQuestionStats['swr-q-001'].wrongCount
    ).toBe(1);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/exam/ExamRunnerView.test.tsx`
Expected: FAIL with missing `./ExamRunnerView`.

- [ ] **Step 3: Implement `ExamResultView.tsx`, `ExamRunnerView.tsx`, and wire route in `App.tsx`**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\exam\ExamResultView.tsx`:

```tsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  RotateCcw,
  XCircle,
} from 'lucide-react';
import type { ExamGradeSummary } from '../../services/exam/examEngine';
import type { Question } from '../../types/study';

interface ExamResultViewProps {
  subjectId: string;
  examTitle: string;
  summary: ExamGradeSummary;
  flaggedIds: string[];
  onRetryWrong: (wrongQuestions: Question[]) => void;
}

type ReviewFilter = 'all' | 'wrong' | 'flagged';

export function ExamResultView({
  subjectId,
  examTitle,
  summary,
  flaggedIds,
  onRetryWrong,
}: ExamResultViewProps) {
  const [filter, setFilter] = useState<ReviewFilter>('all');
  const flaggedSet = new Set(flaggedIds);

  const wrongQuestions = summary.results
    .filter((r) => !r.isCorrect)
    .map((r) => r.question);

  const visibleResults = summary.results.filter((r) => {
    if (filter === 'wrong') return !r.isCorrect;
    if (filter === 'flagged') return flaggedSet.has(r.question.id);
    return true;
  });

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Kết quả làm bài
        </p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{examTitle}</h1>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Điểm số</div>
            <div className="mt-1 text-3xl font-bold text-indigo-600">
              {summary.scorePercent}%
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Số câu đúng</div>
            <div className="mt-1 text-3xl font-bold text-slate-900">
              {summary.correctCount}/{summary.totalCount}
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <div className="text-xs text-slate-500">Trạng thái</div>
            <div
              className={`mt-1 inline-flex items-center gap-1.5 text-lg font-bold ${
                summary.passed ? 'text-emerald-600' : 'text-rose-600'
              }`}
            >
              {summary.passed ? (
                <>
                  <CheckCircle2 className="h-5 w-5" /> Đạt (Passed)
                </>
              ) : (
                <>
                  <XCircle className="h-5 w-5" /> Chưa đạt
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/subjects/${subjectId}`}
            className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Quay về môn học
          </Link>
          {wrongQuestions.length > 0 && (
            <button
              type="button"
              onClick={() => onRetryWrong(wrongQuestions)}
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
            >
              <RotateCcw className="h-4 w-4" />
              Làm lại {wrongQuestions.length} câu sai
            </button>
          )}
        </div>
      </div>

      {summary.chapterBreakdown.length > 0 && (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-3">
          <h2 className="text-base font-bold text-slate-900">
            Phân tích theo Chương
          </h2>
          <div className="space-y-2.5">
            {summary.chapterBreakdown.map((ch) => (
              <div key={ch.chapterId} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-slate-700">
                  <span>{ch.chapterTitle}</span>
                  <span>
                    {ch.correct}/{ch.total} ({ch.accuracyPercent}%)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full"
                    style={{ width: `${ch.accuracyPercent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg font-bold text-slate-900">
            Chi tiết từng câu hỏi
          </h2>
          <div className="flex gap-2">
            {(
              [
                ['all', `Tất cả (${summary.results.length})`],
                ['wrong', `Câu sai (${wrongQuestions.length})`],
                ['flagged', `Đã cắm cờ (${flaggedIds.length})`],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-lg px-3 py-1.5 text-xs font-medium border ${
                  filter === key
                    ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 bg-white text-slate-600'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {visibleResults.map((item, idx) => (
          <div
            key={item.question.id}
            className={`rounded-2xl border p-5 bg-white ${
              item.isCorrect ? 'border-emerald-200' : 'border-rose-200'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-slate-900 text-sm">
                Câu {idx + 1}: {item.question.prompt}
              </p>
              <span
                className={`shrink-0 rounded-md px-2 py-0.5 text-xs font-semibold ${
                  item.isCorrect
                    ? 'bg-emerald-50 text-emerald-700'
                    : 'bg-rose-50 text-rose-700'
                }`}
              >
                {item.isCorrect ? 'Đúng' : 'Sai'}
              </span>
            </div>

            <div className="mt-3 space-y-1.5 text-sm">
              {item.question.options.map((opt) => {
                const isRight = item.question.correctOptionIds.includes(opt.id);
                const isSelected = item.selectedOptionIds.includes(opt.id);
                let style = 'border-slate-200 bg-slate-50 text-slate-700';
                if (isRight) {
                  style = 'border-emerald-400 bg-emerald-50 text-emerald-900 font-medium';
                } else if (isSelected) {
                  style = 'border-rose-400 bg-rose-50 text-rose-900';
                }
                return (
                  <div
                    key={opt.id}
                    className={`rounded-lg border px-3 py-2 flex items-center justify-between ${style}`}
                  >
                    <span>{opt.text}</span>
                    <span className="text-xs">
                      {isRight ? 'Đáp án đúng' : isSelected ? 'Bạn chọn' : ''}
                    </span>
                  </div>
                );
              })}
            </div>

            {item.question.explanation && (
              <div className="mt-3 rounded-xl bg-indigo-50/70 p-3 text-xs text-slate-700">
                <strong className="text-indigo-900">Giải thích: </strong>
                {item.question.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
```

Write `E:\SELF-STUDY\study-quiz-hub\src\features\exam\ExamRunnerView.tsx`:

```tsx
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Flag,
  Send,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import {
  buildExamQuestions,
  createDynamicExamPack,
  gradeExam,
  isAnswerCorrect,
  type ExamGradeSummary,
} from '../../services/exam/examEngine';
import type { ActiveExamSession, Question } from '../../types/study';
import type { ExamLaunchState } from './types';
import { ExamResultView } from './ExamResultView';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

function formatTimer(seconds: number): string {
  const safe = Math.max(0, seconds);
  const mins = Math.floor(safe / 60);
  const secs = safe % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function hydrateQuestionsFromSession(
  subjectQuestions: readonly Question[],
  session: ActiveExamSession
): Question[] {
  const byId = new Map(subjectQuestions.map((q) => [q.id, q]));
  const result: Question[] = [];
  for (const snap of session.snapshots) {
    const base = byId.get(snap.questionId);
    if (!base) continue;
    const optById = new Map(base.options.map((o) => [o.id, o]));
    const orderedOpts = snap.optionOrder
      .map((id) => optById.get(id))
      .filter((o): o is Question['options'][number] => Boolean(o));
    result.push({
      ...base,
      options: orderedOpts.length === base.options.length ? orderedOpts : base.options,
    });
  }
  return result;
}

export function ExamRunnerView() {
  const { subjectId = '' } = useParams();
  const location = useLocation();
  const subject = storageService.getSubjectById(subjectId);

  const initialState = location.state as
    | ExamLaunchState
    | { resume?: boolean }
    | null;

  const [sessionState, setSessionState] = useState<{
    session: ActiveExamSession | null;
    questions: Question[];
  }>(() => {
    if (!subject) return { session: null, questions: [] };

    if (initialState && 'pack' in initialState) {
      const built = buildExamQuestions(subject, initialState.pack, {
        shuffleQuestions: initialState.shuffleQuestions,
        shuffleOptions: initialState.shuffleOptions,
      });
      const now = new Date().toISOString();
      const newSession: ActiveExamSession = {
        id: `sess-${Date.now()}`,
        subjectId: subject.id,
        examPackId: initialState.pack.id,
        examTitle: initialState.pack.title,
        category: initialState.pack.category,
        mode: initialState.mode,
        durationMinutes: initialState.pack.durationMinutes,
        passScorePercent: initialState.pack.passScorePercent,
        shuffleQuestions: initialState.shuffleQuestions,
        shuffleOptions: initialState.shuffleOptions,
        snapshots: built.map((q) => ({
          questionId: q.id,
          optionOrder: q.options.map((o) => o.id),
        })),
        answers: {},
        checkedQuestionIds: [],
        flaggedQuestionIds: [],
        currentIndex: 0,
        remainingSeconds: initialState.pack.durationMinutes * 60,
        startedAt: now,
        updatedAt: now,
      };
      if (built.length > 0) {
        storageService.saveActiveSession(subject.id, newSession);
      }
      return { session: newSession, questions: built };
    }

    const existing = storageService.getProgress(subject.id).activeSession;
    if (existing) {
      return {
        session: existing,
        questions: hydrateQuestionsFromSession(subject.questions, existing),
      };
    }

    return { session: null, questions: [] };
  });

  const [progress, setProgress] = useState(() =>
    storageService.getProgress(subjectId)
  );
  const [gradeSummary, setGradeSummary] = useState<ExamGradeSummary | null>(
    null
  );

  const { session, questions } = sessionState;
  const currentQuestion = session ? questions[session.currentIndex] : undefined;

  const updateSession = useCallback(
    (updater: (prev: ActiveExamSession) => ActiveExamSession) => {
      setSessionState((prev) => {
        if (!prev.session || !subject) return prev;
        const next: ActiveExamSession = {
          ...updater(prev.session),
          updatedAt: new Date().toISOString(),
        };
        storageService.saveActiveSession(subject.id, next);
        return { ...prev, session: next };
      });
    },
    [subject]
  );

  const handleSubmitExam = useCallback(() => {
    if (!subject || !session || questions.length === 0) return;
    const summary = gradeExam(
      subject,
      questions,
      session.answers,
      session.passScorePercent
    );
    const totalSeconds = session.durationMinutes * 60;
    const spent = Math.max(0, totalSeconds - session.remainingSeconds);

    storageService.recordExamAttempt(subject.id, {
      id: `attempt-${Date.now()}`,
      examPackId: session.examPackId,
      examTitle: session.examTitle,
      category: session.category,
      mode: session.mode,
      completedAt: new Date().toISOString(),
      scorePercent: summary.scorePercent,
      correctCount: summary.correctCount,
      totalCount: summary.totalCount,
      passed: summary.passed,
      durationSpentSeconds: spent,
      answers: summary.results.map((r) => ({
        questionId: r.question.id,
        selectedOptionIds: r.selectedOptionIds,
        isCorrect: r.isCorrect,
      })),
    });

    setProgress(storageService.getProgress(subject.id));
    setGradeSummary(summary);
  }, [subject, session, questions]);

  // Timed exam countdown
  useEffect(() => {
    if (!session || session.mode !== 'exam' || gradeSummary) return;
    const timer = window.setInterval(() => {
      setSessionState((prev) => {
        if (!prev.session || !subject) return prev;
        const nextRemaining = Math.max(0, prev.session.remainingSeconds - 1);
        const updated: ActiveExamSession = {
          ...prev.session,
          remainingSeconds: nextRemaining,
          updatedAt: new Date().toISOString(),
        };
        storageService.saveActiveSession(subject.id, updated);
        return { ...prev, session: updated };
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [session?.id, session?.mode, gradeSummary, subject]);

  useEffect(() => {
    if (
      session &&
      session.mode === 'exam' &&
      session.remainingSeconds === 0 &&
      !gradeSummary
    ) {
      handleSubmitExam();
    }
  }, [session?.remainingSeconds, session?.mode, gradeSummary, handleSubmitExam]);

  const toggleOption = useCallback(
    (optionId: string) => {
      if (!currentQuestion || !session || gradeSummary) return;
      if (
        session.mode === 'practice' &&
        session.checkedQuestionIds.includes(currentQuestion.id)
      ) {
        return;
      }
      updateSession((prev) => {
        const currentSelected = prev.answers[currentQuestion.id] ?? [];
        let nextSelected: string[];
        if (currentQuestion.type === 'single') {
          nextSelected = [optionId];
        } else {
          nextSelected = currentSelected.includes(optionId)
            ? currentSelected.filter((id) => id !== optionId)
            : [...currentSelected, optionId];
        }
        return {
          ...prev,
          answers: { ...prev.answers, [currentQuestion.id]: nextSelected },
        };
      });
    },
    [currentQuestion, session, gradeSummary, updateSession]
  );

  const handleCheckPractice = useCallback(() => {
    if (!currentQuestion || !session || session.mode !== 'practice') return;
    updateSession((prev) =>
      prev.checkedQuestionIds.includes(currentQuestion.id)
        ? prev
        : {
            ...prev,
            checkedQuestionIds: [...prev.checkedQuestionIds, currentQuestion.id],
          }
    );
  }, [currentQuestion, session, updateSession]);

  const toggleFlag = useCallback(() => {
    if (!currentQuestion) return;
    updateSession((prev) => {
      const exists = prev.flaggedQuestionIds.includes(currentQuestion.id);
      return {
        ...prev,
        flaggedQuestionIds: exists
          ? prev.flaggedQuestionIds.filter((id) => id !== currentQuestion.id)
          : [...prev.flaggedQuestionIds, currentQuestion.id],
      };
    });
  }, [currentQuestion, updateSession]);

  // Keyboard shortcuts: 1-6 select option, ArrowLeft/Right navigate, F flag, Enter check
  useEffect(() => {
    if (!session || !currentQuestion || gradeSummary) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName)) {
        return;
      }
      if (e.key >= '1' && e.key <= '6') {
        const opt = currentQuestion.options[Number(e.key) - 1];
        if (opt) toggleOption(opt.id);
      } else if (e.key === 'ArrowRight') {
        updateSession((prev) => ({
          ...prev,
          currentIndex: Math.min(questions.length - 1, prev.currentIndex + 1),
        }));
      } else if (e.key === 'ArrowLeft') {
        updateSession((prev) => ({
          ...prev,
          currentIndex: Math.max(0, prev.currentIndex - 1),
        }));
      } else if (e.key.toLowerCase() === 'f') {
        toggleFlag();
      } else if (e.key === 'Enter' && session.mode === 'practice') {
        handleCheckPractice();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [
    session,
    currentQuestion,
    gradeSummary,
    questions.length,
    toggleOption,
    updateSession,
    toggleFlag,
    handleCheckPractice,
  ]);

  if (!subject) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center border border-slate-200">
        <p className="text-slate-600">Không tìm thấy môn học.</p>
        <Link to="/" className="mt-2 inline-block text-sm text-indigo-600">
          Về trang chủ
        </Link>
      </div>
    );
  }

  if (!session || questions.length === 0 || !currentQuestion) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center border border-slate-200 space-y-3">
        <p className="text-slate-700">
          Chưa có câu hỏi nào phù hợp để bắt đầu bài thi này.
        </p>
        <Link
          to={`/subjects/${subject.id}`}
          className="inline-block rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
        >
          Quay lại môn {subject.code}
        </Link>
      </div>
    );
  }

  if (gradeSummary) {
    return (
      <ExamResultView
        subjectId={subject.id}
        examTitle={session.examTitle}
        summary={gradeSummary}
        flaggedIds={session.flaggedQuestionIds}
        onRetryWrong={(wrongQs) => {
          const retryPack = createDynamicExamPack({
            subjectId: subject.id,
            category: 'mistake',
            title: `Làm lại câu sai: ${session.examTitle}`,
            chapterIds: subject.chapters.map((c) => c.id),
            questionCount: wrongQs.length,
            durationMinutes: Math.max(10, wrongQs.length * 2),
            fixedQuestionIds: wrongQs.map((q) => q.id),
          });
          const rebuilt = buildExamQuestions(subject, retryPack, {
            shuffleQuestions: true,
            shuffleOptions: true,
          });
          const now = new Date().toISOString();
          const retrySession: ActiveExamSession = {
            id: `sess-${Date.now()}`,
            subjectId: subject.id,
            examPackId: retryPack.id,
            examTitle: retryPack.title,
            category: 'mistake',
            mode: 'practice',
            durationMinutes: retryPack.durationMinutes,
            passScorePercent: retryPack.passScorePercent,
            shuffleQuestions: true,
            shuffleOptions: true,
            snapshots: rebuilt.map((q) => ({
              questionId: q.id,
              optionOrder: q.options.map((o) => o.id),
            })),
            answers: {},
            checkedQuestionIds: [],
            flaggedQuestionIds: [],
            currentIndex: 0,
            remainingSeconds: retryPack.durationMinutes * 60,
            startedAt: now,
            updatedAt: now,
          };
          storageService.saveActiveSession(subject.id, retrySession);
          setSessionState({ session: retrySession, questions: rebuilt });
          setGradeSummary(null);
        }}
      />
    );
  }

  const selectedIds = session.answers[currentQuestion.id] ?? [];
  const isChecked =
    session.mode === 'practice' &&
    session.checkedQuestionIds.includes(currentQuestion.id);
  const isPracticeRight = isChecked
    ? isAnswerCorrect(currentQuestion, selectedIds)
    : false;
  const isFlagged = session.flaggedQuestionIds.includes(currentQuestion.id);
  const isBookmarked = progress.bookmarkedQuestionIds.includes(
    currentQuestion.id
  );

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-3.5 shadow-sm">
        <div>
          <span className="text-xs font-semibold text-indigo-600">
            {session.mode === 'exam' ? 'Phòng thi bấm giờ' : 'Chế độ ôn tập'}
          </span>
          <h1 className="text-base font-bold text-slate-900">
            {session.examTitle}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          {session.mode === 'exam' && (
            <div className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1.5 text-sm font-mono font-semibold text-slate-800">
              <Clock className="h-4 w-4 text-indigo-600" />
              {formatTimer(session.remainingSeconds)}
            </div>
          )}
          <button
            type="button"
            onClick={handleSubmitExam}
            className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
          >
            <Send className="h-4 w-4" />
            Nộp bài
          </button>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-slate-700">
                Câu {session.currentIndex + 1} / {questions.length}
              </span>
              {currentQuestion.type === 'multiple' && (
                <span className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-semibold text-violet-700">
                  Chọn {currentQuestion.correctOptionIds.length} đáp án
                </span>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() =>
                  setProgress(
                    storageService.toggleBookmark(subject.id, currentQuestion.id)
                  )
                }
                className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium ${
                  isBookmarked
                    ? 'border-amber-300 bg-amber-50 text-amber-700'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Bookmark className="h-3.5 w-3.5" />
                {isBookmarked ? 'Đã lưu' : 'Lưu câu'}
              </button>
              <button
                type="button"
                onClick={toggleFlag}
                className={`inline-flex items-center gap-1 rounded-lg border px-2.5 py-1 text-xs font-medium ${
                  isFlagged
                    ? 'border-rose-300 bg-rose-50 text-rose-700'
                    : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Flag className="h-3.5 w-3.5" />
                {isFlagged ? 'Đã cắm cờ' : 'Cắm cờ'}
              </button>
            </div>
          </div>

          <p className="text-base font-medium leading-relaxed text-slate-900">
            {currentQuestion.prompt}
          </p>

          <div className="space-y-2.5">
            {currentQuestion.options.map((opt, idx) => {
              const selected = selectedIds.includes(opt.id);
              const isCorrectOpt = currentQuestion.correctOptionIds.includes(
                opt.id
              );

              let optionClass =
                'border-slate-200 bg-white hover:border-indigo-300 hover:bg-slate-50';
              if (isChecked) {
                if (isCorrectOpt) {
                  optionClass =
                    'border-emerald-500 bg-emerald-50 text-emerald-950';
                } else if (selected) {
                  optionClass = 'border-rose-500 bg-rose-50 text-rose-950';
                }
              } else if (selected) {
                optionClass =
                  'border-indigo-600 bg-indigo-50 text-indigo-950 ring-1 ring-indigo-600';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleOption(opt.id)}
                  className={`w-full text-left rounded-xl border p-3.5 text-sm transition-all flex items-start gap-3 ${optionClass}`}
                >
                  <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-slate-300 bg-white text-xs font-semibold text-slate-700">
                    {LETTERS[idx] ?? idx + 1}
                  </span>
                  <span className="pt-0.5">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {session.mode === 'practice' && !isChecked && (
            <div>
              <button
                type="button"
                disabled={selectedIds.length === 0}
                onClick={handleCheckPractice}
                className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 disabled:opacity-50"
              >
                <CheckCircle2 className="h-4 w-4" />
                Kiểm tra đáp án
              </button>
            </div>
          )}

          {isChecked && (
            <div
              className={`rounded-xl border p-4 text-sm ${
                isPracticeRight
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-900'
                  : 'border-rose-200 bg-rose-50 text-rose-900'
              }`}
            >
              <p className="font-bold">
                {isPracticeRight ? 'Chính xác!' : 'Chưa đúng!'}
              </p>
              {currentQuestion.explanation && (
                <p className="mt-1 text-slate-700">
                  <strong>Giải thích: </strong>
                  {currentQuestion.explanation}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between border-t border-slate-100 pt-4">
            <button
              type="button"
              disabled={session.currentIndex === 0}
              onClick={() =>
                updateSession((prev) => ({
                  ...prev,
                  currentIndex: Math.max(0, prev.currentIndex - 1),
                }))
              }
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              <ArrowLeft className="h-4 w-4" />
              Câu trước
            </button>

            <button
              type="button"
              disabled={session.currentIndex >= questions.length - 1}
              onClick={() =>
                updateSession((prev) => ({
                  ...prev,
                  currentIndex: Math.min(
                    questions.length - 1,
                    prev.currentIndex + 1
                  ),
                }))
              }
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 disabled:opacity-40"
            >
              Câu tiếp
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm h-fit space-y-4">
          <h2 className="text-sm font-bold text-slate-900">Danh sách câu hỏi</h2>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const answered = (session.answers[q.id]?.length ?? 0) > 0;
              const flagged = session.flaggedQuestionIds.includes(q.id);
              const isCurrent = idx === session.currentIndex;

              let btnClass = 'border-slate-200 bg-slate-50 text-slate-700';
              if (flagged) {
                btnClass = 'border-rose-400 bg-rose-50 text-rose-700';
              } else if (answered) {
                btnClass = 'border-indigo-300 bg-indigo-50 text-indigo-700';
              }
              if (isCurrent) {
                btnClass += ' ring-2 ring-indigo-600';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() =>
                    updateSession((prev) => ({ ...prev, currentIndex: idx }))
                  }
                  className={`h-9 rounded-lg border text-xs font-semibold ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            Phím tắt: <code className="font-mono">1-6</code> chọn đáp án,{' '}
            <code className="font-mono">←/→</code> chuyển câu,{' '}
            <code className="font-mono">F</code> cắm cờ,{' '}
            <code className="font-mono">Enter</code> kiểm tra.
          </p>
        </aside>
      </div>
    </div>
  );
}
```

Update `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`:

```tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardView } from './features/dashboard/DashboardView';
import { SubjectHubView } from './features/subject-detail/SubjectHubView';
import { StudyChapterView } from './features/study/StudyChapterView';
import { ExamRunnerView } from './features/exam/ExamRunnerView';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
          <Route
            path="/subjects/:subjectId/study/:chapterId"
            element={<StudyChapterView />}
          />
          <Route
            path="/subjects/:subjectId/exam"
            element={<ExamRunnerView />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 4: Run test and build to verify Task 8 passes**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/exam/ExamRunnerView.test.tsx && npm run build`
Expected: PASS (2 tests passing) and build succeeds.

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/features/exam/ src/App.tsx
git commit -m "feat: add practice/timed exam runner with keyboard shortcuts and session recovery"
```

---

### Task 9: Import Manager & Backup/Restore UI + Full Verification

**Files:**
- Create: `E:\SELF-STUDY\study-quiz-hub\src\features\manager\ImportManagerView.tsx`
- Modify: `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`
- Test: `E:\SELF-STUDY\study-quiz-hub\src\features\manager\ImportManagerView.test.tsx`

**Interfaces:**
- Consumes: `storageService`, `parseRawQuestionsText`, `parseJsonQuestionsImport`.
- Produces: `ImportManagerView` mounted at `/import`.

- [ ] **Step 1: Write failing test for `ImportManagerView`**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\manager\ImportManagerView.test.tsx`:

```tsx
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ImportManagerView } from './ImportManagerView';
import { storageService } from '../../services/storage';

describe('ImportManagerView', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('previews raw pasted questions, shows errors if invalid, and saves valid ones to selected subject', () => {
    render(
      <MemoryRouter initialEntries={['/import?subject=swr']}>
        <ImportManagerView />
      </MemoryRouter>
    );

    const textarea = screen.getByLabelText(/dán câu hỏi hoặc json/i);
    fireEvent.change(textarea, {
      target: {
        value: `
1. Which requirement defines system response time?
A. Functional
B. Non-Functional
Answer: B
Explanation: Response time is a performance quality attribute.
`,
      },
    });

    fireEvent.click(screen.getByRole('button', { name: /xem trước/i }));
    expect(screen.getByText(/1 câu hỏi hợp lệ/i)).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: /lưu vào môn học/i }));
    expect(screen.getByText(/đã lưu 1 câu hỏi mới/i)).toBeInTheDocument();

    const swr = storageService.getSubjectById('swr');
    expect(
      swr?.questions.some((q) =>
        q.prompt.includes('Which requirement defines system response time?')
      )
    ).toBe(true);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npx vitest run src/features/manager/ImportManagerView.test.tsx`
Expected: FAIL with missing `./ImportManagerView`.

- [ ] **Step 3: Implement `ImportManagerView.tsx` and wire `/import` route in `App.tsx`**

Write `E:\SELF-STUDY\study-quiz-hub\src\features\manager\ImportManagerView.tsx`:

```tsx
import { useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  Save,
  Upload,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import {
  parseJsonQuestionsImport,
  parseRawQuestionsText,
  type ParsedImportResult,
} from '../../services/importer/questionParser';
import type { ExamTarget } from '../../types/study';

export function ImportManagerView() {
  const [searchParams] = useSearchParams();
  const [subjects] = useState(() => storageService.getSubjects());
  const initialSubject = searchParams.get('subject') ?? subjects[0]?.id ?? 'swr';

  const [subjectId, setSubjectId] = useState(initialSubject);
  const selectedSubject =
    subjects.find((s) => s.id === subjectId) ?? subjects[0];

  const [chapterId, setChapterId] = useState(
    selectedSubject?.chapters[0]?.id ?? 'general'
  );
  const [examTarget, setExamTarget] = useState<ExamTarget>('both');
  const [rawInput, setRawInput] = useState('');
  const [preview, setPreview] = useState<ParsedImportResult | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [backupMessage, setBackupMessage] = useState<string | null>(null);

  const handleSubjectChange = (nextId: string) => {
    setSubjectId(nextId);
    const nextSub = subjects.find((s) => s.id === nextId);
    setChapterId(nextSub?.chapters[0]?.id ?? 'general');
    setPreview(null);
    setStatusMessage(null);
  };

  const handlePreview = () => {
    if (!selectedSubject) return;
    setStatusMessage(null);
    const trimmed = rawInput.trim();
    const existingPrompts = selectedSubject.questions.map((q) => q.prompt);

    if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
      setPreview(
        parseJsonQuestionsImport(trimmed, {
          defaultChapterId: chapterId,
          defaultExamTarget: examTarget,
          existingPrompts,
        })
      );
      return;
    }

    setPreview(
      parseRawQuestionsText(trimmed, {
        defaultChapterId: chapterId,
        defaultExamTarget: examTarget,
        existingPrompts,
      })
    );
  };

  const handleSave = () => {
    if (!preview || preview.questions.length === 0 || !selectedSubject) return;
    const saved = storageService.importQuestionsToSubject(
      selectedSubject.id,
      preview.questions
    );
    setStatusMessage(
      `Đã lưu ${saved.length} câu hỏi mới vào môn ${selectedSubject.code}!`
    );
    setRawInput('');
    setPreview(null);
  };

  const handleDownloadBackup = () => {
    const json = storageService.exportBackupJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `study-quiz-hub-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleRestoreFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const res = storageService.importBackupJson(text);
    setBackupMessage(
      res.ok
        ? `Khôi phục dữ liệu thành công (${res.subjectCount} môn học). Hãy tải lại trang nếu cần.`
        : res.error
    );
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">
          Import Câu Hỏi &amp; Sao Lưu Dữ Liệu
        </h1>
        <p className="mt-1 text-sm text-slate-600">
          Dán văn bản câu hỏi thô (hỗ trợ tiếng Việt/Anh, câu chọn nhiều đáp án) hoặc mảng JSON để nạp nhanh vào môn học.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Môn học đích
            </label>
            <select
              value={subjectId}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.code} — {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Chương áp dụng
            </label>
            <select
              value={chapterId}
              onChange={(e) => setChapterId(e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              {(selectedSubject?.chapters ?? []).map((ch) => (
                <option key={ch.id} value={ch.id}>
                  Chương {ch.order}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">
              Phân loại bộ đề
            </label>
            <select
              value={examTarget}
              onChange={(e) => setExamTarget(e.target.value as ExamTarget)}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            >
              <option value="both">Dùng cho cả Quiz &amp; Final</option>
              <option value="quiz">Chỉ dành cho Quiz</option>
              <option value="final">Chỉ dành cho Final</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="raw-import-input"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Dán câu hỏi hoặc JSON
          </label>
          <textarea
            id="raw-import-input"
            rows={10}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder={`Ví dụ:\n1. What is SRS?\nA. Software Review Sheet\n*B. Software Requirements Specification\nC. System Resource Service\nGiải thích: SRS là tài liệu đặc tả yêu cầu phần mềm.`}
            className="w-full rounded-xl border border-slate-300 p-3 text-sm font-mono outline-none focus:border-indigo-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={!rawInput.trim()}
            onClick={handlePreview}
            className="inline-flex items-center gap-2 rounded-xl border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 disabled:opacity-50"
          >
            <Eye className="h-4 w-4" />
            Xem trước &amp; Kiểm tra
          </button>

          {preview && preview.questions.length > 0 && (
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Save className="h-4 w-4" />
              Lưu vào môn học ({preview.questions.length} câu)
            </button>
          )}
        </div>

        {statusMessage && (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-sm text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4" />
            {statusMessage}
          </div>
        )}

        {preview && (
          <div className="space-y-3 border-t border-slate-100 pt-4">
            <p className="text-sm font-semibold text-slate-900">
              Kết quả phân tích: {preview.questions.length} câu hỏi hợp lệ
            </p>
            {preview.issues.map((issue, idx) => (
              <div
                key={idx}
                className={`rounded-xl border p-3 text-xs flex items-start gap-2 ${
                  issue.severity === 'error'
                    ? 'border-rose-200 bg-rose-50 text-rose-800'
                    : 'border-amber-200 bg-amber-50 text-amber-800'
                }`}
              >
                <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{issue.message}</p>
                  <p className="opacity-80 mt-0.5">{issue.rawSnippet}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-base font-bold text-slate-900">
          Sao lưu &amp; Khôi phục (Backup / Restore JSON)
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleDownloadBackup}
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <Download className="h-4 w-4" />
            Xuất file Backup (.json)
          </button>

          <label className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
            <Upload className="h-4 w-4" />
            Khôi phục từ file (.json)
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleRestoreFile}
              className="hidden"
            />
          </label>
        </div>
        {backupMessage && (
          <p className="text-sm text-indigo-700 font-medium">{backupMessage}</p>
        )}
      </div>
    </div>
  );
}
```

Update `E:\SELF-STUDY\study-quiz-hub\src\App.tsx`:

```tsx
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { DashboardView } from './features/dashboard/DashboardView';
import { SubjectHubView } from './features/subject-detail/SubjectHubView';
import { StudyChapterView } from './features/study/StudyChapterView';
import { ExamRunnerView } from './features/exam/ExamRunnerView';
import { ImportManagerView } from './features/manager/ImportManagerView';

export function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<DashboardView />} />
          <Route path="/subjects/:subjectId" element={<SubjectHubView />} />
          <Route
            path="/subjects/:subjectId/study/:chapterId"
            element={<StudyChapterView />}
          />
          <Route
            path="/subjects/:subjectId/exam"
            element={<ExamRunnerView />}
          />
          <Route path="/import" element={<ImportManagerView />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
```

- [ ] **Step 4: Run full test suite and production build verification**

Run: `cd E:\SELF-STUDY\study-quiz-hub && npm test && npm run build`
Expected: All test files pass with zero errors and `vite build` creates `dist/` cleanly.

- [ ] **Step 5: Commit**

```bash
cd E:\SELF-STUDY\study-quiz-hub
git add src/features/manager/ src/App.tsx
git commit -m "feat: add import manager and JSON backup/restore views"
```
