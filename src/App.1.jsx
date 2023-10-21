import React, { useContext } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { AppContext } from './AppContext/AppContext';
import { Dropdown } from './Dropdown/Dropdown';
import { MoveList } from './MoveList/MoveList';
import { Board } from './Board/Board';
import { Loader } from './Loader/Loader';

export function App() {
  const {
    modes,
    currentMode,
    showBoard,
    moves,
    allFilled,
    handleStart,
    onClearBoard,
  } = useContext(AppContext);

  const { width, height } = useWindowSize();

  return (
    <div className="App">
      {modes.length === 0 && <Loader />}

      <div className="board">
        <div className="board-header">
          {modes.length > 0 && (
            <>
              <Dropdown />

              <button
                type="button"
                className={`board-start-button ${
                  currentMode.name === 'Pick mode' || moves.length > 0
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
          )}
        </div>

        {showBoard && <Board />}
      </div>

      {showBoard && <MoveList />}

      {allFilled && <Confetti width={width} height={height} />}
    </div>
  );
}
