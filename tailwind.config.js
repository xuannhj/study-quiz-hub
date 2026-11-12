/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        mist: 'rgb(var(--color-mist) / <alpha-value>)',
        'mist-deep': 'rgb(var(--color-mist-deep) / <alpha-value>)',
        paper: 'rgb(var(--color-paper) / <alpha-value>)',
        'on-accent': 'rgb(var(--color-on-accent) / <alpha-value>)',
        ink: 'rgb(var(--color-ink) / <alpha-value>)',
        'ink-soft': 'rgb(var(--color-ink-soft) / <alpha-value>)',
        sage: {
          border: 'rgb(var(--color-sage-border) / <alpha-value>)',
          tint: 'rgb(var(--color-sage-tint) / <alpha-value>)',
        },
        moss: {
          DEFAULT: 'rgb(var(--color-moss) / <alpha-value>)',
          hover: 'rgb(var(--color-moss-hover) / <alpha-value>)',
          soft: 'rgb(var(--color-moss-soft) / <alpha-value>)',
        },
        rain: {
          DEFAULT: 'rgb(var(--color-rain) / <alpha-value>)',
          hover: 'rgb(var(--color-rain-hover) / <alpha-value>)',
          soft: 'rgb(var(--color-rain-soft) / <alpha-value>)',
          ink: 'rgb(var(--color-rain-ink) / <alpha-value>)',
        },
        wood: {
          DEFAULT: 'rgb(var(--color-wood) / <alpha-value>)',
          soft: 'rgb(var(--color-wood-soft) / <alpha-value>)',
        },
        firefly: {
          DEFAULT: 'rgb(var(--color-firefly) / <alpha-value>)',
          bright: 'rgb(var(--color-firefly-bright) / <alpha-value>)',
          soft: 'rgb(var(--color-firefly-soft) / <alpha-value>)',
        },
        blossom: {
          DEFAULT: 'rgb(var(--color-blossom) / <alpha-value>)',
          soft: 'rgb(var(--color-blossom-soft) / <alpha-value>)',
          ink: 'rgb(var(--color-blossom-ink) / <alpha-value>)',
        },
      },
      boxShadow: {
        cozy: 'var(--shadow-cozy)',
      },
    },
  },
  plugins: [],
};
