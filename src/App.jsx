import React, { useEffect, useState } from 'react';

import './App.scss';

import { getModes } from './api';
import { Dropdown } from './Dropdown';
import { MoveList } from './MoveList';
import { Board } from './Board';

export function App() {
  const [modes, setModes] = useState([]);
  const [currentSize, setCurrentSize] = useState('');
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

  console.log(currentSize, 'currentSize');

  return (
    <div className="App">
      <div className="board-part">
        {modes.length > 0 && (
          <Dropdown modes={modes} onModeChange={setCurrentSize} />
        )}

          <button type='button' className='board-start-button'>
            START
          </button>
      </div>

      <Board size={+currentSize} onSquareHover={setMoves}/>

      {moves.length > 0 && <MoveList moves={moves} />}
    </div>
  );
}
