const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        "brand": {
          "50": "#576680",
          "100": "#4d5c76",
          "200": "#43526c",
          "300": "#394862",
          "400": "#2f3e58",
          "500": "#25344e",
          "600": "#1b2a44",
          "700": "#11203a",
          "800": "#071630",
          "900": "#000c26"
        }
      }
    },
  },
  plugins: [],
}
