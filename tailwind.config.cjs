const typography = require('@tailwindcss/typography')

const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        'victor-mono': ['Victor Mono'],
        poppins: ['Poppins'],
      },
    },
  },

  plugins: [typography],
}

module.exports = config
