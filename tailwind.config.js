module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        'brs-dark': '#002854',
        'brs-light': '#2B4D73',
        'brs-orange': '#F4821E',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
