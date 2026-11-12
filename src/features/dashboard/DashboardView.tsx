import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AlertCircle,
  ArrowRight,
  BookOpen,
  FileQuestion,
  GraduationCap,
  Play,
  Plus,
  Search,
  Sparkles,
  X,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import type { Subject } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';
import { FireflyJarCard } from '../../components/FireflyJarCard';
import { ExamScheduleWidget } from '../../components/ExamScheduleWidget';
import { useActiveStudyTracker } from '../../components/StudyStreakWidget';

type SubjectFilter = 'all' | 'review';

const CODE_BADGE_TONES = [
  'bg-moss-soft text-moss border border-moss/20',
  'bg-rain-soft text-rain-ink border border-rain/25',
  'bg-wood-soft text-wood border border-wood/20',
  'bg-blossom-soft text-blossom-ink border border-blossom/25',
];

export function DashboardView() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>(() =>
    storageService.getSubjects()
  );
  const [query, setQuery] = useState('');
  const [filterMode, setFilterMode] = useState<SubjectFilter>('all');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const stats = useActiveStudyTracker();

  const subjectSummaries = subjects.map((subject) => {
    const progress = storageService.getProgress(subject.id);
    const wrongIds = Object.entries(progress.wrongQuestionStats)
      .filter(([, w]) => !w.mastered)
      .map(([id]) => id);
    const wrongCount = wrongIds.length;
    const quizCount = subject.examPacks.filter(
      (p) => p.category === 'quiz'
    ).length;
    const finalCount = subject.examPacks.filter(
      (p) => p.category === 'final'
    ).length;
    const completedChapters = progress.completedChapterIds.length;
    const totalChapters = subject.chapters.length;
    const progressPercent =
      totalChapters > 0
        ? Math.round((completedChapters / totalChapters) * 100)
        : 0;
    const nextChapter =
      subject.chapters.find(
        (ch) => !progress.completedChapterIds.includes(ch.id)
      ) ?? subject.chapters[0];

    return {
      subject,
      wrongIds,
      wrongCount,
      quizCount,
      finalCount,
      completedChapters,
      totalChapters,
      progressPercent,
      nextChapter,
    };
  });
  const subjectsNeedingReview = subjectSummaries.filter(
    (item) => item.wrongCount > 0
  ).length;

  const primaryReviewTarget = subjectSummaries.find((s) => s.wrongCount > 0);
  const fallbackStudyTarget = subjectSummaries[0];

  const handleQuickReview = () => {
    if (!primaryReviewTarget) return;
    const { subject, wrongIds } = primaryReviewTarget;
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'mistake',
      title: `Ôn nhanh ${wrongIds.length} câu cần nhớ (${subject.code})`,
      chapterIds: subject.chapters.map((c) => c.id),
      questionCount: wrongIds.length,
      durationMinutes: Math.max(5, Math.ceil(wrongIds.length * 1.5)),
      fixedQuestionIds: wrongIds,
    });
    const launchState: ExamLaunchState = {
      pack,
      mode: 'practice',
      shuffleQuestions: true,
      shuffleOptions: true,
    };
    navigate(`/subjects/${subject.id}/exam`, { state: launchState });
  };

  const showSearchAndFilter = subjects.length >= 5;

  const filtered = subjectSummaries.filter(({ subject, wrongCount }) => {
    if (showSearchAndFilter && filterMode === 'review' && wrongCount === 0) {
      return false;
    }
    const q = showSearchAndFilter ? query.trim().toLowerCase() : '';
    if (!q) return true;
    return (
      subject.code.toLowerCase().includes(q) ||
      subject.name.toLowerCase().includes(q) ||
      subject.description.toLowerCase().includes(q)
    );
  });

  const handleCreate = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    storageService.createSubject({ code, name, description });
    setSubjects(storageService.getSubjects());
    setCode('');
    setName('');
    setDescription('');
    setShowCreateModal(false);
  };

  const quickStudyUrl =
    fallbackStudyTarget?.nextChapter
      ? `/subjects/${fallbackStudyTarget.subject.id}/study/${fallbackStudyTarget.nextChapter.id}`
      : fallbackStudyTarget
        ? `/subjects/${fallbackStudyTarget.subject.id}`
        : '/';

  return (
    <div className="space-y-6">
      {/* Primary Action + Daily Goal / Firefly Jar Balanced Workspace */}
      <section className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy flex flex-col justify-between gap-5">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-firefly-soft border border-firefly/35 px-3 py-1 text-xs font-medium text-wood">
              <Sparkles className="h-3.5 w-3.5 text-firefly" />
              <span>Không gian ôn tập riêng của Xuân Nhi</span>
            </div>

            {primaryReviewTarget ? (
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  Hôm nay: ôn {primaryReviewTarget.wrongCount} câu còn nhớ nhầm (~
                  {Math.max(
                    1,
                    Math.ceil(primaryReviewTarget.wrongCount * 0.5)
                  )}{' '}
                  phút)
                </h1>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft max-w-xl">
                  Môn <strong className="text-ink">{primaryReviewTarget.subject.code}</strong> đang có{' '}
                  {primaryReviewTarget.wrongCount} câu hẹn gặp lại — bấm một cái là vào ôn nhẹ nhàng luôn nha.
                </p>
              </div>
            ) : (
              <div>
                <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  {fallbackStudyTarget?.nextChapter
                    ? `Hôm nay: ${fallbackStudyTarget.nextChapter.title} (~10 phút)`
                    : 'Hôm nay mình bắt đầu thật nhẹ nhàng nhé'}
                </h1>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft max-w-xl">
                  {fallbackStudyTarget
                    ? `Gợi ý bước kế tiếp cho ${fallbackStudyTarget.subject.code} (${fallbackStudyTarget.subject.name}) — không cần học dồn đâu, đi từng chút là nhớ chắc.`
                    : 'Thêm môn học đầu tiên để bắt đầu hành trình ôn thi dịu êm nha Xuân Nhi.'}
                </p>
              </div>
            )}

            <ExamScheduleWidget />
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            {primaryReviewTarget ? (
              <button
                type="button"
                onClick={handleQuickReview}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-moss px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
              >
                <Play className="h-4 w-4 fill-current" />
                Bắt đầu ôn ngay
              </button>
            ) : (
              <Link
                to={quickStudyUrl}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-moss px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
              >
                <Play className="h-4 w-4 fill-current" />
                Bắt đầu ôn ngay
              </Link>
            )}

            <button
              type="button"
              onClick={() => setShowCreateModal(true)}
              className="inline-flex items-center justify-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-4 py-2.5 text-sm font-medium text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
            >
              <Plus className="h-4 w-4" />
              Thêm Môn Học
            </button>
          </div>
        </div>

        <FireflyJarCard stats={stats} />
      </section>

      {/* Search & Subject Filters (shown cleanly once user has 5+ subjects) */}
      {showSearchAndFilter && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="h-4 w-4 text-ink-soft/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Tìm nhanh môn học theo mã hoặc tên (VD: SWR302, SWP391)..."
              className="w-full rounded-2xl border border-sage-border bg-paper pl-10 pr-4 py-2.5 text-sm text-ink placeholder:text-ink-soft/60 outline-none focus:border-moss focus:ring-2 focus:ring-moss/15 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setFilterMode('all')}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                filterMode === 'all'
                  ? 'bg-moss text-white shadow-sm'
                  : 'border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint'
              }`}
            >
              Tất cả ({subjects.length})
            </button>
            <button
              type="button"
              onClick={() => setFilterMode('review')}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-colors ${
                filterMode === 'review'
                  ? 'bg-firefly text-ink shadow-sm'
                  : 'border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint'
              }`}
            >
              Cần ôn lại ({subjectsNeedingReview})
            </button>
          </div>
        </div>
      )}

      {/* Subject Grid */}
      {filtered.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-sage-border bg-paper p-10 text-center space-y-2">
          <p className="text-sm font-medium text-ink">
            {filterMode === 'review'
              ? 'Chưa có môn nào cần ôn lại — giỏi quá Nhi ơi!'
              : `Không tìm thấy môn học phù hợp với "${query}".`}
          </p>
          <p className="text-xs text-ink-soft">
            Em có thể xóa từ khóa tìm kiếm hoặc bấm "Thêm Môn Học" để tạo bộ môn mới.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map(
            (
              {
                subject,
                wrongCount,
                quizCount,
                finalCount,
                completedChapters,
                totalChapters,
                progressPercent,
                nextChapter,
              },
              idx
            ) => {
              const badgeTone =
                CODE_BADGE_TONES[idx % CODE_BADGE_TONES.length];

              return (
                <Link
                  key={subject.id}
                  to={`/subjects/${subject.id}`}
                  className="group rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy hover:-translate-y-0.5 hover:border-moss/50 hover:shadow-md transition-all flex flex-col justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center rounded-xl px-2.5 py-1 text-xs font-mono font-semibold ${badgeTone}`}
                      >
                        {subject.code}
                      </span>
                      {wrongCount > 0 && (
                        <span className="inline-flex items-center gap-1 rounded-xl bg-firefly-soft border border-firefly/30 px-2.5 py-1 text-xs font-medium text-wood">
                          <AlertCircle className="h-3.5 w-3.5 text-firefly" />
                          {wrongCount} câu hẹn ôn lại
                        </span>
                      )}
                    </div>

                    <h2 className="mt-3 text-lg font-bold text-ink group-hover:text-moss transition-colors leading-snug">
                      {subject.name}
                    </h2>
                    <p className="mt-1 text-xs leading-relaxed text-ink-soft line-clamp-2">
                      {subject.description ||
                        'Chưa có mô tả cho môn học này — bấm vào để thêm bài học và đề ôn nhé.'}
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">
                    {completedChapters > 0 ? (
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] font-medium text-ink-soft">
                          <span>
                            Đã đọc {completedChapters}/{totalChapters} phần
                          </span>
                          <span>{progressPercent}%</span>
                        </div>
                        <div className="h-1.5 w-full overflow-hidden rounded-full bg-mist-deep">
                          <div
                            className="h-full rounded-full bg-moss transition-all"
                            style={{ width: `${progressPercent}%` }}
                          />
                        </div>
                      </div>
                    ) : nextChapter ? (
                      <div className="rounded-2xl bg-mist px-3 py-2 text-xs text-ink-soft">
                        <span className="font-semibold text-ink">Gợi ý: </span>
                        <span className="line-clamp-1">
                          {nextChapter.title} · ~10 phút
                        </span>
                      </div>
                    ) : null}

                    <div className="flex flex-wrap items-center justify-between gap-2 border-t border-sage-border/70 pt-3 text-xs text-ink-soft">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="inline-flex items-center gap-1">
                          <BookOpen className="h-3.5 w-3.5 text-moss shrink-0" />
                          {totalChapters} bài
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <FileQuestion className="h-3.5 w-3.5 text-rain shrink-0" />
                          {subject.questions.length} câu hỏi
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <GraduationCap className="h-3.5 w-3.5 text-blossom shrink-0" />
                          {quizCount} bài Quiz · {finalCount} đề Thi thử
                        </span>
                      </div>

                      <span className="inline-flex items-center gap-1 font-semibold text-moss group-hover:translate-x-0.5 transition-transform">
                        Học tiếp
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            }
          )}
        </div>
      )}

      {/* Add Subject Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-[2px] p-4">
          <div className="w-full max-w-md rounded-3xl border border-sage-border bg-paper p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-ink">
                Thêm Môn Học Mới
              </h2>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="rounded-xl p-1.5 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="subject-code"
                  className="block text-sm font-medium text-ink"
                >
                  Mã môn
                </label>
                <input
                  id="subject-code"
                  type="text"
                  required
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="VD: SWP391, PRN212..."
                  className="mt-1.5 w-full rounded-xl border border-sage-border bg-mist/60 px-3.5 py-2 text-sm text-ink outline-none focus:border-moss focus:bg-paper"
                />
              </div>

              <div>
                <label
                  htmlFor="subject-name"
                  className="block text-sm font-medium text-ink"
                >
                  Tên môn học
                </label>
                <input
                  id="subject-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="VD: Software Development Project"
                  className="mt-1.5 w-full rounded-xl border border-sage-border bg-mist/60 px-3.5 py-2 text-sm text-ink outline-none focus:border-moss focus:bg-paper"
                />
              </div>

              <div>
                <label
                  htmlFor="subject-desc"
                  className="block text-sm font-medium text-ink"
                >
                  Mô tả ngắn
                </label>
                <textarea
                  id="subject-desc"
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mục tiêu ôn thi hoặc ghi chú nhỏ cho môn..."
                  className="mt-1.5 w-full rounded-xl border border-sage-border bg-mist/60 px-3.5 py-2 text-sm text-ink outline-none focus:border-moss focus:bg-paper"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="rounded-xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink-soft hover:bg-sage-tint"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover"
                >
                  Lưu môn học
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
