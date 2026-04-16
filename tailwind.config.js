/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#080808",
        "black-2": "#0e0e0e",
        "black-3": "#161616",
        "black-4": "#202020",
        gold: "#C9A84C",
        "gold-light": "#E2C97E",
        "gold-dim": "rgba(201,168,76,0.15)",
        "gold-border": "rgba(201,168,76,0.25)",
        white: "#F5F1E8",
        "white-dim": "#9E9A92",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "sans-serif"],
        display: ["var(--font-bebas)", "sans-serif"],
      },
      screens: {
        sm: "600px",
        md: "900px",
        lg: "1280px",
      },
    },
  },
  plugins: [],
};
