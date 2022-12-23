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
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      extend: {},
    },
    plugins: [],
  }
