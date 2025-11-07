/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: '#0f0f0f',
          secondary: '#1a1a1a',
          tertiary: '#141414',
          accent: '#242424',
        },
        primary: '#ff4500',
        secondary: '#ff8c00',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'hard': '8px 8px 0px 0px rgba(255, 59, 0, 1)',
        'hard-lg': '12px 12px 0px 0px rgba(255, 59, 0, 1)',
        'neon': '0 0 20px rgba(255, 59, 0, 0.5), 0 0 40px rgba(255, 59, 0, 0.3)',
        'glow': '0 0 60px rgba(255, 59, 0, 0.4)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
