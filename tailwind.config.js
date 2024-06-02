/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },
    extend: {
      backgroundColor: {
        beige: "#F2F0EA",
        beigeDarker: "#DED9C9",
        mainYellow: "#EDCF5D",
      },
    },
  },
  plugins: [],
};
