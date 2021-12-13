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
        redGradint: "redGradint 0.8s linear infinite",
      },
      keyframes: {
        redGradint: {
          "0%": {
            // transform: "skew(0deg,0deg)",
            backgroundImage: "linear-gradient(#FF3C00, #FF773D)",
          },
          "25%": {
            // transform: "skew(1deg, 1deg)",
            backgroundImage: "linear-gradient(#FF773D, #FF3C00)",
          },
          "50%": {
            // transform: "skew(1deg, 1deg)",
            backgroundImage: "linear-gradient(#FF3C00, #FF773D)",
          },
          "75%": {
            // transform: "skew(1deg, 1deg)",
            backgroundImage: "linear-gradient(#FF773D, #FF3C00)",
          },
          // "75%": { transform: "skew(-1deg, -1deg)" },
          // "100%": { transform: "skew(0deg,0deg)" },
        },
        wiggle: {
          "75%, 100%": {
            transform: "scale(1.1)",
            opacity: "0",
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
