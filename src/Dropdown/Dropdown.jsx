import React, { useContext } from 'react';
import './Dropdown.scss';
import { AppContext } from '../AppContext/AppContext';

export const Dropdown = () => {
  const {
    isActiveDropdown,
    setIsActiveDropdown,
    modes,
    handleModeChange,
    currentMode,
  } = useContext(AppContext);

  const handleModeSelection = (mode) => {
    handleModeChange(mode);
    setIsActiveDropdown(false);
  };

  const handleMouseEnter = () => {
    setIsActiveDropdown(true);
  };

  const handleMouseLeave = () => {
    setIsActiveDropdown(false);
  };

  return (
    <div
      className={`custom-select ${isActiveDropdown ? 'active' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span className="select-value">{currentMode.name}</span>
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
