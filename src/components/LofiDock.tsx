import { useEffect, useState } from 'react';
import { Pause, Play, RotateCcw } from 'lucide-react';
import { StudyStreakWidget } from './StudyStreakWidget';
import { recordFocusCompletion } from '../services/studyStreak';

const DEFAULT_FOCUS_SECONDS = 25 * 60;

function formatFocus(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

/**
 * Clean dock keeping only the prominent Focus Timer and Study Streak chip.
 */
export function LofiDock() {
  const [focusSeconds, setFocusSeconds] = useState(DEFAULT_FOCUS_SECONDS);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => {
      setFocusSeconds((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          recordFocusCompletion();
          return DEFAULT_FOCUS_SECONDS;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning]);

  return (
    <div className="flex flex-wrap items-center gap-2.5">
      <div className="inline-flex items-center gap-2 rounded-2xl border border-white/25 bg-[#1B231E]/80 backdrop-blur-md px-3.5 py-1.5 text-[#FCFDFB] shadow-md">
        <span className="text-[11px] font-medium text-white/75 hidden sm:inline">
          Tập trung
        </span>
        <span className="font-mono text-base sm:text-lg font-bold tracking-tight">
          {formatFocus(focusSeconds)}
        </span>
        <button
          type="button"
          onClick={() => setTimerRunning((prev) => !prev)}
          aria-label={
            timerRunning
              ? 'Tạm dừng đồng hồ tập trung'
              : 'Bắt đầu đồng hồ tập trung'
          }
          className="rounded-xl bg-white/15 p-1.5 hover:bg-white/25 transition-colors"
        >
          {timerRunning ? (
            <Pause className="h-3.5 w-3.5 text-firefly-bright" />
          ) : (
            <Play className="h-3.5 w-3.5 text-firefly-bright" />
          )}
        </button>
        <button
          type="button"
          onClick={() => {
            setTimerRunning(false);
            setFocusSeconds(DEFAULT_FOCUS_SECONDS);
          }}
          aria-label="Đặt lại đồng hồ tập trung"
          className="rounded-xl p-1.5 hover:bg-white/15 transition-colors"
        >
          <RotateCcw className="h-3.5 w-3.5 text-white/80" />
        </button>
      </div>

      <StudyStreakWidget />
    </div>
  );
}
