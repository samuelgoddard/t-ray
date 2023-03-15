module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Banana Grotesk Medium', 'Arial', 'sans-serif'],
      'display': ['Albert Extrabold', 'Arial', 'sans-serif'],
      'mono': ['Fake Receipt', 'Lucida Console', 'Courier', 'monospace'],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px"
    },
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
        'marquee-slow': 'marquee 75s linear infinite',
        'marquee-slow-2': 'marquee2 75s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'spin-reverse': 'rotateReverse 1s linear infinite',
        wiggle: 'wiggle 0.9s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
        'float-wobble': 'floatWobble 5s ease-in-out infinite',
        'float-wobble-fast': 'floatWobbleFast 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0.5%)' },
          '50%': { transform: 'translateY(-1%)' },
        },
        floatWobble: {
          '0%, 100%': { transform: 'translateY(1.25%) rotateZ(2deg) scale(1.05)' },
          '50%': { transform: 'translateY(-1.25%) rotateZ(-5deg) scale(1)' },
        },
        floatWobbleFast: {
          '0%, 100%': { transform: 'translateY(1.2%) rotateZ(1deg) scale(1.025)' },
          '50%': { transform: 'translateY(-3.5%) rotateZ(-10deg) scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' },
        },
        rotateReverse: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
      }, 
      colors: {
        'black': '#000000',
        'off-black': '#191926',
        'white': '#FFFFFF',
        'off-white': '#EBE2D0',
        'red': '#FF2B59',
        'yellow': '#F1FF4F',
        'pink': '#FF44AE',
        'blue': '#2A317B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: []
}