/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  darkMode: 'class',
  theme: {
    container:{
      center:true,
      padding: '12px',
    },
    extend: {
      colors:{
        primary: '#7F52FF', //purple blue kotlin
        dark: '#0f172a',
        secondary: '#64748b',
        third: '#cbd5e1'
      },
      screens:{
        '2xl': '1320px',
      }
    },
  },
  plugins: [],
}
