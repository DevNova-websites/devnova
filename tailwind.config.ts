import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        brand: {
          DEFAULT: "#F5C400",
          amber: "#FF9F0A",
          fire: "#FF5722",
          gold: "#FFD60A",
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        "pulse-ring": "pulse-ring 2s ease-out infinite",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-ring": {
          "0%": { boxShadow: "0 0 0 0 rgba(245,196,0,0.5)" },
          "70%": { boxShadow: "0 0 0 12px rgba(245,196,0,0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(245,196,0,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
