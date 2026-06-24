/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../index.html",
    "../src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#abb2bf",      // Default text color (gray)
        secondary: "#282c33",    // BG body secondary
        background: "#282c33",   // Default background (One Dark slate)
        surface: "#21252b",      // Darker background block
        card: "#21252b",         // Darker card background
        textPrimary: "#abb2bf",  // Base gray text
        textSecondary: "#abb2bf", // Sub-text
        accent: "#c778dd",       // Purple highlight
        purple: "#c778dd",       // Explicit purple
        tertiary: "#ffffff",     // White text highlights
        borderDefault: "#abb2bf" // Standard gray border
      },
      fontFamily: {
        sans: ["Fira Code", "Courier New", "monospace"],
        mono: ["Fira Code", "Courier New", "monospace"],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
