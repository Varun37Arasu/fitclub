/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark background colors (theme-independent)
        dark: {
          primary: '#0f0f0f',
          secondary: '#1a1a1a',
          tertiary: '#141414',
          accent: '#242424',
        },
        
        // Theme colors using CSS variables (changes based on active theme)
        // Using rgb() format to support Tailwind opacity modifiers
        primary: {
          DEFAULT: 'rgb(var(--color-primary-rgb) / <alpha-value>)',
          hover: 'rgb(var(--color-primary-hover-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-primary-light-rgb) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary-rgb) / <alpha-value>)',
          hover: 'rgb(var(--color-secondary-hover-rgb) / <alpha-value>)',
          light: 'rgb(var(--color-secondary-light-rgb) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent-rgb) / <alpha-value>)',
          hover: 'rgb(var(--color-accent-hover-rgb) / <alpha-value>)',
        },
        
        // Semantic colors using CSS variables
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        danger: 'var(--color-danger)',
        info: 'var(--color-info)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
      boxShadow: {
        'hard': '8px 8px 0px 0px var(--shadow-primary)',
        'hard-lg': '12px 12px 0px 0px var(--shadow-primary)',
        'neon': '0 0 20px var(--glow-primary-md), 0 0 40px var(--glow-primary-sm)',
        'glow': '0 0 60px var(--glow-primary-lg)',
        'secondary-glow': '0 0 40px var(--glow-secondary-lg)',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
