/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    './modules/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    boxShadow: {
      'sm': '2px 3px 20px rgb(0 0 0 / 0.1);',
      'md': '2px 3px 30px rgb(0 0 0 / 0.1);',
      'lg': '0 0 40px rgb(0 0 0 / 0.2);',
      'xl': '0 0 50px rgb(0 0 0 / 0.2);',
      '2xl': '0 0 60px rgb(0 0 0 / 0.2);',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}