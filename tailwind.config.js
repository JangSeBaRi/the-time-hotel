/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        '300px': "300px",
        '600px': "600px"
      }
    },
  },
  plugins: [],
}

