/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vinca-primary': '#4F46E5',
        'vinca-secondary': '#10B981',
        'vinca-accent': '#F59E0B',
        'vinca-dark': '#1F2937',
        'vinca-light': '#F3F4F6',
        'bronze': '#CD7F32',
        'silver': '#C0C0C0',
        'gold': '#FFD700',
      },
    },
  },
  plugins: [],
}
