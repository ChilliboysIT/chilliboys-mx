import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        copper: "#b87333",
        rust: "#8b4513",
        steel: "#2c2c2c",
        sand: "#f5f5dc",
        ocean: "#006994",
      },
    },
  },
  plugins: [],
};

export default config;
