/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./assest/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libertinus: ["Libertinus Serif", "serif"],
        poppins: ["Poppins", "sans-serif"],
        satoshi: ['Satoshi', 'sans-serif'],
        clash: ['Clash Display', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        lobster: ['Lobster Two', 'cursive'],
        fjalla: ['Fjalla One', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
        asap: ['Asap', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

