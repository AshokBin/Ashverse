/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#0a0a0a",
          dark: "#111111",
          card: "#1a1a1a",
          orange: "#00C0F0",
          red: "#FF2D2D",
          white: "#FFFFFF",
          gray: "#888888",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
};
