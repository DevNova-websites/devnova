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
        heading: ["var(--font-heading)"],
        sans: ["var(--font-body)"],
      },
      colors: {
        stardust: "var(--color-stardust)",
        deepspace: "var(--color-deepspace)",
        nebula: "var(--color-nebula)",
        saturn: "var(--color-saturn)",
        orbit: "var(--color-orbit)",
        negative: "var(--color-negative)",
        positive: "var(--color-positive)",
      },
      borderRadius: {
        card: "12px",
        pill: "100px",
      },
      keyframes: {
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 44s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
