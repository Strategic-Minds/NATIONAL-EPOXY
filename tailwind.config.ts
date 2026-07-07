import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        epoxy: {
          50: "#f8f5ef",
          200: "#d7c7ac",
          600: "#7c5b22",
          900: "#1f150a"
        }
      }
    }
  },
  plugins: []
} satisfies Config;
