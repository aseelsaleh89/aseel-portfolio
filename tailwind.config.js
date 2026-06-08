/** tailwind.config.js */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryTeal: "#00897b",
        secondaryOrange: "#ff7043",
        softBlue: "#e0f7fa",
        lightMint: "#e8f5e9",
        darkGray: "#2e3a3f",
        lightGray: "#607d8b",
      },
      fontFamily: {
        serifDisplay: ["Georgia", "serif"],
        monoTech: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
};