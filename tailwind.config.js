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