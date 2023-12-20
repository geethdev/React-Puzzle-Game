import Overlay from "./overlay/Overlay";
import "./Board.css";
import { useState } from "react";
import Tile from "./tile/Tile";

const Board = () => {
  const shuffle = () =>
    new Array(16)
      .fill()
      .map((_, i) => i + 1)
      .sort(() => Math.random() - 0.5)
      .map((x, i) => ({ value: x, index: i }));

  const [numbers, setNumbers] = useState(shuffle());

  return (
    <div className="game">
      <div className="board">
        <Overlay />
        {numbers.map((x, i) => (
          <Tile key={i} number={x} />
        ))}
      </div>
    </div>
  );
};

export default Board;
