/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        neue: ['"Neue Montreal"', '"Hanken Grotesk"', 'sans-serif'],
        founders: ['"Founders Grotesk"', '"Bebas Neue"', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        hanken: ['"Hanken Grotesk"', 'sans-serif'],
      },
      colors: {
        lime: { ochi: '#CDEA68' },
        teal: { ochi: '#004D43' },
      },
    },
  },
  plugins: [],
}
