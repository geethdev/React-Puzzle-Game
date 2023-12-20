import Overlay from "./overlay/Overlay";
import "./Board.css";

const Board = () => {
  return (
    <div className="game">
      <div className="board">
        <Overlay />
      </div>
    </div>
  );
};

export default Board;
