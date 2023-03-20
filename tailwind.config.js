/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'btn': '#982235',
        'home-bg': '#E8E9E9',
        'grey': '#86889D',
        'dark-grey': '#999494',
        'black': '#1D2337',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}
