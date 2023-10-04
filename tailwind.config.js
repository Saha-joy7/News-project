/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif"
      },
      backgroundColor: {
        custom: "rgba(5, 0, 29, 0.80)'",
      },
    },
  },
  plugins: [require("daisyui")],
}

