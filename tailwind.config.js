// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDark: 'rgb(33, 37, 41)',
        secondaryDark: 'rgb(222, 226, 230)',
        tertiaryDark: 'rgb(239, 154, 164)',
        quaternaryDark: 'rgba(222, 226, 230, 0.75)',
        primaryLight: 'rgb(255, 255, 255)',
        secondaryLight: 'rgb(33, 37, 41)',
        tertiaryLight: 'rgb(165, 28, 48)',
        quaternaryLight: 'rgba(33, 37, 41, 0.75)',
      },
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
