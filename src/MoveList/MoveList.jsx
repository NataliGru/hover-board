import React from 'react';

import './MoveList.scss';

export const MoveList = ({ moves, onRemoveMove, allFilled, handleNextLevel }) => {
  return (
    <div className="move-list">
      <h1 className="title">Hover Squares</h1>

      {moves.length > 0 && !allFilled && (
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
      )}
      
      {moves.length === 0 && (
        <h2 className="title-start">
          To begin, hover your cursor over any square
        </h2>
      )}

      {allFilled && (
        <>
        <h2>Welcome!</h2>
        <h2 className="title-start">
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
