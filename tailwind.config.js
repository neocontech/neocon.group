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
      ngl_white: "#Ffffff",
      ngl_white_1: "#FAFAFA",
      ngl_white_2: "#FFF8F6",
      ngl_orange: "#FE3B00",
    },
    fontSize: {
      text_56: "56px",
      sm: "14px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      "2xl": "24px",
      "3xl": "36px",
    },

    screens: {
      xsm: { min: "280px", max: "639px" },
      // => @media (min-width: 280px) { ... }
      sm: { min: "640px", max: "767px" },
      // => @media (min-width: 640px and max-width: 767px) { ... }
    },
  },
  plugins: [],
};
