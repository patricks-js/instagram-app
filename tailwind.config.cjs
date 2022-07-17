/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      animation: {
        hearth: "hearth ease-in-out 0.5s",
      },
      keyframes: {
        hearth: {
          "0%": { transform: "scale(.8)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
