/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class'],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
        'principal-50': '#FFF8ED',
        'principal-100': '#FFEFD5',
        'principal-200': '#FEDAAA',
        'principal-300': '#FEBF73',
        'principal-400': '#FC9A3B',
        'principal-500': '#FA7C15',
        'principal-600': '#E75F0B',
        'principal-700': '#C3480B',
        'principal-800': '#9B3911',
        'principal-900': '#7C3112',
        'principal-950': '#431607',
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

