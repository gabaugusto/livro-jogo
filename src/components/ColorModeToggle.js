// components/ColorModeToggle.js
import React from 'react';
import { BsGrid3X3GapFill } from 'react-icons/bs';

const ColorModeToggle = ({ onToggle }) => {
  return (
    <span onClick={onToggle}>
      <BsGrid3X3GapFill /> Alternar Modo de Cores
    </span>
  );
};

export default ColorModeToggle;
