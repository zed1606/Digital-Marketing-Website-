/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        green: '#00FF00',
        red: '#FF0000',
      },
      fontFamily: {
        sans: ['Montserrat', 'Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
