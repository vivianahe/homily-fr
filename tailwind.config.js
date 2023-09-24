/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        'custom-blue': '#2A8EBF',
        'custom-blue-li': '#B5D9EB',
        'custom-gray-me': '#DFE0DF',
        'custom-text': '#0072AE',
        'custom-icon': '#435473',
      },
    },
  },
  plugins: [
    require('flowbite')
  ],
}

