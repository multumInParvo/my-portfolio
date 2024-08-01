import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import './ThemeToggle.scss';

function ThemeToggle({ onClick }) {
  const { theme, toggleTheme } = useTheme();

  const handleToggle = () => {
    toggleTheme();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className="theme-toggle" onClick={handleToggle}>
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  );
}

export default ThemeToggle;