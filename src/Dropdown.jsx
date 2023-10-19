import React, { useState } from 'react';
import './Dropdown.scss';

export const Dropdown = ({ modes, onModeChange }) => {
  const [isActive, setIsActive] = useState(false);
  const [selectedMode, setSelectedMode] = useState({ name: 'Pick mode' });

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleModeSelection = (mode) => {
    setSelectedMode(mode);
    onModeChange(mode.field);
    setIsActive(false);
  };

  return (
    <div className={`custom-select ${isActive ? 'active' : ''}`}>
      <span className="select-value" onClick={toggleDropdown}>
        {selectedMode.name}
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
