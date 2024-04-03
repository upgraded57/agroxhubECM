/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      colors: {
        "light-grey-clr": "var(--light-grey-clr)",
        "light-green-clr": "var(--light-green-clr)",
        "dark-green-clr": "var(--dark-green-clr)",
        "dark-orange-clr": "var(--dark-orange-clr)",
        "orange-clr": "var(--orange-clr)",
        "black-clr": "var(--black-clr)",
        "red-clr": "var(--red-clr)",
        "grey-clr": "var(--grey-clr)",
        "dark-blue": "var(--dark-blue-clr)",
        "yellow-clr": "var(--yellow-clr)",
      },
    },
  },
  plugins: [require("daisyui")],
};
