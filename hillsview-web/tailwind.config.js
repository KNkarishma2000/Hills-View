// import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        luxury: {
          cream: '#F9F7F2',
          sand: '#E6E0D0',
          gold: '#BFA15F',
          text: '#1C1917',
          sub: '#44403C',
          teal: '#2C5F58',
          sage: '#8DA399',
          accent: '#D4C5A8',
        },
      },
      fontFamily: {
  // Use 'serif' for your headings and 'sans' for body text
 serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 4s infinite',
        'float-icon': 'floatIcon 3s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        rise: 'rise 4s ease-in-out infinite alternate',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(5px)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        floatIcon: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
