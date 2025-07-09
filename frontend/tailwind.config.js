/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar';

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        crimson: ['"Crimson Text"', 'serif'],
        mada: ['"Mada"', 'sans-serif'],
      },
      colors: {
        orangePrimary: "#f75b18",
        orangeSecondary: "#f97e3e",
      },
    },
  },
  plugins: [scrollbar],
  variants: {
    scrollbar: ['rounded'],
  },
};
