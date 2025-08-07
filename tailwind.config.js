/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf4e3',
          200: '#bce8ca',
          300: '#8dd5a3',
          400: '#5abb75',
          500: '#359f52',
          600: '#2a7f42',
          700: '#236537',
          800: '#1f512f',
          900: '#1a4327',
        },
        hku: {
          green: '#1a4327',
          gold: '#d4af37',
          lightGreen: '#359f52',
          darkGreen: '#0f2419',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}