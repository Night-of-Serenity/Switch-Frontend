/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Quicksand"],
       },
       colors: {
        'primary': '#A872EE',
      }
    },
  },
  plugins: [require("daisyui")],
};
