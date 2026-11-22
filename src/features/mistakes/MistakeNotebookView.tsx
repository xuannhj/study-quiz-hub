import { useState, useMemo, useEffect, useCallback, type FormEvent } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Play,
  Sparkles,
  Layers,
  List,
  AlertTriangle,
  Check,
  HelpCircle,
  BookMarked,
  Plus,
  Trash2,
  Edit2,
  CheckSquare,
  Square,
  Calendar,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import { createDynamicExamPack } from '../../services/exam/examEngine';
import type { Question, StudyNote, Subject, WrongQuestionStat } from '../../types/study';
import type { ExamLaunchState } from '../exam/types';
import { QuestionDiagram } from '../exam/QuestionDiagram';
import { FormattedText, FormattedOptionText } from '../../components/FormattedText';
import {
  COURSE_GROUPS,
  getSubjectCourseGroup,
  type CourseGroup,
} from '../../utils/courseGrouping';

export interface MistakeItem {
  subject: Subject;
  question: Question;
  stat: WrongQuestionStat;
}

type MainTab = 'mistakes' | 'notes';
type StatusFilter = 'unmastered' | 'all' | 'mastered' | 'frequent';
type ViewMode = 'flashcard' | 'list';
type NoteStatusFilter = 'all' | 'pending' | 'completed';

export function MistakeNotebookView() {
  const navigate = useNavigate();
  const [subjects, setSubjects] = useState<Subject[]>(() =>
    storageService.getSubjects()
  );
  const [mainTab, setMainTab] = useState<MainTab>('mistakes');
  const [selectedCourseGroup, setSelectedCourseGroup] = useState<CourseGroup>('all');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('unmastered');
  const [viewMode, setViewMode] = useState<ViewMode>('flashcard');

  // Flashcard state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);

  // Notes state
  const [notes, setNotes] = useState<StudyNote[]>(() =>
    storageService.getAllNotes()
  );
  const [showNewNoteModal, setShowNewNoteModal] = useState(false);
  const [newNoteSubjectId, setNewNoteSubjectId] = useState<string>(
    subjects[0]?.id ?? ''
  );
  const [newNoteContent, setNewNoteContent] = useState('');
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [editingNoteContent, setEditingNoteContent] = useState('');
  const [noteStatusFilter, setNoteStatusFilter] =
    useState<NoteStatusFilter>('all');

  // Sync state when storage changes
  const refreshSubjects = useCallback(() => {
    setSubjects(storageService.getSubjects());
  }, []);

  const refreshNotes = useCallback(() => {
    setNotes(storageService.getAllNotes());
  }, []);

  // Collect all mistake items across all subjects
  const allMistakeItems = useMemo(() => {
    const list: MistakeItem[] = [];
    for (const sub of subjects) {
      const progress = storageService.getProgress(sub.id);
      for (const q of sub.questions) {
        const stat = progress.wrongQuestionStats[q.id];
        if (stat) {
          list.push({ subject: sub, question: q, stat });
        }
      }
    }
    return list;
  }, [subjects]);

  // Subject statistics for badge counters
  const subjectStats = useMemo(() => {
    const stats: Record<
      string,
      { total: number; unmastered: number; noteCount: number; code: string; name: string }
    > = {};

    let grandTotal = 0;
    let grandUnmastered = 0;

    for (const sub of subjects) {
      const progress = storageService.getProgress(sub.id);
      let subTotal = 0;
      let subUnmastered = 0;

      for (const q of sub.questions) {
        const s = progress.wrongQuestionStats[q.id];
        if (s) {
          subTotal += 1;
          if (!s.mastered) subUnmastered += 1;
        }
      }

      const noteCount = notes.filter((n) => n.subjectId === sub.id).length;

      stats[sub.id] = {
        total: subTotal,
        unmastered: subUnmastered,
        noteCount,
        code: sub.code,
        name: sub.name,
      };

      grandTotal += subTotal;
      grandUnmastered += subUnmastered;
    }

    return {
      perSubject: stats,
      all: { total: grandTotal, unmastered: grandUnmastered, noteCount: notes.length },
    };
  }, [subjects, notes]);

  // Grouped stats by course code (FER, SWR, SWT)
  const courseGroupStats = useMemo(() => {
    const groupStats: Record<CourseGroup, { unmastered: number; noteCount: number }> = {
      all: { unmastered: subjectStats.all.unmastered, noteCount: notes.length },
      fer: { unmastered: 0, noteCount: 0 },
      swr: { unmastered: 0, noteCount: 0 },
      swt: { unmastered: 0, noteCount: 0 },
    };

    for (const sub of subjects) {
      const grp = getSubjectCourseGroup(sub.id, sub.code);
      const stat = subjectStats.perSubject[sub.id];
      if (stat) {
        groupStats[grp].unmastered += stat.unmastered;
        groupStats[grp].noteCount += stat.noteCount;
      }
    }
    return groupStats;
  }, [subjects, subjectStats, notes]);

  // Filtered items based on subject selection and status filter
  const filteredItems = useMemo(() => {
    return allMistakeItems.filter((item) => {
      if (selectedCourseGroup !== 'all') {
        const grp = getSubjectCourseGroup(item.subject.id, item.subject.code);
        if (grp !== selectedCourseGroup) return false;
      }
      if (selectedSubjectId !== 'all' && item.subject.id !== selectedSubjectId) {
        return false;
      }
      if (statusFilter === 'unmastered' && item.stat.mastered) {
        return false;
      }
      if (statusFilter === 'mastered' && !item.stat.mastered) {
        return false;
      }
      if (statusFilter === 'frequent' && item.stat.wrongCount < 2) {
        return false;
      }
      return true;
    });
  }, [allMistakeItems, selectedCourseGroup, selectedSubjectId, statusFilter]);

  // Filtered notes based on subject and status
  const filteredNotes = useMemo(() => {
    return notes.filter((n) => {
      if (selectedCourseGroup !== 'all') {
        const sub = subjects.find((s) => s.id === n.subjectId);
        const grp = getSubjectCourseGroup(n.subjectId, sub?.code);
        if (grp !== selectedCourseGroup) return false;
      }
      if (selectedSubjectId !== 'all' && n.subjectId !== selectedSubjectId) {
        return false;
      }
      if (noteStatusFilter === 'pending' && n.isCompleted) return false;
      if (noteStatusFilter === 'completed' && !n.isCompleted) return false;
      return true;
    });
  }, [notes, subjects, selectedCourseGroup, selectedSubjectId, noteStatusFilter]);

  // Keep index in bound
  const safeIndex =
    filteredItems.length === 0
      ? 0
      : Math.min(currentIndex, filteredItems.length - 1);
  const currentItem = filteredItems[safeIndex];

  // Note attached to current flashcard question (if any)
  const currentQuestionNote = useMemo(() => {
    if (!currentItem) return null;
    return notes.find((n) => n.questionId === currentItem.question.id);
  }, [currentItem, notes]);

  // Reset card state when moving
  const goToCard = useCallback(
    (index: number) => {
      const validIndex = Math.max(0, Math.min(index, filteredItems.length - 1));
      setCurrentIndex(validIndex);
      setIsFlipped(false);
      setSelectedOptionId(null);
    },
    [filteredItems.length]
  );

  const handleNext = useCallback(() => {
    if (safeIndex < filteredItems.length - 1) {
      goToCard(safeIndex + 1);
    } else {
      goToCard(0);
    }
  }, [safeIndex, filteredItems.length, goToCard]);

  const handlePrev = useCallback(() => {
    if (safeIndex > 0) {
      goToCard(safeIndex - 1);
    } else {
      goToCard(filteredItems.length - 1);
    }
  }, [safeIndex, filteredItems.length, goToCard]);

  // Mark mastered / unmastered
  const handleToggleMastered = (item: MistakeItem, mastered: boolean) => {
    storageService.setQuestionMastered(
      item.subject.id,
      item.question.id,
      mastered
    );
    refreshSubjects();
    if (mastered && statusFilter === 'unmastered') {
      setIsFlipped(false);
      setSelectedOptionId(null);
    }
  };

  // Keyboard navigation for flashcard
  useEffect(() => {
    if (mainTab !== 'mistakes' || viewMode !== 'flashcard' || !currentItem) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      } else if (e.key === '1') {
        e.preventDefault();
        handleNext();
      } else if (e.key === '2') {
        e.preventDefault();
        handleToggleMastered(currentItem, true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mainTab, viewMode, currentItem, handleNext, handlePrev]);

  // Note actions
  const handleCreateNote = (e: FormEvent) => {
    e.preventDefault();
    if (!newNoteContent.trim() || !newNoteSubjectId) return;
    storageService.saveNote({
      subjectId: newNoteSubjectId,
      content: newNoteContent.trim(),
    });
    setNewNoteContent('');
    setShowNewNoteModal(false);
    refreshNotes();
  };

  const handleSaveEditNote = (noteId: string) => {
    if (!editingNoteContent.trim()) return;
    const target = notes.find((n) => n.id === noteId);
    if (!target) return;
    storageService.saveNote({
      id: noteId,
      subjectId: target.subjectId,
      questionId: target.questionId,
      questionPrompt: target.questionPrompt,
      content: editingNoteContent.trim(),
      isCompleted: target.isCompleted,
    });
    setEditingNoteId(null);
    setEditingNoteContent('');
    refreshNotes();
  };

  const handleDeleteNote = (noteId: string) => {
    storageService.deleteNote(noteId);
    refreshNotes();
  };

  const handleToggleNoteCompleted = (noteId: string) => {
    storageService.toggleNoteCompleted(noteId);
    refreshNotes();
  };

  // Launch a Practice Exam from current filtered items
  const handleStartPracticeQuiz = () => {
    if (filteredItems.length === 0) return;

    const targetSubject =
      selectedSubjectId !== 'all'
        ? subjects.find((s) => s.id === selectedSubjectId) ??
          filteredItems[0].subject
        : filteredItems[0].subject;

    const targetQuestionIds = filteredItems
      .filter((it) => it.subject.id === targetSubject.id)
      .map((it) => it.question.id);

    const pack = createDynamicExamPack({
      subjectId: targetSubject.id,
      category: 'mistake',
      title: `Luyện tập ${targetQuestionIds.length} câu sai (${targetSubject.code})`,
      chapterIds: targetSubject.chapters.map((c) => c.id),
      questionCount: targetQuestionIds.length,
      durationMinutes: Math.max(5, Math.ceil(targetQuestionIds.length * 1.5)),
      fixedQuestionIds: targetQuestionIds,
    });

    const launchState: ExamLaunchState = {
      pack,
      mode: 'practice',
      shuffleQuestions: true,
      shuffleOptions: true,
    };

    navigate(`/subjects/${targetSubject.id}/exam`, { state: launchState });
  };

  return (
    <div className="space-y-6">
      {/* Top Header section */}
      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-firefly-soft border border-firefly/35 text-amber-800"
              aria-hidden="true"
            >
              <Sparkles className="h-4 w-4" />
            </span>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
              Sổ Tay Ôn Luyện &amp; Ghi Chú 🍮
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-ink-soft mt-1">
            Không gian học tập cá nhân hóa — Ôn lại câu sai, xem giải thích và
            ghi chú lại kiến thức mới!
          </p>
        </div>

        {/* Header CTA action buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          {mainTab === 'mistakes' ? (
            <>
              {/* View Mode Toggle */}
              <div className="inline-flex items-center rounded-2xl bg-mist-deep p-1 border border-sage-border">
                <button
                  type="button"
                  onClick={() => setViewMode('flashcard')}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                    viewMode === 'flashcard'
                      ? 'bg-paper text-ink shadow-sm'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  <Layers className="h-3.5 w-3.5" />
                  <span>Flashcard</span>
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                    viewMode === 'list'
                      ? 'bg-paper text-ink shadow-sm'
                      : 'text-ink-soft hover:text-ink'
                  }`}
                >
                  <List className="h-3.5 w-3.5" />
                  <span>Danh sách</span>
                </button>
              </div>

              {filteredItems.length > 0 && (
                <button
                  type="button"
                  onClick={handleStartPracticeQuiz}
                  className="inline-flex items-center gap-2 rounded-2xl bg-moss px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Làm bài test lại ({filteredItems.length} câu)
                </button>
              )}
            </>
          ) : (
            <button
              type="button"
              onClick={() => setShowNewNoteModal(true)}
              className="inline-flex items-center gap-2 rounded-2xl bg-moss px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
            >
              <Plus className="h-4 w-4" />
              Tạo ghi chú mới
            </button>
          )}
        </div>
      </div>

      {/* Main Mode Tabs Switcher */}
      <div className="flex items-center gap-2 border-b border-sage-border/70 pb-3">
        <button
          type="button"
          onClick={() => setMainTab('mistakes')}
          className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
            mainTab === 'mistakes'
              ? 'bg-moss text-white shadow-sm'
              : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
          }`}
        >
          <Layers className="h-4 w-4" />
          <span>Kho Câu Sai &amp; Flashcard ({subjectStats.all.unmastered})</span>
        </button>

        <button
          type="button"
          onClick={() => setMainTab('notes')}
          className={`inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-xs sm:text-sm font-bold transition-colors ${
            mainTab === 'notes'
              ? 'bg-moss text-white shadow-sm'
              : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
          }`}
        >
          <BookMarked className="h-4 w-4" />
          <span>Ghi Chú Cần Học ({notes.length})</span>
        </button>
      </div>

      {/* Course Group Selector (FER - SWR - SWT Segmented Control) */}
      <div className="space-y-2">
        <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-paper border border-sage-border shadow-soft">
          {COURSE_GROUPS.map((tab) => {
            const isActive = selectedCourseGroup === tab.id;
            const badgeCount =
              mainTab === 'mistakes'
                ? courseGroupStats[tab.id].unmastered
                : courseGroupStats[tab.id].noteCount;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setSelectedCourseGroup(tab.id);
                  setSelectedSubjectId('all');
                  goToCard(0);
                }}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-moss text-white shadow-sm'
                    : 'text-ink-soft hover:text-ink hover:bg-mist/70'
                }`}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.2 rounded-full font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-mist-deep text-ink-soft'
                  }`}
                >
                  {badgeCount}
                </span>
              </button>
            );
          })}
        </div>

        {/* Sub-selector if a course group is selected (e.g. FER, SWR, SWT) */}
        {selectedCourseGroup !== 'all' && (
          <div className="flex flex-wrap items-center gap-1.5 pl-1 animate-fade-in">
            <span className="text-xs text-ink-soft mr-1 font-medium">Chi tiết:</span>
            <button
              type="button"
              onClick={() => {
                setSelectedSubjectId('all');
                goToCard(0);
              }}
              className={`rounded-xl px-3 py-1 text-xs font-semibold transition-colors ${
                selectedSubjectId === 'all'
                  ? 'bg-sage-tint text-moss border border-moss/30 font-bold'
                  : 'bg-paper text-ink-soft border border-sage-border hover:bg-mist'
              }`}
            >
              Tất cả {COURSE_GROUPS.find((g) => g.id === selectedCourseGroup)?.label}
            </button>
            {subjects
              .filter(
                (s) =>
                  getSubjectCourseGroup(s.id, s.code) === selectedCourseGroup
              )
              .map((sub) => {
                const isSelected = selectedSubjectId === sub.id;
                const stat = subjectStats.perSubject[sub.id];
                const count =
                  mainTab === 'mistakes'
                    ? stat?.unmastered ?? 0
                    : stat?.noteCount ?? 0;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => {
                      setSelectedSubjectId(sub.id);
                      goToCard(0);
                    }}
                    className={`rounded-xl px-3 py-1 text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-sage-tint text-moss border border-moss/30 font-bold'
                        : 'bg-paper text-ink-soft border border-sage-border hover:bg-mist'
                    }`}
                  >
                    <span>{sub.code}</span>
                    <span className="text-[10px] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
          </div>
        )}
      </div>

      {/* Modal / Form: Create New Study Note */}
      {showNewNoteModal && (
        <div className="rounded-3xl border border-amber-300 bg-amber-50/70 p-6 shadow-cozy space-y-4 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-amber-950 flex items-center gap-2">
              <BookMarked className="h-4 w-4 text-amber-700" />
              Thêm ghi chú kiến thức mới
            </h3>
            <button
              type="button"
              onClick={() => setShowNewNoteModal(false)}
              className="text-xs font-semibold text-amber-900/70 hover:text-amber-950"
            >
              Đóng lại ✕
            </button>
          </div>

          <form onSubmit={handleCreateNote} className="space-y-4">
            <div>
              <label
                htmlFor="note-subject-select"
                className="block text-xs font-semibold text-amber-900 mb-1"
              >
                Chọn môn học liên quan:
              </label>
              <select
                id="note-subject-select"
                value={newNoteSubjectId}
                onChange={(e) => setNewNoteSubjectId(e.target.value)}
                className="w-full sm:w-64 rounded-xl border border-amber-200 bg-white p-2.5 text-xs text-ink focus:border-amber-400 focus:outline-none"
              >
                {subjects.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.code} — {s.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="note-content-input"
                className="block text-xs font-semibold text-amber-900 mb-1"
              >
                Nội dung kiến thức / công thức cần nhớ:
              </label>
              <textarea
                id="note-content-input"
                value={newNoteContent}
                onChange={(e) => setNewNoteContent(e.target.value)}
                placeholder="Ví dụ: Trong Redux Toolkit, createSlice sẽ tự sinh actions và action creators. Trong SWR, Non-functional requirements định nghĩa chất lượng hệ thống..."
                rows={4}
                className="w-full rounded-2xl border border-amber-200 bg-white p-3 text-sm text-ink placeholder:text-ink-soft/60 focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-200"
              />
            </div>

            <div className="flex justify-end gap-2.5">
              <button
                type="button"
                onClick={() => setShowNewNoteModal(false)}
                className="rounded-xl border border-amber-200 bg-white px-4 py-2 text-xs font-semibold text-amber-900 hover:bg-amber-100/50 transition-colors"
              >
                Hủy bỏ
              </button>
              <button
                type="submit"
                disabled={!newNoteContent.trim()}
                className="rounded-xl bg-moss px-5 py-2 text-xs font-semibold text-white hover:bg-moss-hover disabled:opacity-50 shadow-sm transition-colors"
              >
                Lưu vào Sổ tay
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Main Tab 1: Mistakes & Flashcards */}
      {mainTab === 'mistakes' ? (
        <>
          {/* Status filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-ink-soft mr-1 font-medium">Lọc theo:</span>
              {(
                [
                  { key: 'unmastered', label: 'Cần ôn tập' },
                  { key: 'all', label: 'Tất cả câu từng sai' },
                  { key: 'mastered', label: 'Đã thuộc (Mastered)' },
                  { key: 'frequent', label: 'Sai nhiều (≥ 2 lần)' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => {
                    setStatusFilter(tab.key);
                    goToCard(0);
                  }}
                  className={`rounded-xl px-3 py-1 font-medium transition-colors ${
                    statusFilter === tab.key
                      ? 'bg-ink text-paper font-semibold'
                      : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-ink-soft text-xs">
              Tìm thấy <strong className="text-ink">{filteredItems.length}</strong>{' '}
              câu hỏi
            </div>
          </div>

          {/* Mistakes Content Area */}
          {filteredItems.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-sage-border bg-paper p-10 text-center space-y-4 shadow-cozy">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-firefly-soft text-amber-700 text-3xl">
                🍮
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-ink">
                  {statusFilter === 'unmastered'
                    ? 'Tuyệt vời quá! Bé không còn câu sai nào cần ôn!'
                    : 'Chưa có câu hỏi nào trong danh mục này'}
                </h3>
                <p className="text-sm text-ink-soft max-w-md mx-auto">
                  {statusFilter === 'unmastered'
                    ? 'Bé đã chinh phục hết các câu từng sai của môn này rồi. Hãy thử sức thêm các đề thi mới nhé!'
                    : 'Làm bài thi thử và quiz, hệ thống sẽ tự động lưu lại những câu bé chọn nhầm để ôn tập tại đây.'}
                </p>
              </div>
              <div className="pt-2">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 rounded-2xl bg-moss px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
                >
                  Về trang chủ chọn đề thi
                </Link>
              </div>
            </div>
          ) : viewMode === 'flashcard' && currentItem ? (
            /* Flashcard Mode */
            <div className="space-y-4 max-w-3xl mx-auto">
              {/* Card Top Control Bar */}
              <div className="flex items-center justify-between text-xs sm:text-sm text-ink-soft">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-ink">
                    Thẻ {safeIndex + 1} / {filteredItems.length}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-lg bg-sage-tint px-2 py-0.5 font-bold text-ink">
                    {currentItem.subject.code}
                  </span>
                  {currentItem.stat.wrongCount >= 2 && (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-blossom-soft px-2 py-0.5 text-blossom-ink font-semibold">
                      <AlertTriangle className="h-3 w-3" />
                      Sai {currentItem.stat.wrongCount} lần
                    </span>
                  )}
                  {currentItem.stat.mastered && (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-100 text-emerald-800 px-2 py-0.5 font-semibold">
                      <Check className="h-3 w-3" />
                      Đã thuộc
                    </span>
                  )}
                  {currentQuestionNote && (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-amber-100 text-amber-900 px-2 py-0.5 font-semibold">
                      <BookMarked className="h-3 w-3 text-amber-700" />
                      Có ghi chú
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrev}
                    aria-label="Thẻ trước"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    aria-label="Thẻ sau"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-sage-border bg-paper text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Flashcard Body */}
              <div
                className={`rounded-3xl border border-sage-border bg-paper p-6 sm:p-8 shadow-cozy min-h-[380px] flex flex-col justify-between gap-6 transition-all duration-300 ${
                  isFlipped ? 'ring-2 ring-moss/30' : ''
                }`}
              >
                {/* Front Side */}
                {!isFlipped ? (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider font-bold text-ink-soft">
                          Mặt trước: Câu hỏi
                        </span>
                        <span className="text-xs text-ink-soft">
                          Phím tắt: [Space] Lật thẻ
                        </span>
                      </div>
                      <div className="text-base sm:text-lg font-semibold text-ink leading-relaxed">
                        <FormattedText content={currentItem.question.prompt} />
                      </div>
                    </div>

                    <QuestionDiagram
                      imageUrl={currentItem.question.imageUrl}
                      imageCaption={currentItem.question.imageCaption}
                    />

                    <div className="space-y-2 pt-2">
                      <p className="text-xs text-ink-soft font-medium">
                        Chọn đáp án bạn nghĩ là đúng (hoặc bấm lật thẻ để xem ngay):
                      </p>
                      <div className="grid gap-2">
                        {currentItem.question.options.map((opt, oIdx) => {
                          const letter = String.fromCharCode(65 + oIdx);
                          const isSelected = selectedOptionId === opt.id;
                          return (
                            <button
                              key={opt.id}
                              type="button"
                              onClick={() => setSelectedOptionId(opt.id)}
                              className={`w-full text-left p-3.5 rounded-2xl border text-sm transition-all flex items-start gap-3 ${
                                isSelected
                                  ? 'bg-sage-tint border-moss text-ink font-medium shadow-sm'
                                  : 'bg-paper border-sage-border text-ink hover:bg-mist-deep'
                              }`}
                            >
                              <span
                                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                                  isSelected
                                    ? 'bg-moss text-white'
                                    : 'bg-mist-deep text-ink-soft border border-sage-border'
                                }`}
                              >
                                {letter}
                              </span>
                              <div className="pt-0.5 flex-1">
                                <FormattedOptionText text={opt.text} />
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="pt-4 flex justify-center">
                      <button
                        type="button"
                        onClick={() => setIsFlipped(true)}
                        className="inline-flex items-center gap-2.5 rounded-2xl bg-firefly px-6 py-3 text-sm font-bold text-ink shadow-sm hover:bg-firefly-bright transition-all transform hover:scale-[1.02]"
                      >
                        <RotateCcw className="h-4 w-4" />
                        Lật thẻ xem đáp án &amp; giải thích
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Back Side */
                  <div className="space-y-6 animate-fade-in">
                    <div className="flex items-center justify-between border-b border-sage-border/60 pb-3">
                      <span className="text-xs uppercase tracking-wider font-bold text-moss flex items-center gap-1.5">
                        <Sparkles className="h-4 w-4" />
                        Mặt sau: Đáp án chuẩn &amp; Lời giải
                      </span>
                      <button
                        type="button"
                        onClick={() => setIsFlipped(false)}
                        className="text-xs text-ink-soft hover:text-ink inline-flex items-center gap-1"
                      >
                        <RotateCcw className="h-3 w-3" />
                        Lật lại mặt trước
                      </button>
                    </div>

                    <div className="text-sm font-medium text-ink-soft">
                      <FormattedText content={currentItem.question.prompt} />
                    </div>

                    {/* Correct Options Highlight */}
                    <div className="space-y-2">
                      <p className="text-xs font-bold uppercase tracking-wider text-ink-soft">
                        Đáp án chính xác:
                      </p>
                      <div className="grid gap-2">
                        {currentItem.question.options.map((opt, oIdx) => {
                          const letter = String.fromCharCode(65 + oIdx);
                          const isCorrect =
                            currentItem.question.correctOptionIds.includes(opt.id);
                          const isUserSelected = selectedOptionId === opt.id;

                          if (!isCorrect && !isUserSelected) return null;

                          return (
                            <div
                              key={opt.id}
                              className={`p-3.5 rounded-2xl border text-sm flex items-start gap-3 ${
                                isCorrect
                                  ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-medium'
                                  : 'bg-rose-50 border-rose-200 text-rose-950 line-through opacity-70'
                              }`}
                            >
                              <span
                                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                                  isCorrect
                                    ? 'bg-emerald-600 text-white'
                                    : 'bg-rose-500 text-white'
                                }`}
                              >
                                {letter}
                              </span>
                              <div className="space-y-0.5 flex-1">
                                <div><FormattedOptionText text={opt.text} /></div>
                                {isCorrect && (
                                  <span className="text-xs text-emerald-700 font-semibold inline-flex items-center gap-1">
                                    <CheckCircle2 className="h-3 w-3" /> Đáp án đúng
                                  </span>
                                )}
                                {!isCorrect && isUserSelected && (
                                  <span className="text-xs text-rose-700 font-semibold inline-flex items-center gap-1">
                                    <XCircle className="h-3 w-3" /> Bạn đã chọn câu này
                                  </span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Detailed Explanation */}
                    <div className="rounded-2xl border border-sage-border/80 bg-mist-deep p-4 space-y-2">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-ink">
                        <HelpCircle className="h-4 w-4 text-moss" />
                        <span>Giải thích chi tiết &amp; Nguồn kiến thức:</span>
                      </div>
                      <div className="text-sm text-ink leading-relaxed">
                        {currentItem.question.explanation ? (
                          <FormattedText content={currentItem.question.explanation} />
                        ) : (
                          'Câu hỏi này cần nắm vững định nghĩa trong Slide bài giảng.'
                        )}
                      </div>
                    </div>

                    {/* Personal Note for this question if exists */}
                    {currentQuestionNote && (
                      <div className="rounded-2xl border border-amber-300/80 bg-amber-50/90 p-4 space-y-1.5 shadow-sm">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-amber-950">
                          <BookMarked className="h-4 w-4 text-amber-700" />
                          <span>Ghi chú của Xuân Nhi cho câu này:</span>
                        </div>
                        <p className="text-sm text-amber-950 leading-relaxed whitespace-pre-line">
                          {currentQuestionNote.content}
                        </p>
                      </div>
                    )}

                    {/* Self-Assessment Action Buttons */}
                    <div className="pt-2 grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => {
                          handleToggleMastered(currentItem, false);
                          handleNext();
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-rose-200 bg-rose-50/80 px-4 py-3 text-xs sm:text-sm font-bold text-rose-800 hover:bg-rose-100 transition-colors"
                      >
                        <XCircle className="h-4 w-4" />
                        <span>Vẫn chưa nhớ [Phím 1]</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          handleToggleMastered(currentItem, true);
                          handleNext();
                        }}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-moss px-4 py-3 text-xs sm:text-sm font-bold text-white shadow-sm hover:bg-moss-hover transition-colors"
                      >
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Đã hiểu &amp; nhớ rồi! [Phím 2]</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* List Mode */
            <div className="space-y-4">
              <div className="divide-y divide-sage-border/80 rounded-3xl border border-sage-border bg-paper p-4 sm:p-6 shadow-cozy">
                {filteredItems.map((item, idx) => {
                  const isMastered = item.stat.mastered;
                  const itemNote = notes.find((n) => n.questionId === item.question.id);

                  return (
                    <div key={item.question.id} className="py-4 first:pt-0 last:pb-0 space-y-3">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1.5 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-bold text-ink-soft">
                              #{idx + 1}
                            </span>
                            <span className="rounded-lg bg-sage-tint px-2 py-0.5 text-xs font-bold text-ink">
                              {item.subject.code}
                            </span>
                            {item.stat.wrongCount >= 2 && (
                              <span className="rounded-lg bg-blossom-soft px-2 py-0.5 text-xs font-semibold text-blossom-ink flex items-center gap-1">
                                <AlertTriangle className="h-3 w-3" />
                                Sai {item.stat.wrongCount} lần
                              </span>
                            )}
                            {isMastered && (
                              <span className="rounded-lg bg-emerald-100 text-emerald-800 px-2 py-0.5 text-xs font-semibold flex items-center gap-1">
                                <Check className="h-3 w-3" /> Đã thuộc
                              </span>
                            )}
                            {itemNote && (
                              <span className="rounded-lg bg-amber-100 text-amber-900 px-2 py-0.5 text-xs font-semibold flex items-center gap-1">
                                <BookMarked className="h-3 w-3 text-amber-700" /> Có ghi chú
                              </span>
                            )}
                          </div>
                          <div className="text-sm font-semibold text-ink leading-relaxed">
                            <FormattedText content={item.question.prompt} />
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleToggleMastered(item, !isMastered)}
                          className={`shrink-0 inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-semibold transition-colors ${
                            isMastered
                              ? 'border border-sage-border text-ink-soft hover:bg-sage-tint'
                              : 'bg-moss text-white hover:bg-moss-hover shadow-sm'
                          }`}
                        >
                          {isMastered ? (
                            <>
                              <RotateCcw className="h-3.5 w-3.5" />
                              <span>Học lại</span>
                            </>
                          ) : (
                            <>
                              <Check className="h-3.5 w-3.5" />
                              <span>Đánh dấu Đã thuộc</span>
                            </>
                          )}
                        </button>
                      </div>

                      {item.question.imageUrl && (
                        <div className="max-w-md pt-1">
                          <QuestionDiagram
                            imageUrl={item.question.imageUrl}
                            imageCaption={item.question.imageCaption}
                            compact
                          />
                        </div>
                      )}

                      {/* Options with correct highlighted */}
                      <div className="grid gap-1.5 pl-2 sm:pl-4 border-l-2 border-sage-border">
                        {item.question.options.map((opt, oIdx) => {
                          const letter = String.fromCharCode(65 + oIdx);
                          const isCorrect = item.question.correctOptionIds.includes(
                            opt.id
                          );
                          return (
                            <div
                              key={opt.id}
                              className={`text-xs p-2 rounded-xl flex items-center gap-2 ${
                                isCorrect
                                  ? 'bg-emerald-50 text-emerald-900 font-semibold'
                                  : 'text-ink-soft'
                              }`}
                            >
                              <span className="font-bold">{letter}.</span>
                              <div className="flex-1">
                                <FormattedOptionText text={opt.text} />
                              </div>
                              {isCorrect && (
                                <span className="ml-auto text-[11px] text-emerald-700">
                                  (Đáp án đúng)
                                </span>
                              )}
                            </div>
                          );
                        })}
                      </div>

                      {/* Explanation box */}
                      {item.question.explanation && (
                        <div className="rounded-xl bg-mist-deep p-3 text-xs text-ink leading-relaxed">
                          <strong className="text-moss">Giải thích: </strong>
                          <FormattedText content={item.question.explanation} className="inline font-normal" />
                        </div>
                      )}

                      {/* Attached note if exists */}
                      {itemNote && (
                        <div className="rounded-xl bg-amber-50/90 border border-amber-200/80 p-3 text-xs text-amber-950 space-y-1">
                          <strong className="text-amber-800 flex items-center gap-1">
                            <BookMarked className="h-3.5 w-3.5 text-amber-700" />
                            Ghi chú của Xuân Nhi:
                          </strong>
                          <p className="whitespace-pre-line">{itemNote.content}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </>
      ) : (
        /* Main Tab 2: Study Notes View */
        <div className="space-y-4">
          {/* Note Status Filter */}
          <div className="flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-ink-soft mr-1 font-medium">Trạng thái:</span>
              {(
                [
                  { key: 'all', label: 'Tất cả ghi chú' },
                  { key: 'pending', label: 'Đang cần học' },
                  { key: 'completed', label: 'Đã học xong ✨' },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setNoteStatusFilter(tab.key)}
                  className={`rounded-xl px-3 py-1 font-medium transition-colors ${
                    noteStatusFilter === tab.key
                      ? 'bg-ink text-paper font-semibold'
                      : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="text-ink-soft text-xs">
              Có <strong className="text-ink">{filteredNotes.length}</strong> ghi
              chú
            </div>
          </div>

          {/* Notes List */}
          {filteredNotes.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-sage-border bg-paper p-10 text-center space-y-4 shadow-cozy">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-amber-100 text-amber-800 text-3xl">
                📝
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-ink">
                  {noteStatusFilter === 'completed'
                    ? 'Bé chưa đánh dấu hoàn thành ghi chú nào!'
                    : 'Chưa có ghi chú nào cho danh mục này'}
                </h3>
                <p className="text-sm text-ink-soft max-w-md mx-auto">
                  Trong lúc làm đề thi hoặc luyện tập, bé có thể bấm nút &quot;Ghi chú&quot;
                  để lưu lại công thức, bẫy lý thuyết, hoặc bấm nút &quot;Tạo ghi chú
                  mới&quot; ở trên nhé!
                </p>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewNoteModal(true)}
                  className="inline-flex items-center gap-2 rounded-2xl bg-moss px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-moss-hover transition-colors"
                >
                  <Plus className="h-4 w-4" />
                  Tạo ghi chú đầu tiên
                </button>
              </div>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {filteredNotes.map((note) => {
                const subject = subjects.find((s) => s.id === note.subjectId);
                const isEditing = editingNoteId === note.id;

                return (
                  <div
                    key={note.id}
                    className={`rounded-3xl border p-5 shadow-cozy flex flex-col justify-between gap-4 transition-all ${
                      note.isCompleted
                        ? 'border-sage-border/60 bg-paper/60 opacity-80'
                        : 'border-amber-200 bg-amber-50/40 ring-1 ring-amber-200/50'
                    }`}
                  >
                    <div className="space-y-3">
                      {/* Note Header: Subject code, date, actions */}
                      <div className="flex items-center justify-between gap-2 border-b border-sage-border/50 pb-2.5">
                        <div className="flex items-center gap-2">
                          <span className="rounded-lg bg-sage-tint px-2 py-0.5 text-xs font-bold text-ink">
                            {subject?.code ?? note.subjectId}
                          </span>
                          <span className="text-[11px] text-ink-soft flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(note.createdAt).toLocaleDateString('vi-VN')}
                          </span>
                        </div>

                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            onClick={() => {
                              if (isEditing) {
                                setEditingNoteId(null);
                              } else {
                                setEditingNoteId(note.id);
                                setEditingNoteContent(note.content);
                              }
                            }}
                            className="p-1 rounded-lg text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
                            title="Sửa ghi chú"
                          >
                            <Edit2 className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteNote(note.id)}
                            className="p-1 rounded-lg text-rose-600/70 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                            title="Xóa ghi chú"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Question Prompt Quote if associated */}
                      {note.questionPrompt && (
                        <div className="rounded-xl bg-paper/80 border border-sage-border/60 p-2.5 text-xs text-ink-soft italic">
                          <span className="font-semibold not-italic text-ink">
                            Ghi chú từ câu hỏi:{' '}
                          </span>
                          &quot;{note.questionPrompt}&quot;
                        </div>
                      )}

                      {/* Note Content / Inline Edit */}
                      {isEditing ? (
                        <div className="space-y-2">
                          <textarea
                            value={editingNoteContent}
                            onChange={(e) => setEditingNoteContent(e.target.value)}
                            rows={3}
                            className="w-full rounded-xl border border-amber-300 bg-white p-2.5 text-xs text-ink focus:outline-none focus:ring-2 focus:ring-amber-200"
                          />
                          <div className="flex justify-end gap-2">
                            <button
                              type="button"
                              onClick={() => setEditingNoteId(null)}
                              className="px-2.5 py-1 text-xs rounded-lg border border-sage-border text-ink-soft hover:bg-sage-tint"
                            >
                              Hủy
                            </button>
                            <button
                              type="button"
                              onClick={() => handleSaveEditNote(note.id)}
                              className="px-3 py-1 text-xs rounded-lg bg-moss text-white font-semibold hover:bg-moss-hover"
                            >
                              Lưu
                            </button>
                          </div>
                        </div>
                      ) : (
                        <p
                          className={`text-sm leading-relaxed whitespace-pre-line text-ink ${
                            note.isCompleted ? 'line-through text-ink-soft' : ''
                          }`}
                        >
                          {note.content}
                        </p>
                      )}
                    </div>

                    {/* Completion Toggle */}
                    <div className="border-t border-sage-border/50 pt-2.5 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => handleToggleNoteCompleted(note.id)}
                        className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-colors ${
                          note.isCompleted
                            ? 'text-emerald-700 hover:text-emerald-800'
                            : 'text-ink-soft hover:text-ink'
                        }`}
                      >
                        {note.isCompleted ? (
                          <CheckSquare className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <Square className="h-4 w-4 text-ink-soft" />
                        )}
                        <span>
                          {note.isCompleted
                            ? 'Đã học xong kiến thức này ✨'
                            : 'Đánh dấu Đã học xong'}
                        </span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
