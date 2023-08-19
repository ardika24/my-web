import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

interface DarkModeToggleProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  darkMode,
  toggleDarkMode,
}) => {
  return (
    <button
      className={`w-8 h-8 rounded-full ${
        darkMode ? 'bg-gray-800' : 'bg-gray-200'
      } flex items-center justify-center`}
      onClick={toggleDarkMode}
    >
      {darkMode ? (
        <FiSun size={16} color={darkMode ? 'white' : 'black'} />
      ) : (
        <FiMoon size={16} color={darkMode ? 'white' : 'black'} />
      )}
    </button>
  );
};

export default DarkModeToggle;
