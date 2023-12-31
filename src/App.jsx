import React, { useContext } from 'react';

import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';

import './App.scss';

import { AppContext } from './AppContext/AppContext';

import { Dropdown } from './Dropdown/Dropdown';
import { MoveList } from './MoveList/MoveList';
import { Board } from './Board/Board';
import { Loader } from './Loader/Loader';
import { HeaderButtons } from './HeaderButtons/HeaderButtons';

export function App() {
  const {
    modes,
    showBoard,
    allFilled,
  } = useContext(AppContext);

  const { width, height } = useWindowSize();

  return (
    <div className="App">
      {modes.length === 0 && <Loader />}

      <div className="board">
        <div className="board-header">
          {modes.length > 0 && (
            <>
              <Dropdown
              />

              <HeaderButtons />
            </>
          )}
        </div>

        {showBoard && (
          <Board />
        )}
      </div>
      
      {showBoard && (
        <MoveList />
      )}

      {allFilled && <Confetti width={width} height={height} />}
    </div>
  );
}
