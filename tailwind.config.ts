import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["Sora", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      colors: {
        ink: "#04070f",
        blue: "#0f4cff",
        gold: "#d4af37",
      },
      boxShadow: {
        soft: "0 24px 70px -32px rgba(4, 7, 15, 0.65)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 15% 20%, rgba(15,76,255,0.30), transparent 42%), radial-gradient(circle at 80% 5%, rgba(212,175,55,0.22), transparent 32%), linear-gradient(180deg, #070d1f 0%, #04070f 100%)",
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 800ms cubic-bezier(0.2, 0.9, 0.2, 1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
