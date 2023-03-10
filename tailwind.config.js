/** @type {import('tailwindcss').Config} */

const colors = require("./theme/colors");
const fontFamily = require("./theme/fontFamily");
const boxShadow = require("./theme/boxShadow");

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./providers/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors,
      fontFamily,
      boxShadow,
      screens: {
        xs: "420px",
      },
    },
  },
  plugins: [require("tailwindcss-rtl")],
};
