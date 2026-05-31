/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        aura: {
          pink: "#ffd6e8",
          blush: "#fff0f7",
          glow: "#f9a8d4",
        },
      },
      animation: {
        "aura-float": "aura-float 8s ease-in-out infinite",
      },
      keyframes: {
        "aura-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};
