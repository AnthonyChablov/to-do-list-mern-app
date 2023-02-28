/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('src/assets/backgroundImage2.jpeg')",
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },

    },
    
  }
}
