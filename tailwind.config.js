/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
        serif: ['"Cormorant Garamond"', 'serif'],
      },
      colors: {
        ink: '#050816',
        panel: '#0b1226',
        glow: '#7dd3fc',
      },
      boxShadow: {
        neon: '0 0 40px rgba(125, 211, 252, 0.25)',
      },
    },
  },
  plugins: [],
}
