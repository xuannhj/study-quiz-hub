import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Eye,
  EyeOff,
  Flag,
  Send,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import {
  recordAnsweredQuestions,
  recordCompletedExam,
} from '../../services/studyStreak';
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
import { QuestionDiagram } from './QuestionDiagram';

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
  const navigate = useNavigate();
  const subject = storageService.getSubjectById(subjectId);

  const initialState = location.state as
    | ExamLaunchState
    | { resume?: boolean }
    | null;

  useEffect(() => {
    if (initialState && 'pack' in initialState) {
      navigate(location.pathname, { replace: true, state: { resume: true } });
    }
  }, [initialState, location.pathname, navigate]);

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
  const [lastSpentSeconds, setLastSpentSeconds] = useState<number>(60);
  const [focusMode, setFocusMode] = useState<boolean>(false);

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
    const elapsedWallSeconds = Math.max(
      0,
      Math.round((Date.now() - new Date(session.startedAt).getTime()) / 1000)
    );
    const spent =
      session.mode === 'exam'
        ? Math.max(0, totalSeconds - session.remainingSeconds)
        : elapsedWallSeconds;

    const checkedSet = new Set(session.checkedQuestionIds);
    const uncheckedResults = summary.results.filter(
      (r) => !checkedSet.has(r.question.id)
    );
    if (uncheckedResults.length > 0) {
      recordAnsweredQuestions(
        uncheckedResults.length,
        uncheckedResults.filter((r) => r.isCorrect).length
      );
    }
    recordCompletedExam();

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

    setLastSpentSeconds(spent);
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
    if (!session.checkedQuestionIds.includes(currentQuestion.id)) {
      const selected = session.answers[currentQuestion.id] ?? [];
      recordAnsweredQuestions(
        1,
        isAnswerCorrect(currentQuestion, selected) ? 1 : 0
      );
    }
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
      <div className="rounded-3xl bg-paper p-8 text-center border border-sage-border shadow-cozy">
        <p className="text-ink-soft">Không tìm thấy môn học.</p>
        <Link to="/" className="mt-2 inline-block text-sm font-semibold text-moss">
          Về trang chủ
        </Link>
      </div>
    );
  }

  if (!session || questions.length === 0 || !currentQuestion) {
    return (
      <div className="rounded-3xl bg-paper p-8 text-center border border-sage-border shadow-cozy space-y-3">
        <p className="text-ink">
          Chưa có câu hỏi nào phù hợp để bắt đầu bài thi này.
        </p>
        <Link
          to={`/subjects/${subject.id}`}
          className="inline-block rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover"
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
        subjectName={subject.name}
        examTitle={session.examTitle}
        summary={gradeSummary}
        spentSeconds={lastSpentSeconds}
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
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-3xl border border-sage-border bg-paper px-5 py-4 shadow-cozy">
        <div>
          <span className="inline-block rounded-lg bg-moss-soft px-2 py-0.5 text-xs font-semibold text-moss">
            {session.mode === 'exam' ? 'Phòng thi bấm giờ' : 'Chế độ ôn tập'}
          </span>
          <h1 className="mt-1 text-base font-bold text-ink">
            {session.examTitle}
          </h1>
        </div>

        <div className="flex items-center gap-2.5">
          {session.mode === 'exam' && (
            <div className="inline-flex items-center gap-1.5 rounded-2xl bg-sage-tint px-3.5 py-2 text-sm font-mono font-semibold text-ink">
              <Clock className="h-4 w-4 text-moss" />
              {formatTimer(session.remainingSeconds)}
            </div>
          )}
          <button
            type="button"
            onClick={() => setFocusMode((prev) => !prev)}
            aria-pressed={focusMode}
            className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3 py-2 text-xs font-medium text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
          >
            {focusMode ? (
              <Eye className="h-3.5 w-3.5 text-moss" />
            ) : (
              <EyeOff className="h-3.5 w-3.5 text-ink-soft" />
            )}
            <span className="hidden sm:inline">
              {focusMode ? 'Hiện danh sách câu' : 'Chế độ Focus'}
            </span>
          </button>
          <button
            type="button"
            onClick={handleSubmitExam}
            className="inline-flex items-center gap-1.5 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover transition-colors"
          >
            <Send className="h-4 w-4" />
            Nộp bài
          </button>
        </div>
      </div>

      <div
        className={`grid gap-5 ${
          focusMode ? 'max-w-3xl mx-auto' : 'lg:grid-cols-[1fr_260px]'
        }`}
      >
        <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy space-y-5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-ink">
                Câu {session.currentIndex + 1} / {questions.length}
              </span>
              {currentQuestion.type === 'multiple' && (
                <span className="rounded-lg bg-rain-soft px-2.5 py-0.5 text-xs font-semibold text-rain-ink">
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
                className={`inline-flex items-center gap-1 rounded-xl border px-2.5 py-1 text-xs font-medium transition-colors ${
                  isBookmarked
                    ? 'border-firefly/50 bg-firefly-soft text-wood'
                    : 'border-sage-border text-ink-soft hover:bg-sage-tint'
                }`}
              >
                <Bookmark className="h-3.5 w-3.5" />
                {isBookmarked ? 'Đã lưu' : 'Lưu câu'}
              </button>
              <button
                type="button"
                onClick={toggleFlag}
                className={`inline-flex items-center gap-1 rounded-xl border px-2.5 py-1 text-xs font-medium transition-colors ${
                  isFlagged
                    ? 'border-blossom/60 bg-blossom-soft text-blossom-ink'
                    : 'border-sage-border text-ink-soft hover:bg-sage-tint'
                }`}
              >
                <Flag className="h-3.5 w-3.5" />
                {isFlagged ? 'Đã cắm cờ' : 'Cắm cờ'}
              </button>
            </div>
          </div>

          <p className="text-base font-medium leading-relaxed text-ink">
            {currentQuestion.prompt}
          </p>

          <QuestionDiagram
            imageUrl={currentQuestion.imageUrl}
            imageCaption={currentQuestion.imageCaption}
          />

          <div className="space-y-2.5">
            {currentQuestion.options.map((opt, idx) => {
              const selected = selectedIds.includes(opt.id);
              const isCorrectOpt = currentQuestion.correctOptionIds.includes(
                opt.id
              );

              let optionClass =
                'border-sage-border bg-paper hover:border-moss/50 hover:bg-mist/70';
              if (isChecked) {
                if (isCorrectOpt) {
                  optionClass =
                    'border-moss bg-moss-soft text-ink font-medium';
                } else if (selected) {
                  optionClass =
                    'border-blossom bg-blossom-soft text-blossom-ink';
                }
              } else if (selected) {
                optionClass =
                  'border-moss bg-moss-soft/75 text-ink ring-1 ring-moss';
              }

              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => toggleOption(opt.id)}
                  className={`w-full text-left rounded-2xl border p-3.5 text-sm transition-all flex items-start gap-3 ${optionClass}`}
                >
                  <span
                    className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-xs font-mono font-semibold ${
                      selected
                        ? 'border-moss bg-moss text-white'
                        : 'border-sage-border bg-mist text-ink-soft'
                    }`}
                  >
                    {LETTERS[idx] ?? idx + 1}
                  </span>
                  <span className="pt-0.5 leading-relaxed">{opt.text}</span>
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
                className="inline-flex items-center gap-1.5 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover disabled:opacity-50 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4" />
                Kiểm tra đáp án
              </button>
            </div>
          )}

          {isChecked && (
            <div
              className={`rounded-2xl border p-4 text-sm ${
                isPracticeRight
                  ? 'border-moss/40 bg-moss-soft text-ink'
                  : 'border-firefly/50 bg-firefly-soft text-wood'
              }`}
            >
              <p className="font-bold">
                {isPracticeRight
                  ? 'Chính xác!'
                  : 'Câu này sẽ quay lại sau nha'}
              </p>
              <p className="mt-0.5 text-xs text-ink-soft">
                {isPracticeRight
                  ? 'Nhớ chắc câu này rồi — đom đóm ghi nhận thêm điểm sáng cho em bé nè ✨'
                  : 'Não mình đang làm quen với ý này đó, đọc nhẹ phần giải thích bên dưới nha.'}
              </p>
              {currentQuestion.explanation && (
                <p className="mt-2 text-ink/90 leading-relaxed">
                  <strong>Giải thích: </strong>
                  {currentQuestion.explanation}
                </p>
              )}
            </div>
          )}

          <div className="flex items-center justify-between border-t border-sage-border/70 pt-4">
            <button
              type="button"
              disabled={session.currentIndex === 0}
              onClick={() =>
                updateSession((prev) => ({
                  ...prev,
                  currentIndex: Math.max(0, prev.currentIndex - 1),
                }))
              }
              className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-sage-tint disabled:opacity-40 transition-colors"
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
              className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-sage-tint disabled:opacity-40 transition-colors"
            >
              Câu tiếp
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {!focusMode && (
        <aside className="rounded-3xl border border-sage-border bg-paper p-4 shadow-cozy h-fit space-y-4">
          <h2 className="text-sm font-bold text-ink">Danh sách câu hỏi</h2>
          <div className="grid grid-cols-5 gap-2">
            {questions.map((q, idx) => {
              const answered = (session.answers[q.id]?.length ?? 0) > 0;
              const flagged = session.flaggedQuestionIds.includes(q.id);
              const isCurrent = idx === session.currentIndex;

              let btnClass = 'border-sage-border bg-mist text-ink-soft';
              if (flagged) {
                btnClass = 'border-firefly bg-firefly-soft text-wood';
              } else if (answered) {
                btnClass = 'border-moss/50 bg-moss-soft text-moss';
              }
              if (isCurrent) {
                btnClass += ' ring-2 ring-moss';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() =>
                    updateSession((prev) => ({ ...prev, currentIndex: idx }))
                  }
                  className={`h-9 rounded-xl border text-xs font-mono font-semibold transition-all ${btnClass}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
          <p className="text-xs text-ink-soft leading-relaxed">
            Phím tắt: <code className="font-mono text-moss">1-6</code> chọn đáp án,{' '}
            <code className="font-mono text-moss">←/→</code> chuyển câu,{' '}
            <code className="font-mono text-moss">F</code> cắm cờ,{' '}
            <code className="font-mono text-moss">Enter</code> kiểm tra.
          </p>
        </aside>
        )}
      </div>
    </div>
  );
}
