/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      colors: {
        blue: "#064F8C",
        green: "#249847",
        pink: "#ff49db",
        orange: "#ff7849",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#CDCDCE",
      },
      fontFamily: {
        sans: ["roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
      spacing: {
        "8xl": "96rem",
        "9xl": "128rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
