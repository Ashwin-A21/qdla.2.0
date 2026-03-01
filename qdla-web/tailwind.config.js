/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        'quote-header': ['var(--font-quote-header)'],
        'quote-body': ['var(--font-quote-body)']
      },
      colors: {
        qdla: {
          dark: '#0f0f0f',
        }
      }
    },
  },
  plugins: [],
}

