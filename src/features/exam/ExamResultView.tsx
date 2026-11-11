import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
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
                  style =
                    'border-emerald-400 bg-emerald-50 text-emerald-900 font-medium';
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
