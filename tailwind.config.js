/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B2B5E",
        secondary: "#FDE95E",
      },
    },
  },
  plugins: [],
};
