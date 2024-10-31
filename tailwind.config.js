/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B80000",
        secondary: "#fff",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          DEFAULT: "100%",
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1480px",
        },
      },
    },
  },
  plugins: [],
};
