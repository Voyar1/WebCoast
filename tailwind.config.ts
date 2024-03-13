import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1600px",
      },
    },
    extend: {
      colors: {
        primary: {
          500: "#FE68DE",
          300: "#B18CFD",
        },
        dark: {
          100: "#000000",
          200: "#0F1117",
          300: "#151821",
          400: "#212734",
          500: "#101012",
        },
        light: {
          900: "#FFFFFF",
          800: "#F4F6F8",
          850: "#FDFDFD",
          700: "#DCE3F1",
          500: "#7B8EC8",
          400: "#858EAD",
        },
      },
      fontFamily: {
        sairaCondensed: ["var(--font-sairaCondensed)"],
      },
      screens: {
        xs: "420px",
        xxl: "1700px",
      },
      backgroundImage: {
        hero: "url('/assets/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
