/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        internacional: ["Internacional", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
