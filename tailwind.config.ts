import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
       "Inter" : ['Inter', 'sans-serif'],
       "Curisve": ["Cedarville Cursive", 'cursive']
      },
      colors: {
        Black: "#263238",
        D_Grey: "#4D4D4D",
        Grey: "#717171",
        GreyLight: "#89939E",
        Grey_blue: "#ABBED1",
        Silver: "#F5F7FA",
        White: "#FFFFFF",
        // Primary: "#28CB8B",
        Primary: "#4CAF4F",
        Secondary: "#263238",
        greenshade: {
          100: "#43A046",
          200: "#388E3B",
          300: "#237D31",
          400: "#1B5E1F",
          500: "#103E13",
        },
        tintgreen: {
          100: "#66BB69",
          200: "#81C784",
          300: "#A5D6A7",
          400: "#C8E6C9",
          500: "#E8F5E9",
        },
      },
    },
  },
  plugins: [],
};
export default config;
