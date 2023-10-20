import React, { useEffect, useState } from 'react';

import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import './App.scss';

import { getModes } from './api/api';
import { Dropdown } from './Dropdown/Dropdown';
import { MoveList } from './MoveList/MoveList';
import { Board } from './Board/Board';
import { Loader } from './Loader/Loader';

export function App() {
  const [modes, setModes] = useState([]);
  const [currentMode, setCurrentMode] = useState({ name: 'Pick mode' });
  const [showBoard, setShowBoard] = useState(false);
  const [moves, setMoves] = useState([]);

  const { width, height } = useWindowSize();

  console.log(currentMode)

  useEffect(() => {
    getModes()
      .then((data) => {
        setModes(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleModeChange = (newMode) => {
    setShowBoard(false);
    setCurrentMode(newMode);
    setMoves([]);
  };

  const handleStart = () => {
    if (currentMode.name !== 'Pick mode') {
      setShowBoard(true);
    }
  };

  const handleHover = (newMove) => {
    if (moves.includes(newMove)) {
      setMoves((prevMoves) => prevMoves.filter((move) => move !== newMove));
    } else {
      setMoves((prevMoves) => [...prevMoves, newMove]);
    }
  };

  const handleNextLevel = () => {
    if (currentMode.name !== 'Pick mode' && modes.length > 0) {
      if (currentMode.id < modes.length - 1) {
        const nextMode = modes[currentMode.id];
        setCurrentMode(nextMode);
        setMoves([]);
        setShowBoard(true);
      }
    }
  };

  const onRemoveMove = (moveToRemove) => {
    setMoves((prevMoves) => prevMoves.filter((move) => move !== moveToRemove));
  };

  const allFilled = moves.length === currentMode.field ** 2;

  return (
    <div className="App">
      {modes.length === 0 && <Loader />}
      <div className="board">
        <div className="board-header">
          {modes.length > 0 && (
            <>
              <Dropdown modes={modes} onModeChange={handleModeChange} currentMode={currentMode} />

              <button
                type="button"
                className={`board-start-button ${
                  currentMode.name === 'Pick mode' ? 'disabled' : ''
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
                onClick={() => setMoves([])}
              >
                Clear board
              </button>
            </>
          )}
        </div>

        {showBoard && (
          <>
            <Board
              size={+currentMode.field}
              onSquareHover={handleHover}
              currentMoves={moves}
            />
          </>
        )}
      </div>
      {showBoard && <MoveList moves={moves} onRemoveMove={onRemoveMove} allFilled={allFilled} handleNextLevel={handleNextLevel} />}

      {allFilled && currentMode !== '' && (
        <Confetti width={width} height={height} />
      )}
    </div>
  );
}
