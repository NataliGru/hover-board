import React from 'react';

import './MoveList.scss';

export const MoveList = ({ moves }) => {
  return (
    <div className='move-list'>
      <h1 className='title'> 
        Hover Squares
      </h1>

      <ul className="list">
        {moves.map((move) => (
          <li key={move}>
            {move}
          </li>
        ))}
      </ul>
    </div>
  );
};
