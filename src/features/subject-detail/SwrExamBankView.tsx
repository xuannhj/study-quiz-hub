import { useMemo, useState } from 'react';
import {
  AlertCircle,
  Bookmark,
  CheckCircle2,
  ChevronDown,
  Download,
  Eye,
  EyeOff,
  Filter,
  Printer,
  Search,
  Sparkles,
} from 'lucide-react';
import type { Question, Subject, UserSubjectProgress } from '../../types/study';
import { FormattedOptionText, FormattedText } from '../../components/FormattedText';
import { QuestionDiagram } from '../exam/QuestionDiagram';
import { cleanQuestionPrompt } from '../../utils/cleanPrompt';
import { classifySwrQuestion, SWR_TOPICS, type SwrTopic } from './swrTopicClassifier';

const SWR_REAL_EXAM_PACKS: Array<{
  packId: string;
  order: number;
  label: string;
  shortLabel: string;
  semester: string;
}> = [
  { packId: 'swr-exam-01', order: 1, label: 'Đề 01: Kì Fall 2026 (FA26 — 551405)', shortLabel: 'Đề 01 (FA26)', semester: 'FA26' },
  { packId: 'swr-exam-02', order: 2, label: 'Đề 02: Kì Summer 2026 (SU26 — Block 5)', shortLabel: 'Đề 02 (SU26-B5)', semester: 'SU26' },
  { packId: 'swr-exam-03', order: 3, label: 'Đề 03: Kì Summer 2026 (SU26 — Retake)', shortLabel: 'Đề 03 (SU26-RE)', semester: 'SU26' },
  { packId: 'swr-exam-04', order: 4, label: 'Đề 04: Kì Summer 2026 (SU26 — Chính Thức)', shortLabel: 'Đề 04 (SU26)', semester: 'SU26' },
  { packId: 'swr-exam-05', order: 5, label: 'Đề 05: Kì Spring 2026 (SP26 — Block 5 Retake)', shortLabel: 'Đề 05 (SP26-B5)', semester: 'SP26' },
  { packId: 'swr-exam-06', order: 6, label: 'Đề 06: Kì Spring 2026 (SP26 — Retake)', shortLabel: 'Đề 06 (SP26-RE)', semester: 'SP26' },
  { packId: 'swr-exam-07', order: 7, label: 'Đề 07: Kì Spring 2026 (SP26 — Chính Thức)', shortLabel: 'Đề 07 (SP26)', semester: 'SP26' },
];

interface EnrichedSwrItem {
  question: Question;
  examMeta: (typeof SWR_REAL_EXAM_PACKS)[number];
  indexInExam: number;
  topic: SwrTopic;
  wrongCount: number;
  isBookmarked: boolean;
}

export function SwrExamBankView({
  subject,
  progress,
}: {
  subject: Subject;
  progress: UserSubjectProgress;
}) {
  const [selectedPackId, setSelectedPackId] = useState<string>('ALL');
  const [selectedTopicId, setSelectedTopicId] = useState<string>('ALL');
  const [statusFilter, setStatusFilter] = useState<'ALL' | 'WRONG_ONLY' | 'BOOKMARKED_ONLY'>('ALL');
  const [query, setQuery] = useState('');
  const [showAnswers, setShowAnswers] = useState(true);
  const [visibleLimit, setVisibleLimit] = useState(40);

  // Collect all 419 items from the 7 real exam packs
  const allItems = useMemo<EnrichedSwrItem[]>(() => {
    const byId = new Map(subject.questions.map((q) => [q.id, q]));
    const packMap = new Map(subject.examPacks.map((p) => [p.id, p]));
    const list: EnrichedSwrItem[] = [];

    for (const meta of SWR_REAL_EXAM_PACKS) {
      const pack = packMap.get(meta.packId);
      if (!pack?.fixedQuestionIds) continue;
      pack.fixedQuestionIds.forEach((qid, idx) => {
        const q = byId.get(qid);
        if (!q) return;
        const wrongStat = progress.wrongQuestionStats[q.id];
        const isBookmarked = progress.bookmarkedQuestionIds.includes(q.id);
        list.push({
          question: q,
          examMeta: meta,
          indexInExam: idx + 1,
          topic: classifySwrQuestion(q),
          wrongCount: wrongStat?.wrongCount || 0,
          isBookmarked,
        });
      });
    }
    return list;
  }, [subject, progress]);

  // Total wrong count in 7 real exams
  const totalWrongIn7Exams = useMemo(
    () => allItems.filter((it) => it.wrongCount > 0).length,
    [allItems]
  );
  const totalBookmarked = useMemo(
    () => allItems.filter((it) => it.isBookmarked).length,
    [allItems]
  );

  // Filter items
  const filteredItems = useMemo(() => {
    const qLower = query.trim().toLowerCase();
    return allItems.filter((item) => {
      // Filter by exam pack
      if (selectedPackId !== 'ALL' && item.examMeta.packId !== selectedPackId) {
        return false;
      }
      // Filter by topic
      if (selectedTopicId !== 'ALL' && item.topic.id !== selectedTopicId) {
        return false;
      }
      // Filter by status (wrong or bookmarked)
      if (statusFilter === 'WRONG_ONLY' && item.wrongCount === 0) {
        return false;
      }
      if (statusFilter === 'BOOKMARKED_ONLY' && !item.isBookmarked) {
        return false;
      }
      // Search query
      if (qLower) {
        const inPrompt = item.question.prompt.toLowerCase().includes(qLower);
        const inOpts = item.question.options.some((o) =>
          o.text.toLowerCase().includes(qLower)
        );
        const inExp = (item.question.explanation || '')
          .toLowerCase()
          .includes(qLower);
        const inTopic = item.topic.title.toLowerCase().includes(qLower);
        const inExam = item.examMeta.label.toLowerCase().includes(qLower);
        if (!inPrompt && !inOpts && !inExp && !inTopic && !inExam) {
          return false;
        }
      }
      return true;
    });
  }, [allItems, selectedPackId, selectedTopicId, statusFilter, query]);

  const visibleItems = filteredItems.slice(0, visibleLimit);

  // Counts per topic for badges
  const topicCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const item of allItems) {
      counts.set(item.topic.id, (counts.get(item.topic.id) || 0) + 1);
    }
    return counts;
  }, [allItems]);

  const handleDownloadMarkdown = () => {
    const lines: string[] = [
      '# NGÂN HÀNG 7 ĐỀ GỐC SWR302 (PHÂN THEO DẠNG & CHƯƠNG)',
      '',
      `> Tổng số câu chọn lọc: ${filteredItems.length} câu`,
      '',
    ];
    filteredItems.forEach((item, idx) => {
      lines.push(`### Câu ${idx + 1}: [${item.examMeta.shortLabel} — Câu ${item.indexInExam}] [${item.topic.chapterNumber}: ${item.topic.shortTitle}]`);
      lines.push('');
      lines.push(cleanQuestionPrompt(item.question.prompt));
      lines.push('');
      item.question.options.forEach((opt) => {
        const isCorrect = item.question.correctOptionIds.includes(opt.id);
        lines.push(`- [${isCorrect ? 'x' : ' '}] **${opt.id}.** ${opt.text}`);
      });
      lines.push('');
      if (item.question.explanation) {
        lines.push(`> **Giải thích:**\n> ${item.question.explanation.replace(/\n/g, '\n> ')}`);
        lines.push('');
      }
      lines.push('---');
      lines.push('');
    });
    const blob = new Blob([lines.join('\n')], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `SWR302_Ngan_Hang_7_De_Goc_${new Date().toISOString().slice(0, 10)}.md`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-moss/30 bg-gradient-to-br from-sage-tint/80 via-paper to-white p-6 shadow-cozy sm:p-8">
        <div className="relative z-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-moss/10 px-3 py-1 text-xs font-semibold text-moss">
              <Sparkles className="h-3.5 w-3.5" />
              Tổng Hợp 7 Đề Thi Thật (419 câu có ảnh gốc phòng máy)
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Ngân Hàng 7 Đề Gốc SWR302 Theo Dạng &amp; Chương
            </h2>
            <p className="text-sm leading-relaxed text-ink-soft">
              Phân loại 419 câu hỏi thi thật các kì gần nhất (FA26, SU26, SP26) theo đúng các chương của giáo trình Karl Wiegers &amp; Joy Beatty. Kèm đáp án chuẩn, lời giải chi tiết và bộ lọc câu hay sai để ôn đúng trọng tâm.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition-all ${
                showAnswers
                  ? 'bg-moss text-white shadow-sm'
                  : 'border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint'
              }`}
            >
              {showAnswers ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
              {showAnswers ? 'Đang hiện đáp án & giải thích' : 'Ẩn đáp án để tự luyện'}
            </button>
            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3 py-2 text-xs font-semibold text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              title="Xuất file Markdown offline"
            >
              <Download className="h-3.5 w-3.5" />
              Tải .md
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3 py-2 text-xs font-semibold text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              title="In hoặc lưu PDF"
            >
              <Printer className="h-3.5 w-3.5" />
              In
            </button>
          </div>
        </div>

        {/* Quick Stats Badges */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-2xl border border-sage-border/60 bg-paper/80 p-3">
            <div className="text-xs text-ink-soft">Tổng câu hỏi 7 đề</div>
            <div className="text-xl font-bold text-ink">419 câu</div>
          </div>
          <div className="rounded-2xl border border-sage-border/60 bg-paper/80 p-3">
            <div className="text-xs text-ink-soft">Chuyên đề chuẩn Wiegers</div>
            <div className="text-xl font-bold text-moss">10 chuyên đề</div>
          </div>
          <button
            type="button"
            onClick={() => setStatusFilter(statusFilter === 'WRONG_ONLY' ? 'ALL' : 'WRONG_ONLY')}
            className={`text-left rounded-2xl border p-3 transition-colors ${
              statusFilter === 'WRONG_ONLY'
                ? 'border-blossom bg-blossom-soft/40 shadow-sm'
                : 'border-sage-border/60 bg-paper/80 hover:bg-sage-tint/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-ink-soft">Câu em đã làm sai</span>
              <AlertCircle className="h-3.5 w-3.5 text-blossom" />
            </div>
            <div className="text-xl font-bold text-blossom">{totalWrongIn7Exams} câu</div>
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter(statusFilter === 'BOOKMARKED_ONLY' ? 'ALL' : 'BOOKMARKED_ONLY')}
            className={`text-left rounded-2xl border p-3 transition-colors ${
              statusFilter === 'BOOKMARKED_ONLY'
                ? 'border-firefly bg-firefly-soft/40 shadow-sm'
                : 'border-sage-border/60 bg-paper/80 hover:bg-sage-tint/40'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs text-ink-soft">Câu đã đánh dấu</span>
              <Bookmark className="h-3.5 w-3.5 text-wood" />
            </div>
            <div className="text-xl font-bold text-wood">{totalBookmarked} câu</div>
          </button>
        </div>
      </div>

      {/* Control Filters */}
      <div className="space-y-3 rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy">
        {/* Status Filter Pill Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-ink-soft mr-1">
            Lọc theo:
          </span>
          <button
            type="button"
            onClick={() => setStatusFilter('ALL')}
            className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              statusFilter === 'ALL'
                ? 'bg-moss text-white'
                : 'bg-mist text-ink-soft hover:bg-sage-tint'
            }`}
          >
            Tất cả ({allItems.length})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('WRONG_ONLY')}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              statusFilter === 'WRONG_ONLY'
                ? 'bg-blossom text-white'
                : 'bg-blossom-soft/40 text-blossom hover:bg-blossom-soft'
            }`}
          >
            <AlertCircle className="h-3.5 w-3.5" />
            Câu em đã làm sai ({totalWrongIn7Exams})
          </button>
          <button
            type="button"
            onClick={() => setStatusFilter('BOOKMARKED_ONLY')}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors ${
              statusFilter === 'BOOKMARKED_ONLY'
                ? 'bg-wood text-white'
                : 'bg-firefly-soft text-wood hover:bg-firefly/30'
            }`}
          >
            <Bookmark className="h-3.5 w-3.5" />
            Đã đánh dấu ({totalBookmarked})
          </button>
        </div>

        {/* Dropdowns + Search */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-12">
          {/* Search Input */}
          <div className="sm:col-span-5 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm theo từ khóa (Use case, RTM, Wiegers, Actor...)"
              className="w-full rounded-2xl border border-sage-border bg-mist/60 py-2.5 pl-10 pr-4 text-sm text-ink placeholder:text-ink-soft/70 focus:border-moss focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          {/* Exam Pack Selector */}
          <div className="sm:col-span-3 relative">
            <select
              value={selectedPackId}
              onChange={(e) => setSelectedPackId(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-sage-border bg-mist/60 py-2.5 pl-3.5 pr-8 text-xs font-medium text-ink focus:border-moss focus:bg-white focus:outline-none transition-colors"
            >
              <option value="ALL">Tất cả 7 đề gốc (419 câu)</option>
              {SWR_REAL_EXAM_PACKS.map((p) => (
                <option key={p.packId} value={p.packId}>
                  {p.label}
                </option>
              ))}
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
          </div>

          {/* Topic / Chapter Selector */}
          <div className="sm:col-span-4 relative">
            <select
              value={selectedTopicId}
              onChange={(e) => setSelectedTopicId(e.target.value)}
              className="w-full appearance-none rounded-2xl border border-sage-border bg-mist/60 py-2.5 pl-3.5 pr-8 text-xs font-medium text-ink focus:border-moss focus:bg-white focus:outline-none transition-colors"
            >
              <option value="ALL">Tất cả các chương / dạng bài</option>
              {SWR_TOPICS.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.chapterNumber}: {t.shortTitle} ({topicCounts.get(t.id) || 0})
                </option>
              ))}
              <option value="other">
                Chương khác / Kỹ năng BA ({topicCounts.get('other') || 0})
              </option>
            </select>
            <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
          </div>
        </div>

        {/* Topic Pill Filters */}
        <div className="pt-2 border-t border-sage-border/50">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedTopicId('ALL')}
              className={`shrink-0 rounded-lg px-2.5 py-1 font-medium transition-colors ${
                selectedTopicId === 'ALL'
                  ? 'bg-moss text-white font-semibold'
                  : 'bg-mist text-ink-soft hover:bg-sage-tint'
              }`}
            >
              Tất cả chương
            </button>
            {SWR_TOPICS.map((t) => {
              const count = topicCounts.get(t.id) || 0;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedTopicId(t.id)}
                  className={`shrink-0 rounded-lg px-2.5 py-1 font-medium transition-colors ${
                    selectedTopicId === t.id
                      ? 'bg-moss text-white font-semibold'
                      : 'bg-mist text-ink-soft hover:bg-sage-tint'
                  }`}
                >
                  {t.chapterNumber}: {t.shortTitle} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="flex items-center justify-between text-xs text-ink-soft px-1">
        <div>
          Đang hiển thị{' '}
          <span className="font-semibold text-ink">
            {Math.min(visibleLimit, filteredItems.length)}
          </span>{' '}
          / <span className="font-semibold text-ink">{filteredItems.length}</span> câu hỏi phù hợp
        </div>
        {statusFilter === 'WRONG_ONLY' && (
          <span className="font-medium text-blossom">
            Đang lọc riêng các câu em đã làm sai trong các lần luyện thi
          </span>
        )}
      </div>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="rounded-3xl border border-dashed border-sage-border bg-paper p-12 text-center shadow-cozy">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sage-tint text-ink-soft">
            <Filter className="h-6 w-6" />
          </div>
          <h3 className="mt-4 text-base font-semibold text-ink">Không tìm thấy câu hỏi phù hợp</h3>
          <p className="mt-1 text-xs text-ink-soft">
            {statusFilter === 'WRONG_ONLY'
              ? 'Tuyệt vời! Em chưa làm sai câu nào trong bộ lọc này (hoặc hãy làm thêm đề để hệ thống ghi nhận câu sai nhé).'
              : 'Thử xóa từ khóa tìm kiếm hoặc chọn lại chương khác nhé bé.'}
          </p>
          <button
            type="button"
            onClick={() => {
              setSelectedPackId('ALL');
              setSelectedTopicId('ALL');
              setStatusFilter('ALL');
              setQuery('');
            }}
            className="mt-4 rounded-2xl bg-moss px-4 py-2 text-xs font-semibold text-white hover:bg-moss/90 transition-colors"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-4">
        {visibleItems.map((item, idx) => {
          const q = item.question;
          const cleanedPrompt = cleanQuestionPrompt(q.prompt);

          return (
            <div
              key={`${item.examMeta.packId}-${q.id}`}
              className="rounded-3xl border border-sage-border bg-paper p-5 sm:p-6 shadow-cozy transition-all hover:border-moss/40"
            >
              {/* Question Meta Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-sage-border/50 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-lg bg-mist px-2.5 py-1 font-mono text-xs font-bold text-ink-soft">
                    #{idx + 1}
                  </span>
                  <span className="inline-flex items-center rounded-lg border border-sage-border bg-sage-tint/40 px-2.5 py-1 text-xs font-semibold text-ink">
                    {item.examMeta.shortLabel} — Câu {item.indexInExam}
                  </span>
                  <span className="inline-flex items-center rounded-lg border border-moss/20 bg-moss/10 px-2.5 py-1 text-xs font-medium text-moss">
                    {item.topic.chapterNumber}: {item.topic.shortTitle}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {item.wrongCount > 0 && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-blossom/30 bg-blossom-soft px-2.5 py-0.5 text-xs font-bold text-blossom">
                      <AlertCircle className="h-3 w-3" />
                      Em đã làm sai {item.wrongCount} lần
                    </span>
                  )}
                  {item.isBookmarked && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-firefly/40 bg-firefly-soft px-2 py-0.5 text-xs font-semibold text-wood">
                      <Bookmark className="h-3 w-3" />
                      Đã lưu
                    </span>
                  )}
                </div>
              </div>

              {/* Prompt */}
              <div className="mt-4 text-base font-semibold leading-relaxed text-ink">
                <FormattedText content={cleanedPrompt} />
              </div>

              {/* Options */}
              <div className="mt-4 space-y-2">
                {q.options.map((opt) => {
                  const isCorrect = q.correctOptionIds.includes(opt.id);
                  let optStyle = 'border-sage-border/70 bg-paper text-ink';

                  if (showAnswers) {
                    if (isCorrect) {
                      optStyle = 'border-moss bg-moss/10 text-moss font-semibold ring-1 ring-moss/30';
                    } else {
                      optStyle = 'border-sage-border/40 bg-mist/30 text-ink-soft';
                    }
                  }

                  return (
                    <div
                      key={opt.id}
                      className={`flex items-start gap-3 rounded-2xl border p-3 text-sm transition-colors ${optStyle}`}
                    >
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
                          showAnswers && isCorrect
                            ? 'bg-moss text-white'
                            : 'bg-mist text-ink-soft'
                        }`}
                      >
                        {opt.id}
                      </span>
                      <div className="flex-1 pt-0.5">
                        <FormattedOptionText text={opt.text} />
                      </div>
                      {showAnswers && isCorrect && (
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-moss" />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Explanation & Diagram */}
              {showAnswers && (
                <div className="mt-4 space-y-3">
                  {q.explanation && (
                    <div className="rounded-2xl border border-sage-border/80 bg-sage-tint/35 p-4 text-xs leading-relaxed text-ink">
                      <div className="mb-1.5 flex items-center gap-1.5 font-bold uppercase tracking-wide text-moss">
                        <Sparkles className="h-3.5 w-3.5" />
                        Lời Giải Chi Tiết (Chuẩn Karl Wiegers)
                      </div>
                      <FormattedText content={q.explanation} />
                    </div>
                  )}

                  {q.imageUrl && (
                    <div className="pt-1">
                      <QuestionDiagram
                        imageUrl={q.imageUrl}
                        imageCaption={q.imageCaption || `${item.examMeta.shortLabel} — Câu ${item.indexInExam} (Đề gốc)`}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Pagination Load More */}
      {visibleLimit < filteredItems.length && (
        <div className="text-center pt-4 pb-8">
          <button
            type="button"
            onClick={() => setVisibleLimit((prev) => prev + 50)}
            className="rounded-2xl border border-sage-border bg-paper px-6 py-3 text-sm font-semibold text-ink shadow-cozy hover:bg-sage-tint hover:border-moss/40 transition-all"
          >
            Xem thêm 50 câu (còn {filteredItems.length - visibleLimit} câu)
          </button>
        </div>
      )}
    </div>
  );
}
