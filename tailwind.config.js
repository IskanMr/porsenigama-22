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
        "28rem": "28rem",
      },
      backgroundImage: {
        "homepage-section-3":
          "url('/src/assets/images/homepage/bg-section-3.png')",
          "homepage-section-1":
          "url('/src/assets/images/homepage/rip-paper-section-1.png')",
        "pattern-cabang": "url('/src/assets/images/cabang/5328478.svg')",
        "pattern-cabangDetail":
          "url('/src/assets/images/cabang/cabangDetail/Mask group (3).png')",
        "nama-fakultas": "url('/src/assets/images/katalog/namaFakultas.png')",
        "galeri-mobile": "url('/src/assets/images/galeri/bg-isi-galeri-mobile.png')",
        "bg-pattern-klasemen": "url('/src/assets/images/klasemen/bg-isi-klasemen-merah.png')",
      },
      colors: {
        blue: "#48C0EE",
        yellow: "#FCE517",
        purple: "#5E4795",
        orange: "#E66D4B",
        red: "#804964",
        krem: "#FDE9B6",
        inporse: "#FAFBFC",
        bginporse: "#E85126",
        borderpeta: "#D9D9D9",
        textpeta: "#E41D21",
        hyperlink: "#3366CC",
      },
      fontFamily: {
        display: ["Universal Serif", "system-ui", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        universalserif: ["Universal Serif", "sans-serif"],
        montserrat: ["Montserrat"],
      },
      inset: {
        "32rem": "32rem",
        "31rem": "31rem",
      },
      fontSize: {},
      width: {},
      height: {
        "18rem": "18rem",
        "24rem": "24rem",
        "10rem": "10rem",
      },
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
        medium: "3rem",
        "3rem": "3rem",
      },
      lineHeight: {
        tes: "50vh",
      },
      scale: {
        200: "2",
        40:".3"
      },
      screens: {
        "450px": { min: "450px", max: "768px" },
        "405px": { min: "405px", max: "767px" },
        "1700px": "1700px",
        "425px": { min: "425px", max: "767px" },
      },
      borderWidth: {},
      margin: {
        "23rem": "23rem",
        "32rem": "32rem",
        "28rem": "28rem",
        "36rem": "36rem",
        "38rem": "38rem",
        "62rem": "62rem",
      },
      zIndex: {
        "-1": "-1",
        "-2": "-2",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
