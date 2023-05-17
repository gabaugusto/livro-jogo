// components/ColorModeToggle.js
import React from 'react';

const ColorModeToggle = ({ onToggle }) => {
  return (
    <span onClick={onToggle}>
      Alternar Modo de Cores
    </span>
  );
};

export default ColorModeToggle;
