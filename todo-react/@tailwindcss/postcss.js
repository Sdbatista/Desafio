// tailwind.config.js

/** @type {import('tailwindcss').Config} */
export default {
  // CRUCIAL: Diz ao Tailwind onde procurar as classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}