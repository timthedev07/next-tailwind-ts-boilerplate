// const colors = require(`tailwindcss/colors`);
module.exports = {
  content: ["./src/pages/**/*.{tsx,ts}", "./src/components/**/*.{ts,tsx}"],
  darkMode: "class",
  mode: "jit",
  variants: {
    extend: {
      typography: ["dark"],
      cursor: ["focus"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
