/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx,js,tsx,ts}"],
  theme: {
    extend: {},
    fontFamily: {
      'barlow': ['Barlow', 'serif'],
      'barlowCondensed' : ['Barlow Condensed', 'serif'],
      'bellefair' : ['Bellefair', 'serif']
    }
  },
  plugins: [],
}

