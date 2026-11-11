import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import {
  AlertCircle,
  BookOpen,
  FileQuestion,
  GraduationCap,
  Plus,
  Search,
  X,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import type { Subject } from '../../types/study';

export function DashboardView() {
  const [subjects, setSubjects] = useState<Subject[]>(() =>
    storageService.getSubjects()
  );
  const [query, setQuery] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [code, setCode] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const filtered = subjects.filter((s) => {
    const q = query.trim().toLowerCase();
    if (!q) return true;
    return (
      s.code.toLowerCase().includes(q) ||
      s.name.toLowerCase().includes(q) ||
      s.description.toLowerCase().includes(q)
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Không gian Học &amp; Luyện Thi
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Học lý thuyết trọng tâm từ slide, làm bài Quiz định kỳ và thi thử Final Exam theo từng môn học.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowCreateModal(true)}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 transition-colors"
        >
          <Plus className="h-4 w-4" />
          Thêm Môn Học
        </button>
      </div>

      <div className="relative">
        <Search className="h-4 w-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Tìm môn học theo mã môn hoặc tên (VD: SWR302)..."
          className="w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2.5 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
        />
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-10 text-center text-sm text-slate-500">
          Không tìm thấy môn học phù hợp với "{query}".
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2">
          {filtered.map((subject) => {
            const progress = storageService.getProgress(subject.id);
            const wrongCount = Object.values(
              progress.wrongQuestionStats
            ).filter((w) => !w.mastered).length;
            const quizCount = subject.examPacks.filter(
              (p) => p.category === 'quiz'
            ).length;
            const finalCount = subject.examPacks.filter(
              (p) => p.category === 'final'
            ).length;

            return (
              <Link
                key={subject.id}
                to={`/subjects/${subject.id}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between gap-4"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                      {subject.code}
                    </span>
                    {wrongCount > 0 && (
                      <span className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-700">
                        <AlertCircle className="h-3.5 w-3.5" />
                        {wrongCount} câu cần ôn lại
                      </span>
                    )}
                  </div>

                  <h2 className="mt-3 text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {subject.name}
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                    {subject.description || 'Chưa có mô tả cho môn học này.'}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-indigo-500" />
                    <span>
                      {progress.completedChapterIds.length}/{subject.chapters.length} chương
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FileQuestion className="h-3.5 w-3.5 text-emerald-500" />
                    <span>{subject.questions.length} câu hỏi</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GraduationCap className="h-3.5 w-3.5 text-violet-500" />
                    <span>
                      {quizCount} Quiz • {finalCount} Final
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}

      {showCreateModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">
                Thêm Môn Học Mới
              </h2>
              <button
                type="button"
                onClick={() => setShowCreateModal(false)}
                className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleCreate} className="mt-4 space-y-4">
              <div>
                <label
                  htmlFor="subject-code"
                  className="block text-sm font-medium text-slate-700"
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
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject-name"
                  className="block text-sm font-medium text-slate-700"
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
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label
                  htmlFor="subject-desc"
                  className="block text-sm font-medium text-slate-700"
                >
                  Mô tả ngắn
                </label>
                <textarea
                  id="subject-desc"
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mục tiêu ôn thi hoặc ghi chú cho môn..."
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="rounded-xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Hủy
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
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

