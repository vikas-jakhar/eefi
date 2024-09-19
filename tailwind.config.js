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
        'stretch-layer': "url('./assets/images/webp/amplify-bg.webp')",
      },
      fontFamily: {
        'plus': "'Plus Jakarta Sans', sans-serif",
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
        'custom-lg': "28px",
        'custom-xl': "46px",
        'custom-2xl': "52px",
        'custom-3xl': "85px",
      },
      colors: {
        'light-blue': "#1643C3",
        'off-blue': "#1643C31A",
        'medium-blue': "#4273FF",
        'dark-blue': "#002F93",
      },
      boxShadow: {
        'custom-xl': "4.33px 4.33px 16.55px 0px #FFFFFF42"
      },
      lineHeight: {
        'custom-xl': "55px",
      },
      dropShadow: {
        "custom-xl": "1px 1px 0px black"
      }
    },
  },
  plugins: [],
}