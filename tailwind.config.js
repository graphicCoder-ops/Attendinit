/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    styled: true,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
  theme: {
    extend: {
      backgroundImage:{
        "wall1":"url('https://www.designyourway.net/blog/wp-content/uploads/2009/11/vector-wallpaper-5.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}