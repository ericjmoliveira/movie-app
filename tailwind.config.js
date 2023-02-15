const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/**/*.js'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans]
      }
    }
  },
  darkMode: 'media',
  plugins: [require('flowbite/plugin')]
};
