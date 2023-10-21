import './Board.scss';
import React, { useContext } from 'react';
import { AppContext } from '../AppContext/AppContext';

export const Board = () => {
  const { size, moves, handleHover } = useContext(AppContext);

  const handleCellHover = (row, col) => {
    if (!moves) {
      return;
    }

    const move = `row ${row} col ${col}`;
    handleHover(move);
  };

  return (
    <div className="square-grid" style={{ '--size': size }}>
      {Array.from({ length: size * size }).map((_, index) => {
        const row = Math.floor(index / size + 1);
        const col = (index % size) + 1;
        const move = `row ${row} col ${col}`;
        const isActive = moves.includes(move);

        return (
          <div
            key={index}
            className={`small-square ${isActive ? 'active' : ''}`}
            onMouseEnter={() => handleCellHover(row, col)}
          ></div>
        );
      })}
    </div>
  );
};
