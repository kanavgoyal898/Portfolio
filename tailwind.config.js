// @type {import('tailwindcss').Config}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        'xsmall': '576px',
        'small': '640px',
        'medium': '992px',
        'large': '1200px',
      },
      maxWidth: {
        'xsmall': '576px',
        'small': '640px',
        'medium': '992px',
        'large': '1200px',
      },
      container: {
        center: true,
        screens: {
          'xsmall': '576px',
          'small': '640px',
          'medium': '992px',
          'large': '1200px',
        },
      },
      fontSize: {
        'tiny': '0.625rem', // 10px
        'smaller': '0.875rem', // 14px
        'base': '1rem',       // 16px
        'lg': '1.125rem',     // 18px
        'xl': '1.25rem',      // 20px
        '2xl': '1.5rem',      // 24px
        '3xl': '1.875rem',    // 30px
        '4xl': '2.25rem',     // 36px
        '5xl': '3rem',        // 48px
      },
    },
  },
  plugins: [],
}
