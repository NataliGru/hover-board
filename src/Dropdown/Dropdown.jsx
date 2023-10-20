import React, { useState } from 'react';
import './Dropdown.scss';

export const Dropdown = ({ modes, onModeChange, currentMode }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleModeSelection = (mode) => {
    onModeChange(mode);
    setIsActive(false);
  };

  return (
    <div className={`custom-select ${isActive ? 'active' : ''}`}>
      <span className="select-value" onClick={toggleDropdown}>
        {currentMode.name}
      </span>
      <ul className="options">
        {modes.map((mode) => (
          <li key={mode.id} onClick={() => handleModeSelection(mode)}>
            {mode.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
