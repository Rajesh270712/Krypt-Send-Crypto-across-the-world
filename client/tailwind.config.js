module.exports = {
content: [
    './src/app/**/*.{html,js,jsx,ts,tsx}', // Include all JavaScript/TypeScript files in the pages directory
    './src/components/**/*.{html,js,jsx,ts,tsx}', // Include all JavaScript/TypeScript files in the components directory
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./src/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      display: ["Open Sans", "sans-serif"],
      body: ["Open Sans", "sans-serif"],
    },
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};