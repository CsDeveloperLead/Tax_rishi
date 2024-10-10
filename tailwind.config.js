/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontWeight: {
        montserrat100: 100,
        montserrat200: 200,
        montserrat300: 300,
        montserrat400: 400,
        montserrat500: 500,
        montserrat600: 600,
        montserrat700: 700,
        montserrat800: 800,
        montserrat900: 900,
      },
      colors: {
        main: '#0062f2', // Custom color defined here
      },
    },
  },
  plugins: [],
}