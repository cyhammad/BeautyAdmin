/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      fontSize: {
        14: "14px",
      },
      backgroundColor: {
        secondary: "#ACACAC33",
        dark: "#151515",
        light: "#252424",
        primary: "#ECE986",
        "primary-dark": "#ACA057",
      },
      textColor: {
        dark: "#151515",
        light: "#252424",
        primary: "#ECE986",
        "primary-dark": "#ACA057",
      },
      boxShadowColor: {
        dark: "#151515",
        light: "#252424",
        primary: "#ECE986",
        "primary-dark": "#ACA057",
      },
      ringColor: {
        dark: "#151515",
        light: "#252424",
        primary: "#ECE986",
        "primary-dark": "#ACA057",
      },

      borderWidth: {
        1: "1px",
      },
      borderColor: {
        dark: "#151515",
        light: "#252424",
        primary: "#ECE986",
        "primary-dark": "#ACA057",
        color: "rgba(0, 0, 0, 0.1)",
      },
      placeholderColor: {
        dark: "#151515",
        light: "#252424",
        primary: "#ECE986",
        "primary-dark": "#ACA057",
      },
      width: {
        400: "400px",
        760: "760px",
        780: "780px",
        800: "800px",
        1000: "1000px",
        1200: "1200px",
        1400: "1400px",
      },
      height: {
        80: "80px",
      },
      minHeight: {
        590: "590px",
      },
      backgroundImage: {
        "hero-pattern":
          "url('https://demos.wrappixel.com/premium-admin-templates/react/flexy-react/main/static/media/welcome-bg-2x-svg.25338f53.svg')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("@tailwindcss/forms")],
  variants: {
    scrollbar: ["rounded"],
  },
};
