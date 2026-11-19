import { useState, useEffect, useRef } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  Download,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  CheckSquare,
  Square,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import type { PracticalExam } from '../../types/study';

interface PracticalExamViewProps {
  exams: PracticalExam[];
  defaultExamId?: string;
}

export function PracticalExamView({
  exams,
  defaultExamId,
}: PracticalExamViewProps) {
  const [selectedExamId, setSelectedExamId] = useState<string>(
    defaultExamId || exams[0]?.id || ''
  );
  const selectedExam =
    exams.find((e) => e.id === selectedExamId) || exams[0];

  // Multi-page state
  const [activePageIndex, setActivePageIndex] = useState<number>(0);

  // Zoom & Viewer state
  const [zoomLevel, setZoomLevel] = useState<number>(100);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const viewerContainerRef = useRef<HTMLDivElement>(null);

  // 90-minute Timer state
  const TOTAL_SECONDS = (selectedExam?.durationMinutes || 90) * 60;
  const [secondsRemaining, setSecondsRemaining] = useState<number>(TOTAL_SECONDS);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerAlertPlayed, setTimerAlertPlayed] = useState<boolean>(false);

  // Rubric Checklist state
  const [checkedRequirements, setCheckedRequirements] = useState<Record<string, boolean>>({});

  // Reset page & checklist when exam changes
  useEffect(() => {
    setActivePageIndex(0);
    setZoomLevel(100);
    setCheckedRequirements({});
    setSecondsRemaining((selectedExam?.durationMinutes || 90) * 60);
    setIsTimerRunning(false);
    setTimerAlertPlayed(false);
  }, [selectedExamId, selectedExam?.durationMinutes]);

  // Timer Interval Effect
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;
    if (isTimerRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            setIsTimerRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, secondsRemaining]);

  // Audio alert when timer ends
  useEffect(() => {
    if (secondsRemaining === 0 && !timerAlertPlayed) {
      playBeepAlert();
      setTimerAlertPlayed(true);
    }
  }, [secondsRemaining, timerAlertPlayed]);

  const playBeepAlert = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      
      const playTone = (freq: number, start: number, duration: number) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = freq;
        gain.gain.setValueAtTime(0.3, ctx.currentTime + start);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + start + duration);
        osc.start(ctx.currentTime + start);
        osc.stop(ctx.currentTime + start + duration);
      };

      // Play 3 melodic alert beeps
      playTone(523.25, 0, 0.2); // C5
      playTone(659.25, 0.25, 0.2); // E5
      playTone(783.99, 0.5, 0.4); // G5
    } catch {
      // AudioContext unavailable or blocked by browser policy
    }
  };

  const formatTimer = (totalSecs: number) => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleToggleTimer = () => {
    if (secondsRemaining === 0) {
      setSecondsRemaining(TOTAL_SECONDS);
      setTimerAlertPlayed(false);
    }
    setIsTimerRunning(!isTimerRunning);
  };

  const handleResetTimer = () => {
    setIsTimerRunning(false);
    setSecondsRemaining(TOTAL_SECONDS);
    setTimerAlertPlayed(false);
  };

  const handleToggleRequirement = (index: number) => {
    setCheckedRequirements((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const toggleFullscreen = () => {
    if (!viewerContainerRef.current) return;
    if (!document.fullscreenElement) {
      viewerContainerRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(() => {});
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(() => {});
    }
  };

  if (!selectedExam) {
    return (
      <div className="rounded-3xl border border-sage-border bg-paper p-8 text-center text-ink-soft">
        Không có đề thi thực hành nào.
      </div>
    );
  }

  const currentImage = selectedExam.images[activePageIndex] || selectedExam.images[0];
  const percentRemaining = (secondsRemaining / TOTAL_SECONDS) * 100;
  const isTimeCritical = secondsRemaining > 0 && secondsRemaining <= 300; // < 5 mins
  const isTimeWarning = secondsRemaining > 300 && secondsRemaining <= 900; // 5 - 15 mins

  const completedReqCount = selectedExam.requirements.filter((_, idx) => checkedRequirements[idx]).length;

  return (
    <div className="space-y-6">
      {/* Exam Picker Header */}
      <div className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-xl bg-firefly-soft border border-firefly/40 px-2.5 py-0.5 text-xs font-mono font-bold text-ink">
                PE — Practical Exam (Tự Luyện 90 Phút)
              </span>
              <span className="text-xs text-ink-soft font-medium">
                {exams.length} đề thi các kỳ FPT
              </span>
            </div>
            <h2 className="mt-1.5 text-xl font-bold text-ink">
              {selectedExam.title}
            </h2>
            <p className="mt-1 text-xs text-ink-soft leading-relaxed max-w-3xl">
              {selectedExam.description}
            </p>
          </div>

          {selectedExam.materialsZipUrl && (
            <a
              href={selectedExam.materialsZipUrl}
              download
              className="inline-flex items-center gap-2 rounded-2xl bg-rain px-4 py-2.5 text-xs font-bold text-white hover:bg-rain/90 shadow-sm transition-all"
            >
              <Download className="h-4 w-4" />
              Tải Template Word (.docx) &amp; Materials
            </a>
          )}
        </div>

        {/* Semester / Exam Selection Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-sage-border/60">
          {exams.map((exam) => {
            const isSelected = exam.id === selectedExamId;
            return (
              <button
                key={exam.id}
                type="button"
                onClick={() => setSelectedExamId(exam.id)}
                className={`rounded-2xl px-3.5 py-2 text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-moss text-white shadow-sm'
                    : 'bg-paper-warm text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
                }`}
              >
                <span className="font-mono opacity-80 mr-1.5">[{exam.semester}]</span>
                {exam.title.replace('SWR302 — ', '').replace(' (Đề Thi Chính Thức Mới Nhất)', '')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Control Bar: 90-min Countdown Timer + Toolbar */}
      <div className="grid gap-4 lg:grid-cols-3">
        {/* Timer Card */}
        <div
          className={`rounded-3xl border p-5 shadow-cozy flex flex-col justify-between transition-colors ${
            secondsRemaining === 0
              ? 'border-crimson/50 bg-crimson-soft/40'
              : isTimeCritical
              ? 'border-crimson/40 bg-crimson-soft/20 animate-pulse'
              : isTimeWarning
              ? 'border-firefly/50 bg-firefly-soft'
              : 'border-sage-border bg-paper'
          }`}
        >
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
              <Clock className="h-4 w-4 text-moss" />
              Đồng Hồ Đếm Ngược 90 Phút
            </span>
            <span
              className={`rounded-lg px-2 py-0.5 text-xs font-bold ${
                secondsRemaining === 0
                  ? 'bg-crimson text-white'
                  : isTimerRunning
                  ? 'bg-moss text-white'
                  : 'bg-sage-tint text-ink-soft'
              }`}
            >
              {secondsRemaining === 0
                ? 'Hết giờ!'
                : isTimerRunning
                ? 'Đang làm bài'
                : 'Tạm dừng'}
            </span>
          </div>

          {/* Time digits */}
          <div className="my-3 text-center">
            <div
              className={`font-mono text-4xl font-extrabold tracking-wider ${
                secondsRemaining === 0
                  ? 'text-crimson'
                  : isTimeCritical
                  ? 'text-crimson'
                  : isTimeWarning
                  ? 'text-firefly-ink'
                  : 'text-ink'
              }`}
            >
              {formatTimer(secondsRemaining)}
            </div>
            {/* Progress bar */}
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-sage-tint">
              <div
                className={`h-full transition-all duration-1000 ${
                  isTimeCritical
                    ? 'bg-crimson'
                    : isTimeWarning
                    ? 'bg-firefly'
                    : 'bg-moss'
                }`}
                style={{ width: `${percentRemaining}%` }}
              />
            </div>
          </div>

          {/* Timer actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleToggleTimer}
              className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-2xl py-2 text-xs font-bold text-white transition-colors ${
                isTimerRunning
                  ? 'bg-firefly hover:bg-firefly-ink text-ink'
                  : 'bg-moss hover:bg-moss-hover'
              }`}
            >
              {isTimerRunning ? (
                <>
                  <Pause className="h-3.5 w-3.5" /> Tạm dừng
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 fill-white" />
                  {secondsRemaining === TOTAL_SECONDS ? 'Bắt đầu bấm giờ (90p)' : 'Tiếp tục'}
                </>
              )}
            </button>
            <button
              type="button"
              onClick={handleResetTimer}
              title="Đặt lại 90 phút"
              className="rounded-2xl border border-sage-border bg-paper p-2 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Rubric Progress Card */}
        <div className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy flex flex-col justify-between lg:col-span-2">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft">
              <CheckSquare className="h-4 w-4 text-rain" />
              Tiến Độ Tự Đánh Giá Checklist (Barem PE FPT)
            </span>
            <span className="text-xs font-bold text-moss">
              Đã hoàn thành {completedReqCount} / {selectedExam.requirements.length} mục
            </span>
          </div>

          <div className="my-2 grid gap-1.5 sm:grid-cols-2 text-xs">
            {selectedExam.requirements.map((req, idx) => {
              const isChecked = !!checkedRequirements[idx];
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleToggleRequirement(idx)}
                  className={`flex items-start gap-2 rounded-xl p-2 text-left transition-all ${
                    isChecked
                      ? 'bg-moss-soft/60 text-ink line-through opacity-75'
                      : 'bg-paper-warm text-ink hover:bg-sage-tint'
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="h-4 w-4 text-moss shrink-0 mt-0.5" />
                  ) : (
                    <Square className="h-4 w-4 text-ink-soft shrink-0 mt-0.5" />
                  )}
                  <span className="line-clamp-2">{req}</span>
                </button>
              );
            })}
          </div>

          <div className="text-[11px] text-ink-soft flex items-center justify-between pt-1 border-t border-sage-border/50">
            <span>💡 Tick chọn các mục khi bạn đã hoàn thành trên file Word</span>
            <span className="font-semibold text-ink">Thời lượng chuẩn: 90 phút</span>
          </div>
        </div>
      </div>

      {/* High-Res Exam Paper Viewer */}
      <div
        ref={viewerContainerRef}
        className={`rounded-3xl border border-sage-border bg-paper overflow-hidden shadow-cozy ${
          isFullscreen ? 'fixed inset-0 z-50 rounded-none bg-stone-950 p-4' : ''
        }`}
      >
        {/* Viewer Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-sage-border bg-paper-warm px-5 py-3">
          {/* Page switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-ink-soft">Trang đề:</span>
            <div className="flex items-center gap-1">
              {selectedExam.images.map((img, idx) => (
                <button
                  key={img.pageNumber}
                  type="button"
                  onClick={() => setActivePageIndex(idx)}
                  className={`rounded-xl px-3 py-1 text-xs font-bold transition-all ${
                    activePageIndex === idx
                      ? 'bg-moss text-white shadow-sm'
                      : 'bg-paper text-ink-soft border border-sage-border hover:bg-sage-tint hover:text-ink'
                  }`}
                >
                  Trang {img.pageNumber}
                </button>
              ))}
            </div>
            <span className="text-xs text-ink-soft hidden sm:inline ml-2">
              ({currentImage?.title})
            </span>
          </div>

          {/* Zoom & View Controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.max(50, z - 15))}
              title="Thu nhỏ"
              className="rounded-xl border border-sage-border bg-paper p-1.5 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
            >
              <ZoomOut className="h-4 w-4" />
            </button>
            <span className="font-mono text-xs font-semibold text-ink min-w-[3rem] text-center">
              {zoomLevel}%
            </span>
            <button
              type="button"
              onClick={() => setZoomLevel((z) => Math.min(250, z + 15))}
              title="Phóng to"
              className="rounded-xl border border-sage-border bg-paper p-1.5 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
            >
              <ZoomIn className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => setZoomLevel(100)}
              title="Kích thước gốc"
              className="rounded-xl border border-sage-border bg-paper px-2.5 py-1 text-xs font-semibold text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
            >
              100%
            </button>
            <button
              type="button"
              onClick={toggleFullscreen}
              title={isFullscreen ? 'Thu nhỏ cửa sổ' : 'Xem toàn màn hình'}
              className="rounded-xl border border-sage-border bg-paper p-1.5 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
            >
              {isFullscreen ? (
                <Minimize2 className="h-4 w-4" />
              ) : (
                <Maximize2 className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>

        {/* Image canvas container */}
        <div
          className={`overflow-auto p-4 flex items-center justify-center bg-stone-900/10 dark:bg-stone-950 min-h-[500px] max-h-[750px] ${
            isFullscreen ? 'max-h-[calc(100vh-80px)]' : ''
          }`}
        >
          {currentImage ? (
            <img
              src={currentImage.url}
              alt={currentImage.title}
              style={{ width: `${zoomLevel}%`, maxWidth: 'none' }}
              className="rounded-xl shadow-lg border border-sage-border/50 object-contain transition-all duration-200"
            />
          ) : (
            <p className="text-ink-soft text-sm">Chưa có ảnh đề thi.</p>
          )}
        </div>

        {/* Viewer Footer info */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-sage-border bg-paper-warm px-5 py-2.5 text-xs text-ink-soft">
          <div className="flex items-center gap-3">
            <span>
              Mã đề: <strong>{selectedExam.code}</strong>
            </span>
            <span>•</span>
            <span>Học kỳ: {selectedExam.semester}</span>
            <span>•</span>
            <span>{selectedExam.images.length} trang đề gốc</span>
          </div>
          <div className="flex items-center gap-2">
            {activePageIndex > 0 && (
              <button
                type="button"
                onClick={() => setActivePageIndex((p) => p - 1)}
                className="inline-flex items-center gap-1 text-moss font-semibold hover:underline"
              >
                <ChevronLeft className="h-3.5 w-3.5" /> Trang trước
              </button>
            )}
            {activePageIndex < selectedExam.images.length - 1 && (
              <button
                type="button"
                onClick={() => setActivePageIndex((p) => p + 1)}
                className="inline-flex items-center gap-1 text-moss font-semibold hover:underline ml-2"
              >
                Trang tiếp theo <ChevronRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Solution Tips & Pitfalls */}
      {selectedExam.solutionTips && selectedExam.solutionTips.length > 0 && (
        <div className="rounded-3xl border border-moss/30 bg-moss-soft/20 p-5 shadow-cozy space-y-3">
          <div className="flex items-center gap-2 text-moss font-bold text-sm">
            <Sparkles className="h-4 w-4" />
            Mẹo Ăn Trọn Điểm PE &amp; Bẫy Trừ Điểm Thường Gặp
          </div>
          <ul className="space-y-2 text-xs leading-relaxed text-ink">
            {selectedExam.solutionTips.map((tip, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-moss font-bold">•</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
