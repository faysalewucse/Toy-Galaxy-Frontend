/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gallery-bg": "url('/gallery_bg.jpg')",
      },
      colors: {
        primary: "#0B2B5E",
        primary2: "#ABE6F5",
        secondary: "#FDE95E",
      },
    },
  },
  plugins: [],
};
