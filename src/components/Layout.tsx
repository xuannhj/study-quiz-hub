import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  CloudRain,
  Moon,
  Music2,
  SlidersHorizontal,
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

const HEADER_RAIN = [
  { left: '24%', top: '8%', delay: '0s', duration: '0.85s', height: '16px' },
  { left: '31%', top: '12%', delay: '0.32s', duration: '0.92s', height: '18px' },
  { left: '38%', top: '6%', delay: '0.65s', duration: '0.8s', height: '14px' },
  { left: '44%', top: '14%', delay: '0.18s', duration: '0.95s', height: '20px' },
  { left: '50%', top: '8%', delay: '0.48s', duration: '0.88s', height: '16px' },
  { left: '56%', top: '11%', delay: '0.75s', duration: '0.82s', height: '18px' },
  { left: '61%', top: '7%', delay: '0.12s', duration: '0.9s', height: '15px' },
  { left: '67%', top: '13%', delay: '0.52s', duration: '0.86s', height: '19px' },
  { left: '72%', top: '9%', delay: '0.28s', duration: '0.94s', height: '16px' },
  { left: '78%', top: '12%', delay: '0.62s', duration: '0.84s', height: '17px' },
  { left: '83%', top: '8%', delay: '0.41s', duration: '0.9s', height: '15px' },
  { left: '88%', top: '10%', delay: '0.15s', duration: '0.88s', height: '18px' },
];

const HEADER_FIREFLIES = [
  { left: '68%', top: '54%', delay: '0s', duration: '6.2s' },
  { left: '54%', top: '72%', delay: '1.8s', duration: '7.0s' },
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
      ? 'Tắt'
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
                  ? 'object-[center_64%] brightness-95'
                  : 'object-[center_52%] brightness-105'
              }`}
            />

            <div
              aria-hidden="true"
              className={`absolute inset-0 transition-colors duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-[#0C0B16]/40 via-transparent to-[#18191A]/65'
                  : 'bg-gradient-to-b from-transparent via-transparent to-[#263A30]/15'
              }`}
            />

            {ambientEnabled && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              >
                {!isDark &&
                  HEADER_RAIN.map((drop, idx) => (
                    <span
                      key={idx}
                      className="animate-cozy-window-rain absolute w-[2px] bg-white/80 shadow-[0_0_4px_rgba(255,255,255,0.45)]"
                      style={{
                        left: drop.left,
                        top: drop.top,
                        height: drop.height,
                        animationDelay: drop.delay,
                        animationDuration: drop.duration,
                      }}
                    />
                  ))}
                {HEADER_FIREFLIES.map((fly, idx) => (
                  <span
                    key={idx}
                    className="animate-cozy-firefly absolute h-1.5 w-1.5 rounded-full bg-firefly-bright/70 shadow-[0_0_8px_2px_rgba(244,213,123,0.45)]"
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
                <span
                  aria-hidden="true"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-firefly-soft border border-firefly/35"
                >
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 16 16"
                    shapeRendering="crispEdges"
                  >
                    {/* Plate */}
                    <rect x="1" y="13" width="14" height="2" fill="#F3F4F6" />
                    <rect x="2" y="14" width="12" height="1" fill="#D1D5DB" />
                    {/* Custard body */}
                    <rect x="3" y="7" width="10" height="6" fill="#F6C85F" />
                    <rect x="4" y="6" width="8" height="1" fill="#F6C85F" />
                    <rect x="4" y="8" width="2" height="4" fill="#FCE29C" />
                    {/* Caramel glaze + drips */}
                    <rect x="4" y="4" width="8" height="3" fill="#7C3F1D" />
                    <rect x="5" y="3" width="6" height="1" fill="#9A532A" />
                    <rect x="4" y="7" width="2" height="2" fill="#7C3F1D" />
                    <rect x="8" y="7" width="2" height="3" fill="#7C3F1D" />
                    <rect x="11" y="7" width="1" height="2" fill="#7C3F1D" />
                  </svg>
                </span>
                <span className="tracking-tight text-sm sm:text-base">
                  Góc học của Xuân Nhi
                </span>
              </Link>

              <nav className="flex items-center gap-1.5 rounded-2xl bg-paper/95 backdrop-blur-md p-1.5 shadow-sm border border-sage-border/80">
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
                          {soundLabel}
                        </span>
                      </button>

                      <div className="border-t border-sage-border/70 my-1" />

                      <Link
                        to="/"
                        role="menuitem"
                        onClick={() => setMenuOpen(false)}
                        className={`w-full flex items-center gap-2 rounded-xl px-3 py-2 text-xs font-medium transition-colors ${
                          !isImport
                            ? 'bg-moss-soft text-moss font-semibold'
                            : 'text-ink hover:bg-sage-tint'
                        }`}
                      >
                        <BookOpen className="h-4 w-4 text-moss" />
                        <span>Môn học</span>
                      </Link>

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

            {/* Placed bottom-right cleanly so bottom-left desk clock (08:05) stays unobstructed */}
            <div className="flex justify-end items-end">
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
