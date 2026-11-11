import { useCallback, useEffect, useState } from 'react';
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
      options:
        orderedOpts.length === base.options.length ? orderedOpts : base.options,
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
  }, [
    session?.remainingSeconds,
    session?.mode,
    gradeSummary,
    handleSubmitExam,
  ]);

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
