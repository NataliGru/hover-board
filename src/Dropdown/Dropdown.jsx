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


  const handleDropdownClick = () => {
    setIsActiveDropdown(!isActiveDropdown);
  };

  const handleMouseLeave = () => {
    setIsActiveDropdown(false);
  };

  return (
    <div
      className={`custom-select ${isActiveDropdown ? 'active' : ''}`}
      onClick={handleDropdownClick}
      onMouseLeave={handleMouseLeave}
    >
      <span className="select-value">{currentMode.name}
        <i class="fas fa-angle-down" aria-hidden="true"></i>
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
