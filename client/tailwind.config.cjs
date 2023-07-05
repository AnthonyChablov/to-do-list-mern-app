/** @type {import('tailwindcss').Config} */

module.exports = {
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'heroImage': "url('assets/backgroundImage2.jpeg')",
      },
      fontFamily: {
        'Roboto': ['Roboto', 'sans-serif'],
      },

    },
    
  }
}
