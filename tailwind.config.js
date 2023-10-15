/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FFBB5C",
        secondary: "#FF9B50",
        vermilion: "#E25E3E",
        darkorange: "#C63D2F",
      },
    },
  },
  plugins: [],
}

