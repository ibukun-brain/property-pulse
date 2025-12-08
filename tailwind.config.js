/** @type{import("tailwindcss").Config} **/

module.exports = {
  content: ["./app/**/*.{js,ts,tsx,jsx}"],
  theme: {
    extends: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
};
