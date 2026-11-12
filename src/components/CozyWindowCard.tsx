import { useAmbient } from './cozyMood';

const AMBIENT_RAIN = [
  { left: '8%', top: '-4%', delay: '0s', duration: '2.6s', height: '14px' },
  { left: '24%', top: '10%', delay: '0.8s', duration: '2.4s', height: '13px' },
  { left: '47%', top: '-3%', delay: '0.4s', duration: '2.7s', height: '15px' },
  { left: '68%', top: '12%', delay: '1.1s', duration: '2.5s', height: '14px' },
  { left: '88%', top: '4%', delay: '0.5s', duration: '2.6s', height: '14px' },
];

const AMBIENT_FIREFLIES = [
  { left: '7%', top: '42%', delay: '0s', duration: '6.8s', size: '5px' },
  { left: '19%', top: '78%', delay: '1.4s', duration: '7.6s', size: '5px' },
  { left: '41%', top: '86%', delay: '0.7s', duration: '7.2s', size: '4px' },
  { left: '63%', top: '72%', delay: '2.1s', duration: '8.0s', size: '5px' },
  { left: '82%', top: '46%', delay: '1.1s', duration: '7.4s', size: '5px' },
  { left: '93%', top: '76%', delay: '2.6s', duration: '8.2s', size: '4px' },
];

/**
 * Slow, dim background fireflies and soft rain streaks so focus stays undisturbed.
 */
export function CozyAmbientOverlay() {
  const { ambientEnabled } = useAmbient();

  if (!ambientEnabled) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60"
    >
      {AMBIENT_RAIN.map((drop, idx) => (
        <span
          key={`rain-${idx}`}
          className="animate-cozy-rain absolute w-[1.5px] rounded-full bg-rain/20"
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
          className="animate-cozy-firefly absolute rounded-full bg-firefly-bright/45 shadow-[0_0_8px_2px_rgba(230,190,90,0.28)]"
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
