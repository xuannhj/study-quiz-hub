import { Sparkles } from 'lucide-react';
import {
  DAILY_CHAPTER_GOAL,
  setDailyExamGoal,
  type StudyStreakStats,
} from '../services/studyStreak';

const GOAL_PRESETS = [5, 6, 7] as const;

const JAR_FIREFLY_SPOTS = [
  { cx: 30, cy: 52, r: 2.6, delay: '0s' },
  { cx: 46, cy: 40, r: 2.2, delay: '0.7s' },
  { cx: 38, cy: 64, r: 2.8, delay: '1.2s' },
  { cx: 24, cy: 38, r: 2.0, delay: '0.4s' },
  { cx: 50, cy: 56, r: 2.5, delay: '1.5s' },
  { cx: 34, cy: 32, r: 2.2, delay: '0.9s' },
  { cx: 44, cy: 68, r: 2.1, delay: '1.8s' },
  { cx: 28, cy: 59, r: 2.3, delay: '0.3s' },
  { cx: 49, cy: 46, r: 2.4, delay: '1.1s' },
  { cx: 36, cy: 47, r: 2.7, delay: '1.4s' },
];

interface FireflyJarCardProps {
  stats: StudyStreakStats;
}

/**
 * Displays today's 5-7 exam/chapter sprint ring and firefly jar progress.
 */
export function FireflyJarCard({ stats }: FireflyJarCardProps) {
  const examRatio = stats.todayExamsCount / stats.dailyExamGoal;
  const chapterRatio = stats.todayChaptersCount / DAILY_CHAPTER_GOAL;
  const goalProgress = Math.min(1, Math.max(examRatio, chapterRatio));
  const ringRadius = 26;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = ringCircumference * (1 - goalProgress);
  const reachedGoal =
    stats.todayExamsCount >= stats.dailyExamGoal ||
    stats.todayChaptersCount >= DAILY_CHAPTER_GOAL;

  const visibleFireflies = Math.min(
    JAR_FIREFLY_SPOTS.length,
    stats.fireflyCount
  );

  return (
    <aside className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy flex flex-col justify-between gap-4">
      <div className="space-y-2.5">
        <div className="flex items-center justify-between gap-2">
          <div>
            <span className="text-xs font-semibold text-ink-soft">
              Mục tiêu hôm nay
            </span>
            <h2 className="text-base font-bold text-ink mt-0.5">
              {reachedGoal
                ? 'Đỉnh quá! Đạt mục tiêu ngày rồi ✨'
                : `${stats.todayExamsCount}/${stats.dailyExamGoal} đề · ${stats.todayChaptersCount}/${DAILY_CHAPTER_GOAL} chương`}
            </h2>
            <p className="text-[11px] text-ink-soft mt-0.5">
              Đã làm {stats.todayAnsweredCount} câu hôm nay
            </p>
          </div>

          <div className="relative h-16 w-16 shrink-0 flex items-center justify-center">
            <svg className="h-16 w-16 -rotate-90" viewBox="0 0 64 64">
              <circle
                cx="32"
                cy="32"
                r={ringRadius}
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                className="text-mist-deep"
              />
              <circle
                cx="32"
                cy="32"
                r={ringRadius}
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray={ringCircumference}
                strokeDashoffset={strokeDashoffset}
                className={
                  reachedGoal
                    ? 'text-firefly transition-all duration-500'
                    : 'text-moss transition-all duration-500'
                }
              />
            </svg>
            <span className="absolute text-xs font-mono font-bold text-ink">
              {Math.round(goalProgress * 100)}%
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-ink-soft mr-1">Nhịp ngày:</span>
          {GOAL_PRESETS.map((preset) => (
            <button
              key={preset}
              type="button"
              onClick={() => setDailyExamGoal(preset)}
              className={`rounded-lg px-2 py-0.5 text-[11px] font-semibold border transition-colors ${
                stats.dailyExamGoal === preset
                  ? 'border-moss bg-moss-soft text-moss'
                  : 'border-sage-border bg-mist text-ink-soft hover:bg-sage-tint'
              }`}
            >
              {preset} đề
            </button>
          ))}
        </div>
      </div>

      {/* Firefly Jar */}
      <div className="rounded-2xl border border-sage-border/80 bg-mist/80 p-3.5 flex items-center gap-3.5">
        <div className="shrink-0" aria-hidden="true">
          <svg
            width="58"
            height="66"
            viewBox="0 0 74 84"
            className="overflow-visible"
          >
            <rect
              x="22"
              y="6"
              width="30"
              height="8"
              rx="3"
              className="fill-wood/70"
            />
            <path
              d="M19 18 C14 23, 14 74, 21 78 L53 78 C60 74, 60 23, 55 18 Z"
              className="fill-rain-soft/60 stroke-sage-border"
              strokeWidth="2.5"
            />
            {visibleFireflies === 0 ? (
              <circle
                cx="37"
                cy="52"
                r="2.2"
                className="fill-firefly-bright/45 animate-cozy-firefly"
              />
            ) : (
              JAR_FIREFLY_SPOTS.slice(0, visibleFireflies).map((dot, i) => (
                <circle
                  key={i}
                  cx={dot.cx}
                  cy={dot.cy}
                  r={dot.r}
                  style={{ animationDelay: dot.delay, animationDuration: '3.2s' }}
                  className="fill-firefly-bright animate-cozy-firefly drop-shadow-[0_0_6px_rgba(244,213,123,0.9)]"
                />
              ))
            )}
          </svg>
        </div>

        <div className="min-w-0">
          <div className="inline-flex items-center gap-1 text-xs font-semibold text-ink">
            <Sparkles className="h-3.5 w-3.5 text-firefly shrink-0" />
            <span>Lọ đom đóm: {stats.fireflyCount} bé</span>
          </div>
          <p className="mt-1 text-xs text-ink-soft leading-relaxed">
            Mỗi 10 câu đúng hoặc 1 phiên 25 phút sáng thêm 1 bé đom đóm trong lọ.
          </p>
        </div>
      </div>
    </aside>
  );
}
