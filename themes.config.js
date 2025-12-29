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

export const ACTIVE_THEME = 'sports'; // Options: 'nutrition', 'fitness', 'gym', 'sports', 'wellness'

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

