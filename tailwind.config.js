module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#797b7e",
        gray_301: "#e3e3e3",
        orange_A700: "#f95e07",
        gray_300: "#dddde2",
        gray_50: "#fffbfb",
        gray_100: "#f5f5f6",
        black_900_75: "#00000075",
        black_900: "#000000",
        bluegray_400: "#8a8a8a",
        bluegray_300: "#87b6a1",
        white_A701: "#ffffff",
        pink_201: "#db79a9",
        white_A700: "#fdfdfd",
        pink_200: "#e4a2b0",
      },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
