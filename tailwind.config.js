/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    
  ],
  theme: {
    screens: {
      'sm': '400px',
     

      'md': '800px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      fontFamily:{
        serif:[ 'Playfair Display', 'serif'],
        sans: ['Roboto', 'sans-serif'],
      
        },
    },
    
  },
  plugins: [],
}