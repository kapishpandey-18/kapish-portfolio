/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#3b82f6",    // Modern blue
          secondary: "#8b5cf6",  // Purple accent
          accent: "#06b6d4",     // Cyan highlight
          dark: "#0f172a",       // Deep dark blue
          light: "#1e293b"       // Lighter dark
        }
      }
    }
  },
  plugins: []
}
