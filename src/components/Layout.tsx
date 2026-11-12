import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  CloudRain,
  Leaf,
  Moon,
  Music2,
  SlidersHorizontal,
  Sparkles,
  Sun,
  Upload,
  VolumeX,
} from 'lucide-react';
import {
  AmbientContext,
  applyThemeClass,
  loadAmbientPreference,
  loadThemePreference,
  saveAmbientPreference,
  saveThemePreference,
  type ThemeMode,
} from './cozyMood';
import { CozyAmbientOverlay } from './CozyWindowCard';
import { LofiDock } from './LofiDock';
import { lofiAudio, type LofiSoundMode } from './lofiAudio';
import { useActiveStudyTracker } from './StudyStreakWidget';
import { getContextualHeaderWhisper } from '../services/studyCompanion';
import { DAILY_CHAPTER_GOAL } from '../services/studyStreak';

const HEADER_RAIN = [
  { left: '22%', delay: '0s', duration: '1.35s' },
  { left: '36%', delay: '0.45s', duration: '1.2s' },
  { left: '51%', delay: '0.2s', duration: '1.4s' },
  { left: '66%', delay: '0.7s', duration: '1.25s' },
  { left: '81%', delay: '0.35s', duration: '1.3s' },
];

const HEADER_FIREFLIES = [
  { left: '66%', top: '58%', delay: '0s', duration: '3.1s' },
  { left: '72%', top: '63%', delay: '0.8s', duration: '2.8s' },
  { left: '26%', top: '80%', delay: '0.4s', duration: '3.8s' },
  { left: '54%', top: '76%', delay: '1.1s', duration: '3.4s' },
];

export function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();
  const isImport = location.pathname.startsWith('/import');
  const [ambientEnabled, setAmbientEnabled] = useState<boolean>(() =>
    loadAmbientPreference()
  );
  const [theme, setTheme] = useState<ThemeMode>(() => loadThemePreference());
  const [soundMode, setSoundMode] = useState<LofiSoundMode>('off');
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const stats = useActiveStudyTracker();
  const headerWhisper = getContextualHeaderWhisper(stats);
  const goalDone =
    stats.todayExamsCount >= stats.dailyExamGoal ||
    stats.todayChaptersCount >= DAILY_CHAPTER_GOAL;

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  useEffect(() => {
    return () => lofiAudio.stop();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointerDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('mousedown', onPointerDown);
    return () => window.removeEventListener('mousedown', onPointerDown);
  }, [menuOpen]);

  const toggleAmbient = () => {
    setAmbientEnabled((prev) => {
      const next = !prev;
      saveAmbientPreference(next);
      return next;
    });
  };

  const selectTheme = (next: ThemeMode) => {
    setTheme(next);
    saveThemePreference(next);
  };

  const cycleSound = () => {
    const next: LofiSoundMode =
      soundMode === 'off' ? 'rain' : soundMode === 'rain' ? 'lofi' : 'off';
    setSoundMode(next);
    lofiAudio.setMode(next);
  };

  const soundLabel =
    soundMode === 'off'
      ? 'Âm thanh: Tắt'
      : soundMode === 'rain'
        ? 'Tiếng mưa dịu'
        : 'Mưa + Nhạc êm';

  const isDark = theme === 'dark';

  return (
    <AmbientContext.Provider value={{ ambientEnabled }}>
      <div className="relative min-h-screen bg-mist text-ink flex flex-col transition-colors duration-200">
        <CozyAmbientOverlay />

        <header className="relative z-20 border-b border-sage-border bg-[#6A8A76] dark:bg-[#141126] overflow-visible shadow-cozy">
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={isDark ? '/images/cozy-night.png' : '/images/cozy-window.png'}
              alt={
                isDark
                  ? 'Khung cảnh căn phòng ban đêm yên tĩnh của Xuân Nhi'
                  : 'Khung cửa sổ mưa rơi và bình đom đóm bình yên của Xuân Nhi'
              }
              className={`h-full w-full object-cover pixelated select-none transition-all duration-300 ${
                isDark
                  ? 'object-[center_62%] brightness-95'
                  : 'object-[center_52%] brightness-105'
              }`}
            />

            <div
              aria-hidden="true"
              className={`absolute inset-0 transition-colors duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-[#0C0B16]/45 via-transparent to-[#18191A]/75'
                  : goalDone
                    ? 'bg-gradient-to-b from-amber-200/15 via-transparent to-[#263A30]/15'
                    : 'bg-gradient-to-b from-transparent via-transparent to-[#263A30]/20'
              }`}
            />

            {ambientEnabled && !goalDone && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                {HEADER_RAIN.map((drop, idx) => (
                  <span
                    key={idx}
                    className="animate-cozy-rain absolute top-0 h-3.5 w-[1.5px] rounded-full bg-white/60"
                    style={{
                      left: drop.left,
                      animationDelay: drop.delay,
                      animationDuration: drop.duration,
                    }}
                  />
                ))}
                {HEADER_FIREFLIES.map((fly, idx) => (
                  <span
                    key={idx}
                    className="animate-cozy-firefly absolute h-1.5 w-1.5 rounded-full bg-firefly-bright shadow-[0_0_10px_2px_rgba(244,213,123,0.9)]"
                    style={{
                      left: fly.left,
                      top: fly.top,
                      animationDelay: fly.delay,
                      animationDuration: fly.duration,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-5 min-h-[280px] sm:min-h-[380px] lg:min-h-[460px] flex flex-col justify-between gap-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2.5 rounded-2xl bg-paper/95 backdrop-blur-md px-3.5 py-2 font-bold text-ink shadow-sm hover:bg-paper transition-colors border border-sage-border/80"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-moss text-white">
                  <Leaf className="h-4 w-4" />
                </span>
                <span className="tracking-tight text-sm sm:text-base">
                  Góc học của Xuân Nhi
                </span>
              </Link>

              <nav className="flex items-center gap-1.5 sm:gap-2 rounded-2xl bg-paper/95 backdrop-blur-md p-1.5 shadow-sm border border-sage-border/80">
                <Link
                  to="/"
                  className={`px-3 py-1.5 rounded-xl text-sm font-medium transition-colors ${
                    !isImport
                      ? 'bg-moss text-white font-semibold shadow-sm'
                      : 'text-ink-soft hover:bg-sage-tint hover:text-ink'
                  }`}
                >
                  Môn học
                </Link>

                <div
                  role="group"
                  aria-label="Chọn giao diện Sáng hoặc Tối"
                  className="inline-flex items-center rounded-xl bg-mist-deep p-0.5 border border-sage-border/70"
                >
                  <button
                    type="button"
                    onClick={() => selectTheme('light')}
                    aria-pressed={!isDark}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                      !isDark
                        ? 'bg-paper text-ink shadow-sm'
                        : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    <Sun className="h-3.5 w-3.5 text-firefly" />
                    <span>Sáng</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => selectTheme('dark')}
                    aria-pressed={isDark}
                    className={`inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-xs font-semibold transition-colors ${
                      isDark
                        ? 'bg-paper text-ink shadow-sm'
                        : 'text-ink-soft hover:text-ink'
                    }`}
                  >
                    <Moon className="h-3.5 w-3.5 text-moss" />
                    <span>Tối</span>
                  </button>
                </div>

                <div ref={menuRef} className="relative">
                  <button
                    type="button"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-expanded={menuOpen}
                    aria-haspopup="menu"
                    className="inline-flex items-center gap-1.5 rounded-xl px-2.5 py-1.5 text-xs font-medium text-ink-soft hover:bg-sage-tint hover:text-ink transition-colors"
                  >
                    <SlidersHorizontal className="h-3.5 w-3.5" />
                    <span className="hidden sm:inline">Cài đặt</span>
                  </button>

                  {menuOpen && (
                    <div
                      role="menu"
                      className="absolute right-0 mt-2 w-60 rounded-2xl border border-sage-border bg-paper p-2 shadow-xl space-y-1 z-40"
                    >
                      <button
                        type="button"
                        role="menuitem"
                        onClick={toggleAmbient}
                        aria-pressed={ambientEnabled}
                        className="w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs font-medium text-ink hover:bg-sage-tint transition-colors"
                      >
                        <span className="inline-flex items-center gap-2">
                          <CloudRain className="h-4 w-4 text-rain" />
                          Mưa &amp; Đom đóm
                        </span>
                        <span className="font-mono text-[11px] text-moss">
                          {ambientEnabled ? 'Bật' : 'Tắt'}
                        </span>
                      </button>

                      <button
                        type="button"
                        role="menuitem"
                        onClick={cycleSound}
                        aria-pressed={soundMode !== 'off'}
                        className="w-full flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-xs font-medium text-ink hover:bg-sage-tint transition-colors"
                      >
                        <span className="inline-flex items-center gap-2">
                          {soundMode === 'off' ? (
                            <VolumeX className="h-4 w-4 text-ink-soft" />
                          ) : (
                            <Music2 className="h-4 w-4 text-moss" />
                          )}
                          Âm thanh nền
                        </span>
                        <span className="text-[11px] text-moss font-medium">
                          {soundLabel.replace('Âm thanh: ', '')}
                        </span>
                      </button>

                      <div className="border-t border-sage-border/70 my-1" />

                      <Link
                        to="/import"
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                        className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                          isImport
                            ? 'bg-moss-soft text-moss font-semibold'
                            : 'text-ink hover:bg-sage-tint'
                        }`}
                      >
                        <Upload className="h-4 w-4 text-moss" />
                        <span>Import &amp; Backup</span>
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>

            <div className="flex flex-wrap items-end justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#1B231E]/80 backdrop-blur-sm border border-white/20 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#FCFDFB] shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-firefly-bright shrink-0" />
                <span>{headerWhisper}</span>
              </span>

              <LofiDock />
            </div>
          </div>
        </header>

        <main className="relative z-10 flex-1 mx-auto w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8">
          {children}
        </main>
      </div>
    </AmbientContext.Provider>
  );
}
