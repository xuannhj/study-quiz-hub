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

    const current = chapterStats.get(question.chapterId) ?? {
      correct: 0,
      total: 0,
    };
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
