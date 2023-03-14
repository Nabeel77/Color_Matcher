/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "yellow": "#F4D03F",
        "green": "#2ECC71",
        "blue": "#3498DB",
        "orange": "#EB984E",
        "purple": "#A569BD",
        "red": "#E74C3C",
      },
      gridTemplateColumns: {
        "auto": "repeat(auto-fill, minmax(50px, 1fr))"
      },
      gridTemplateRows: {
        "auto": "repeat(auto-fill, minmax(50px, 1fr))"
      }
    },
  },
  plugins: [],
}
