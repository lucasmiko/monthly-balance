/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22959f',
        secondary: '#6f6f6f',
        accent: '#baf1f6',
        background: '#ffffff',
        dark: '#3c3c3c',
        darker: '#121212',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}