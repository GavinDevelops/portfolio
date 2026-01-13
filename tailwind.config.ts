import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Background layers
        void: '#0a0a0b',
        base: '#121214',
        raised: '#1a1a1d',
        'surface-hover': '#242428',

        // Foreground
        primary: '#f4f4f5',
        secondary: '#a1a1aa',
        muted: '#52525b',

        // Accent - Amber
        amber: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
        },

        // Accent - Cyan
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },

        // Accent - Rose
        rose: {
          500: '#f43f5e',
        },

        // Syntax colors
        syntax: {
          green: '#4ade80',
          purple: '#c084fc',
          orange: '#fb923c',
        },
      },
      fontFamily: {
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1.125rem', { lineHeight: '1.75rem' }],
        lg: ['1.5rem', { lineHeight: '2rem' }],
        xl: ['2rem', { lineHeight: '2.5rem' }],
        '2xl': ['3rem', { lineHeight: '3.5rem' }],
        '3xl': ['4.5rem', { lineHeight: '1.1' }],
        '4xl': ['6rem', { lineHeight: '1' }],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
