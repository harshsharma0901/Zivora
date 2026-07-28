/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        rosegold: {
          DEFAULT: '#B76E79',
          light: '#D9A5AC',
          dark: '#9B5760'
        },
        beige: '#F8F5F2',
        ink: '#111111'
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Manrope"', 'sans-serif']
      },
      letterSpacing: {
        widest2: '0.28em'
      },
      transitionTimingFunction: {
        facet: 'cubic-bezier(0.65, 0, 0.35, 1)'
      },
      boxShadow: {
        glint: '0 8px 40px -12px rgba(183,110,121,0.35)',
        soft: '0 2px 24px rgba(17,17,17,0.06)'
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        floatY: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      animation: {
        shimmer: 'shimmer 2.8s linear infinite',
        floatY: 'floatY 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
