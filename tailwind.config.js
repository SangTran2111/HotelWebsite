/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#d4af37',
        navy: '#0f172a',
        vintage: '#f8f7f2',
      },
    },
  },
  plugins: [],
}
