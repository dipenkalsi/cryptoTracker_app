/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      invert:{
        25:'.25',
        50:'.50',
        75:'0.75'
      }
    },
  },
  plugins: [require('flowbite/plugin')],
  important:true
}