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
        'spin-slow': 'spin 12s linear infinite',
        wiggle: 'wiggle 0.9s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
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
          '0%, 100%': { transform: 'translateY(2px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(6deg)' },
        }
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