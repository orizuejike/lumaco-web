/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lumacoRed: '#E11D48',
        lumacoBlue: '#1E3A8A',
      }
    },
  },
  plugins: [],
}