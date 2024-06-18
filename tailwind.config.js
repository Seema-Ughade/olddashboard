/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        customBlue: '#1890ff', // Adjust the HEX code here
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}