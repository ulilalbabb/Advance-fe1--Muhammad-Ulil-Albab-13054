/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'button' : '#3D4142',
        'homepage': '#161622',
        'form': '#181A1CD6',
        'navbar': '#181A1C',
        'start': '#0F1E93',
      },
      backgroundImage: {
        'login': "url('../assets/login-background.jpeg')",
        'register': "url('../assets/register-background.png')",
        'hero' : "url('../assets/hero.png')",
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
      },
      display: ['group-focus'],
    },
  },
  plugins: [],
}

