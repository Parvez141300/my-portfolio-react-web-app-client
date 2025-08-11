/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    plugins: [require("daisyui")],
    daisyui: {
      themes: [
        {
          light: {
            primary: "#1aeacb",
            secondary: "#8ac5f4",
            accent: "#4482ee",
            neutral: "#fefbfe",
            "base-100": "#f1fefd",
          },
          dark: {
            primary: "#1aeacb",
            secondary: "#8ac5f4",
            accent: "#4482ee",
            neutral: "#1a1a1a",
            "base-100": "#010e0d",
          },
        },
      ],
      darkTheme: "dark",
    },
  };
  