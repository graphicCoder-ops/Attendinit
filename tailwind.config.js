/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "wall1":"url('https://www.designyourway.net/blog/wp-content/uploads/2009/11/vector-wallpaper-5.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}