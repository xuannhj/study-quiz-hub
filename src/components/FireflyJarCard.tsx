import {
  DAILY_CHAPTER_GOAL,
  setDailyExamGoal,
  type StudyStreakStats,
} from '../services/studyStreak';

const GOAL_PRESETS = [5, 6, 7] as const;

const PIXEL_FIREFLIES = [
  { x: 11, y: 15, delay: '0s' },
  { x: 17, y: 12, delay: '0.9s' },
  { x: 14, y: 18, delay: '1.7s' },
  { x: 9, y: 12, delay: '0.5s' },
  { x: 19, y: 16, delay: '1.3s' },
  { x: 13, y: 10, delay: '2.1s' },
  { x: 16, y: 19, delay: '0.8s' },
  { x: 10, y: 18, delay: '1.5s' },
  { x: 18, y: 10, delay: '2.4s' },
  { x: 15, y: 14, delay: '1.1s' },
];

interface FireflyJarCardProps {
  stats: StudyStreakStats;
}

/**
 * Compact Daily Goal ring + Pixel-art Firefly Jar card.
 */
export function FireflyJarCard({ stats }: FireflyJarCardProps) {
  const examRatio = stats.todayExamsCount / stats.dailyExamGoal;
  const chapterRatio = stats.todayChaptersCount / DAILY_CHAPTER_GOAL;
  const goalProgress = Math.min(1, Math.max(examRatio, chapterRatio));
  const ringRadius = 38;
  const ringCircumference = 2 * Math.PI * ringRadius;
  const strokeDashoffset = ringCircumference * (1 - goalProgress);
  const reachedGoal =
    stats.todayExamsCount >= stats.dailyExamGoal ||
    stats.todayChaptersCount >= DAILY_CHAPTER_GOAL;

  const progressFireflies = Math.round(goalProgress * 5);
  const litFireflies = Math.min(
    PIXEL_FIREFLIES.length,
    Math.max(stats.fireflyCount, progressFireflies)
  );

  return (
    <aside className="rounded-3xl border border-sage-border bg-paper p-5 shadow-cozy flex flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-ink-soft">
        Mục tiêu hôm nay
      </h2>

      {/* Large Centered Progress Ring */}
      <div className="relative h-24 w-24 flex items-center justify-center">
        <svg className="h-24 w-24 -rotate-90" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r={ringRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
            className="text-mist-deep"
          />
          <circle
            cx="48"
            cy="48"
            r={ringRadius}
            fill="none"
            stroke="currentColor"
            strokeWidth="7"
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
        <span className="absolute text-lg font-mono font-bold text-ink">
          {stats.todayExamsCount}/{stats.dailyExamGoal}
        </span>
      </div>

      {/* Goal Presets: 5 đề / 6 đề / 7 đề */}
      <div
        className="flex items-center gap-1.5"
        title="Chọn số đề mục tiêu mỗi ngày"
      >
        {GOAL_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            title={`Đặt mục tiêu ${preset} đề mỗi ngày`}
            onClick={() => setDailyExamGoal(preset)}
            className={`rounded-lg px-2.5 py-1 text-xs font-mono font-semibold border transition-colors ${
              stats.dailyExamGoal === preset
                ? 'border-moss bg-moss-soft text-moss'
                : 'border-sage-border bg-mist text-ink-soft hover:bg-sage-tint'
            }`}
          >
            {preset} đề
          </button>
        ))}
      </div>

      {/* Pixel-Art Glass Firefly Jar + Counter Only */}
      <div className="flex items-center gap-3 pt-1">
        <svg
          width="54"
          height="62"
          viewBox="0 0 28 32"
          shapeRendering="crispEdges"
          aria-hidden="true"
          className="shrink-0"
        >
          {/* Wooden Pixel Cork / Lid */}
          <rect x="8" y="2" width="12" height="3" fill="#8B634B" />
          <rect x="9" y="2" width="10" height="1" fill="#A97D61" />
          <rect x="7" y="5" width="14" height="1" fill="#4E382B" />

          {/* Glass Jar Outline & Rim */}
          <rect x="6" y="6" width="16" height="1" fill="#9BB8BC" />
          <rect x="5" y="7" width="1" height="2" fill="#9BB8BC" />
          <rect x="22" y="7" width="1" height="2" fill="#9BB8BC" />
          <rect x="4" y="9" width="1" height="18" fill="#8EAAB0" />
          <rect x="23" y="9" width="1" height="18" fill="#8EAAB0" />
          <rect x="5" y="27" width="18" height="1" fill="#8EAAB0" />
          <rect x="6" y="28" width="16" height="1" fill="#6F8C91" />

          {/* Translucent Glass Interior */}
          <rect x="6" y="7" width="16" height="2" fill="#2A3E44" fillOpacity="0.28" />
          <rect x="5" y="9" width="18" height="18" fill="#25383E" fillOpacity="0.32" />

          {/* Pixel Glass Specular Highlights */}
          <rect x="6" y="10" width="1" height="14" fill="#DDF3F5" fillOpacity="0.5" />
          <rect x="7" y="11" width="1" height="5" fill="#FFFFFF" fillOpacity="0.45" />
          <rect x="21" y="12" width="1" height="10" fill="#B5D6DA" fillOpacity="0.25" />

          {/* Lit Pixel Fireflies */}
          {litFireflies === 0 ? (
            <rect
              x="14"
              y="18"
              width="2"
              height="2"
              fill="#F4D57B"
              fillOpacity="0.45"
              className="animate-cozy-firefly"
            />
          ) : (
            PIXEL_FIREFLIES.slice(0, litFireflies).map((dot, i) => (
              <g
                key={i}
                className="animate-cozy-firefly"
                style={{ animationDelay: dot.delay, animationDuration: '4.8s' }}
              >
                <rect
                  x={dot.x - 1}
                  y={dot.y - 1}
                  width="3"
                  height="3"
                  fill="#F4D57B"
                  fillOpacity="0.35"
                />
                <rect x={dot.x} y={dot.y} width="1.5" height="1.5" fill="#FFF3B8" />
              </g>
            ))
          )}
        </svg>

        <span
          aria-label={`Số đom đóm: ${stats.fireflyCount}`}
          className="text-2xl font-mono font-bold text-ink"
        >
          {stats.fireflyCount}
        </span>
      </div>
    </aside>
  );
}
