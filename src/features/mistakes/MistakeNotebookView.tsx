import { useState, useMemo, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Play,
  Sparkles,
  Layers,
  List,
  AlertTriangle,
  Check,
  HelpCircle,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import type { Question, Subject, WrongQuestionStat } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';
import { QuestionDiagram } from '../exam/QuestionDiagram';

export interface MistakeItem {
  subject: Subject;
  question: Question;
  stat: WrongQuestionStat;
}

type StatusFilter = 'unmastered' | 'all' | 'mastered' | 'frequent';
type ViewMode = 'flashcard' | 'list';

export function MistakeNotebookView() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>(() =>
    storageService.getSubjects()
  );
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('unmastered');
  const [viewMode, setViewMode] = useState<ViewMode>('flashcard');

  // Flashcard state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Sync state when storage changes
  const refreshSubjects = useCallback(() => {
    setSubjects(storageService.getSubjects());
  }, []);

  // Collect all mistake items across all subjects
  const allMistakeItems = useMemo(() => {
    const list: MistakeItem[] = [];
    for (const sub of subjects) {
      const progress = storageService.getProgress(sub.id);
      for (const q of sub.questions) {
        const stat = progress.wrongQuestionStats[q.id];
        if (stat) {
          list.push({ subject: sub, question: q, stat });
        }
      }
    }
    return list;
  }, [subjects]);

  // Subject statistics for badge counters
  const subjectStats = useMemo(() => {
    const stats: Record<
      string,
      { total: number; unmastered: number; code: string; name: string }
    > = {};

    let grandTotal = 0;
    let grandUnmastered = 0;

    for (const sub of subjects) {
      const progress = storageService.getProgress(sub.id);
      let subTotal = 0;
      let subUnmastered = 0;

      for (const q of sub.questions) {
        const s = progress.wrongQuestionStats[q.id];
        if (s) {
          subTotal += 1;
          if (!s.mastered) subUnmastered += 1;
        }
      }

      stats[sub.id] = {
        total: subTotal,
        unmastered: subUnmastered,
        code: sub.code,
        name: sub.name,
      };

      grandTotal += subTotal;
      grandUnmastered += subUnmastered;
    }

    return {
      perSubject: stats,
      all: { total: grandTotal, unmastered: grandUnmastered },
    };
  }, [subjects]);

  // Filtered items based on subject selection and status filter
  const filteredItems = useMemo(() => {
    return allMistakeItems.filter((item) => {
      if (selectedSubjectId !== 'all' && item.subject.id !== selectedSubjectId) {
        return false;
      }
      if (statusFilter === 'unmastered' && item.stat.mastered) {
        return false;
      }
      if (statusFilter === 'mastered' && !item.stat.mastered) {
        return false;
      }
      if (statusFilter === 'frequent' && item.stat.wrongCount < 2) {
        return false;
      }
      return true;
    });
  }, [allMistakeItems, selectedSubjectId, statusFilter]);

  // Keep index in bound
  const safeIndex =
    filteredItems.length === 0
      ? 0
      : Math.min(currentIndex, filteredItems.length - 1);
  const currentItem = filteredItems[safeIndex];

  // Reset card state when moving
  const goToCard = useCallback(
    (index: number) => {
      const validIndex = Math.max(0, Math.min(index, filteredItems.length - 1));
      setCurrentIndex(validIndex);
      setIsFlipped(false);
      setSelectedOptionId(null);
    },
    [filteredItems.length]
  );

  const handleNext = useCallback(() => {
    if (safeIndex < filteredItems.length - 1) {
      goToCard(safeIndex + 1);
    } else {
      goToCard(0);
    }
  }, [safeIndex, filteredItems.length, goToCard]);

  const handlePrev = useCallback(() => {
    if (safeIndex > 0) {
      goToCard(safeIndex - 1);
    } else {
      goToCard(filteredItems.length - 1);
    }
  }, [safeIndex, filteredItems.length, goToCard]);

  // Mark mastered / unmastered
  const handleToggleMastered = (item: MistakeItem, mastered: boolean) => {
    storageService.setQuestionMastered(
      item.subject.id,
      item.question.id,
      mastered
    );
    refreshSubjects();
    if (mastered && statusFilter === 'unmastered') {
      // Stay on current or next item
      setIsFlipped(false);
      setSelectedOptionId(null);
    }
  };

  // Keyboard navigation for flashcard
  useEffect(() => {
    if (viewMode !== 'flashcard' || !currentItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '1') {
        e.preventDefault();
        handleNext();
      } else if (e.key === '2') {
        e.preventDefault();
        handleToggleMastered(currentItem, true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [viewMode, currentItem, handleNext, handlePrev]);

  // Launch a Practice Exam from current filtered items
  const handleStartPracticeQuiz = () => {
    if (filteredItems.length === 0) return;

    // Pick target subject: selected subject or first item's subject
    const targetSubject =
      selectedSubjectId !== 'all'
        ? subjects.find((s) => s.id === selectedSubjectId) ??
          filteredItems[0].subject
        : filteredItems[0].subject;

    // Get question ids for this target subject from filtered list
    const targetQuestionIds = filteredItems
      .filter((it) => it.subject.id === targetSubject.id)
      .map((it) => it.question.id);

    const pack = createDynamicExamPack({
      subjectId: targetSubject.id,
      category: 'mistake',
      title: `Luyện tập ${targetQuestionIds.length} câu sai (${targetSubject.code})`,
      chapterIds: targetSubject.chapters.map((c) => c.id),
      questionCount: targetQuestionIds.length,
      durationMinutes: Math.max(5, Math.ceil(targetQuestionIds.length * 1.5)),
      fixedQuestionIds: targetQuestionIds,
    });

    const launchState: ExamLaunchState = {
      pack,
      mode: 'practice',
      shuffleQuestions: true,
      shuffleOptions: true,
    };

    navigate(`/subjects/${targetSubject.id}/exam`, { state: launchState });
  };

  return (
    <div className="space-y-6">
      {/* Header section */}
      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-firefly-soft border border-firefly/35 text-amber-800"
              aria-hidden="true"
            >
              <Sparkles className="h-4 w-4" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
              Sổ Tay Câu Sai &amp; Flashcard 🎴
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-ink-soft mt-1">
            Không gian ôn tập khoa học — Diệt sạch câu sai từ các đề thi để tự
            tin đạt điểm 9-10!
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* View Mode Toggle */}
          <div className="inline-flex items-center rounded-2xl bg-mist-deep p-1 border border-sage-border">
            <button
              type="button"
              onClick={() => setViewMode('flashcard')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                viewMode === 'flashcard'
                  ? 'bg-paper text-ink shadow-sm'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Flashcard</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                viewMode === 'list'
                  ? 'bg-paper text-ink shadow-sm'
                  : 'text-ink-soft hover:text-ink'
              }`}
            >
              <List className="h-3.5 w-3.5" />
              <span>Danh sách</span>
            </button>
          </div>

          {/* Practice Quiz CTA Button */}
          {filteredItems.length > 0 && (
            <button
              type="button"
              onClick={handleStartPracticeQuiz}
              className="inline-flex items-center gap-2 rounded-2xl bg-moss px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
            >
              <Play className="h-4 w-4 fill-current" />
              Làm bài test lại ({filteredItems.length} câu)
            </button>
          )}
        </div>
      </div>

      {/* Multi-subject selector bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          type="button"
          onClick={() => {
            setSelectedSubjectId('all');
            goToCard(0);
          }}
          className={`shrink-0 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold transition-colors border ${
            selectedSubjectId === 'all'
              ? 'bg-moss text-white border-moss shadow-sm'
              : 'bg-paper text-ink-soft border-sage-border hover:bg-sage-tint hover:text-ink'
          }`}
        >
          <span>Tất cả các môn</span>
          <span
            className={`rounded-full px-2 py-0.5 text-xs font-bold ${
              selectedSubjectId === 'all'
                ? 'bg-white/20 text-white'
                : 'bg-sage-tint text-ink'
            }`}
          >
            {subjectStats.all.unmastered}
          </span>
        </button>

        {subjects.map((sub) => {
          const stat = subjectStats.perSubject[sub.id];
          const unmastered = stat?.unmastered ?? 0;
          const isSelected = selectedSubjectId === sub.id;

          return (
            <button
              key={sub.id}
              type="button"
              onClick={() => {
                setSelectedSubjectId(sub.id);
                goToCard(0);
              }}
              className={`shrink-0 inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-semibold transition-colors border ${
                isSelected
                  ? 'bg-moss text-white border-moss shadow-sm'
                  : 'bg-paper text-ink-soft border-sage-border hover:bg-sage-tint hover:text-ink'
              }`}
            >
              <span>{sub.code}</span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  isSelected
                    ? 'bg-white/20 text-white'
                    : unmastered > 0
                      ? 'bg-blossom-soft text-blossom-ink'
                      : 'bg-sage-tint text-ink-soft'
                }`}
              >
                {unmastered}
              </span>
            </button>
          );
        })}
      </div>

      {/* Status filter bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-ink-soft mr-1 font-medium">Lọc theo:</span>
          {(
            [
              { key: 'unmastered', label: 'Cần ôn tập' },
              { key: 'all', label: 'Tất cả câu từng sai' },
              { key: 'mastered', label: 'Đã thuộc (Mastered)' },
              { key: 'frequent', label: 'Sai nhiều (≥ 2 lần)' },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              type="button"
              onClick={() => {
                setStatusFilter(tab.key);
                goToCard(0);
              }}
              className={`rounded-xl px-3 py-1 font-medium transition-colors ${
                statusFilter === tab.key
                  ? 'bg-ink text-paper font-semibold'
                  : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-ink-soft text-xs">
          Tìm thấy <strong className="text-ink">{filteredItems.length}</strong>{' '}
          câu hỏi
        </div>
      </div>

      {/* Main Content Area */}
      {filteredItems.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-sage-border bg-paper p-10 text-center space-y-4 shadow-cozy">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-firefly-soft text-amber-700 text-3xl">
            🍮
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-ink">
              {statusFilter === 'unmastered'
                ? 'Tuyệt vời quá! Bé không còn câu sai nào cần ôn!'
                : 'Chưa có câu hỏi nào trong danh mục này'}
            </h3>
            <p className="text-sm text-ink-soft max-w-md mx-auto">
              {statusFilter === 'unmastered'
                ? 'Bé đã chinh phục hết các câu từng sai của môn này rồi. Hãy thử sức thêm các đề thi mới nhé!'
                : 'Làm bài thi thử và quiz, hệ thống sẽ tự động lưu lại những câu bé chọn nhầm để ôn tập tại đây.'}
            </p>
          </div>
          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-2xl bg-moss px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
            >
              Về trang chủ chọn đề thi
            </Link>
          </div>
        </div>
      ) : viewMode === 'flashcard' && currentItem ? (
        /* Flashcard Mode */
        <div className="space-y-4 max-w-3xl mx-auto">
          {/* Card Top Control Bar */}
          <div className="flex items-center justify-between text-xs sm:text-sm text-ink-soft">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ink">
                Thẻ {safeIndex + 1} / {filteredItems.length}
              </span>
              <span className="inline-flex items-center gap-1 rounded-lg bg-sage-tint px-2 py-0.5 font-bold text-ink">
                {currentItem.subject.code}
              </span>
              {currentItem.stat.wrongCount >= 2 && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-blossom-soft px-2 py-0.5 text-blossom-ink font-semibold">
                  <AlertTriangle className="h-3 w-3" />
                  Sai {currentItem.stat.wrongCount} lần
                </span>
              )}
              {currentItem.stat.mastered && (
                <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 text-emerald-800 px-2 py-0.5 font-semibold">
                  <Check className="h-3 w-3" />
                  Đã thuộc
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Thẻ trước"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Thẻ sau"
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Flashcard Body */}
          <div
            className={`rounded-3xl border border-sage-border bg-paper p-6 sm:p-8 shadow-cozy min-h-[380px] flex flex-col justify-between gap-6 transition-all duration-300 ${
              isFlipped ? 'ring-2 ring-moss/30' : ''
            }`}
          >
            {/* Front Side */}
            {!isFlipped ? (
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-wider font-bold text-ink-soft">
                      Mặt trước: Câu hỏi
                    </span>
                    <span className="text-xs text-ink-soft">
                      Phím tắt: [Space] Lật thẻ
                    </span>
                  </div>
                  <h2 className="text-base sm:text-lg font-semibold text-ink leading-relaxed">
                    {currentItem.question.prompt}
                  </h2>
                </div>

                {/* Question Diagram / Image if present */}
                <QuestionDiagram
                  imageUrl={currentItem.question.imageUrl}
                  imageCaption={currentItem.question.imageCaption}
                />

                {/* Option list for preview */}
                <div className="space-y-2 pt-2">
                  <p className="text-xs text-ink-soft font-medium">
                    Chọn đáp án bạn nghĩ là đúng (hoặc bấm lật thẻ để xem ngay):
                  </p>
                  <div className="grid gap-2">
                    {currentItem.question.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      const isSelected = selectedOptionId === opt.id;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setSelectedOptionId(opt.id)}
                          className={`w-full text-left p-3.5 rounded-2xl border text-sm transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-sage-tint border-moss text-ink font-medium shadow-sm'
                              : 'bg-paper border-sage-border text-ink hover:bg-mist-deep'
                          }`}
                        >
                          <span
                            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                              isSelected
                                ? 'bg-moss text-white'
                                : 'bg-mist-deep text-ink-soft border border-sage-border'
                            }`}
                          >
                            {letter}
                          </span>
                          <span className="pt-0.5">{opt.text}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 flex justify-center">
                  <button
                    type="button"
                    onClick={() => setIsFlipped(true)}
                    className="inline-flex items-center gap-2.5 rounded-2xl bg-firefly px-6 py-3 text-sm font-bold text-ink shadow-sm hover:bg-firefly-bright transition-all transform hover:scale-[1.02]"
                  >
                    <RotateCcw className="h-4 w-4" />
                    Lật thẻ xem đáp án &amp; giải thích
                  </button>
                </div>
              </div>
            ) : (
              /* Back Side */
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-center justify-between border-b border-sage-border/60 pb-3">
                  <span className="text-xs uppercase tracking-wider font-bold text-moss flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4" />
                    Mặt sau: Đáp án chuẩn &amp; Lời giải
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="text-xs text-ink-soft hover:text-ink inline-flex items-center gap-1"
                  >
                    <RotateCcw className="h-3 w-3" />
                    Lật lại mặt trước
                  </button>
                </div>

                {/* Prompt reminder */}
                <p className="text-sm font-medium text-ink-soft line-clamp-2">
                  {currentItem.question.prompt}
                </p>

                {/* Correct Options Highlight */}
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                    Đáp án chính xác:
                  </p>
                  <div className="grid gap-2">
                    {currentItem.question.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      const isCorrect =
                        currentItem.question.correctOptionIds.includes(opt.id);
                      const isUserSelected = selectedOptionId === opt.id;

                      if (!isCorrect && !isUserSelected) return null;

                      return (
                        <div
                          key={opt.id}
                          className={`p-3.5 rounded-2xl border text-sm flex items-start gap-3 ${
                            isCorrect
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                              : 'bg-rose-50 border-rose-200 text-rose-950 line-through opacity-70'
                          }`}
                        >
                          <span
                            className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                              isCorrect
                                ? 'bg-emerald-600 text-white'
                                : 'bg-rose-500 text-white'
                            }`}
                          >
                            {letter}
                          </span>
                          <div className="space-y-0.5">
                            <div>{opt.text}</div>
                            {isCorrect && (
                              <span className="text-xs text-emerald-700 font-semibold inline-flex items-center gap-1">
                                <CheckCircle2 className="h-3 w-3" /> Đáp án đúng
                              </span>
                            )}
                            {!isCorrect && isUserSelected && (
                              <span className="text-xs text-rose-700 font-semibold inline-flex items-center gap-1">
                                <XCircle className="h-3 w-3" /> Bạn đã chọn câu này
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Detailed Explanation */}
                <div className="rounded-2xl border border-sage-border/80 bg-mist-deep p-4 space-y-2">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                    <HelpCircle className="h-4 w-4 text-moss" />
                    <span>Giải thích chi tiết &amp; Nguồn kiến thức:</span>
                  </div>
                  <p className="text-sm text-ink leading-relaxed whitespace-pre-line">
                    {currentItem.question.explanation ||
                      'Câu hỏi này cần nắm vững định nghĩa trong Slide bài giảng.'}
                  </p>
                </div>

                {/* Self-Assessment Action Buttons */}
                <div className="pt-2 grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      handleToggleMastered(currentItem, false);
                      handleNext();
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-xs sm:text-sm font-bold text-rose-800 hover:bg-rose-100 transition-colors"
                  >
                    <XCircle className="h-4 w-4" />
                    <span>Vẫn chưa nhớ [Phím 1]</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      handleToggleMastered(currentItem, true);
                      handleNext();
                    }}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-moss px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-moss-hover transition-colors"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Đã hiểu &amp; nhớ rồi! [Phím 2]</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* List Mode */
        <div className="space-y-4">
          <div className="divide-y divide-sage-border/80 rounded-3xl border border-sage-border bg-paper p-4 sm:p-6 shadow-cozy">
            {filteredItems.map((item, idx) => {
              const isMastered = item.stat.mastered;
              return (
                <div key={item.question.id} className="py-4 first:pt-0 last:pb-0 space-y-3">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="text-xs font-bold text-ink-soft">
                          #{idx + 1}
                        </span>
                        <span className="rounded-lg bg-sage-tint px-2 py-0.5 text-xs font-bold text-ink">
                          {item.subject.code}
                        </span>
                        {item.stat.wrongCount >= 2 && (
                          <span className="rounded-lg bg-blossom-soft px-2 py-0.5 text-xs font-semibold text-blossom-ink flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            Sai {item.stat.wrongCount} lần
                          </span>
                        )}
                        {isMastered && (
                          <span className="rounded-lg bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold flex items-center gap-1">
                            <Check className="h-3 w-3" /> Đã thuộc
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-ink leading-relaxed">
                        {item.question.prompt}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleToggleMastered(item, !isMastered)}
                      className={`shrink-0 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                        isMastered
                          ? 'border border-sage-border text-ink-soft hover:bg-sage-tint'
                          : 'bg-moss text-white hover:bg-moss-hover shadow-sm'
                      }`}
                    >
                      {isMastered ? (
                        <>
                          <RotateCcw className="h-3.5 w-3.5" />
                          <span>Học lại</span>
                        </>
                      ) : (
                        <>
                          <Check className="h-3.5 w-3.5" />
                          <span>Đánh dấu Đã thuộc</span>
                        </>
                      )}
                    </button>
                  </div>

                  {item.question.imageUrl && (
                    <div className="max-w-md pt-1">
                      <QuestionDiagram
                        imageUrl={item.question.imageUrl}
                        imageCaption={item.question.imageCaption}
                        compact
                      />
                    </div>
                  )}

                  {/* Options with correct highlighted */}
                  <div className="grid gap-1.5 pl-2 sm:pl-4 border-l-2 border-sage-border">
                    {item.question.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      const isCorrect = item.question.correctOptionIds.includes(
                        opt.id
                      );
                      return (
                        <div
                          key={opt.id}
                          className={`text-xs p-2 rounded-xl flex items-center gap-2 ${
                            isCorrect
                              ? 'bg-emerald-50 text-emerald-900 font-semibold'
                              : 'text-ink-soft'
                          }`}
                        >
                          <span className="font-bold">{letter}.</span>
                          <span>{opt.text}</span>
                          {isCorrect && (
                            <span className="ml-auto text-[11px] text-emerald-700">
                              (Đáp án đúng)
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Explanation box */}
                  {item.question.explanation && (
                    <div className="rounded-xl bg-mist-deep p-3 text-xs text-ink leading-relaxed">
                      <strong className="text-moss">Giải thích: </strong>
                      {item.question.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
