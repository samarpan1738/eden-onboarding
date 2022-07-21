/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["./src/**/*.{jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: {
        DEFAULT: '#644CE5',
      },
    },
  },
  plugins: [],
}
