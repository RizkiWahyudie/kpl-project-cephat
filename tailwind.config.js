const colors = require("tailwindcss/colors");
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        slate: colors.slate,
      },
      width: {
        '8xl': '120px',
        '100xl': '31%'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}