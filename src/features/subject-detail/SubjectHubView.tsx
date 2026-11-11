import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  AlertTriangle,
  ArrowLeft,
  Bookmark,
  BookOpen,
  CheckCircle2,
  Clock,
  FileQuestion,
  GraduationCap,
  History,
  Play,
  RotateCcw,
  Shuffle,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import type { ExamMode, ExamPack } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';

type SubjectTab = 'study' | 'quiz' | 'final' | 'mistakes';

export function SubjectHubView() {
  const { subjectId = '' } = useParams();
  const navigate = useNavigate();
  const subject = storageService.getSubjectById(subjectId);
  const progress = storageService.getProgress(subjectId);

  const [activeTab, setActiveTab] = useState<SubjectTab>('study');
  const [selectedPack, setSelectedPack] = useState<ExamPack | null>(null);
  const [launchMode, setLaunchMode] = useState<ExamMode>('exam');
  const [shuffleQuestions, setShuffleQuestions] = useState(true);
  const [shuffleOptions, setShuffleOptions] = useState(true);

  const [customQuizChapters, setCustomQuizChapters] = useState<string[]>([]);
  const [customQuizCount, setCustomQuizCount] = useState(20);
  const [finalCount, setFinalCount] = useState(50);

  if (!subject) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center">
        <p className="text-slate-600">Không tìm thấy môn học.</p>
        <Link
          to="/"
          className="mt-3 inline-block text-sm font-medium text-indigo-600"
        >
          Quay về danh sách môn học
        </Link>
      </div>
    );
  }

  const quizPacks = subject.examPacks.filter((p) => p.category === 'quiz');
  const finalPacks = subject.examPacks.filter((p) => p.category === 'final');

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
    `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
      activeTab === tab
        ? 'bg-indigo-600 text-white shadow-sm'
        : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
    }`;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Danh sách môn học
        </Link>

        <Link
          to={`/import?subject=${subject.id}`}
          className="rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
        >
          + Nạp thêm câu hỏi cho {subject.code}
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
            {subject.code}
          </span>
          <span className="text-xs text-slate-500">
            {subject.chapters.length} chương • {subject.questions.length} câu hỏi
          </span>
        </div>
        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          {subject.name}
        </h1>
        <p className="mt-1 text-sm text-slate-600">{subject.description}</p>

        {progress.activeSession && (
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-indigo-200 bg-indigo-50 px-4 py-3">
            <div className="text-sm text-indigo-900">
              Bạn đang làm dở:{' '}
              <strong>{progress.activeSession.examTitle}</strong> (còn{' '}
              {Math.ceil(progress.activeSession.remainingSeconds / 60)} phút)
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => storageService.clearActiveSession(subject.id)}
                className="rounded-lg px-3 py-1.5 text-xs font-medium text-indigo-700 hover:bg-indigo-100"
              >
                Bỏ qua
              </button>
              <button
                type="button"
                onClick={resumeActiveSession}
                className="rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700"
              >
                Làm tiếp ngay
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActiveTab('study')}
          className={tabClass('study')}
        >
          <BookOpen className="h-4 w-4" />
          Học Lý Thuyết
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('quiz')}
          className={tabClass('quiz')}
        >
          <FileQuestion className="h-4 w-4" />
          Thi Quiz ({quizPacks.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('final')}
          className={tabClass('final')}
        >
          <GraduationCap className="h-4 w-4" />
          Thi Final ({finalPacks.length})
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('mistakes')}
          className={tabClass('mistakes')}
        >
          <RotateCcw className="h-4 w-4" />
          Kho Câu Sai &amp; Đánh Dấu ({reviewQuestions.length})
        </button>
      </div>

      {activeTab === 'study' && (
        <div className="space-y-3">
          {subject.chapters.map((chapter) => {
            const done = progress.completedChapterIds.includes(chapter.id);
            const qCount = subject.questions.filter(
              (q) => q.chapterId === chapter.id
            ).length;
            return (
              <div
                key={chapter.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-indigo-600">
                      Chương {chapter.order}
                    </span>
                    {done && (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700">
                        <CheckCircle2 className="h-3 w-3" />
                        Đã học
                      </span>
                    )}
                    <span className="text-xs text-slate-500">
                      • {qCount} câu hỏi
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900">
                    {chapter.title}
                  </h2>
                  <p className="text-sm text-slate-600">{chapter.summary}</p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <Link
                    to={`/subjects/${subject.id}/study/${chapter.id}`}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                  >
                    <BookOpen className="h-4 w-4" />
                    Đọc bài học
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'quiz' && (
        <div className="space-y-5">
          <div className="grid gap-4 md:grid-cols-2">
            {quizPacks.map((pack) => (
              <div
                key={pack.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    {pack.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {pack.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span className="inline-flex items-center gap-1">
                      <FileQuestion className="h-3.5 w-3.5" />
                      Tối đa {pack.questionCount} câu
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {pack.durationMinutes} phút
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openLaunchConfig(pack, 'practice')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                >
                  <Play className="h-4 w-4" />
                  Bắt đầu Quiz
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
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
                    className={`rounded-lg px-3 py-1.5 text-xs font-medium border transition-colors ${
                      selected
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Chương {ch.order}
                  </button>
                );
              })}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <label className="text-sm text-slate-700 flex items-center gap-2">
                Số câu hỏi:
                <input
                  type="number"
                  min={1}
                  max={100}
                  value={customQuizCount}
                  onChange={(e) =>
                    setCustomQuizCount(Number(e.target.value) || 10)
                  }
                  className="w-20 rounded-lg border border-slate-300 px-2.5 py-1 text-sm"
                />
              </label>
              <button
                type="button"
                disabled={subject.questions.length === 0}
                onClick={handleCreateCustomQuiz}
                className="inline-flex items-center gap-2 rounded-xl border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-700 hover:bg-indigo-50 disabled:opacity-50"
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
          <div className="grid gap-4 md:grid-cols-2">
            {finalPacks.map((pack) => (
              <div
                key={pack.id}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-col justify-between gap-4"
              >
                <div>
                  <span className="inline-block rounded-md bg-violet-50 px-2 py-0.5 text-xs font-semibold text-violet-700">
                    Final Exam
                  </span>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {pack.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {pack.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3 text-xs text-slate-500">
                    <span>
                      {Math.min(pack.questionCount, subject.questions.length)}/
                      {pack.questionCount} câu khả dụng
                    </span>
                    <span>• {pack.durationMinutes} phút</span>
                    <span>• Đạt {pack.passScorePercent}%</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => openLaunchConfig(pack, 'exam')}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-700"
                >
                  <GraduationCap className="h-4 w-4" />
                  Vào thi Final
                </button>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-base font-bold text-slate-900">
                Sinh Đề Final Ngẫu Nhiên Toàn Môn
              </h3>
              <p className="text-sm text-slate-600">
                Tự động bốc câu hỏi rải đều qua tất cả các chương (tối đa theo ngân hàng hiện có: {subject.questions.length} câu).
              </p>
            </div>
            <div className="flex items-center gap-3">
              <select
                value={finalCount}
                onChange={(e) => setFinalCount(Number(e.target.value))}
                className="rounded-xl border border-slate-300 px-3 py-2 text-sm"
              >
                <option value={30}>30 câu</option>
                <option value={50}>50 câu</option>
                <option value={60}>60 câu</option>
              </select>
              <button
                type="button"
                disabled={subject.questions.length === 0}
                onClick={handleCreateRandomFinal}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50"
              >
                <Shuffle className="h-4 w-4" />
                Tạo đề Final ngay
              </button>
            </div>
          </div>

          {progress.attempts.length > 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <History className="h-4 w-4 text-slate-500" />
                Lịch sử làm bài gần đây
              </h3>
              <div className="divide-y divide-slate-100">
                {progress.attempts.slice(0, 5).map((att) => (
                  <div
                    key={att.id}
                    className="py-2.5 flex items-center justify-between text-sm"
                  >
                    <div>
                      <p className="font-medium text-slate-800">
                        {att.examTitle}
                      </p>
                      <p className="text-xs text-slate-500">
                        {att.mode === 'exam' ? 'Thi bấm giờ' : 'Ôn tập'} •{' '}
                        {new Date(att.completedAt).toLocaleString('vi-VN')}
                      </p>
                    </div>
                    <span
                      className={`rounded-lg px-2.5 py-1 text-xs font-semibold ${
                        att.passed
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-rose-50 text-rose-700'
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
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
          {reviewQuestions.length === 0 ? (
            <div className="text-center py-6 text-sm text-slate-500">
              Hiện chưa có câu hỏi làm sai hoặc đánh dấu sao nào cho môn này.
            </div>
          ) : (
            <>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Danh sách câu cần ôn lại ({reviewQuestions.length} câu)
                  </h3>
                  <p className="text-sm text-slate-600">
                    Làm đúng lại câu đã sai sẽ tự động đánh dấu Đã thuộc (Mastered).
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleReviewMistakes}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-4 py-2 text-sm font-medium text-white hover:bg-amber-700"
                >
                  <Play className="h-4 w-4" />
                  Làm lại toàn bộ ngay
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {reviewQuestions.map((q) => {
                  const wrongStat = progress.wrongQuestionStats[q.id];
                  const isBookmarked = progress.bookmarkedQuestionIds.includes(
                    q.id
                  );
                  return (
                    <div
                      key={q.id}
                      className="py-3 flex items-start justify-between gap-4"
                    >
                      <p className="text-sm text-slate-800">{q.prompt}</p>
                      <div className="flex items-center gap-2 shrink-0">
                        {wrongStat && !wrongStat.mastered && (
                          <span className="inline-flex items-center gap-1 rounded bg-rose-50 px-2 py-0.5 text-xs text-rose-700">
                            <AlertTriangle className="h-3 w-3" />
                            Sai {wrongStat.wrongCount} lần
                          </span>
                        )}
                        {isBookmarked && (
                          <span className="inline-flex items-center gap-1 rounded bg-amber-50 px-2 py-0.5 text-xs text-amber-700">
                            <Bookmark className="h-3 w-3" />
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-4">
            <h2 className="text-lg font-bold text-slate-900">
              Cấu hình bài làm: {selectedPack.title}
            </h2>

            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-700">Chọn chế độ:</p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setLaunchMode('practice')}
                  className={`rounded-xl border p-3 text-left text-sm ${
                    launchMode === 'practice'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold">Ôn tập (Practice)</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Hiện đáp án &amp; giải thích ngay sau mỗi câu
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setLaunchMode('exam')}
                  className={`rounded-xl border p-3 text-left text-sm ${
                    launchMode === 'exam'
                      ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                      : 'border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div className="font-semibold">Thi thử (Timed)</div>
                  <div className="text-xs text-slate-600 mt-0.5">
                    Đếm ngược {selectedPack.durationMinutes} phút, nộp bài mới chấm
                  </div>
                </button>
              </div>
            </div>

            <div className="space-y-2 pt-1 text-sm text-slate-700">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shuffleQuestions}
                  onChange={(e) => setShuffleQuestions(e.target.checked)}
                />
                Đảo ngẫu nhiên thứ tự câu hỏi
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={shuffleOptions}
                  onChange={(e) => setShuffleOptions(e.target.checked)}
                />
                Đảo thứ tự các đáp án A/B/C/D
              </label>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setSelectedPack(null)}
                className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                Hủy
              </button>
              <button
                type="button"
                onClick={confirmLaunch}
                className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
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
