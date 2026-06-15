/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        gold: '#b08d57',
        'gold-dark': '#8d6e3e',
        cream: '#f3ede6',
        warm: '#fafaf9',
      },
    },
  },
  plugins: [],
};
