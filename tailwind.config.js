
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'navy-darker': '#0E1F33',
        'navy-dark': '#152943',
        'navy-light': '#1D4ED8',
        'email-border': '#D1D5DB',
        'email-bg': '#E5E7EB',
        'logout-red': '#EF4444'
      }
    }
  },
  plugins: [
    // ...
    // require('@tailwindcss/line-clamp'),
  ],
}
