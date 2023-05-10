/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        "modalFadeIn" : "modalFadeIn 1s forwards"
      },
      keyframes: {
        "modalFadeIn" : {
          "0%" : { transform: "translateY(30px)", opacity: 0},
          "100%" : { transform: "translateY(0px)", opacity: 1},
        }
      },
      screens: {
        '300px': "300px",
        '600px': "600px"
      }
    },
  },
  plugins: [],
}

