import { useCallback, useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Clock,
  Edit3,
  Eye,
  EyeOff,
  Flag,
  Send,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import {
  recordAnsweredQuestions,
  recordCompletedChapter,
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
import { FormattedText, FormattedOptionText } from '../../components/FormattedText';
import { cleanQuestionPrompt } from '../../utils/cleanPrompt';

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

  const [showNoteBox, setShowNoteBox] = useState(false);
  const [noteDraft, setNoteDraft] = useState('');
  const [savedNoteSuccess, setSavedNoteSuccess] = useState(false);

  useEffect(() => {
    if (!currentQuestion) return;
    const existing = storageService
      .getAllNotes()
      .find((n) => n.questionId === currentQuestion.id);
    setNoteDraft(existing?.content ?? '');
    setSavedNoteSuccess(false);
  }, [currentQuestion?.id]);

  const handleSaveQuestionNote = useCallback(() => {
    if (!currentQuestion || !subject) return;
    if (!noteDraft.trim()) return;
    storageService.saveNote({
      subjectId: subject.id,
      questionId: currentQuestion.id,
      questionPrompt: currentQuestion.prompt,
      content: noteDraft.trim(),
    });
    setSavedNoteSuccess(true);
    setTimeout(() => setSavedNoteSuccess(false), 2000);
  }, [currentQuestion, subject, noteDraft]);

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

    // Auto-complete chapter(s) if this exam/quiz corresponds to specific chapter(s)
    const targetPack = subject.examPacks.find(
      (p) => p.id === session.examPackId
    );
    const targetChapterIds =
      targetPack?.chapterIds && targetPack.chapterIds.length > 0
        ? targetPack.chapterIds
        : [];
    if (targetChapterIds.length > 0 && targetChapterIds.length <= 3) {
      for (let i = 0; i < targetChapterIds.length; i++) {
        recordCompletedChapter();
      }
    }

    storageService.recordExamAttempt(
      subject.id,
      {
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
      },
      targetChapterIds.length <= 3 ? targetChapterIds : undefined
    );

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
    const selected = session.answers[currentQuestion.id] ?? [];
    if (selected.length === 0) return;
    const isCorrect = isAnswerCorrect(currentQuestion, selected);

    if (!session.checkedQuestionIds.includes(currentQuestion.id)) {
      recordAnsweredQuestions(1, isCorrect ? 1 : 0);
    }

    if (subject) {
      storageService.recordPracticeAnswer(
        subject.id,
        currentQuestion.id,
        isCorrect
      );
      setProgress(storageService.getProgress(subject.id));
    }

    updateSession((prev) =>
      prev.checkedQuestionIds.includes(currentQuestion.id)
        ? prev
        : {
            ...prev,
            checkedQuestionIds: [...prev.checkedQuestionIds, currentQuestion.id],
          }
    );
  }, [currentQuestion, session, subject, updateSession]);

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
      if (e.ctrlKey || e.metaKey || e.altKey) {
        return;
      }
      const lowerKey = e.key.toLowerCase();
      if (/^[1-6]$/.test(e.key)) {
        const opt = currentQuestion.options[Number(e.key) - 1];
        if (opt) toggleOption(opt.id);
      } else if (/^[a-e]$/.test(lowerKey)) {
        const idx = lowerKey.charCodeAt(0) - 'a'.charCodeAt(0);
        const opt = currentQuestion.options[idx];
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
      } else if (lowerKey === 'f') {
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
              <button
                type="button"
                onClick={() => setShowNoteBox((prev) => !prev)}
                className={`inline-flex items-center gap-1 rounded-xl border px-2.5 py-1 text-xs font-medium transition-colors ${
                  noteDraft
                    ? 'border-amber-300 bg-amber-50 text-amber-900 font-semibold'
                    : 'border-sage-border text-ink-soft hover:bg-sage-tint'
                }`}
                title="Ghi chú kiến thức mới cho câu này"
              >
                <Edit3 className="h-3.5 w-3.5" />
                <span>{noteDraft ? 'Đã ghi chú 📝' : 'Ghi chú'}</span>
              </button>
            </div>
          </div>

          <div className="text-base font-medium leading-relaxed text-ink">
            <FormattedText content={cleanQuestionPrompt(currentQuestion.prompt)} />
          </div>

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
                  <div className="pt-0.5 leading-relaxed flex-1">
                    <FormattedOptionText text={opt.text} />
                  </div>
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
                <div className="mt-2 text-ink/90 leading-relaxed text-xs sm:text-sm">
                  <strong className="font-semibold text-ink">Giải thích: </strong>
                  <FormattedText
                    content={currentQuestion.explanation}
                    className="inline font-normal"
                  />
                </div>
              )}
              {noteDraft && (
                <div className="mt-3 rounded-xl border border-amber-300/70 bg-amber-50/90 p-3 text-xs text-amber-950 space-y-1">
                  <span className="font-bold text-amber-900 flex items-center gap-1">
                    <Edit3 className="h-3 w-3 text-amber-700" />
                    Ghi chú của Xuân Nhi cho câu này:
                  </span>
                  <p className="leading-relaxed">{noteDraft}</p>
                </div>
              )}
            </div>
          )}

          {showNoteBox && (
            <div className="rounded-2xl border border-amber-300/80 bg-amber-50/80 p-4 space-y-2.5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-950 flex items-center gap-1.5">
                  <Edit3 className="h-3.5 w-3.5 text-amber-700" />
                  Ghi chú kiến thức mới (Tự động lưu vào Sổ tay)
                </span>
                {savedNoteSuccess && (
                  <span className="text-xs font-semibold text-emerald-700">
                    ✓ Đã lưu thành công!
                  </span>
                )}
              </div>
              <textarea
                value={noteDraft}
                onChange={(e) => setNoteDraft(e.target.value)}
                placeholder="Ghi lại kiến thức mới, bẫy lý thuyết, công thức cần nhớ cho câu này..."
                rows={2}
                className="w-full rounded-xl border border-amber-200 bg-white p-2.5 text-xs text-ink placeholder:text-ink-soft/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
              <div className="flex items-center justify-between text-[11px] text-amber-900/80">
                <span>Ghi chú này sẽ xuất hiện trong Sổ tay của bé để ôn lại.</span>
                <button
                  type="button"
                  onClick={handleSaveQuestionNote}
                  disabled={!noteDraft.trim()}
                  className="rounded-xl bg-amber-200 px-3 py-1 font-bold text-amber-950 hover:bg-amber-300 disabled:opacity-50 transition-colors"
                >
                  Lưu ghi chú
                </button>
              </div>
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
              const qSelected = session.answers[q.id] ?? [];
              const answered = qSelected.length > 0;
              const flagged = session.flaggedQuestionIds.includes(q.id);
              const isCurrent = idx === session.currentIndex;
              const isQChecked =
                session.mode === 'practice' &&
                session.checkedQuestionIds.includes(q.id);
              const isQCorrect = isQChecked
                ? isAnswerCorrect(q, qSelected)
                : null;

              let btnClass = 'border-sage-border bg-mist text-ink-soft';
              if (isQChecked) {
                btnClass = isQCorrect
                  ? 'border-moss/50 bg-moss-soft text-moss'
                  : 'border-blossom bg-blossom-soft text-blossom-ink';
              } else if (flagged) {
                btnClass = 'border-firefly bg-firefly-soft text-wood';
              } else if (answered) {
                btnClass = 'border-moss/50 bg-moss-soft text-moss';
              }

              if (isCurrent) {
                btnClass +=
                  isQChecked && !isQCorrect
                    ? ' ring-2 ring-blossom'
                    : ' ring-2 ring-moss';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() =>
                    updateSession((prev) => ({ ...prev, currentIndex: idx }))
                  }
                  className={`relative h-9 rounded-xl border text-xs font-mono font-semibold transition-all ${btnClass}`}
                >
                  {idx + 1}
                  {flagged && isQChecked && (
                    <span
                      aria-hidden="true"
                      className="absolute -top-1 -right-1 h-2.5 w-2.5 rounded-full bg-firefly border border-paper"
                    />
                  )}
                </button>
              );
            })}
          </div>
          {session.mode === 'practice' && (
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-ink-soft pt-1">
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-sm border border-moss/50 bg-moss-soft" />
                Đúng
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-sm border border-blossom bg-blossom-soft" />
                Sai
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="h-2.5 w-2.5 rounded-sm border border-firefly bg-firefly-soft" />
                Cắm cờ
              </span>
            </div>
          )}
          <p className="text-xs text-ink-soft leading-relaxed">
            Phím tắt: <code className="font-mono text-moss">A-D</code> hoặc{' '}
            <code className="font-mono text-moss">1-6</code> chọn đáp án,{' '}
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
