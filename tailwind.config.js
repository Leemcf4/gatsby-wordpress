module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        avenir: ["Avenir"],
        "avenir-book": ["Avenir-Book"],
        "avenir-roman": ["Avenir-Roman"],
      },
      fontSize: {
        "10xl": "10rem",
      },
      colors: {
        purpleLee: "#DE13FF",
        purpleLeeDark: "#670B76",
      },
      spacing: {
        97: "26rem",
        98: "28rem",
        99: "30rem",
        100: "32rem",
        102: "36rem",
        104: "42rem",
      },
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
      2: "6rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
