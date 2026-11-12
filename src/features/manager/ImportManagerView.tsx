import { useState, type ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  AlertTriangle,
  CheckCircle2,
  Download,
  Eye,
  Save,
  Upload,
} from 'lucide-react';
import { storageService } from '../../services/storage';
import {
  parseJsonQuestionsImport,
  parseRawQuestionsText,
  type ParsedImportResult,
} from '../../services/importer/questionParser';
import type { ExamTarget } from '../../types/study';

export function ImportManagerView() {
  const [searchParams] = useSearchParams();
  const [subjects] = useState(() => storageService.getSubjects());
  const initialSubject =
    searchParams.get('subject') ?? subjects[0]?.id ?? 'swr';

  const [subjectId, setSubjectId] = useState(initialSubject);
  const selectedSubject =
    subjects.find((s) => s.id === subjectId) ?? subjects[0];

  const [chapterId, setChapterId] = useState(
    selectedSubject?.chapters[0]?.id ?? 'general'
  );
  const [examTarget, setExamTarget] = useState<ExamTarget>('both');
  const [rawInput, setRawInput] = useState('');
  const [preview, setPreview] = useState<ParsedImportResult | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [backupMessage, setBackupMessage] = useState<string | null>(null);

  const handleSubjectChange = (nextId: string) => {
    setSubjectId(nextId);
    const nextSub = subjects.find((s) => s.id === nextId);
    setChapterId(nextSub?.chapters[0]?.id ?? 'general');
    setPreview(null);
    setStatusMessage(null);
  };

  const handlePreview = () => {
    if (!selectedSubject) return;
    setStatusMessage(null);
    const trimmed = rawInput.trim();
    const existingPrompts = selectedSubject.questions.map((q) => q.prompt);

    if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
      setPreview(
        parseJsonQuestionsImport(trimmed, {
          defaultChapterId: chapterId,
          defaultExamTarget: examTarget,
          existingPrompts,
        })
      );
      return;
    }

    setPreview(
      parseRawQuestionsText(trimmed, {
        defaultChapterId: chapterId,
        defaultExamTarget: examTarget,
        existingPrompts,
      })
    );
  };

  const handleSave = () => {
    if (!preview || preview.questions.length === 0 || !selectedSubject) return;
    const saved = storageService.importQuestionsToSubject(
      selectedSubject.id,
      preview.questions
    );
    setStatusMessage(
      `Đã lưu ${saved.length} câu hỏi mới vào môn ${selectedSubject.code}!`
    );
    setRawInput('');
    setPreview(null);
  };

  const handleDownloadBackup = () => {
    const json = storageService.exportBackupJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `study-quiz-hub-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleRestoreFile = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const res = storageService.importBackupJson(text);
    setBackupMessage(
      res.ok
        ? `Khôi phục dữ liệu thành công (${res.subjectCount} môn học). Hãy tải lại trang nếu cần.`
        : res.error
    );
  };

  return (
    <div className="mx-auto max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-ink">
          Import Câu Hỏi &amp; Sao Lưu Dữ Liệu
        </h1>
        <p className="mt-1 text-sm text-ink-soft">
          Dán văn bản câu hỏi thô (hỗ trợ tiếng Việt/Anh, câu chọn nhiều đáp án)
          hoặc mảng JSON để nạp nhanh vào môn học mới của Xuân Nhi.
        </p>
      </div>

      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1.5">
              Môn học đích
            </label>
            <select
              value={subjectId}
              onChange={(e) => handleSubjectChange(e.target.value)}
              className="w-full rounded-xl border border-sage-border bg-mist/60 px-3 py-2 text-sm text-ink outline-none focus:border-moss"
            >
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.code} — {s.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1.5">
              Chương áp dụng
            </label>
            <select
              value={chapterId}
              onChange={(e) => setChapterId(e.target.value)}
              className="w-full rounded-xl border border-sage-border bg-mist/60 px-3 py-2 text-sm text-ink outline-none focus:border-moss"
            >
              {(selectedSubject?.chapters ?? []).map((ch) => (
                <option key={ch.id} value={ch.id}>
                  Chương {ch.order}: {ch.title}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-ink-soft mb-1.5">
              Phân loại bộ đề
            </label>
            <select
              value={examTarget}
              onChange={(e) => setExamTarget(e.target.value as ExamTarget)}
              className="w-full rounded-xl border border-sage-border bg-mist/60 px-3 py-2 text-sm text-ink outline-none focus:border-moss"
            >
              <option value="both">Dùng cho cả Quiz &amp; Final</option>
              <option value="quiz">Chỉ dành cho Quiz</option>
              <option value="final">Chỉ dành cho Final</option>
            </select>
          </div>
        </div>

        <div>
          <label
            htmlFor="raw-import-input"
            className="block text-sm font-medium text-ink mb-1.5"
          >
            Dán câu hỏi hoặc JSON
          </label>
          <textarea
            id="raw-import-input"
            rows={10}
            value={rawInput}
            onChange={(e) => setRawInput(e.target.value)}
            placeholder={`Ví dụ:\n1. What is SRS?\nA. Software Review Sheet\n*B. Software Requirements Specification\nC. System Resource Service\nGiải thích: SRS là tài liệu đặc tả yêu cầu phần mềm.`}
            className="w-full rounded-2xl border border-sage-border bg-mist/40 p-3.5 text-sm font-mono text-ink outline-none focus:border-moss focus:bg-paper"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={!rawInput.trim()}
            onClick={handlePreview}
            className="inline-flex items-center gap-2 rounded-2xl border border-moss bg-moss-soft/50 px-4 py-2 text-sm font-semibold text-moss hover:bg-moss-soft disabled:opacity-50 transition-colors"
          >
            <Eye className="h-4 w-4" />
            Xem trước &amp; Kiểm tra
          </button>

          {preview && preview.questions.length > 0 && (
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-2 rounded-2xl bg-moss px-4 py-2 text-sm font-semibold text-white hover:bg-moss-hover transition-colors"
            >
              <Save className="h-4 w-4" />
              Lưu vào môn học ({preview.questions.length} câu)
            </button>
          )}
        </div>

        {statusMessage && (
          <div className="rounded-2xl border border-moss/35 bg-moss-soft p-3.5 text-sm text-ink flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-moss" />
            {statusMessage}
          </div>
        )}

        {preview && (
          <div className="space-y-3 border-t border-sage-border/70 pt-4">
            <p className="text-sm font-semibold text-ink">
              Kết quả phân tích: {preview.questions.length} câu hỏi hợp lệ
            </p>
            {preview.issues.map((issue, idx) => (
              <div
                key={idx}
                className={`rounded-2xl border p-3.5 text-xs flex items-start gap-2 ${
                  issue.severity === 'error'
                    ? 'border-blossom/60 bg-blossom-soft text-blossom-ink'
                    : 'border-firefly/50 bg-firefly-soft text-wood'
                }`}
              >
                <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">{issue.message}</p>
                  <p className="opacity-80 mt-0.5">{issue.rawSnippet}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-sage-border bg-paper p-6 shadow-cozy space-y-4">
        <h2 className="text-base font-bold text-ink">
          Sao lưu &amp; Khôi phục (Backup / Restore JSON)
        </h2>
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={handleDownloadBackup}
            className="inline-flex items-center gap-2 rounded-2xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors"
          >
            <Download className="h-4 w-4 text-moss" />
            Xuất file Backup (.json)
          </button>

          <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl border border-sage-border bg-paper px-4 py-2 text-sm font-medium text-ink hover:bg-sage-tint transition-colors">
            <Upload className="h-4 w-4 text-rain" />
            Khôi phục từ file (.json)
            <input
              type="file"
              accept=".json,application/json"
              onChange={handleRestoreFile}
              className="hidden"
            />
          </label>
        </div>
        {backupMessage && (
          <p className="text-sm text-moss font-medium">{backupMessage}</p>
        )}
      </div>
    </div>
  );
}
