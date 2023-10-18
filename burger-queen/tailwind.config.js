/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "bgqueen-primary": "#781B14",
      "bgqueen-secondary": "#E4C485",
      "bgqueen-gray": "#D9D9D9",
      "bgqueen-cafe": "#A8755B",
      "bgqueen-red": "#FF0000",
      "bgqueen-green": "#00913f",
      "bgqueen-yellow": "#ffff00",
      "bgqueen-orange" : "#ff8000",
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}