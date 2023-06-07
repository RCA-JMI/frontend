/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-main-img': "url('/src/assets/home/main.webp')",
      }
    },
  },
  plugins: [],
}

