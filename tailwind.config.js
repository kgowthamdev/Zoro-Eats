/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    
  ],
  theme: {
    extend: {
      fontFamily:{
        serif:[ 'Playfair Display', 'serif'],
        sans: ['Roboto Serif', 'serif'],
      
        },
    },
    
  },
  plugins: [],
}