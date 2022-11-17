/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // content: ["./src/**/*.{html,jsx,js}"],
  // content: [path.join(__dirname, './src/**/*.{js,jsx,ts,tsx}')],
  theme: {
    extend: {},
  },
  // plugins: [],
  plugins: [require('@tailwindcss/forms')],
}
