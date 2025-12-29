/**
 * CENTRALIZED THEME CONFIGURATION
 * 
 * To change the theme for your entire website:
 * 1. Change the ACTIVE_THEME constant below
 * 2. Rebuild your project
 * 
 * That's it! All colors will automatically update across the entire site.
 */

// ============================================================================
// CHOOSE YOUR ACTIVE THEME HERE - CHANGE THIS ONE LINE TO SWITCH THEMES
// ============================================================================

export const ACTIVE_THEME = 'fitness'; // Options: 'nutrition', 'fitness', 'gym', 'sports', 'wellness', 'sage-sanctuary', 'tropical-wellness', 'forest-vitality'

// ============================================================================
// DARK MODE TOGGLE - SWITCH BETWEEN DARK AND LIGHT BACKGROUNDS
// ============================================================================

export const DARK_MODE = false; // true = dark backgrounds (current), false = light backgrounds

// ============================================================================
// THEME DEFINITIONS
// ============================================================================

export const themes = {
  // NUTRITION THEME - Fresh, natural, health-focused (greens & oranges)
  nutrition: {
    name: 'Nutrition Diet Plan',
    colors: {
      primary: '#22c55e',        // Fresh green (emerald-500)
      primaryHover: '#16a34a',   // Darker green (emerald-600)
      primaryLight: '#86efac',   // Light green (emerald-300)
      
      secondary: '#f97316',      // Warm orange (orange-500)
      secondaryHover: '#ea580c', // Darker orange (orange-600)
      secondaryLight: '#fdba74', // Light orange (orange-300)
      
      accent: '#eab308',         // Golden yellow (yellow-500)
      accentHover: '#ca8a04',    // Darker yellow (yellow-600)
      
      success: '#10b981',        // Success green
      warning: '#f59e0b',        // Warning amber
      danger: '#ef4444',         // Danger red
      info: '#3b82f6',          // Info blue
    },
    identity: 'health, natural, fresh, balanced',
  },

  // FITNESS THEME - Energetic, bold, motivating (red & orange)
  fitness: {
    name: 'Fitness & Training',
    colors: {
      primary: '#ff4500',        // Bold red-orange
      primaryHover: '#e63e00',   // Darker red-orange
      primaryLight: '#ff6b33',   // Light red-orange
      
      secondary: '#ff8c00',      // Vibrant orange
      secondaryHover: '#e67e00', // Darker orange
      secondaryLight: '#ffa633', // Light orange
      
      accent: '#ffb700',         // Bright amber
      accentHover: '#e6a500',    // Darker amber
      
      success: '#10b981',        // Success green
      warning: '#f59e0b',        // Warning amber
      danger: '#dc2626',         // Danger red
      info: '#3b82f6',          // Info blue
    },
    identity: 'energy, intensity, power, motivation',
  },

  // GYM THEME - Strong, powerful, masculine (purple & blue)
  gym: {
    name: 'Gym & Bodybuilding',
    colors: {
      primary: '#8b5cf6',        // Bold purple (violet-500)
      primaryHover: '#7c3aed',   // Darker purple (violet-600)
      primaryLight: '#a78bfa',   // Light purple (violet-400)
      
      secondary: '#3b82f6',      // Electric blue (blue-500)
      secondaryHover: '#2563eb', // Darker blue (blue-600)
      secondaryLight: '#60a5fa', // Light blue (blue-400)
      
      accent: '#ec4899',         // Pink accent (pink-500)
      accentHover: '#db2777',    // Darker pink (pink-600)
      
      success: '#10b981',        // Success green
      warning: '#f59e0b',        // Warning amber
      danger: '#ef4444',         // Danger red
      info: '#06b6d4',          // Info cyan
    },
    identity: 'strength, muscle, power, bodybuilding',
  },

  // SPORTS THEME - Athletic, competitive, dynamic (blue & cyan)
  sports: {
    name: 'Sports & Athletics',
    colors: {
      primary: '#0ea5e9',        // Sky blue (sky-500)
      primaryHover: '#0284c7',   // Darker blue (sky-600)
      primaryLight: '#38bdf8',   // Light blue (sky-400)
      
      secondary: '#06b6d4',      // Cyan (cyan-500)
      secondaryHover: '#0891b2', // Darker cyan (cyan-600)
      secondaryLight: '#22d3ee', // Light cyan (cyan-400)
      
      accent: '#14b8a6',         // Teal accent (teal-500)
      accentHover: '#0d9488',    // Darker teal (teal-600)
      
      success: '#10b981',        // Success green
      warning: '#f59e0b',        // Warning amber
      danger: '#ef4444',         // Danger red
      info: '#3b82f6',          // Info blue
    },
    identity: 'athletic, competitive, dynamic, performance',
  },

  // WELLNESS THEME - Calm, peaceful, holistic (teal & sage)
  wellness: {
    name: 'Wellness & Mindfulness',
    colors: {
      primary: '#14b8a6',        // Calming teal (teal-500)
      primaryHover: '#0d9488',   // Darker teal (teal-600)
      primaryLight: '#5eead4',   // Light teal (teal-300)
      
      secondary: '#84cc16',      // Sage green (lime-500)
      secondaryHover: '#65a30d', // Darker sage (lime-600)
      secondaryLight: '#bef264', // Light sage (lime-300)
      
      accent: '#a78bfa',         // Soft lavender (violet-400)
      accentHover: '#8b5cf6',    // Darker lavender (violet-500)
      
      success: '#10b981',        // Success green
      warning: '#f59e0b',        // Warning amber
      danger: '#ef4444',         // Danger red
      info: '#06b6d4',          // Info cyan
    },
    identity: 'calm, balance, peace, holistic',
  },

  // SAGE SANCTUARY THEME - Gentle, calming, natural (sage & teal)
  // From Coolors: https://coolors.co/cad2c5-84a98c-52796f-354f52-2f3e46
  'sage-sanctuary': {
    name: 'Sage Sanctuary',
    colors: {
      primary: '#52796f',        // Deep teal - main CTAs
      primaryHover: '#354f52',   // Darker teal - hover states
      primaryLight: '#84a98c',   // Sage green - light accents
      
      secondary: '#84a98c',      // Sage green - secondary actions
      secondaryHover: '#52796f', // Darker sage - hover states
      secondaryLight: '#cad2c5', // Light sage - highlights
      
      accent: '#cad2c5',         // Light sage - special highlights
      accentHover: '#84a98c',    // Darker accent - hover states
      
      success: '#52796f',        // Success teal
      warning: '#84a98c',        // Warning sage
      danger: '#354f52',         // Danger dark teal
      info: '#52796f',          // Info teal
    },
    identity: 'gentle, calming, natural, sanctuary',
  },

  // TROPICAL WELLNESS THEME - Vibrant, tropical, refreshing (full shade system)
  // Advanced implementation with complete shade ranges (50-950)
  'tropical-wellness': {
    name: 'Tropical Wellness',
    colors: {
      // Primary: Tropical Teal
      primary: '#609f97',        // Base tropical teal (500)
      primaryHover: '#4d8079',   // Darker teal (600)
      primaryLight: '#80b3ac',   // Light teal (400)
      
      // Secondary: Cerulean Blue
      secondary: '#5097af',      // Base cerulean (500)
      secondaryHover: '#40798c', // Darker cerulean (600)
      secondaryLight: '#73acbf', // Light cerulean (400)
      
      // Accent: Tea Green
      accent: '#79a857',         // Base tea green (500)
      accentHover: '#618745',    // Darker tea green (600)
      
      // Semantic colors
      success: '#639c6c',        // Muted teal (500)
      warning: '#94ba78',        // Tea green light (400)
      danger: '#ef4444',         // Standard danger red
      info: '#5097af',          // Cerulean (500)
    },
    // Full shade system for advanced usage
    shades: {
      'tropical-teal': {
        50: '#eff5f5',
        100: '#dfecea',
        200: '#bfd9d5',
        300: '#9fc6c1',
        400: '#80b3ac',
        500: '#609f97',
        600: '#4d8079',
        700: '#39605b',
        800: '#26403c',
        900: '#13201e',
        950: '#0d1615',
      },
      'muted-teal': {
        50: '#eff5f0',
        100: '#e0ebe2',
        200: '#c1d7c4',
        300: '#a2c3a7',
        400: '#83af89',
        500: '#639c6c',
        600: '#507c56',
        700: '#3c5d41',
        800: '#283e2b',
        900: '#141f16',
        950: '#0e160f',
      },
      'tea-green': {
        50: '#f2f6ee',
        100: '#e4eedd',
        200: '#c9dcbc',
        300: '#aecb9a',
        400: '#94ba78',
        500: '#79a857',
        600: '#618745',
        700: '#486534',
        800: '#304323',
        900: '#182211',
        950: '#11180c',
      },
      'cerulean': {
        50: '#eef5f7',
        100: '#dceaef',
        200: '#b9d5df',
        300: '#96c1cf',
        400: '#73acbf',
        500: '#5097af',
        600: '#40798c',
        700: '#305b69',
        800: '#203c46',
        900: '#101e23',
        950: '#0b1518',
      },
      'jet-black': {
        50: '#eef4f6',
        100: '#ddeaee',
        200: '#bbd5dd',
        300: '#99c0cc',
        400: '#77abbb',
        500: '#5596aa',
        600: '#447888',
        700: '#335a66',
        800: '#223c44',
        900: '#111e22',
        950: '#0c1518',
      },
    },
    identity: 'vibrant, tropical, refreshing, wellness',
  },

  // FOREST VITALITY THEME - Earthy, grounded, natural (forest greens & golden)
  // From Coolors: https://coolors.co/b39c4d-768948-607744-34623f-1e2f23
  'forest-vitality': {
    name: 'Forest Vitality',
    colors: {
      primary: '#34623f',        // Forest green - strong, natural
      primaryHover: '#1e2f23',   // Dark forest - hover states
      primaryLight: '#607744',   // Darker olive - light accents
      
      secondary: '#b39c4d',      // Golden mustard - energy, warmth
      secondaryHover: '#968143', // Darker golden - hover states
      secondaryLight: '#c9b76d', // Light golden - highlights
      
      accent: '#768948',         // Olive green - balance
      accentHover: '#607744',    // Darker olive - hover states
      
      success: '#34623f',        // Success forest green
      warning: '#b39c4d',        // Warning golden
      danger: '#ef4444',         // Danger red
      info: '#607744',          // Info olive
    },
    identity: 'earthy, grounded, natural, vitality',
  },
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get the active theme configuration
 */
export const getActiveTheme = () => {
  return themes[ACTIVE_THEME];
};

/**
 * Get all available theme names
 */
export const getThemeNames = () => {
  return Object.keys(themes);
};

/**
 * Validate if a theme exists
 */
export const isValidTheme = (themeName) => {
  return themes.hasOwnProperty(themeName);
};

// ============================================================================
// EXPORT ACTIVE THEME FOR EASY ACCESS
// ============================================================================

export default getActiveTheme();

