/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#10141D",
        white: "#e6e6e6",
        darkBlue: "#252F47",
        blue: "#012EAA",
        darkGray: "#525456",
        gray: "#BABBC0",
        aqua: "#00c6bc",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
      },
      boxShadow: {
        shadowEven: "0px 0px 6px  rgba(250,250,250,0.3)",
      },
    },
  },
  plugins: [],
};
