const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 1s infinite",
      },
      keyframes: {
        wiggle: {
          "10%, 90%": {
            transform: "translate3d(-1px, 1px, -1px)",
          },
          "20%, 80%": {
            transform: "translate3d(1px, 0, 1px)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-1px, -1px, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(1px, 0, 1px)",
          },
        },
        wiggle2: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        DEFAULT: "#00199E",
      },
      white: {
        DEFAULT: "#ffffff",
      },
      yellow: {
        DEFAULT: "#FDDF3A",
      },
      orange: {
        DEFAULT: "#FFA800",
      },
      orangePink: {
        DEFAULT: "#FF773D",
      },
      red: {
        DEFAULT: "#FF3C00",
      },
      grey: {
        DEFAULT: "#ededed",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
