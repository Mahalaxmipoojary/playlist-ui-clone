/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        spotifyBg: "#121212",
        spotifyHeader: "#181818",
        spotifyRow: "#2a2a2a",
        spotifyMuted: "#b3b3b3",
        spotifyGreen: "#1DB954",
      },
      fontSize: {
        hero: "clamp(2.2rem, 6vw, 5rem)",
      },
    },
  },
  plugins: [],
};
