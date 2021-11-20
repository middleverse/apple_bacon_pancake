const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      blue: {
        DEFAULT: "#00199E"
      },
      white: {
        DEFAULT: "#ffffff"
      },
      yellow: {
        DEFAULT: "#FDDF3A"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
