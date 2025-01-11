/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#e0f7fa',
          DEFAULT: '#22959f',
        },
        secondary: '#6f6f6f',
        accent: '#baf1f6',
        background: '#ffffff',
        dark: '#3c3c3c',
        darker: '#121212',
      },
      fontFamily: {
        sans: ['Noto Sans', 'Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
    },
    boxShadow: {
      primary: '0 4px 6px -1px rgba(34, 149, 159, 0.5)',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
