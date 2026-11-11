import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  CheckCircle2,
  Lightbulb,
  Play,
  Sparkles,
  Table2,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import { StudyContentRenderer } from '../../components/StudyContentRenderer';
import type { StudySectionType } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';

const SECTION_META: Record<
  StudySectionType,
  { label: string; badgeClass: string; cardClass: string; Icon: typeof Sparkles }
> = {
  concept: {
    label: 'Khái niệm cốt lõi',
    badgeClass: 'bg-indigo-100 text-indigo-700',
    cardClass: 'border-slate-200 bg-white',
    Icon: Sparkles,
  },
  comparison: {
    label: 'Bảng phân biệt',
    badgeClass: 'bg-sky-100 text-sky-700',
    cardClass: 'border-sky-200 bg-sky-50/30',
    Icon: Table2,
  },
  keywords: {
    label: 'Từ khóa nhận diện',
    badgeClass: 'bg-emerald-100 text-emerald-700',
    cardClass: 'border-emerald-200 bg-emerald-50/30',
    Icon: Bookmark,
  },
  exam_tip: {
    label: 'Bẫy & Mẹo đi thi',
    badgeClass: 'bg-amber-100 text-amber-800',
    cardClass: 'border-amber-200 bg-amber-50/40',
    Icon: Lightbulb,
  },
};

export function StudyChapterView() {
  const { subjectId = '', chapterId = '' } = useParams();
  const navigate = useNavigate();
  const subject = storageService.getSubjectById(subjectId);
  const [progress, setProgress] = useState(() =>
    storageService.getProgress(subjectId)
  );

  if (!subject) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center border border-slate-200">
        <p className="text-slate-600">Không tìm thấy môn học.</p>
        <Link
          to="/"
          className="mt-3 inline-block text-sm font-medium text-indigo-600"
        >
          Quay về trang chủ
        </Link>
      </div>
    );
  }

  const chapterIndex = subject.chapters.findIndex((c) => c.id === chapterId);
  const chapter = subject.chapters[chapterIndex];

  if (!chapter) {
    return (
      <div className="rounded-2xl bg-white p-8 text-center border border-slate-200">
        <p className="text-slate-600">Không tìm thấy chương học này.</p>
        <Link
          to={`/subjects/${subject.id}`}
          className="mt-3 inline-block text-sm font-medium text-indigo-600"
        >
          Quay lại môn {subject.code}
        </Link>
      </div>
    );
  }

  const isCompleted = progress.completedChapterIds.includes(chapter.id);
  const chapterQuestions = subject.questions.filter(
    (q) => q.chapterId === chapter.id
  );
  const prevChapter =
    chapterIndex > 0 ? subject.chapters[chapterIndex - 1] : undefined;
  const nextChapter =
    chapterIndex < subject.chapters.length - 1
      ? subject.chapters[chapterIndex + 1]
      : undefined;

  const handleToggleComplete = () => {
    setProgress(storageService.toggleChapterComplete(subject.id, chapter.id));
  };

  const handlePracticeChapter = () => {
    const pack = createDynamicExamPack({
      subjectId: subject.id,
      category: 'chapter',
      title: `Ôn tập: ${chapter.title}`,
      chapterIds: [chapter.id],
      questionCount: Math.max(chapterQuestions.length, 1),
      durationMinutes: 15,
      passScorePercent: 50,
    });
    const state: ExamLaunchState = {
      pack,
      mode: 'practice',
      shuffleQuestions: false,
      shuffleOptions: true,
    };
    navigate(`/subjects/${subject.id}/exam`, { state });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-indigo-600"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại {subject.code}
        </Link>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-medium transition-colors ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            {isCompleted ? 'Đã học xong chương này' : 'Đánh dấu đã học'}
          </button>

          {chapterQuestions.length > 0 && (
            <button
              type="button"
              onClick={handlePracticeChapter}
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-sm font-medium text-white hover:bg-indigo-700"
            >
              <Play className="h-4 w-4" />
              Luyện {chapterQuestions.length} câu chương này
            </button>
          )}
        </div>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {subject.code} • Chương {chapter.order}
        </span>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">
          {chapter.title}
        </h1>
        {chapter.summary && (
          <p className="mt-2 text-sm text-slate-600">{chapter.summary}</p>
        )}
      </div>

      <div className="space-y-4">
        {chapter.sections.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-sm text-slate-500">
            Chưa có nội dung lý thuyết cho chương này. Hãy gửi slide vào thư mục{' '}
            <code className="font-mono">slides/{subject.id}/</code> để biên soạn chi tiết.
          </div>
        ) : (
          chapter.sections.map((section) => {
            const meta = SECTION_META[section.type];
            const Icon = meta.Icon;
            return (
              <section
                key={section.id}
                className={`rounded-2xl border p-5 shadow-sm ${meta.cardClass}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${meta.badgeClass}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {meta.label}
                  </span>
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-3">
                  {section.title}
                </h2>
                <StudyContentRenderer content={section.content} />
              </section>
            );
          })
        )}
      </div>

      <div className="flex items-center justify-between pt-2">
        {prevChapter ? (
          <Link
            to={`/subjects/${subject.id}/study/${prevChapter.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            <ArrowLeft className="h-4 w-4" />
            Chương trước
          </Link>
        ) : (
          <span />
        )}
        {nextChapter && (
          <Link
            to={`/subjects/${subject.id}/study/${nextChapter.id}`}
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Chương tiếp theo
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
