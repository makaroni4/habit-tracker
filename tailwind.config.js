/** @type {import('tailwindcss').Config} */

export default {
  safelist: [
    { pattern: /grid-cols-\d+/ }
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        'print': { 'raw': 'print' },
        'screen': { 'raw': 'screen' },
      }
  }
  },
  plugins: [],
}
