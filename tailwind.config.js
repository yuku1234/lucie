/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#050818',
          900: '#080d2a',
          800: '#0d1540',
          700: '#111d56',
        },
        brand: {
          blue: '#2563eb',
          royal: '#1d4ed8',
          electric: '#3b82f6',
          indigo: '#4f46e5',
          purple: '#7c3aed',
          violet: '#8b5cf6',
          lavender: '#c4b5fd',
          light: '#dbeafe',
          muted: '#e0e7ff',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1d4ed8 0%, #4f46e5 50%, #7c3aed 100%)',
        'gradient-hero': 'linear-gradient(135deg, #050818 0%, #0d1540 40%, #1e1065 100%)',
        'gradient-glow': 'radial-gradient(ellipse at center, rgba(79,70,229,0.3) 0%, transparent 70%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit 28s linear infinite reverse',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
