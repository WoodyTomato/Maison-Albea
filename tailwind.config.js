export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        alabaster: "#F7F4EE",
        cream: "#F1ECE2",
        sand: "#DDD2C2",
        sage: "#DCE5DD",
        sageDeep: "#8F9D91",
        warmGray: "#6D665E",
        ink: "#1E1A16",
        bronze: "#9D7A54",
      },
      fontFamily: {
        serif: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 35px rgba(30, 26, 22, 0.08)",
      },
      backgroundImage: {
        grain:
          "radial-gradient(circle at 20% 15%, rgba(221,210,194,0.35), transparent 35%), radial-gradient(circle at 85% 5%, rgba(220,229,221,0.45), transparent 32%), linear-gradient(180deg, #f8f6f1 0%, #f4efe7 100%)",
      },
    },
  },
  plugins: [],
};

