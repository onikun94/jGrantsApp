const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    fontFamily: {
      mplus: ['M\\ PLUS\\ Rounded\\ 1c'],
      roboto: ['Roboto'],
      // M+PLUS+Rounded+1c
    },
    extend: {},
  },
  plugins: [],
};
