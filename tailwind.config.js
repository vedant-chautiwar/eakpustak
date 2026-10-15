/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#1D325E',
          850: '#16274A',
          900: '#121E38',
          950: '#0B1325',
        },
        brass: {
          100: '#F7F2E7',
          200: '#EDE2CB',
          500: '#B38E46',
          600: '#9C7736',
          700: '#846228',
        },
        chalk: {
          50: '#FBFBF9',
          100: '#F3F1EC',
          200: '#E9E7E0',
        },
        hairline: '#E4E2DC',
        crimson: {
          700: '#9B2226',
        },
        forest: {
          700: '#1E5E44',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        subtle: 'var(--radius-subtle, 6px)',
        control: 'var(--radius-control, 10px)',
        card: 'var(--radius-card, 14px)',
        container: 'var(--radius-container, 16px)',
        micro: 'var(--radius-micro, 14px)',
      },
      maxWidth: {
        '8xl': '1400px',
      },
      letterSpacing: {
        widest: '0.12em',
      },
      boxShadow: {
        subtle: '0 12px 24px -12px rgba(11, 19, 37, 0.08)',
        elevated: '0 20px 32px -16px rgba(11, 19, 37, 0.12)',
      },
    },
  },
  plugins: [],
}
