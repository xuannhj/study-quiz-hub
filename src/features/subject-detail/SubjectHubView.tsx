import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  Bookmark,
  BookOpen,
  CheckCircle2,
  FileQuestion,
  GraduationCap,
  History,
  Laptop,
  Play,
  RotateCcw,
  Shuffle,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import type { ExamMode, ExamPack } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';
import { PracticalExamView } from '../pe/PracticalExamView';
import { ExamAnswerBankView } from './ExamAnswerBankView';
import { FormattedText } from '../../components/FormattedText';

type SubjectTab = 'study' | 'quiz' | 'final' | 'pe' | 'mistakes' | 'answer-bank';

export function SubjectHubView() {
  const { subjectId = '' } = useParams();
  const navigate = useNavigate();
  const subject = storageService.getSubjectById(subjectId);
  const [progress, setProgress] = useState(() =>
    storageService.getProgress(subjectId)
  );

  useEffect(() => {
    setProgress(storageService.getProgress(subjectId));
  }, [subjectId]);

  const isExamBank = Boolean(subject?.id.includes('-past'));
  const hasPracticalExams = Boolean(
    subject?.practicalExams && subject.practicalExams.length > 0
  );

  const [activeTab, setActiveTab] = useState<SubjectTab>(() => {
    if (subject?.id.includes('-past')) return 'final';
    return 'study';
  });
  const [selectedPack, setSelectedPack] = useState<ExamPack | null>(null);
  const [launchMode, setLaunchMode] = useState<ExamMode>('exam');
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);

  const [customQuizChapters, setCustomQuizChapters] = useState<string[]>([]);
  const [customQuizCount, setCustomQuizCount] = useState(20);
  const [finalCount, setFinalCount] = useState(50);

  if (!subject) {
    return (
      <div className="rounded-3xl border border-sage-border bg-paper p-8 text-center shadow-cozy">
        <p className="text-ink-soft">Không tìm thấy môn học.</p>
        <Link
          to="/"
          className="mt-3 inline-block text-sm font-semibold text-moss"
        >
          Quay về danh sách môn học
        </Link>
      </div>
    );
  }

  const quizPacks = subject.examPacks.filter((p) => p.category === 'quiz');
  const finalPacks = subject.examPacks.filter((p) => p.category === 'final');

  const attemptStatsByPackId = new Map<
    string,
    { count: number; bestScore: number; passed: boolean }
  >();
  for (const att of progress.attempts) {
    const prev = attemptStatsByPackId.get(att.examPackId);
    if (!prev) {
      attemptStatsByPackId.set(att.examPackId, {
        count: 1,
        bestScore: att.scorePercent,
        passed: att.passed,
      });
    } else {
      attemptStatsByPackId.set(att.examPackId, {
        count: prev.count + 1,
        bestScore: Math.max(prev.bestScore, att.scorePercent),
        passed: prev.passed || att.passed,
      });
    }
  }

  const unmasteredWrongIds = Object.entries(progress.wrongQuestionStats)
    .filter(([, stat]) => !stat.mastered)
    .map(([qId]) => qId);
  const reviewQuestionIds = Array.from(
    new Set([...unmasteredWrongIds, ...progress.bookmarkedQuestionIds])
  );
  const reviewQuestions = subject.questions.filter((q) =>
    reviewQuestionIds.includes(q.id)
  );

  const openLaunchConfig = (pack: ExamPack, defaultMode: ExamMode) => {
    setSelectedPack(pack);
    setLaunchMode(defaultMode);
  };

  const confirmLaunch = () => {
    if (!selectedPack) return;
    const state: ExamLaunchState = {
      pack: selectedPack,
      mode: launchMode,
      shuffleQuestions,
      shuffleOptions,
    };
    setSelectedPack(null);
    navigate(`/subjects/${subject.id}/exam`, { state });
  };

  const handleCreateCustomQuiz = () => {
    const targetChapters =
      customQuizChapters.length > 0
        ? customQuizChapters
        : subject.chapters.map((c) => c.id);
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'quiz',
      title: `Quiz Tùy Chọn (${targetChapters.length} chương)`,
      chapterIds: targetChapters,
      questionCount: customQuizCount,
      durationMinutes: Math.max(10, Math.round(customQuizCount * 1.2)),
      passScorePercent: 60,
    });
    openLaunchConfig(pack, 'practice');
  };

  const handleCreateRandomFinal = () => {
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'final',
      title: `Final Exam Ngẫu Nhiên (${finalCount} câu)`,
      chapterIds: subject.chapters.map((c) => c.id),
      questionCount: finalCount,
      durationMinutes: 60,
      passScorePercent: 50,
    });
    openLaunchConfig(pack, 'exam');
  };

  const handleReviewMistakes = () => {
    if (reviewQuestions.length === 0) return;
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'mistake',
      title: 'Ôn tập Câu Sai & Đánh Dấu',
      chapterIds: subject.chapters.map((c) => c.id),
      questionCount: reviewQuestions.length,
      durationMinutes: Math.max(10, reviewQuestions.length * 2),
      fixedQuestionIds: reviewQuestions.map((q) => q.id),
      passScorePercent: 80,
    });
    openLaunchConfig(pack, 'practice');
  };

  const resumeActiveSession = () => {
    navigate(`/subjects/${subject.id}/exam`, { state: { resume: true } });
  };

  const tabClass = (tab: SubjectTab) =>
    `inline-flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition-colors ${
      activeTab === tab
        ? 'bg-moss text-white shadow-sm font-semibold'
        : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
    }`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-moss transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Danh sách môn học
        </Link>

        <Link
          to={`/import?subject=${subject.id}`}
          className="rounded-2xl border border-sage-border bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
        >
          + Nạp thêm câu hỏi cho {subject.code}
        </Link>
      </div>

      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-xl bg-moss-soft border border-moss/20 px-2.5 py-1 text-xs font-mono font-semibold text-moss">
            {subject.code}
          </span>
          <span className="text-xs font-medium text-ink-soft">
            {subject.chapters.length} chương • {subject.questions.length} câu hỏi
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-ink">{subject.name}</h1>

        {progress.activeSession && (
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-firefly/45 bg-firefly-soft px-4 py-3">
            <div className="text-sm text-ink">
              Nhi đang làm dở:{' '}
              <strong>{progress.activeSession.examTitle}</strong> (còn{' '}
              {Math.ceil(progress.activeSession.remainingSeconds / 60)} phút)
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  storageService.clearActiveSession(subject.id);
                  setProgress(storageService.getProgress(subject.id));
                }}
                className="rounded-xl px-3 py-1.5 text-xs font-medium text-wood hover:bg-firefly/20 transition-colors"
              >
                Bỏ qua
              </button>
              <button
                type="button"
                onClick={resumeActiveSession}
                className="rounded-xl bg-moss px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-moss-hover transition-colors"
              >
                Làm tiếp ngay
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        {hasPracticalExams && (
          <button
            type="button"
            onClick={() => setActiveTab('pe')}
            className={tabClass('pe')}
          >
            <Laptop className="h-4 w-4" />
            Luyện PE (90 phút) ({subject.practicalExams?.length})
          </button>
        )}
        <button
          type="button"
          onClick={() => setActiveTab('final')}
          className={tabClass('final')}
        >
          <GraduationCap className="h-4 w-4" />
          {isExamBank ? 'Đề Thi Các Kì' : 'Thi Final'} ({finalPacks.length})
        </button>
        {subject.id === 'fer202-past' && (
          <button
            type="button"
            onClick={() => setActiveTab('answer-bank')}
            className={tabClass('answer-bank')}
          >
            <BookOpen className="h-4 w-4" />
            Tổng Hợp Đáp Án (SU25→FA26)
          </button>
        )}
        {!isExamBank && (
          <button
            type="button"
            onClick={() => setActiveTab('study')}
            className={tabClass('study')}
          >
            <BookOpen className="h-4 w-4" />
            Học Lý Thuyết ({subject.chapters.length})
          </button>
        )}
        {(!isExamBank || quizPacks.length > 0) && (
          <button
            type="button"
            onClick={() => setActiveTab('quiz')}
            className={tabClass('quiz')}
          >
            <FileQuestion className="h-4 w-4" />
            Thi Quiz ({quizPacks.length})
          </button>
        )}
        <button
          type="button"
          onClick={() => setActiveTab('mistakes')}
          className={tabClass('mistakes')}
        >
          <RotateCcw className="h-4 w-4" />
          Kho Câu Sai &amp; Đánh Dấu ({reviewQuestions.length})
        </button>
      </div>

      {activeTab === 'pe' && subject.practicalExams && (
        <PracticalExamView exams={subject.practicalExams} />
      )}

      {activeTab === 'answer-bank' && subject.id === 'fer202-past' && (
        <ExamAnswerBankView subject={subject} />
      )}

      {activeTab === 'study' && (
        <div className="space-y-3">
          {subject.chapters.map((chapter) => {
            const done = progress.completedChapterIds.includes(chapter.id);
            const qCount = subject.questions.filter(
              (q) => q.chapterId === chapter.id
            ).length;
            const matchingPack =
              subject.examPacks.find(
                (p) =>
                  ((p.chapterIds.length === 1 && p.chapterIds[0] === chapter.id) ||
                    p.title.toLowerCase().includes(chapter.title.toLowerCase())) &&
                  (!isExamBank || p.questionCount >= qCount)
              ) || null;

            return (
              <div
                key={chapter.id}
                className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-moss/40 transition-colors"
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-sage-tint px-2 py-0.5 text-xs font-semibold text-moss">
                      {isExamBank ? `Đề Kì ${chapter.order}` : `Chương ${chapter.order}`}
                    </span>
                    {done && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-blossom-soft border border-blossom/30 px-2.5 py-0.5 text-xs font-medium text-blossom-ink">
                        <CheckCircle2 className="h-3 w-3" />
                        Đã làm
                      </span>
                    )}
                    <span className="text-xs text-ink-soft">
                      • {qCount} câu hỏi
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-ink">
                    {chapter.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-ink-soft line-clamp-2">
                    {chapter.summary}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 shrink-0">
                  {isExamBank ? (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          const targetPack =
                            matchingPack ||
                            createDynamicExamPack({
                              subjectId: subject.id,
                              category: 'final',
                              title: `Đề thi: ${chapter.title}`,
                              chapterIds: [chapter.id],
                              questionCount: Math.max(qCount, 1),
                              durationMinutes: Math.max(
                                45,
                                Math.round(qCount * 0.9)
                              ),
                              passScorePercent: 50,
                            });
                          openLaunchConfig(targetPack, 'exam');
                        }}
                        className="inline-flex items-center gap-1.5 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover transition-colors shadow-sm"
                      >
                        <Play className="h-4 w-4 fill-white" />
                        Vào thi ngay ({qCount} câu)
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          const targetPack =
                            matchingPack ||
                            createDynamicExamPack({
                              subjectId: subject.id,
                              category: 'final',
                              title: `Đề thi: ${chapter.title}`,
                              chapterIds: [chapter.id],
                              questionCount: Math.max(qCount, 1),
                              durationMinutes: Math.max(
                                45,
                                Math.round(qCount * 0.9)
                              ),
                              passScorePercent: 50,
                            });
                          openLaunchConfig(targetPack, 'practice');
                        }}
                        className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
                      >
                        Luyện tập
                      </button>
                      <Link
                        to={`/subjects/${subject.id}/study/${chapter.id}`}
                        className="inline-flex items-center gap-1 text-xs text-ink-soft hover:text-moss font-medium px-2 py-1 transition-colors"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Ghi chú &amp; bẫy
                      </Link>
                    </>
                  ) : matchingPack ? (
                    <>
                      <button
                        type="button"
                        onClick={() => openLaunchConfig(matchingPack, 'exam')}
                        className="inline-flex items-center gap-1.5 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover transition-colors shadow-sm"
                      >
                        <Play className="h-4 w-4 fill-white" />
                        Luyện đề
                      </button>
                      <button
                        type="button"
                        onClick={() => openLaunchConfig(matchingPack, 'practice')}
                        className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
                      >
                        Luyện tập
                      </button>
                      <Link
                        to={`/subjects/${subject.id}/study/${chapter.id}`}
                        className="inline-flex items-center gap-1 text-xs text-ink-soft hover:text-moss font-medium px-2 py-1 transition-colors"
                      >
                        <BookOpen className="h-3.5 w-3.5" />
                        Lý thuyết
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={`/subjects/${subject.id}/study/${chapter.id}`}
                      className="inline-flex items-center gap-1.5 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover transition-colors"
                    >
                      <BookOpen className="h-4 w-4" />
                      Đọc bài học
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="space-y-5">
          <div className="overflow-x-auto rounded-3xl border border-sage-border bg-paper shadow-cozy">
            <table className="min-w-full divide-y divide-sage-border/70 text-left text-sm">
              <thead className="bg-mist/70 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                <tr>
                  <th className="w-12 px-4 py-3 text-center">#</th>
                  <th className="px-4 py-3">Bộ đề Quiz</th>
                  <th className="hidden sm:table-cell w-28 px-4 py-3 text-center">Số câu</th>
                  <th className="hidden sm:table-cell w-28 px-4 py-3 text-center">Thời gian</th>
                  <th className="w-36 px-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sage-border/50 bg-paper">
                {quizPacks.map((pack, idx) => {
                  const packStat = attemptStatsByPackId.get(pack.id);
                  return (
                    <tr
                      key={pack.id}
                      className="hover:bg-sage-tint/45 transition-colors"
                    >
                      <td className="px-4 py-3 text-center font-mono text-xs text-ink-soft">
                        {String(idx + 1).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-ink">
                            {pack.title}
                          </span>
                          {packStat && (
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                                packStat.passed
                                  ? 'bg-moss-soft text-moss border border-moss/25'
                                  : 'bg-firefly-soft text-wood border border-firefly/40'
                              }`}
                            >
                              <CheckCircle2 className="h-3 w-3" />
                              Đã xong • {packStat.bestScore}%
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-center font-mono text-xs text-ink-soft">
                        {pack.questionCount} câu
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-center font-mono text-xs text-ink-soft">
                        {pack.durationMinutes} phút
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          type="button"
                          onClick={() => openLaunchConfig(pack, 'practice')}
                          className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            packStat
                              ? 'border border-sage-border bg-mist text-ink hover:bg-sage-tint'
                              : 'bg-moss text-white hover:bg-moss-hover'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          {packStat ? 'Làm lại' : 'Bắt đầu'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="rounded-3xl border border-sage-border bg-paper p-5 sm:p-6 shadow-cozy space-y-4">
            <h3 className="text-base font-bold text-ink">
              Tạo nhanh bài Quiz theo Chương
            </h3>
            <div className="flex flex-wrap gap-2">
              {subject.chapters.map((ch) => {
                const selected = customQuizChapters.includes(ch.id);
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() =>
                      setCustomQuizChapters((prev) =>
                        selected
                          ? prev.filter((id) => id !== ch.id)
                          : [...prev, ch.id]
                      )
                    }
                    className={`rounded-xl px-3 py-1.5 text-xs font-medium border transition-colors ${
                      selected
                        ? 'border-moss bg-moss-soft text-moss font-semibold'
                        : 'border-sage-border text-ink-soft hover:bg-sage-tint'
                    }`}
                  >
                    Chương {ch.order}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <label className="text-sm text-ink flex items-center gap-2">
                Số câu hỏi:
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={customQuizCount}
                  onChange={(e) =>
                    setCustomQuizCount(Number(e.target.value) || 10)
                  }
                  className="w-20 rounded-xl border border-sage-border bg-mist/60 px-2.5 py-1.5 text-sm text-ink outline-none focus:border-moss"
                />
              </label>
              <button
                type="button"
                disabled={subject.questions.length === 0}
                onClick={handleCreateCustomQuiz}
                className="inline-flex items-center gap-2 rounded-2xl border border-moss bg-moss-soft/50 px-4 py-2 text-sm font-semibold text-moss hover:bg-moss-soft disabled:opacity-50 transition-colors"
              >
                <Shuffle className="h-4 w-4" />
                Tạo bài Quiz
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'final' && (
        <div className="space-y-5">
          <div className="overflow-x-auto rounded-3xl border border-sage-border bg-paper shadow-cozy">
            <table className="min-w-full divide-y divide-sage-border/70 text-left text-sm">
              <thead className="bg-mist/70 text-xs font-semibold uppercase tracking-wider text-ink-soft">
                <tr>
                  <th className="w-12 px-4 py-3 text-center">#</th>
                  <th className="px-4 py-3">Tên bộ đề</th>
                  <th className="hidden sm:table-cell w-28 px-4 py-3 text-center">Số câu</th>
                  <th className="hidden sm:table-cell w-28 px-4 py-3 text-center">Thời gian</th>
                  <th className="w-36 px-4 py-3 text-right">Thao tác</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sage-border/50 bg-paper">
                {finalPacks.map((pack, idx) => {
                  const packStat = attemptStatsByPackId.get(pack.id);
                  return (
                    <tr
                      key={pack.id}
                      className="hover:bg-sage-tint/45 transition-colors"
                    >
                      <td className="px-4 py-3 text-center font-mono text-xs text-ink-soft">
                        {String(idx + 1).padStart(2, '0')}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-semibold text-ink">
                            {pack.title}
                          </span>
                          {packStat && (
                            <span
                              className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ${
                                packStat.passed
                                  ? 'bg-moss-soft text-moss border border-moss/25'
                                  : 'bg-firefly-soft text-wood border border-firefly/40'
                              }`}
                            >
                              <CheckCircle2 className="h-3 w-3" />
                              Đã xong • {packStat.bestScore}%
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-center font-mono text-xs text-ink-soft">
                        {pack.questionCount} câu
                      </td>
                      <td className="hidden sm:table-cell px-4 py-3 text-center font-mono text-xs text-ink-soft">
                        {pack.durationMinutes} phút
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          type="button"
                          onClick={() => openLaunchConfig(pack, 'exam')}
                          className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                            packStat
                              ? 'border border-sage-border bg-mist text-ink hover:bg-sage-tint'
                              : 'bg-moss text-white hover:bg-moss-hover'
                          }`}
                        >
                          <Play className="h-3.5 w-3.5" />
                          {packStat ? 'Làm lại' : 'Vào thi'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="rounded-3xl border border-sage-border bg-paper p-5 sm:p-6 shadow-cozy flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-ink">
                Sinh Đề Final Ngẫu Nhiên Toàn Môn
              </h3>
              <p className="text-sm text-ink-soft">
                Tự động bốc câu hỏi rải đều qua tất cả các chương (tối đa theo
                ngân hàng hiện có: {subject.questions.length} câu).
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={finalCount}
                onChange={(e) => setFinalCount(Number(e.target.value))}
                className="rounded-xl border border-sage-border bg-mist/60 px-3 py-2 text-sm text-ink outline-none focus:border-moss"
              >
                <option value={30}>30 câu</option>
                <option value={50}>50 câu</option>
                <option value={60}>60 câu</option>
              </select>
              <button
                type="button"
                disabled={subject.questions.length === 0}
                onClick={handleCreateRandomFinal}
                className="inline-flex items-center gap-2 rounded-2xl bg-ink px-4 py-2.5 text-sm font-semibold text-paper hover:bg-wood disabled:opacity-50 transition-colors"
              >
                <Shuffle className="h-4 w-4" />
                Tạo đề Final ngay
              </button>
            </div>
          </div>

          {progress.attempts.length > 0 && (
            <div className="rounded-3xl border border-sage-border bg-paper p-5 sm:p-6 shadow-cozy space-y-3">
              <h3 className="text-base font-bold text-ink flex items-center gap-2">
                <History className="h-4 w-4 text-ink-soft" />
                Lịch sử làm bài gần đây
              </h3>
              <div className="divide-y divide-sage-border/60">
                {progress.attempts.slice(0, 5).map((att) => (
                  <div
                    key={att.id}
                    className="py-2.5 flex items-center justify-between text-sm"
                  >
                    <div>
                      <p className="font-medium text-ink">{att.examTitle}</p>
                      <p className="text-xs text-ink-soft">
                        {att.mode === 'exam' ? 'Thi bấm giờ' : 'Ôn tập'} •{' '}
                        {new Date(att.completedAt).toLocaleString('vi-VN')}
                      </p>
                    </div>
                    <span
                      className={`rounded-xl px-2.5 py-1 text-xs font-semibold ${
                        att.passed
                          ? 'bg-moss-soft text-moss'
                          : 'bg-blossom-soft text-blossom-ink'
                      }`}
                    >
                      {att.correctCount}/{att.totalCount} ({att.scorePercent}%)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {activeTab === 'mistakes' && (
        <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy space-y-4">
          {reviewQuestions.length === 0 ? (
            <div className="text-center py-8 text-sm text-ink-soft">
              Hiện chưa có câu hỏi làm sai hoặc đánh dấu sao nào cho môn này.
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-ink">
                    Danh sách câu cần ôn lại ({reviewQuestions.length} câu)
                  </h3>
                  <p className="text-sm text-ink-soft">
                    Làm đúng lại câu đã sai sẽ tự động đánh dấu Đã thuộc
                    (Mastered).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReviewMistakes}
                  className="inline-flex items-center gap-2 rounded-2xl bg-firefly px-4 py-2 text-sm font-semibold text-ink hover:bg-firefly-bright transition-colors"
                >
                  <Play className="h-4 w-4" />
                  Làm lại toàn bộ ngay
                </button>
              </div>
              <div className="divide-y divide-sage-border/60">
                {reviewQuestions.map((q) => {
                  const wrongStat = progress.wrongQuestionStats[q.id];
                  const isBookmarked = progress.bookmarkedQuestionIds.includes(
                    q.id
                  );
                  return (
                    <div
                      key={q.id}
                      className="py-3.5 flex items-start justify-between gap-4"
                    >
                      <div className="text-sm text-ink flex-1">
                        <FormattedText content={q.prompt} />
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        {wrongStat && !wrongStat.mastered && (
                          <span className="inline-flex items-center gap-1 rounded-lg bg-blossom-soft px-2.5 py-0.5 text-xs font-medium text-blossom-ink">
                            <AlertTriangle className="h-3 w-3" />
                            Sai {wrongStat.wrongCount} lần
                          </span>
                        )}
                        {isBookmarked && (
                          <span className="inline-flex items-center gap-1 rounded-lg bg-firefly-soft px-2.5 py-0.5 text-xs font-medium text-wood">
                            <Bookmark className="h-3 w-3 text-firefly" />
                            Đã lưu
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      )}

      {selectedPack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/35 backdrop-blur-[2px] p-4">
          <div className="w-full max-w-md rounded-3xl border border-sage-border bg-paper p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-ink">
              Cấu hình bài làm: {selectedPack.title}
            </h2>

            <div className="space-y-2">
              <p className="text-sm font-medium text-ink">Chọn chế độ:</p>
              <div className="grid grid-cols-2 gap-2.5">
                <button
                  type="button"
                  onClick={() => setLaunchMode('practice')}
                  className={`rounded-2xl border p-3.5 text-left text-sm transition-colors ${
                    launchMode === 'practice'
                      ? 'border-moss bg-moss-soft text-ink'
                      : 'border-sage-border hover:bg-sage-tint'
                  }`}
                >
                  <div className="font-semibold">Ôn tập (Practice)</div>
                  <div className="text-xs text-ink-soft mt-0.5">
                    Hiện đáp án &amp; giải thích ngay sau mỗi câu
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setLaunchMode('exam')}
                  className={`rounded-2xl border p-3.5 text-left text-sm transition-colors ${
                    launchMode === 'exam'
                      ? 'border-moss bg-moss-soft text-ink'
                      : 'border-sage-border hover:bg-sage-tint'
                  }`}
                >
                  <div className="font-semibold">Thi thử (Timed)</div>
                  <div className="text-xs text-ink-soft mt-0.5">
                    Đếm ngược {selectedPack.durationMinutes} phút, nộp bài mới
                    chấm
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-sm text-ink">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                  className="accent-moss rounded"
                />
                Đảo ngẫu nhiên thứ tự câu hỏi
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={shuffleOptions}
                  onChange={(e) => setShuffleOptions(e.target.checked)}
                  className="accent-moss rounded"
                />
                Đảo thứ tự các đáp án A/B/C/D
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedPack(null)}
                className="rounded-xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink-soft hover:bg-sage-tint"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={confirmLaunch}
                className="rounded-xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover"
              >
                Bắt đầu làm bài
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
