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
  			'secundario-100': '#E3EDFB',
  			'secundario-200': '#C1DCF6',
  			'secundario-300': '#BABFEF',
  			'secundario-400': '#4B9EE5',
  			'secundario-500': '#2482D3',
  			'secundario-600': '#1562AD',
  			'secundario-700': '#135191',
  			'secundario-800': '#144678',
  			'secundario-900': '#163B64',
  			'secundario-950': '#0F2642'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

