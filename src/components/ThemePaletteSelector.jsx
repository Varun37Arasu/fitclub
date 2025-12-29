import React, { useState, useEffect } from 'react';
import { FiChevronDown } from 'react-icons/fi';

// Theme definitions with display info
const themes = [
  { id: 'nutrition', name: 'Nutrition', color: '#22c55e', secondary: '#f97316' },
  { id: 'fitness', name: 'Fitness', color: '#ef4444', secondary: '#f97316' },
  { id: 'gym', name: 'Gym', color: '#f97316', secondary: '#eab308' },
  { id: 'sports', name: 'Sports', color: '#3b82f6', secondary: '#8b5cf6' },
  { id: 'wellness', name: 'Wellness', color: '#8b5cf6', secondary: '#ec4899' },
  { id: 'sage-sanctuary', name: 'Sage', color: '#84a98c', secondary: '#52796f' },
  { id: 'tropical-wellness', name: 'Tropical', color: '#609f97', secondary: '#79a857' },
  { id: 'forest-vitality', name: 'Forest', color: '#607744', secondary: '#34623f' },
];

const ThemePaletteSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(() => {
    const saved = localStorage.getItem('themeId');
    return saved || 'nutrition';
  });

  useEffect(() => {
    applyTheme(activeTheme);
    localStorage.setItem('themeId', activeTheme);
  }, [activeTheme]);

  const applyTheme = (themeId) => {
    const root = document.documentElement;
    
    // Theme color mappings (RGB values)
    const themeColors = {
      'nutrition': {
        primary: '34 197 94',      // green-500
        secondary: '249 115 22',   // orange-500
        accent: '234 179 8',       // yellow-500
      },
      'fitness': {
        primary: '239 68 68',      // red-500
        secondary: '249 115 22',   // orange-500
        accent: '234 179 8',       // yellow-500
      },
      'gym': {
        primary: '249 115 22',     // orange-500
        secondary: '234 179 8',    // yellow-500
        accent: '239 68 68',       // red-500
      },
      'sports': {
        primary: '59 130 246',     // blue-500
        secondary: '139 92 246',   // violet-500
        accent: '236 72 153',      // pink-500
      },
      'wellness': {
        primary: '139 92 246',     // violet-500
        secondary: '236 72 153',   // pink-500
        accent: '251 146 60',      // orange-400
      },
      'sage-sanctuary': {
        primary: '132 169 140',    // sage green
        secondary: '82 121 111',   // muted teal
        accent: '202 210 197',     // light sage
      },
      'tropical-wellness': {
        primary: '96 159 151',     // tropical teal
        secondary: '121 168 87',   // tea green
        accent: '80 121 140',      // cerulean
      },
      'forest-vitality': {
        primary: '96 119 68',      // forest green
        secondary: '52 98 63',     // deep green
        accent: '179 156 77',      // golden
      },
    };

    const colors = themeColors[themeId];
    if (colors) {
      root.style.setProperty('--color-primary-rgb', colors.primary);
      root.style.setProperty('--color-secondary-rgb', colors.secondary);
      root.style.setProperty('--color-accent-rgb', colors.accent);
    }
  };

  const currentTheme = themes.find(t => t.id === activeTheme) || themes[0];

  const handleThemeSelect = (themeId) => {
    setActiveTheme(themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg-secondary border-2 border-gray-200 hover:border-primary transition-all group"
        aria-label="Select color theme"
      >
        {/* Color Swatches */}
        <div className="flex gap-1">
          <div 
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: currentTheme.color }}
          ></div>
          <div 
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: currentTheme.secondary }}
          ></div>
        </div>
        
        {/* Label (hidden on mobile) */}
        <span className="hidden md:block text-xs font-bold text-txt-secondary uppercase tracking-wider">
          {currentTheme.name}
        </span>
        
        {/* Chevron */}
        <FiChevronDown 
          className={`w-4 h-4 text-txt-muted transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 w-64 bg-bg-secondary border-2 border-gray-300 shadow-2xl rounded-lg overflow-hidden z-50">
            <div className="p-3 bg-bg-tertiary border-b border-gray-300">
              <h3 className="text-sm font-bold text-txt-primary uppercase tracking-wider">
                Color Themes
              </h3>
              <p className="text-xs text-txt-muted mt-1">
                Choose your palette
              </p>
            </div>
            
            <div className="max-h-80 overflow-y-auto">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => handleThemeSelect(theme.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                    activeTheme === theme.id
                      ? 'bg-primary/10 border-l-4 border-primary'
                      : 'hover:bg-bg-tertiary border-l-4 border-transparent'
                  }`}
                >
                  {/* Color Preview */}
                  <div className="flex gap-1 flex-shrink-0">
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: theme.color }}
                    ></div>
                    <div 
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md"
                      style={{ backgroundColor: theme.secondary }}
                    ></div>
                  </div>
                  
                  {/* Theme Name */}
                  <div className="flex-1">
                    <div className="text-sm font-bold text-txt-primary">
                      {theme.name}
                    </div>
                    <div className="text-xs text-txt-muted">
                      {theme.id}
                    </div>
                  </div>
                  
                  {/* Active Indicator */}
                  {activeTheme === theme.id && (
                    <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></div>
                  )}
                </button>
              ))}
            </div>
            
            <div className="p-3 bg-bg-tertiary border-t border-gray-300 text-center">
              <p className="text-xs text-txt-muted">
                Changes apply instantly
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemePaletteSelector;

