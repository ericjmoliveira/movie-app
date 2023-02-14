/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/flowbite-react/**/*.js'],
  theme: {
    extend: {}
  },
  darkMode: 'media',
  plugins: [require('flowbite/plugin')]
};
