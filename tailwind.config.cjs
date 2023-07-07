const daisyui = require('daisyui')
const typography = require('@tailwindcss/typography')
const tailwind_theme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...tailwind_theme.fontFamily.sans],
				serif: ['Manrope', ...tailwind_theme.fontFamily.serif],
				mono: ['Victor Mono', ...tailwind_theme.fontFamily.mono],
				// or name them
				// 'victor-mono': ['Victor Mono'],
				// poppins: ['Poppins'],
			},
		},
	},

	plugins: [typography, daisyui],
}

module.exports = config
