// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		container: {
		  center: true,
		  padding: '1rem',
		  screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		  },
		},
		colors: {
		  // Custom colors for your portfolio
		  primary: {
			50: '#f0f9ff',
			100: '#e0f2fe',
			200: '#bae6fd',
			300: '#7dd3fc',
			400: '#38bdf8',
			500: '#0ea5e9',
			600: '#0284c7',
			700: '#0369a1',
			800: '#075985',
			900: '#0c4a6e',
		  },
		  // Dark mode specific colors
		  dark: {
			bg: '#0f172a',
			'bg-alt': '#1e293b',
			border: '#334155',
			text: '#e2e8f0',
			'text-alt': '#94a3b8',
		  },
		},
		typography: {
		  DEFAULT: {
			css: {
			  maxWidth: '65ch',
			  color: 'inherit',
			  a: {
				color: 'inherit',
				'&:hover': {
				  color: '#0ea5e9',
				},
			  },
			  // Dark mode typography adjustments
			  '--tw-prose-body': 'var(--tw-prose-invert-body)',
			  '--tw-prose-headings': 'var(--tw-prose-invert-headings)',
			  '--tw-prose-links': 'var(--tw-prose-invert-links)',
			  '--tw-prose-code': 'var(--tw-prose-invert-code)',
			  '--tw-prose-quotes': 'var(--tw-prose-invert-quotes)',
			},
		  },
		},
		animation: {
		  // Custom animations
		  'fade-in': 'fadeIn 0.5s ease-in-out',
		  'slide-up': 'slideUp 0.5s ease-out',
		  'slide-down': 'slideDown 0.5s ease-out',
		  'slide-left': 'slideLeft 0.5s ease-out',
		  'slide-right': 'slideRight 0.5s ease-out',
		},
		keyframes: {
		  fadeIn: {
			'0%': { opacity: '0' },
			'100%': { opacity: '1' },
		  },
		  slideUp: {
			'0%': { transform: 'translateY(20px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		  slideDown: {
			'0%': { transform: 'translateY(-20px)', opacity: '0' },
			'100%': { transform: 'translateY(0)', opacity: '1' },
		  },
		  slideLeft: {
			'0%': { transform: 'translateX(20px)', opacity: '0' },
			'100%': { transform: 'translateX(0)', opacity: '1' },
		  },
		  slideRight: {
			'0%': { transform: 'translateX(-20px)', opacity: '0' },
			'100%': { transform: 'translateX(0)', opacity: '1' },
		  },
		},
		fontFamily: {
		  sans: ['Inter var', 'sans-serif'],
		},
		spacing: {
		  // Custom spacing values
		  '18': '4.5rem',
		  '22': '5.5rem',
		  '72': '18rem',
		  '84': '21rem',
		  '96': '24rem',
		},
		borderRadius: {
		  // Custom border radius values
		  '4xl': '2rem',
		  '5xl': '3rem',
		},
	  },
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }