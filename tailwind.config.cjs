/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'hsl(37°, 98%, 54%)',
        },
        secondary: {
          400: 'hsl(205°, 37%, 55%)',
        },
        neutral: {
          300: 'hsl(203°, 28%, 79%)',
          400: 'hsl(203°, 22%, 55%)',
          700: 'hsl(205°, 30%, 27%)',
          800: 'hsl(206°, 45%, 15%)',
        },
        gray: {
          300: 'hsl(0°, 0%, 95%)',
        },
        white: 'hsl(0°, 0%, 99%)',
      },
    },
  },
  plugins: [],
}
