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
import { recordCompletedChapter } from '../../services/studyStreak';
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
    badgeClass: 'bg-moss-soft text-moss',
    cardClass: 'border-sage-border bg-paper',
    Icon: Sparkles,
  },
  comparison: {
    label: 'Bảng phân biệt',
    badgeClass: 'bg-rain-soft text-rain-ink',
    cardClass: 'border-rain/30 bg-rain-soft/25',
    Icon: Table2,
  },
  keywords: {
    label: 'Từ khóa nhận diện',
    badgeClass: 'bg-blossom-soft text-blossom-ink',
    cardClass: 'border-blossom/30 bg-blossom-soft/30',
    Icon: Bookmark,
  },
  exam_tip: {
    label: 'Bẫy & Mẹo đi thi',
    badgeClass: 'bg-firefly-soft text-wood',
    cardClass: 'border-firefly/40 bg-firefly-soft/40',
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
      <div className="rounded-3xl bg-paper p-8 text-center border border-sage-border shadow-cozy">
        <p className="text-ink-soft">Không tìm thấy môn học.</p>
        <Link
          to="/"
          className="mt-3 inline-block text-sm font-semibold text-moss"
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
      <div className="rounded-3xl bg-paper p-8 text-center border border-sage-border shadow-cozy">
        <p className="text-ink-soft">Không tìm thấy chương học này.</p>
        <Link
          to={`/subjects/${subject.id}`}
          className="mt-3 inline-block text-sm font-semibold text-moss"
        >
          Quay lại môn {subject.code}
        </Link>
      </div>
    );
  }

  const isExamBank = Boolean(subject.id.includes('-past'));
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
    const nextProgress = storageService.toggleChapterComplete(
      subject.id,
      chapter.id
    );
    if (!isCompleted && nextProgress.completedChapterIds.includes(chapter.id)) {
      recordCompletedChapter();
    }
    setProgress(nextProgress);
  };

  const handleStartExam = (mode: 'exam' | 'practice') => {
    const matchingPack =
      subject.examPacks.find(
        (p) =>
          ((p.chapterIds.length === 1 && p.chapterIds[0] === chapter.id) ||
            p.title.toLowerCase().includes(chapter.title.toLowerCase())) &&
          (!isExamBank || p.questionCount >= chapterQuestions.length)
      ) ||
      createDynamicExamPack({
        subjectId: subject.id,
        category: 'final',
        title: isExamBank ? `Đề thi: ${chapter.title}` : `Ôn tập: ${chapter.title}`,
        chapterIds: [chapter.id],
        questionCount: Math.max(chapterQuestions.length, 1),
        durationMinutes: isExamBank
          ? Math.max(45, Math.round(chapterQuestions.length * 0.9))
          : 15,
        passScorePercent: 50,
      });

    const state: ExamLaunchState = {
      pack: matchingPack,
      mode,
      shuffleQuestions: mode === 'exam',
      shuffleOptions: true,
    };
    navigate(`/subjects/${subject.id}/exam`, { state });
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <Link
          to={`/subjects/${subject.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-moss transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Quay lại {subject.code}
        </Link>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleToggleComplete}
            className={`inline-flex items-center gap-1.5 rounded-2xl px-3.5 py-2 text-sm font-semibold transition-colors ${
              isCompleted
                ? 'bg-moss text-white hover:bg-moss-hover'
                : 'border border-sage-border bg-paper text-ink hover:bg-sage-tint'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            {isCompleted
              ? isExamBank
                ? 'Đã làm xong kì này'
                : 'Đã học xong chương này'
              : isExamBank
                ? 'Đánh dấu đã làm'
                : 'Đánh dấu đã học'}
          </button>

          {chapterQuestions.length > 0 && (
            <>
              <button
                type="button"
                onClick={() => handleStartExam('exam')}
                className="inline-flex items-center gap-1.5 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover transition-colors shadow-sm"
              >
                <Play className="h-4 w-4 fill-white" />
                {isExamBank
                  ? `Vào thi ngay (${chapterQuestions.length} câu)`
                  : `Thi (${chapterQuestions.length} câu)`}
              </button>
              <button
                type="button"
                onClick={() => handleStartExam('practice')}
                className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-3.5 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
              >
                Luyện tập có đáp án
              </button>
            </>
          )}
        </div>
      </div>

      {isExamBank && (
        <div className="rounded-3xl border border-moss/30 bg-moss-soft/40 p-4 sm:p-5 flex items-start gap-3.5 text-ink">
          <Sparkles className="h-5 w-5 text-moss shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h2 className="text-sm font-bold text-moss">
              Kho đề thi FE thực tế — {chapter.title}
            </h2>
            <p className="text-xs sm:text-sm text-ink-soft leading-relaxed">
              Mục này tổng hợp câu hỏi thi thực chiến kì {chapter.title} kèm ảnh chụp đề gốc và giải thích. Em có thể bấm <strong>Vào thi ngay</strong> để làm bài thi có bấm giờ như trên trường, hoặc <strong>Luyện tập có đáp án</strong> để vừa làm vừa xem ngay đáp án đúng và phân tích bẫy nhé!
            </p>
          </div>
        </div>
      )}

      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy">
        <span className="inline-block rounded-lg bg-moss-soft px-2.5 py-0.5 text-xs font-mono font-semibold text-moss">
          {subject.code} • {isExamBank ? `Đề Kì ${chapter.order}` : `Chương ${chapter.order}`}
        </span>
        <h1 className="mt-2 text-2xl font-bold text-ink leading-snug">
          {chapter.title}
        </h1>
        {chapter.summary && (
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">
            {chapter.summary}
          </p>
        )}
      </div>

      <div className="space-y-4">
        {chapter.sections.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-sage-border bg-paper p-8 text-center text-sm text-ink-soft">
            {isExamBank
              ? 'Kì thi này chưa có thêm ghi chú lý thuyết. Em hãy bấm Vào thi ngay ở trên để luyện đề nhé!'
              : 'Chưa có nội dung lý thuyết cho chương này. Em có thể gửi slide vào thư mục slides/' + subject.id + '/ để tổng hợp thêm nhé.'}
          </div>
        ) : (
          chapter.sections.map((section) => {
            const meta = SECTION_META[section.type];
            const Icon = meta.Icon;
            const labelText = isExamBank
              ? section.type === 'concept'
                ? 'Phạm vi & Trọng tâm đề thi'
                : section.type === 'exam_tip'
                  ? 'Bẫy đề thi & Mẹo làm bài'
                  : meta.label
              : meta.label;

            return (
              <section
                key={section.id}
                className={`rounded-3xl border p-5 sm:p-6 shadow-cozy ${meta.cardClass}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-xs font-semibold ${meta.badgeClass}`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {labelText}
                  </span>
                </div>
                <h2 className="text-base font-bold text-ink mb-3">
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
            className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            {isExamBank ? 'Kì trước' : 'Chương trước'}
          </Link>
        ) : (
          <span />
        )}
        {nextChapter && (
          <Link
            to={`/subjects/${subject.id}/study/${nextChapter.id}`}
            className="inline-flex items-center gap-1.5 rounded-2xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
          >
            {isExamBank ? 'Kì tiếp theo' : 'Chương tiếp theo'}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>
    </div>
  );
}
