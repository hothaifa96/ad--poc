/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CC0000',
          'red-dark': '#990000',
          'red-light': '#FF1A1A',
          'red-muted': '#3D0000',
          black: '#0A0A0A',
          'black-soft': '#1A1A1A',
          'gray-dark': '#2A2A2A',
          'gray-mid': '#3D3D3D',
          'gray-light': '#6B6B6B',
          white: '#FFFFFF',
          'off-white': '#FFF8F8',
          'cream': '#FFF0F0',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'Noto Sans Arabic', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-red': 'pulseRed 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        pulseRed: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204, 0, 0, 0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(204, 0, 0, 0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
