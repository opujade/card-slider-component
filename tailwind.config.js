/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        time: '#4da2a9',
        programming: '#d3d4d9',
        meditation: '#ffd167'
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: [],
};