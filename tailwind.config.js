module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        "32rem": "32rem",
        "21rem": "21rem",
        "25rem": "25rem",
      },
      backgroundImage: {
        "homepage-section-3":
          "url('/src/assets/images/homepage/bg-section-3.png')",
        "pattern-cabang": "url('/src/assets/images/cabang/5328478.svg')",
      },
      colors: {
        blue: "#48C0EE",
        yellow: "#FCE517",
        purple: "#5E4795",
      },
      fontFamily: {
        display: ["Universal Serif", "system-ui", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        universalserif: ["Universal Serif", "sans-serif"],
        montserrat: ["Montserrat"],
      },
      inset: {
        "32rem": "32rem",
      },
      fontSize: {},
      width: {},
      height: {},
      spacing: {},
      boxShadow: {},
      borderRadius: {
        large: "5rem",
      },
      lineHeight: {
        tes: "50vh",
      },
      scale: {},
      borderWidth: {},
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
