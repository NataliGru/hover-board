import React, { useContext } from 'react';

import './MoveList.scss';
import { AppContext } from '../AppContext/AppContext';

export const MoveList = () => {
  const {
    moves,
    onRemoveMove,
    allFilled,
    handleNextLevel,
  } = useContext(AppContext);
  
  return (
    <div className="move-list">
      {moves.length > 0 && !allFilled && (
        <>
          <h1 className="title">Hover Squares</h1>
          
          <ul className="list">
            {moves.map((move) => (
              <li key={move} className="list-item">
                <div className="item-title">{move}</div>
                <button
                  className="delete is-small"
                  onClick={() => onRemoveMove(move)}
                >
                  x
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {moves.length === 0 && (
        <h2 className="title-start">
          To begin, hover your cursor over any square
        </h2>
      )}

      {allFilled && (
        <>
          <h2 className="title-congrats">Welcome!</h2>
          <h2 className="title-next">
            All cells are filled. You can proceed to the next level.
          </h2>
          <button
            type="button"
            className="next-level-button"
            onClick={handleNextLevel}
          >
            Next
          </button>
        </>
      )}
    </div>
  );
};
