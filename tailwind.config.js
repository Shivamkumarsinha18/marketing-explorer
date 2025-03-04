module.exports = {
    darkMode: 'class',
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      extend: {
        colors: {
          'dark-primary': '#1A1A1A',
          'dark-secondary': '#2D2D2D',
        },
        animation: {
          'fade-in': 'fadeIn 0.3s ease-in',
          'float': 'float 3s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          }
        }
      },
    },
    plugins: [],
  }