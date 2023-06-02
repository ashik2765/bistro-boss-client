/** @type {import('tailwindcss').Config} */
export default {
  //replace the default content section with tailwind provided content.
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")], //replace the default plugins with daisyui provided plugins.
}

