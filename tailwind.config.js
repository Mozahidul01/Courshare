/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#19596a",
          secondary: "#69b4c8",
          accent: "#4b4b4c",
          neutral: "#111111",
          "base-100": "#FFFFFF",
          info: "#C8E1E7",
          success: "#DEF29F",
          warning: "#F7E589",
          error: "#F2B6B5",
        },
      },
    ],
  },
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        teal: "#19596a",
        hummingBird: "#69b4c8",
        yellow: "#e4d63b",
        solitude: "#f6f6f6",
        gray: "#4B4B4C",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("daisyui")],
};
