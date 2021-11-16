module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#fa8816',
      'secondary': '#111827',
      'danger': '#ef4444',
    })
  },
  variants: {
    extend: {
      backgroundColor: ['active']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
