/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'roadmap-layer': "url('./assets/images/webp/roadmap-layer.png')",
        'game-layer': "url('./assets/images/webp/game-layer.png')",
      },
      fontFamily: {
        'neue': "Neue Machina",
        'plus': "'Plus Jakarta Sans', sans-serif",
        'raleway': "'Raleway', sans-serif",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          'sm': "640px",
          'md': "768px",
          'lg': "1024px",
          'xl': "1180px",
        }
      },
      fontSize: {
        'custom-xl': "46px",
      },
      colors: {
        'light-blue': "#1643C3",
        'off-blue': "#1643C31A",
        'medium-blue': "#4273FF",
      }
    },
  },
  plugins: [],
}