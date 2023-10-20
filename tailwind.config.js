module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: "#2F2F2F",
        teal: "#93C3BF",
        tealdark: "#008080",
      },
      maxWidth: {
        230: "230px",
        215: "215px",
      },
      fontFamily: {
        "open-sans": ["'Open Sans', sans-serif"],
        archivo: ["'Archivo', sans-serif"],
      },
      screens: {
        xs: "540px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
