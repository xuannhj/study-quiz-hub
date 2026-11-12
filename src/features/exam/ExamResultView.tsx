import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import type { ExamGradeSummary } from '../../services/exam/examEngine';
import type { Question } from '../../types/study';
import { QuestionDiagram } from './QuestionDiagram';
import { generateSessionCompanionNote } from '../../services/studyCompanion';
import {
  computeStreakStats,
  loadStreakState,
} from '../../services/studyStreak';

interface ExamResultViewProps {
  subjectId: string;
  subjectName?: string;
  examTitle: string;
  summary: ExamGradeSummary;
  spentSeconds?: number;
  flaggedIds: string[];
  onRetryWrong: (wrongQuestions: Question[]) => void;
}

type ReviewFilter = 'all' | 'wrong' | 'flagged';

export function ExamResultView({
  subjectId,
  subjectName,
  examTitle,
  summary,
  spentSeconds = 60,
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

  const streakStats = computeStreakStats(loadStreakState());
  const companionNote = generateSessionCompanionNote({
    total: summary.totalCount,
    correct: summary.correctCount,
    wrong: wrongQuestions.length,
    minutes: Math.max(1, Math.round(spentSeconds / 60)),
    streak: Math.max(1, streakStats.currentStreakDays),
    subjectName: subjectName ?? subjectId.toUpperCase(),
    daysAway: streakStats.daysAwayBeforeToday,
  });

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy">
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
          Kết quả làm bài
        </p>
        <h1 className="mt-1 text-2xl font-bold text-ink">{examTitle}</h1>

        {/* Warm Companion Recap & Comforting Feedback */}
        <div className="mt-4 rounded-2xl border border-firefly/35 bg-firefly-soft/75 p-4 space-y-1.5">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-wood">
            <Sparkles className="h-3.5 w-3.5 text-firefly shrink-0" />
            <span>
              Hôm nay em đã ôn {summary.totalCount} câu, nhớ được{' '}
              {summary.correctCount} câu
            </span>
          </div>
          <p className="text-sm leading-relaxed text-ink">{companionNote}</p>
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-mist p-4 border border-sage-border/70">
            <div className="text-xs text-ink-soft">Điểm số</div>
            <div className="mt-1 text-3xl font-bold text-moss">
              {summary.scorePercent}%
            </div>
          </div>
          <div className="rounded-2xl bg-mist p-4 border border-sage-border/70">
            <div className="text-xs text-ink-soft">Số câu nhớ được</div>
            <div className="mt-1 text-3xl font-bold text-ink">
              {summary.correctCount}/{summary.totalCount}
            </div>
          </div>
          <div className="rounded-2xl bg-mist p-4 border border-sage-border/70">
            <div className="text-xs text-ink-soft">Trạng thái</div>
            <div
              className={`mt-1 inline-flex items-center gap-1.5 text-lg font-bold ${
                summary.passed ? 'text-moss' : 'text-wood'
              }`}
            >
              {summary.passed ? (
                <>
                  <CheckCircle2 className="h-5 w-5" /> Đạt (Passed)
                </>
              ) : (
                <>
                  <Sparkles className="h-5 w-5 text-firefly" /> Đang làm quen
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/subjects/${subjectId}`}
            className="rounded-2xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
          >
            Quay về môn học
          </Link>
          {wrongQuestions.length > 0 && (
            <button
              type="button"
              onClick={() => onRetryWrong(wrongQuestions)}
              className="inline-flex items-center gap-2 rounded-2xl bg-firefly px-4 py-2 text-sm font-semibold text-ink hover:bg-firefly-bright transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              Ôn lại {wrongQuestions.length} câu hẹn gặp sau
            </button>
          )}
        </div>
      </div>

      {summary.chapterBreakdown.length > 0 && (
        <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy space-y-3">
          <h2 className="text-base font-bold text-ink">
            Phân tích theo Chương
          </h2>
          <div className="space-y-2.5">
            {summary.chapterBreakdown.map((ch) => (
              <div key={ch.chapterId} className="space-y-1">
                <div className="flex justify-between text-xs font-medium text-ink-soft">
                  <span>{ch.chapterTitle}</span>
                  <span>
                    {ch.correct}/{ch.total} ({ch.accuracyPercent}%)
                  </span>
                </div>
                <div className="h-2 rounded-full bg-mist-deep overflow-hidden">
                  <div
                    className="h-full bg-moss rounded-full"
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
          <h2 className="text-lg font-bold text-ink">Chi tiết từng câu hỏi</h2>
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
                className={`rounded-xl px-3 py-1.5 text-xs font-medium border transition-colors ${
                  filter === key
                    ? 'border-moss bg-moss-soft text-moss font-semibold'
                    : 'border-sage-border bg-paper text-ink-soft hover:bg-sage-tint'
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
            className={`rounded-3xl border p-5 bg-paper shadow-cozy ${
              item.isCorrect ? 'border-moss/40' : 'border-blossom/60'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <p className="font-semibold text-ink text-sm leading-relaxed">
                Câu {idx + 1}: {item.question.prompt}
              </p>
              <span
                className={`shrink-0 rounded-lg px-2.5 py-0.5 text-xs font-semibold ${
                  item.isCorrect
                    ? 'bg-moss-soft text-moss'
                    : 'bg-blossom-soft text-blossom-ink'
                }`}
              >
                {item.isCorrect ? 'Đúng' : 'Sai'}
              </span>
            </div>

            {item.question.imageUrl && (
              <div className="mt-3">
                <QuestionDiagram
                  imageUrl={item.question.imageUrl}
                  imageCaption={item.question.imageCaption}
                  compact
                />
              </div>
            )}

            <div className="mt-3 space-y-1.5 text-sm">
              {item.question.options.map((opt) => {
                const isRight = item.question.correctOptionIds.includes(opt.id);
                const isSelected = item.selectedOptionIds.includes(opt.id);
                let style = 'border-sage-border bg-mist/60 text-ink-soft';
                let label = '';
                if (isRight && isSelected) {
                  style = 'border-moss bg-moss-soft text-ink font-medium';
                  label = 'Đáp án đúng (Bạn đã chọn)';
                } else if (isRight) {
                  style =
                    'border-moss/70 border-dashed bg-moss-soft/50 text-ink font-medium';
                  label = 'Đáp án đúng (Bạn bỏ sót)';
                } else if (isSelected) {
                  style =
                    'border-blossom bg-blossom-soft text-blossom-ink';
                  label = 'Bạn chọn (Sai)';
                }
                return (
                  <div
                    key={opt.id}
                    className={`rounded-xl border px-3.5 py-2 flex items-center justify-between gap-3 ${style}`}
                  >
                    <span>{opt.text}</span>
                    {label && (
                      <span className="text-xs shrink-0">{label}</span>
                    )}
                  </div>
                );
              })}
            </div>

            {item.question.explanation && (
              <div className="mt-3 rounded-2xl bg-rain-soft/45 border border-rain/20 p-3.5 text-xs text-ink leading-relaxed">
                <strong className="text-rain-ink">Giải thích: </strong>
                {item.question.explanation}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
