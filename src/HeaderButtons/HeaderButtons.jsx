import { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';

import './HeaderButtons.scss';

export const HeaderButtons = () => {
  const {
    currentMode,
    showBoard,
    moves,
    handleStart,
    onClearBoard,
  } = useContext(AppContext);
  return (
  <>
        <button
          type="button"
          className={`board-start-button ${
            currentMode.name === 'Pick mode' || moves.length > 0 || showBoard
              ? 'disabled'
              : ''
          }`}
          onClick={handleStart}
        >
          Start
        </button>

        <button
          type="button"
          className={`board-clear-button ${
            !showBoard || moves.length === 0 ? 'disabled' : ''
          }`}
          onClick={onClearBoard}
        >
          Clear board
        </button>
      </>
  )
} 