/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        /* ── Semantic surface tokens ── */
        'bg-base':   'rgb(var(--color-bg-base)   / <alpha-value>)',
        'bg-subtle': 'rgb(var(--color-bg-subtle) / <alpha-value>)',
        'bg-card':   'rgb(var(--color-bg-card)   / <alpha-value>)',
        /* ── Accent ── */
        'accent': {
          DEFAULT: 'rgb(var(--color-accent)       / <alpha-value>)',
          hover:   'rgb(var(--color-accent-hover) / <alpha-value>)',
        },
        /* ── Text ── */
        'text-primary':   'rgb(var(--color-text-primary)   / <alpha-value>)',
        'text-secondary': 'rgb(var(--color-text-secondary) / <alpha-value>)',
        /* ── Border ── */
        'border-token': 'rgb(var(--color-border) / <alpha-value>)',
      },
      maxWidth: {
        /* 전 섹션 컨테이너 너비를 이 값 하나로 통일 */
        'section': '72rem', /* = max-w-6xl */
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}