module.exports = {
  purge: [
    "./src/**/*.js"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "brand-pink": "#F1968F",
        "brand-gray": "#eae6e4",
        "brand-gray-light": "#F8F8F8",
        "brand-dark-brown": "#201610",
      },
      minHeight: {
        '0': '0',
        '64': '16rem',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
