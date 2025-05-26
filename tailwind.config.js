module.exports = {
    content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
    theme: {
      extend: {
        animation: {
          'pulse': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
        colors: {
          black: '#000000',
          orange: {
            400: '#FF8B5B',
            500: '#FF6B2B',
            600: '#E55A1A'
          },
          charcoal: {
            400: '#4A4A4A',
            500: '#2A2A2A',
            600: '#1A1A1A',
            700: '#0A0A0A',
            800: '#050505',
            900: '#030303'
          }
        }
      },
    },
    plugins: [],
  }