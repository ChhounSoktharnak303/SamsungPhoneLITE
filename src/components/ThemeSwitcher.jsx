// src/components/ThemeSwitcher.jsx
import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const ThemeSwitcher = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    // Toggle between 'light' and 'dark'
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Determine the Tailwind background and text color based on the current theme
  const buttonClasses = theme === 'dark' 
    ? "bg-gray-700 text-yellow-300 hover:bg-gray-600" 
    : "bg-gray-100 text-gray-800 hover:bg-gray-200";

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full shadow-lg transition-colors duration-300 ${buttonClasses}`}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {theme === 'light' ? (
        <FiMoon className="h-5 w-5" /> // Show Moon icon for light mode (to switch to dark)
      ) : (
        <FiSun className="h-5 w-5" /> // Show Sun icon for dark mode (to switch to light)
      )}
    </button>
  );
};

export default ThemeSwitcher;