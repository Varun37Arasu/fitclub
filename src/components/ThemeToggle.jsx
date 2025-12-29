import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, default to false (light mode)
    const saved = localStorage.getItem('darkMode');
    return saved !== null ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Apply theme on mount and when changed
    applyTheme(isDark);
    // Save to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDark));
  }, [isDark]);

  const applyTheme = (dark) => {
    const root = document.documentElement;
    
    if (dark) {
      // Dark mode colors
      root.style.setProperty('--bg-primary-rgb', '15 15 15');
      root.style.setProperty('--bg-secondary-rgb', '26 26 26');
      root.style.setProperty('--bg-tertiary-rgb', '36 36 36');
      root.style.setProperty('--bg-accent-rgb', '20 20 20');
      root.style.setProperty('--text-primary-rgb', '255 255 255');
      root.style.setProperty('--text-secondary-rgb', '229 229 229');
      root.style.setProperty('--text-tertiary-rgb', '212 212 212');
      root.style.setProperty('--text-muted-rgb', '163 163 163');
    } else {
      // Light mode colors
      root.style.setProperty('--bg-primary-rgb', '249 250 251');
      root.style.setProperty('--bg-secondary-rgb', '255 255 255');
      root.style.setProperty('--bg-tertiary-rgb', '243 244 246');
      root.style.setProperty('--bg-accent-rgb', '255 255 255');
      root.style.setProperty('--text-primary-rgb', '17 24 39');
      root.style.setProperty('--text-secondary-rgb', '75 85 99');
      root.style.setProperty('--text-tertiary-rgb', '107 114 128');
      root.style.setProperty('--text-muted-rgb', '156 163 175');
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-bg-secondary border-2 border-gray-200 hover:border-primary transition-all group overflow-hidden"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {/* Background transition effect */}
      <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-10 transition-opacity"></div>
      
      {/* Icons */}
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <FiSun className="text-primary animate-spin-slow" style={{ animationDuration: '20s' }} />
        ) : (
          <FiMoon className="text-primary" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;

