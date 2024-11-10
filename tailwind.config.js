/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', '*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'linear-gradient(172deg, rgba(146, 53, 99, 1) 0%, rgba(38, 39, 43, 1) 50%)',
      },
      fontFamily: {
        pop: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
