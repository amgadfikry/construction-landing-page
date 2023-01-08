/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackC: 'var(--black)',
        greenC: "var(--green)",
        mainC: "var(--main)",
        grayC: "var(--gray)",
        orangeC: "var(--orange)",
      }
    },
  },
  plugins: [],
}
