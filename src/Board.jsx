import './Board.scss';

export const Board = ({ size, onSquareHover }) => {

  const handleSquareEnter = (row, col) => {
    onSquareHover({ row, col });
  };

  return (
    <div className="square-grid" style={{ '--size': size }}>
      {Array.from({ length: size * size }).map((_, index) => (
        <div
          key={index}
          className="small-square"
          onMouseEnter={() => handleSquareEnter(Math.floor(index / size), index % size)}
        ></div>
      ))}
    </div>
  );
};
