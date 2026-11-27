import { useMemo, useState } from 'react';
import {
  BookOpenCheck,
  CheckCircle2,
  Download,
  Eye,
  EyeOff,
  Printer,
  Search,
  Sparkles,
} from 'lucide-react';
import type { Question, Subject } from '../../types/study';
import { FormattedOptionText, FormattedText } from '../../components/FormattedText';
import { QuestionDiagram } from '../exam/QuestionDiagram';
import { cleanQuestionPrompt } from '../../utils/cleanPrompt';

const SU25_TO_FA26_PACKS: Array<{
  packId: string;
  semester: 'SU25' | 'FA25' | 'SP26' | 'SU26' | 'FA26';
  shortLabel: string;
}> = [
  { packId: 'fer202-exam-08', semester: 'SU25', shortLabel: 'SU25 — Đề 1' },
  { packId: 'fer202-exam-06', semester: 'SU25', shortLabel: 'SU25 — Đề 2' },
  { packId: 'fer202-exam-12', semester: 'FA25', shortLabel: 'FA25 — Chính thức' },
  { packId: 'fer202-exam-11', semester: 'SP26', shortLabel: 'SP26 — Đề 1' },
  { packId: 'fer202-exam-14', semester: 'SP26', shortLabel: 'SP26 — Đề 1B' },
  { packId: 'fer202-exam-01', semester: 'SP26', shortLabel: 'SP26 — Đề 2' },
  { packId: 'fer202-exam-13', semester: 'SP26', shortLabel: 'SP26 — Đề 2B' },
  { packId: 'fer202-exam-15', semester: 'SP26', shortLabel: 'SP26 — Đề 3' },
  { packId: 'fer202-exam-03', semester: 'SU26', shortLabel: 'SU26 — Chính thức' },
  { packId: 'fer202-exam-16', semester: 'FA26', shortLabel: 'FA26 — Chính thức 163998' },
];

const SEMESTERS = ['ALL', 'FA26', 'SU26', 'SP26', 'FA25', 'SU25'] as const;
type SemesterFilter = (typeof SEMESTERS)[number];

interface BankItem {
  question: Question;
  semester: string;
  examLabel: string;
  indexInExam: number;
}

const cleanPrompt = cleanQuestionPrompt;

export function ExamAnswerBankView({ subject }: { subject: Subject }) {
  const [semester, setSemester] = useState<SemesterFilter>('ALL');
  const [query, setQuery] = useState('');
  const [showExplanation, setShowExplanation] = useState(true);
  const [compactOnlyCorrect, setCompactOnlyCorrect] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(50);

  const allItems = useMemo<BankItem[]>(() => {
    const byId = new Map(subject.questions.map((q) => [q.id, q]));
    const packMap = new Map(subject.examPacks.map((p) => [p.id, p]));
    const list: BankItem[] = [];

    for (const meta of SU25_TO_FA26_PACKS) {
      const pack = packMap.get(meta.packId);
      if (!pack?.fixedQuestionIds) continue;
      pack.fixedQuestionIds.forEach((qid, idx) => {
        const q = byId.get(qid);
        if (!q) return;
        list.push({
          question: q,
          semester: meta.semester,
          examLabel: meta.shortLabel,
          indexInExam: idx + 1,
        });
      });
    }
    return list;
  }, [subject]);

  const filteredItems = useMemo(() => {
    const qLower = query.trim().toLowerCase();
    return allItems.filter((item) => {
      if (semester !== 'ALL' && item.semester !== semester) return false;
      if (!qLower) return true;
      const inPrompt = item.question.prompt.toLowerCase().includes(qLower);
      const inOpts = item.question.options.some((o) =>
        o.text.toLowerCase().includes(qLower)
      );
      const inExp = (item.question.explanation || '')
        .toLowerCase()
        .includes(qLower);
      const inLabel = item.examLabel.toLowerCase().includes(qLower);
      return inPrompt || inOpts || inExp || inLabel;
    });
  }, [allItems, semester, query]);

  const visibleItems = filteredItems.slice(0, visibleLimit);

  const handleDownloadMarkdown = () => {
    const lines: string[] = [
      '# TỔNG HỢP CÂU HỎI & ĐÁP ÁN FER202 (SU25 → FA26)',
      '',
      `> Tổng số: ${filteredItems.length} câu hỏi`,
      '',
    ];
    filteredItems.forEach((item, idx) => {
      lines.push(`## Câu ${idx + 1} (${item.examLabel} — Câu ${item.indexInExam})`);
      lines.push('');
      lines.push(cleanPrompt(item.question.prompt));
      lines.push('');
      for (const opt of item.question.options) {
        const isRight = item.question.correctOptionIds.includes(opt.id);
        lines.push(isRight ? `- **${opt.id}. ${opt.text}** ✅` : `- ${opt.id}. ${opt.text}`);
      }
      lines.push('');
      lines.push(`> ✅ Đáp án đúng: ${item.question.correctOptionIds.join(', ')}`);
      if (item.question.explanation) {
        lines.push(`> 💡 ${item.question.explanation.replace(/\n/g, '\n> ')}`);
      }
      lines.push('');
      lines.push('---');
      lines.push('');
    });

    const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FER202_${semester === 'ALL' ? 'SU25_to_FA26' : semester}_QA.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Control Card */}
      <div className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy space-y-4">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 className="text-base sm:text-lg font-bold text-ink flex items-center gap-2">
              <BookOpenCheck className="h-5 w-5 text-moss" />
              Tổng Hợp Đáp Án FER202 (SU25 → FA26)
            </h2>
            <p className="text-xs sm:text-sm text-ink-soft mt-0.5">
              Đọc nhanh toàn bộ <strong>{allItems.length} câu hỏi</strong> từ 10 đề thi thật kèm sẵn đáp án đúng &amp; giải thích chi tiết.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 rounded-xl border border-sage-border bg-mist px-3 py-1.5 text-xs font-semibold text-ink hover:bg-sage-tint transition-colors"
            >
              <Download className="h-3.5 w-3.5 text-moss" />
              Tải file .md
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-xl border border-sage-border bg-mist px-3 py-1.5 text-xs font-semibold text-ink hover:bg-sage-tint transition-colors"
            >
              <Printer className="h-3.5 w-3.5 text-moss" />
              In / Lưu PDF
            </button>
          </div>
        </div>

        {/* Search & Toggles */}
        <div className="flex flex-col sm:flex-row gap-2.5">
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-muted" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setVisibleLimit(50);
              }}
              placeholder="Tìm nhanh theo từ khóa (vd: useEffect, Redux, fetch, Next.js, Bootstrap)..."
              className="w-full rounded-2xl border border-sage-border bg-mist py-2 pl-10 pr-4 text-sm text-ink placeholder:text-ink-muted focus:border-moss focus:bg-paper focus:outline-hidden transition-colors"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setCompactOnlyCorrect((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2 text-xs font-semibold transition-colors ${
                compactOnlyCorrect
                  ? 'border-moss bg-moss-soft text-moss'
                  : 'border-sage-border bg-paper text-ink-soft hover:bg-sage-tint'
              }`}
            >
              <Sparkles className="h-3.5 w-3.5" />
              {compactOnlyCorrect ? 'Đang chỉ hiện đáp án đúng' : 'Chỉ hiện đáp án đúng'}
            </button>

            <button
              type="button"
              onClick={() => setShowExplanation((v) => !v)}
              className={`inline-flex items-center gap-1.5 rounded-2xl border px-3 py-2 text-xs font-semibold transition-colors ${
                showExplanation
                  ? 'border-moss bg-moss-soft text-moss'
                  : 'border-sage-border bg-paper text-ink-soft hover:bg-sage-tint'
              }`}
            >
              {showExplanation ? (
                <Eye className="h-3.5 w-3.5" />
              ) : (
                <EyeOff className="h-3.5 w-3.5" />
              )}
              Giải thích
            </button>
          </div>
        </div>

        {/* Semester Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5">
          {SEMESTERS.map((sem) => {
            const count =
              sem === 'ALL'
                ? allItems.length
                : allItems.filter((i) => i.semester === sem).length;
            const active = semester === sem;
            return (
              <button
                key={sem}
                type="button"
                onClick={() => {
                  setSemester(sem);
                  setVisibleLimit(50);
                }}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                  active
                    ? 'bg-moss text-white shadow-xs'
                    : 'bg-mist text-ink-soft hover:bg-sage-tint hover:text-ink border border-sage-border/70'
                }`}
              >
                {sem === 'ALL' ? `Tất cả SU25→FA26 (${count})` : `${sem} (${count})`}
              </button>
            );
          })}
        </div>

        <p className="text-xs text-ink-soft">
          Đang hiển thị <strong>{visibleItems.length}</strong> /{' '}
          <strong>{filteredItems.length}</strong> câu hỏi phù hợp.
        </p>
      </div>

      {/* Question List */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-sage-border bg-paper p-8 text-center text-sm text-ink-soft">
          Không tìm thấy câu hỏi nào khớp với từ khóa &ldquo;{query}&rdquo;.
        </div>
      ) : (
        <div className="space-y-3">
          {visibleItems.map((item, idx) => {
            const q = item.question;
            const displayedOptions = compactOnlyCorrect
              ? q.options.filter((o) => q.correctOptionIds.includes(o.id))
              : q.options;

            return (
              <article
                key={`${item.examLabel}-${q.id}`}
                className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy space-y-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-moss-soft px-2.5 py-0.5 text-xs font-bold text-moss">
                      #{idx + 1}
                    </span>
                    <span className="rounded-lg bg-sage-tint px-2.5 py-0.5 text-xs font-semibold text-ink-soft">
                      {item.examLabel} • Câu {item.indexInExam}
                    </span>
                    {q.type === 'multiple' && (
                      <span className="rounded-lg bg-rain-soft px-2 py-0.5 text-xs font-semibold text-rain-ink">
                        Chọn {q.correctOptionIds.length} đáp án
                      </span>
                    )}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-moss-soft border border-moss/30 px-2.5 py-0.5 text-xs font-bold text-moss">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    Đáp án: {q.correctOptionIds.join(', ')}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-medium text-ink leading-relaxed">
                  <FormattedText content={cleanPrompt(q.prompt)} />
                </div>

                {q.imageUrl && (
                  <QuestionDiagram
                    imageUrl={q.imageUrl}
                    imageCaption={q.imageCaption}
                  />
                )}

                <div className="space-y-2">
                  {displayedOptions.map((opt) => {
                    const isRight = q.correctOptionIds.includes(opt.id);
                    return (
                      <div
                        key={opt.id}
                        className={`rounded-2xl border px-3.5 py-2.5 text-sm flex items-start gap-2.5 ${
                          isRight
                            ? 'border-moss bg-moss-soft/80 text-ink font-medium'
                            : 'border-sage-border/70 bg-mist/40 text-ink-soft'
                        }`}
                      >
                        <span
                          className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-mono font-bold ${
                            isRight
                              ? 'bg-moss text-white'
                              : 'bg-paper border border-sage-border text-ink-soft'
                          }`}
                        >
                          {opt.id}
                        </span>
                        <div className="flex-1 pt-0.5 leading-relaxed">
                          <FormattedOptionText text={opt.text} />
                        </div>
                        {isRight && (
                          <CheckCircle2 className="h-4 w-4 text-moss shrink-0 mt-1" />
                        )}
                      </div>
                    );
                  })}
                </div>

                {showExplanation && q.explanation && (
                  <div className="rounded-2xl border border-firefly/40 bg-firefly-soft/40 p-3.5 text-xs sm:text-sm text-ink/90 leading-relaxed">
                    <strong className="font-semibold text-ink">Giải thích: </strong>
                    <FormattedText
                      content={q.explanation}
                      className="inline font-normal"
                    />
                  </div>
                )}
              </article>
            );
          })}

          {visibleItems.length < filteredItems.length && (
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setVisibleLimit((n) => n + 50)}
                className="rounded-2xl bg-moss px-5 py-2.5 text-sm font-semibold text-white hover:bg-moss-hover transition-colors shadow-sm"
              >
                Xem thêm 50 câu ({filteredItems.length - visibleItems.length} câu còn lại)
              </button>
              <button
                type="button"
                onClick={() => setVisibleLimit(filteredItems.length)}
                className="rounded-2xl border border-sage-border bg-paper px-4 py-2.5 text-sm font-semibold text-ink hover:bg-sage-tint transition-colors"
              >
                Hiện toàn bộ {filteredItems.length} câu
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
