/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
    },
    colors: {
      ngl_black: "#262626",
      ngl_gray: "#707070",
      ngl_white_1: "#FAFAFA",
      ngl_white_2: "#FFF8F6",
      ngl_orange: "#FE3B00",
    },
    fontSize: {
      text_56: "56px",
    },
  },
  plugins: [],
};
