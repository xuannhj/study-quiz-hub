import { useAmbient } from './cozyMood';

const AMBIENT_RAIN = [
  { left: '6%', top: '-4%', delay: '0s', duration: '2.1s', height: '16px' },
  { left: '15%', top: '12%', delay: '0.7s', duration: '1.85s', height: '14px' },
  { left: '26%', top: '-6%', delay: '0.3s', duration: '2.25s', height: '18px' },
  { left: '38%', top: '8%', delay: '1.1s', duration: '1.95s', height: '15px' },
  { left: '51%', top: '-3%', delay: '0.45s', duration: '2.15s', height: '17px' },
  { left: '64%', top: '14%', delay: '0.9s', duration: '1.9s', height: '14px' },
  { left: '77%', top: '-5%', delay: '0.2s', duration: '2.2s', height: '16px' },
  { left: '91%', top: '6%', delay: '0.6s', duration: '2.0s', height: '15px' },
];

const AMBIENT_FIREFLIES = [
  { left: '5%', top: '34%', delay: '0s', duration: '4.2s', size: '6px' },
  { left: '12%', top: '76%', delay: '0.8s', duration: '4.8s', size: '7px' },
  { left: '23%', top: '52%', delay: '1.4s', duration: '3.9s', size: '5px' },
  { left: '36%', top: '86%', delay: '0.5s', duration: '4.5s', size: '6px' },
  { left: '49%', top: '44%', delay: '1.9s', duration: '3.8s', size: '5px' },
  { left: '61%', top: '79%', delay: '1.1s', duration: '4.3s', size: '7px' },
  { left: '74%', top: '64%', delay: '0.3s', duration: '4.0s', size: '6px' },
  { left: '84%', top: '36%', delay: '1.7s', duration: '4.6s', size: '6px' },
  { left: '92%', top: '74%', delay: '0.6s', duration: '3.7s', size: '7px' },
  { left: '96%', top: '50%', delay: '2.2s', duration: '4.4s', size: '5px' },
];

/**
 * Subtle floating fireflies and gentle rain streaks across the study background.
 */
export function CozyAmbientOverlay() {
  const { ambientEnabled } = useAmbient();

  if (!ambientEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {AMBIENT_RAIN.map((drop, idx) => (
        <span
          key={`rain-${idx}`}
          className="animate-cozy-rain absolute w-[1.5px] rounded-full bg-rain/30"
          style={{
            left: drop.left,
            top: drop.top,
            height: drop.height,
            animationDelay: drop.delay,
            animationDuration: drop.duration,
          }}
        />
      ))}

      {AMBIENT_FIREFLIES.map((fly, idx) => (
        <span
          key={`fly-${idx}`}
          className="animate-cozy-firefly absolute rounded-full bg-firefly-bright shadow-[0_0_14px_4px_rgba(230,190,90,0.6)]"
          style={{
            left: fly.left,
            top: fly.top,
            width: fly.size,
            height: fly.size,
            animationDelay: fly.delay,
            animationDuration: fly.duration,
          }}
        />
      ))}
    </div>
  );
}
