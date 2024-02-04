/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'def': ["Montserrat", "sans-serif"],
      },
      screens: {
        xxl: '1440px',
        xl: "1300px",
        l2: '1200px',
        l: "1126px",
        ipad: "1024px",
        s: "990px",
        mm: "800px",
        med: "750px",
        sml: "630px",
        sml2: '590px',
        xsml: "555px",
        extrasml: '485px',
        ssml: "420px",
      },
    },
  },
  plugins: [],
}