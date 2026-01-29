/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0b1220",
        panel: "#0f172a",
        cyan: "#22d3ee",
        cyanSoft: "#67e8f9",
      },
    },
  },
  plugins: [],
};
