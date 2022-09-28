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
        "nama-fakultas": "url('/src/assets/images/katalog/namaFakultas.png')",
      },
      colors: {
        blue: "#48C0EE",
        yellow: "#FCE517",
        purple: "#5E4795",
        orange: "#E66D4B",
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
      spacing: {
        "1/5": "20%",
        "1/6": "16.666667%",
        "1/7": "14.285714%",
        "1/8": "12.5%",
        "1/9": "11.111111%",
        "1/10": "10%",
        "1/20": "5%",
      },
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
