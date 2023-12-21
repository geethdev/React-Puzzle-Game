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

  const moveTile = (tile) => {
    const i16 = numbers.find((n) => n.value === 16).index;
    if (![i16 - 1, i16 + 1, i16 - 4, i16 + 4].includes(tile.index)) return;

    const newNumbers = [...numbers].map((number) => {
      if (number.index !== i16 && number.index !== tile.index) return number;
      else if (number.value === 16) return { value: 16, index: tile.index };

      return { value: tile.value, index: i16 };
    });
    // setAnimating(true)
    setNumbers(newNumbers);
    // setTimeout(() => setAnimating(false), 200)
  };

  return (
    <div className="game">
      <div className="board">
        <Overlay />
        {numbers.map((x, i) => (
          <Tile key={i} number={x} moveTile={moveTile} />
        ))}
      </div>
    </div>
  );
};

export default Board;
