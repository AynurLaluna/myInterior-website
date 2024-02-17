import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      primary1: "#CDA274",
      primary2: "#292F36",
      primary3: "#F4F0EC",
      primary4: "#4D5053",
    },
    fontFamily: {
      display:
        "url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap')",

      font:
        "url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100..900;1,100..900&display=swap')",
    },
  },

  plugins: [],
};

export default config;
