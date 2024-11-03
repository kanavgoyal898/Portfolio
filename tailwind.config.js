// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      width: {
        'large': '1200px',
        'medium': '992px',
        'regular': '768px',
        'small': '576px'
      },
      screens: {
        'large': '1200px',
        'medium': '992px',
        'regular': '768px',
        'small': '576px'
      },
      maxWidth: {
        'large': '1200px',
        'medium': '992px',
        'regular': '768px',
        'small': '576px'
      },
    },
  },
  plugins: [],
}
