/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ['Righteous',],
			'heading': ['"Bevan"',],
			'body': ['"Share Tech Mono"',],
		},
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '8rem',
				xl: '10rem',
			},
		},
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: '#fff',
						a: {
							color: '#fff',
							'&:hover': {
								color: '#fff',
							},
						},
						h1: {
							color: '#fff',
						},
						h2: {
							color: '#fff',
						},
						h3: {
							color: '#fff',
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
