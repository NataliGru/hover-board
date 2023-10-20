import './Board.scss';

export const Board = ({ size, onSquareHover, currentMoves }) => {
  const handleSquareEnter = (row, col) => {
    const move = `row ${row} col ${col}`;
    onSquareHover(move);
  };

  return (
    <div className="square-grid" style={{ '--size': size }}>
      {Array.from({ length: size * size }).map((_, index) => {
        const row = Math.floor(index / size + 1);
        const col = (index % size) + 1;
        const move = `row ${row} col ${col}`;
        const isActive = currentMoves.includes(move);

        return (
          <div
            key={index}
            className={`small-square ${isActive ? 'active' : ''}`}
            onMouseEnter={() => handleSquareEnter(row, col)}
          ></div>
        );
      })}
    </div>
  );
};
