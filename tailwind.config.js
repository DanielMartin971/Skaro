/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*/.{html,js}"],
    theme: {
      colors: {
        'blue-dark': '#000814',
        'blue': '#001D3D',
        'yellow': '#F6AE2D',
        'orange': '#F26419',
        'cyan': '#55DDE0',
        'text-white': '#ffffff',
        'black': '#1e1e1e',
        'dark-background': '#1f2937',
        'baby-blue': '#0A81D1',
        'off-white': '#d1d5db',
        'Golden-Brown': '#AD6600',
        'GoldenRod': '#E6AF2E',
        'Mn-Blue': '#3A557A',
        'Blue-Green': '#2DC2BD',
        
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '390px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {},
    },
    plugins: [
      require('@tailwindcss/forms'),
    ],
  }
