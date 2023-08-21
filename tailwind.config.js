/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        128: "30rem",
      },

      height: {
        custom_height: "calc(100vh - 15%)",
      },
    },
  },
  plugins: [],
};
