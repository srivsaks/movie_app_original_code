import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick ,content,boardId}) => {
  return (
    <div className={`board-${boardId}`}>
      {squares.map((square, id) => {
        return (
          <Square
            value={square}
            onClick={()=>{onClick(square)}}
            content={content}
            index={square}
          />
        );
      })}
    </div>
  );
};
export default Board;
