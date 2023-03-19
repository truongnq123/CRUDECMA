/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        '2000': '2000px',
        '1000': '1000px',
        '900': '900px',
        '850': '850px',
        '700': '700px',
        '200': '200px',
      },
      height: {
        '2000': '2000px',
        '1000': '1000px',
        '900': '900px',
        '200': '200px',
        '90': '90px',
        '1': '1px',
      }
    },
  },
  plugins: [],
}
