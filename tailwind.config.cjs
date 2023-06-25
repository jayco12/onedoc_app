/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Onedoc': '#04575E',
      },
      fontFamily:{
        Gothic: ['"Gothic A1"'],
        Montserrat:[' "Montserrat" ']
      }
    },
  },
}
