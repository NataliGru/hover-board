import React, { useContext, useState } from 'react';
import './Dropdown.scss';
import { AppContext } from '../AppContext/AppContext';

export const Dropdown = () => {
  const [isActive, setIsActive] = useState(false);

  const { 
    modes, 
    handleModeChange, 
    currentMode 
  } = useContext(AppContext);

  const toggleDropdown = () => {
    setIsActive(!isActive);
  };

  const handleModeSelection = (mode) => {
    handleModeChange(mode);
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
