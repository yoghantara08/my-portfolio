/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#10141D",
        white: "#e6e6e6",
        darkBlue: "#252F47",
        blue: "#1e54eb",
        darkGray: "#525456",
        gray: "#BABBC0",
        aqua: "#00c6bc",
        red: "#e63f79",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
        quicksand: ["Quicksand", "sans-serif"],
        sourcesansPro: ["Source Sans Pro", "sans-serif"],
      },
      boxShadow: {
        shadowEven: "0px 0px 6px  rgba(250,250,250,0.3)",
      },
    },
  },
  plugins: [],
};
