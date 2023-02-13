/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Balablue-blue': '#2BACE2',
      },
      fontFamily:{
        Gothic: ['"Gothic A1"']
      }
    },
  },
}
