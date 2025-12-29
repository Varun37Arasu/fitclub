/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Background colors (changes with DARK_MODE in themes.config.js)
        bg: {
          primary: 'rgb(var(--bg-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary-rgb) / <alpha-value>)',
          tertiary: 'rgb(var(--bg-tertiary-rgb) / <alpha-value>)',
          accent: 'rgb(var(--bg-accent-rgb) / <alpha-value>)',
        },
        
        // Text colors (changes with DARK_MODE in themes.config.js)
        txt: {
          primary: 'rgb(var(--text-primary-rgb) / <alpha-value>)',
          secondary: 'rgb(var(--text-secondary-rgb) / <alpha-value>)',
          tertiary: 'rgb(var(--text-tertiary-rgb) / <alpha-value>)',
          muted: 'rgb(var(--text-muted-rgb) / <alpha-value>)',
        },
        
        // Legacy dark colors (deprecated - use bg-* instead)
        // Kept for backward compatibility
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
        success: 'rgb(var(--color-success-rgb) / <alpha-value>)',
        warning: 'rgb(var(--color-warning-rgb) / <alpha-value>)',
        danger: 'rgb(var(--color-danger-rgb) / <alpha-value>)',
        info: 'rgb(var(--color-info-rgb) / <alpha-value>)',
        
        // Advanced shade system (for themes with full shade ranges like Tropical Wellness)
        // Usage: bg-tropical-teal-500, text-cerulean-400, border-tea-green-600, etc.
        'tropical-teal': {
          50: 'rgb(var(--color-tropical-teal-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-tropical-teal-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-tropical-teal-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-tropical-teal-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-tropical-teal-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-tropical-teal-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-tropical-teal-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-tropical-teal-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-tropical-teal-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-tropical-teal-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-tropical-teal-950-rgb) / <alpha-value>)',
        },
        'muted-teal': {
          50: 'rgb(var(--color-muted-teal-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-muted-teal-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-muted-teal-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-muted-teal-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-muted-teal-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-muted-teal-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-muted-teal-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-muted-teal-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-muted-teal-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-muted-teal-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-muted-teal-950-rgb) / <alpha-value>)',
        },
        'tea-green': {
          50: 'rgb(var(--color-tea-green-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-tea-green-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-tea-green-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-tea-green-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-tea-green-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-tea-green-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-tea-green-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-tea-green-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-tea-green-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-tea-green-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-tea-green-950-rgb) / <alpha-value>)',
        },
        'cerulean': {
          50: 'rgb(var(--color-cerulean-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-cerulean-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-cerulean-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-cerulean-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-cerulean-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-cerulean-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-cerulean-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-cerulean-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-cerulean-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-cerulean-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-cerulean-950-rgb) / <alpha-value>)',
        },
        'jet-black': {
          50: 'rgb(var(--color-jet-black-50-rgb) / <alpha-value>)',
          100: 'rgb(var(--color-jet-black-100-rgb) / <alpha-value>)',
          200: 'rgb(var(--color-jet-black-200-rgb) / <alpha-value>)',
          300: 'rgb(var(--color-jet-black-300-rgb) / <alpha-value>)',
          400: 'rgb(var(--color-jet-black-400-rgb) / <alpha-value>)',
          500: 'rgb(var(--color-jet-black-500-rgb) / <alpha-value>)',
          600: 'rgb(var(--color-jet-black-600-rgb) / <alpha-value>)',
          700: 'rgb(var(--color-jet-black-700-rgb) / <alpha-value>)',
          800: 'rgb(var(--color-jet-black-800-rgb) / <alpha-value>)',
          900: 'rgb(var(--color-jet-black-900-rgb) / <alpha-value>)',
          950: 'rgb(var(--color-jet-black-950-rgb) / <alpha-value>)',
        },
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
