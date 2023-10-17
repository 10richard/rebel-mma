/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#053B50",
        secondary: "#176B87",
        seaserpent: "#64CCC5",
        brightgray: "#EEEEEE",
      },
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

