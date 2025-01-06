const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#fab10b', // Light gray background color
      },
    },
  },
  plugins: [
    require('daisyui'),
    flowbite.plugin(),
  ],
}
