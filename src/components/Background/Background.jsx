import React from 'react';
import './Background.scss';
import { useTheme } from '../../context/ThemeContext';

function Background() {
  useTheme();

  return (
    <div className="background">
      <div className="grid"></div>
    </div>
  );
};

export default Background;
