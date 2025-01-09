/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        accentLight: '#00000055',
        accentDark: '#FFFFFF73',
        accentBgLight: '#0000000D',
        accentBgDark: '#FFFFFF1F',
      },
    },
  },
  plugins: [],
}