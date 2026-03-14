/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
        serif: ['Instrument Serif', 'serif'],
      },
      colors: {
        theme: {
          bg: '#080808',
          text: '#fafafa',
          textMuted: '#d4d4d8',
          textDim: '#a1a1aa',
          accent: '#c8f55a',
          accentHover: '#f0ede6',
          accentDanger: '#ff5c3a',
          accentBlue: '#5cc8ff',
          accentWarning: '#f5a623',
          border: '#1a1a1a',
          surface: '#0d0d0d',
          surfaceHover: '#111111',
          surfaceSoft: '#1a1a1a',
        }
      },
      animation: {
        pulse: 'pulse 1.8s infinite',
        pfloat: 'pfloat 7s ease-in-out infinite',
        fadeUp: 'fadeUp 0.8s forwards',
        scanGlow: 'scanGlow 4s ease-in-out infinite',
        marquee: 'marquee 25s linear infinite',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.4, transform: 'scale(0.7)' },
        },
        pfloat: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(calc(-50% - 18px))' },
        },
        fadeUp: {
          'from': { opacity: 0, transform: 'translateY(28px)' },
          'to': { opacity: 1, transform: 'translateY(0)' },
        },
        scanGlow: {
          '0%, 100%': { opacity: 0.12 },
          '50%': { opacity: 0.3 },
        },
        marquee: {
          'from': { transform: 'translateX(0)' },
          'to': { transform: 'translateX(-50%)' },
        }
      }
    }
  },
  plugins: [],
}