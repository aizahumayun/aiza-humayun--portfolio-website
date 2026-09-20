import React from 'react';
import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={`relative p-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF8500] focus:ring-offset-2 ${
        isDark
          ? 'bg-[#16233A] text-amber-400 hover:bg-[#1C2C48] focus:ring-offset-[#0B162B]'
          : 'bg-gray-100 text-amber-500 hover:bg-gray-200 focus:ring-offset-white'
      } ${className}`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.7 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.25, ease: 'easeInOut' }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
        ) : (
          <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
        )}
      </motion.div>
    </button>
  );
};
