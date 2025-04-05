module.exports = {
  theme: {
    extend: {
      colors: {
        crabtest: "#ff00ff",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "rotate(2deg)" },
          "50%": { transform: "rotate(-2deg)" },
        },
      },
      animation: {
        sway: "sway 3s ease-in-out infinite",
      },
    },
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // or whatever your file structure is
  ],
  plugins: [],
};
