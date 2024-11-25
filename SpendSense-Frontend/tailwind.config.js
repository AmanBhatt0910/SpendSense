/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A8A",
          light: "#3B82F6",
        },
        teal: {
          DEFAULT: "#14B8A6",
          light: "#5EEAD4",
        },
        accent: {
          orange: "#F97316",
          yellow: "#FACC15",
        },
        neutral: {
          light: "#F3F4F6",
          dark: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
