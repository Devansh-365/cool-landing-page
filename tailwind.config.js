/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    transitionProperty: {
      DEFAULT: '',
    },
    transitionDuration: {
      DEFAULT: '300ms',
    },
    extend: {
    },
  },
  plugins: [],
}
