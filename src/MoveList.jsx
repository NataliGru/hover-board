import React from 'react';

export const MoveList = ({ moves }) => {
  return (
    <>
      <h1 className='title'> 
        Hover Squares
      </h1>

      <ul className="list">
        {moves.map((move) => (
          <li>
            {move}
          </li>
        ))}
      </ul>
    </>
  );
};
