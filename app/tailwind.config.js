const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Poppins"],
      body: ['"Open Sans"'],
    },
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        background: "background",
      },
      animation: {
        wiggle: "wiggle 1s cubic-bezier(0, 0, 0.2, 0.5) infinite",
        redGradient: "redGradient 1s infinite",
        hoverShake: "animation: hoverShake 0.15s linear 3",
      },
      keyframes: {
        hoverShake: {
          "0%": { transform: "skew(0deg,0deg)" },
          "25%": { transform: "skew(5deg, 5deg)" },
          "75%": { transform: "skew(-5deg, -5deg)" },
          "100%": { transform: "skew(0deg,0deg)" },
        },
        wiggle: {
          "75%, 100%": {
            transform: "scale(1.1)",
            opacity: "0",
          },
        },
        redGradient: {
          "0%": {
            backgroundColor: "red",
          },

          "25%": {
            backgroundColor: "orange",
          },
          "50%": {
            backgroundColor: "red",
          },
          "75%": {
            backgroundColor: "orange",
          },
          "100%": {
            backgroundColor: "red",
          },
        },
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        DEFAULT: "#00199E",
        light: "#BAC1EA",
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
