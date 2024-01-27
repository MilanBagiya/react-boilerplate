/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        30: '0 30px',
      },
    },
  },
  plugins: ['tailwindcss ,autoprefixer ,postcss-import'],
}
