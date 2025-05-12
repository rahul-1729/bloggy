/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
    theme: {
    extend: {
      animation: {
        'move-left-to-right': 'moveLR 20s linear infinite',
      },
      keyframes: {
        moveLR: {
          '0%': { transform: 'translateX(-500%)' },
          '100%': { transform: 'translateX(500%)' },
        },
      },
    },
  },
  plugins: [],
}