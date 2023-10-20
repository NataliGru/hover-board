import React, { useEffect, useState } from 'react';

import './App.scss';

import { getModes } from './api';
import { Dropdown } from './Dropdown';
import { MoveList } from './MoveList';
import { Board } from './Board';
import { Loader } from './Loader/Loader';

export function App() {
  const [modes, setModes] = useState([]);
  const [currentSize, setCurrentSize] = useState('');
  const [showBoard, setShowBoard] = useState(false);
  const [moves, setMoves] = useState([]);

  useEffect(() => {
    getModes()
      .then((data) => {
        setModes(data);
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  const handleModeChange = (newSize) => {
    setShowBoard(false);
    setCurrentSize(newSize);
    setMoves([]);
  };

  const handleHover = (newMove) => {
    if (moves.includes(newMove)) {
      setMoves((prevMoves) => prevMoves.filter((move) => move !== newMove));
    } else {
      setMoves((prevMoves) => [...prevMoves, newMove]);
    }
  };

  return (
    <div className="App">
      {modes.length === 0 && <Loader />}
      <div className="board">
        <div className="board-header">
          {modes.length > 0 && (
            <>
              <Dropdown modes={modes} onModeChange={handleModeChange} />
              <button
                type="button"
                className="board-start-button"
                onClick={() => setShowBoard(true)}
              >
                START
              </button>
            </>
          )}
        </div>

        {showBoard && (
          <>
            <Board
              size={+currentSize}
              onSquareHover={handleHover}
              currentMoves={moves}
            />
          </>
        )}
      </div>
      {showBoard && <MoveList moves={moves} />}
    </div>
  );
}
