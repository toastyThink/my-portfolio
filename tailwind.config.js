/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    "@tailwindcss/aspect-ratio",
    '@tailwindcss/forms',
  ],
}

