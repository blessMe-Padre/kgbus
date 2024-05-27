/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '769px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#292e35',
      'green': '#6cb778',
      'white': '#fff',
      'gray': '#b5c2d7',
      'light-gray': '#ecf3f7',
      'dark-green': '#3c7a59;',
      'blur-green': '#4d8f57;',
      'blue': '#a6cfff;',
      'dark-gray': '#3a414c;',
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'bodyFont': ['archangelsk', 'regular'],
      }
    }
  },
  plugins: [],
}

