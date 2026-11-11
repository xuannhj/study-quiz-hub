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

const QUESTION_START_RE =
  /^(?:(?:Câu|Question|Q)\s*\d+\s*[:.)-]|\d+\s*[.)])\s*(.+)$/i;
const OPTION_LINE_RE = /^(\*?)\s*([A-F])\s*[.)\]:-]\s*(.+)$/i;
const ANSWER_LINE_RE = /^(?:Answer|Ans|Đáp án|Key)\s*[:.-]\s*(.+)$/i;
const EXPLANATION_LINE_RE =
  /^(?:Explanation|Explain|Giải thích|Note)\s*[:.-]\s*(.+)$/i;

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
        const letters = ansMatch[1].toUpperCase().match(/[A-F]/g);
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
      ? record.correctOptionIds.filter(
          (id) => typeof id === 'string' && validIds.has(id)
        )
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
