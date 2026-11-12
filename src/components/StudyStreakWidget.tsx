import { useEffect, useState } from 'react';
import { Award, Clock, Flame, Sparkles, X } from 'lucide-react';
import {
  STREAK_UPDATED_EVENT,
  computeStreakStats,
  formatStudyDuration,
  loadStreakState,
  markStudyDayActive,
  recordStudySeconds,
  type StudyStreakStats,
} from '../services/studyStreak';

function readCurrentStats(): StudyStreakStats {
  return computeStreakStats(loadStreakState());
}

/**
 * Tracks active visible study time automatically across the app without fake idle inflation.
 */
export function useActiveStudyTracker(): StudyStreakStats {
  const [stats, setStats] = useState<StudyStreakStats>(() => readCurrentStats());

  useEffect(() => {
    markStudyDayActive();
    setStats(readCurrentStats());

    let lastTickMs = Date.now();

    const flushVisibleSeconds = () => {
      if (typeof document !== 'undefined' && document.visibilityState === 'hidden') {
        lastTickMs = Date.now();
        return;
      }
      const nowMs = Date.now();
      const deltaSec = Math.floor((nowMs - lastTickMs) / 1000);
      if (deltaSec >= 1) {
        lastTickMs = nowMs;
        recordStudySeconds(deltaSec);
      }
    };

    const intervalId = window.setInterval(flushVisibleSeconds, 15000);
    const onVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        flushVisibleSeconds();
      } else {
        lastTickMs = Date.now();
        markStudyDayActive();
        setStats(readCurrentStats());
      }
    };
    const onStreakUpdated = () => setStats(readCurrentStats());

    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener(STREAK_UPDATED_EVENT, onStreakUpdated);

    return () => {
      flushVisibleSeconds();
      window.clearInterval(intervalId);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener(STREAK_UPDATED_EVENT, onStreakUpdated);
    };
  }, []);

  return stats;
}

/**
 * Compact header/dock pill + detail modal for Xuan Nhi's study streak and study duration.
 */
export function StudyStreakWidget() {
  const stats = useActiveStudyTracker();
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        title="Xem chuỗi ngày học và tổng giờ học của Xuân Nhi"
        className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-[#263A30]/75 backdrop-blur-md px-3 py-1.5 text-xs font-medium text-[#FCFDFB] hover:bg-[#263A30]/90 transition-colors shadow-sm"
      >
        <Flame className="h-3.5 w-3.5 text-firefly-bright shrink-0" />
        <span>
          {stats.currentStreakDays} ngày · {formatStudyDuration(stats.todaySeconds)}
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Chuỗi chăm chỉ của Xuân Nhi"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-3xl border border-sage-border bg-paper p-5 sm:p-6 shadow-2xl space-y-5 text-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full bg-firefly-soft border border-firefly/35 px-2.5 py-0.5 text-[11px] font-medium text-wood">
                  <Sparkles className="h-3 w-3 text-firefly" />
                  <span>Ghi nhận tự động trên trình duyệt</span>
                </div>
                <h2 className="mt-2 text-lg font-bold text-ink">
                  Chuỗi chăm chỉ của Xuân Nhi
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Đóng bảng chuỗi ngày học"
                className="rounded-xl p-1.5 text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-firefly/35 bg-firefly-soft/70 p-3.5">
                <div className="flex items-center gap-1.5 text-xs text-wood font-medium">
                  <Flame className="h-4 w-4 text-firefly" />
                  <span>Chuỗi hiện tại</span>
                </div>
                <div className="mt-1.5 text-2xl font-bold text-ink font-mono">
                  {stats.currentStreakDays} ngày
                </div>
                <div className="mt-0.5 text-[11px] text-ink-soft">
                  Kỷ lục: {stats.longestStreakDays} ngày
                </div>
              </div>

              <div className="rounded-2xl border border-sage-border bg-mist p-3.5">
                <div className="flex items-center gap-1.5 text-xs text-ink-soft font-medium">
                  <Clock className="h-4 w-4 text-moss" />
                  <span>Hôm nay đã học</span>
                </div>
                <div className="mt-1.5 text-2xl font-bold text-ink font-mono">
                  {formatStudyDuration(stats.todaySeconds)}
                </div>
                <div className="mt-0.5 text-[11px] text-ink-soft">
                  Tổng tích lũy: {formatStudyDuration(stats.totalSeconds)}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-sage-border bg-mist/70 p-4">
              <div className="flex items-center justify-between text-xs font-medium text-ink-soft mb-3">
                <span>7 ngày gần nhất</span>
                <span className="inline-flex items-center gap-1 text-moss">
                  <Award className="h-3.5 w-3.5" />
                  {stats.completedFocusSessions} phiên tập trung 25p
                </span>
              </div>

              <div className="grid grid-cols-7 gap-1.5 text-center">
                {stats.last7Days.map((day) => (
                  <div key={day.dateKey} className="flex flex-col items-center gap-1">
                    <div
                      title={`${day.dateKey}: ${day.minutes} phút`}
                      className={`h-8 w-8 rounded-xl border flex items-center justify-center text-[11px] font-mono font-semibold transition-colors ${
                        day.active
                          ? 'bg-moss text-white border-moss shadow-sm'
                          : 'bg-paper text-ink-soft/60 border-sage-border'
                      }`}
                    >
                      {day.minutes > 0 ? `${day.minutes}p` : day.active ? '✓' : '·'}
                    </div>
                    <span className="text-[11px] text-ink-soft">
                      {day.shortLabel}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs text-ink-soft leading-relaxed">
              Mỗi lần mở web ôn bài, hệ thống sẽ tự cộng thời gian tập trung thực tế và nối dài chuỗi ngày học cho em bé nhé!
            </p>
          </div>
        </div>
      )}
    </>
  );
}

