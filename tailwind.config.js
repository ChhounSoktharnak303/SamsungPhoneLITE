// tailwind.config.js
import defaultTheme from 'tailwindcss/defaultTheme'; // Import the default theme utility

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // ADD THIS 'fontFamily' BLOCK
      fontFamily: {
        // 'sans' will now use Inter as the primary font,
        // falling back to system defaults if Inter isn't available.
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}