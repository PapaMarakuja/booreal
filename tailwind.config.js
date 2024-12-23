const svgToDataUri = require('mini-svg-data-uri');
const {
  default: flattenColorPalette,
} = require('tailwindcss/lib/util/flattenColorPalette');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#6244F4',
        accent: {
          DEFAULT: '#D6F551',
          hover: '#96ac39',
        },
        'gradient-1': '#3B1E9E',
        'gradient-3': '#A67BF4',
        'gradient-5': '#9EB000',
        'accent-dark': '#96ac39',
        'angular-red': '#DD0031',
        'angular-dark-red': '#C3002F',
        'react-light-blue': '#61DAFB',
        'react-dark-blue': '#2188B6',
        'tailwind-teal': '#06B6D4',
        'tailwind-blue': '#0EA5E9',
      },
      animation: {
        'blob-slow': 'blob 15s infinite',
        'blob-slower': 'blob 20s infinite',
        blob1: 'blob1 20s infinite',
        blob2: 'blob2 30s infinite',
        blob3: 'blob3 20s infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(20%, -50%) scale(1.2)',
          },
          '50%': {
            transform: 'translate(0, 20%) scale(1)',
          },
          '75%': {
            transform: 'translate(-20%, -15%) scale(0.8)',
          },
        },
        blob1: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(30%, -40%) scale(1.1)',
          },
          '50%': {
            transform: 'translate(-20%, 30%) scale(0.9)',
          },
          '75%': {
            transform: 'translate(10%, -20%) scale(1.05)',
          },
        },
        blob2: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '20%': {
            transform: 'translate(-50%, 20%) scale(1.2)',
          },
          '40%': {
            transform: 'translate(30%, -50%) scale(0.8)',
          },
          '60%': {
            transform: 'translate(-20%, 40%) scale(1.1)',
          },
          '80%': {
            transform: 'translate(40%, -30%) scale(0.9)',
          },
        },
        blob3: {
          '0%, 100%': {
            transform: 'translate(0, 0) scale(1)',
          },
          '25%': {
            transform: 'translate(40%, 40%) scale(1.5)',
          },
          '50%': {
            transform: 'translate(-40%, -40%) scale(0.9)',
          },
          '75%': {
            transform: 'translate(20%, -20%) scale(1.05)',
          },
        },
      },
      backgroundImage: {
        'angular-gradient': 'linear-gradient(135deg, #DD0031, #C3002F)',
        'react-gradient': 'linear-gradient(135deg, #61DAFB, #2188B6)',
        'tailwind-gradient': 'linear-gradient(135deg, #06B6D4, #0EA5E9)',
      },
    },
    container: {
      center: true,
      padding: '15px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    fontFamily: {
      primary: '"Raleway", sans-serif',
      secondary: '"Work Sans", sans-serif',
    },
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-dot-thick': (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
      );
    },
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme('colors'));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
