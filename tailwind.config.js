/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // अगर src folder में है files
  ],
  theme: {
    extend: {},
  },
  plugins: [require("tailwindcss-animate")], // अगर animate यूज़ कर रहे हो
}
