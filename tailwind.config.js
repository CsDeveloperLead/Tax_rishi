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
      boxShadow: {
        'custom-combined': `
          1.32px 2.38px 3.71px 0px #00000005,
          5.89px 10.64px 8.58px 0px #00000008,
          14.66px 26.45px 19.58px 0px #0000000A,
          28.54px 51.5px 41.73px 0px #0000000D,
          48.46px 87.47px 80px 0px #00000012
        `,
      },
    },
  },
  plugins: [],
}