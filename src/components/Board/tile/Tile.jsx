import "./Tile.css";

const Tile = ({ number }) => (
  <div className={`number ${number.value === 16 ? "disabled" : ""}`}>
    {number.value}
  </div>
);

export default Tile;
