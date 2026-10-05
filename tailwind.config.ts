import type { Config } from "tailwindcss";

// <alpha-value> lo reemplaza Tailwind por la opacidad pedida (1 si no hay).
const token = (name: string) =>
  `color-mix(in srgb, var(--color-${name}) calc(<alpha-value> * 100%), transparent)`;

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
      // Cada color sale de styles/tokens.css. Se define con color-mix para que
      // los modificadores de opacidad (text-deepspace/60, bg-nebula/5, etc.)
      // funcionen: con un var() plano, Tailwind v3 no genera esas clases.
      colors: {
        stardust: token("stardust"),
        deepspace: token("deepspace"),
        nebula: token("nebula"),
        saturn: token("saturn"),
        orbit: token("orbit"),
        negative: token("negative"),
        positive: token("positive"),
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
        "label-in": {
          "0%": { opacity: "0", transform: "translateY(8px) scale(0.92)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "spin-slow": "spin-slow 44s linear infinite",
        float: "float 7s ease-in-out infinite",
        "label-in": "label-in 0.45s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
