module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['"Proxima Nova"'],
        header: ['"LTC Bodoni 175 W01 Regular"'],
      },
      aspectRatio: {
        projectCard: "477 / 169",
      },
      colors: {
        link: "#278eff",
        linkHover: "#2769ff",
      },
    },
  },
  plugins: [],
};
