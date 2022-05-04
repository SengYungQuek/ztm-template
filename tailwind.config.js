module.exports = {
  content: [
  ],
  theme: {
    fontFamily: {
      'oswald': ['oswald', 'sans-serif'],
      'lilita': ['"Lilita One"', 'sans-serif'],
      'roboto': ['Roboto', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
}
