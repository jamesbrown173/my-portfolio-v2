/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      mono: ["DM Mono", "monospace"],
    },
    extend: {
      boxShadow: {
        customButton: "0px -6px 3px -2px #989898 inset",
      },
    },
  },
  plugins: [],
};
