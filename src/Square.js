import React from "react";

const Square = ({ value, onClick,content,index }) => {
  const styles = value ? `squares-${value}` :(value===0? `squares-${value}`:"squares");
  return (
    <div onClick={onClick} className={styles}>
      {content[index]?content[index]:""}
    </div>
  );
};
export default Square;
