import logo from "./logo.svg";
import "./App.css";
import Board from "./Board";
import React, { useEffect, useState } from "react";
import calculateWinner from "./helper";

function App() {
  const [history, setHistory] = useState(new Array(9));
  const [content, setContent] = useState(Array(9).fill(0));
  const [setpNumber, setStepNumber] = useState(0);
  const [isX, setIsX] = useState(true);
  // const [msg, setMsg] = useState("");
  const[res,setRes]=useState(false);
  // let res = calculateWinner(content);
  const [currentPlayer, setCurrentPlayer] = useState("B");
  const [turns, setTurns] = useState(0);
  let msg =
    res === true ? `${currentPlayer} Won` : turns === 9 ? "Nobody won!!!!" : "";
  const onClick = (index) => {
    let newArr = content.map((item, id) => {
      if (id === index) {
        return isX ? "X" : "O";
      }
      return item;
    });
    setContent(newArr);
    setIsX(!isX);
    setTurns(turns + 1);
    setCurrentPlayer(currentPlayer === "A" ? "B" : "A");
  };

  useEffect(()=>{
   let response= calculateWinner(content);
   setRes(response);
  },[content])
  
  return (
    <div className="App">
      {msg}
      <div className="board">
        {[0, 3, 6].map((item) => {
          return (
            <Board
              squares={[item, item + 1, item + 2]}
              content={content}
              onClick={onClick}
              boardId={item}
            />
          );
        })}
      </div>
      <div className="start_button">
        <button onClick={()=>{
          setContent(Array(9).fill(0));
        }}>Start Again!</button>
      </div>
    </div>
  );
}

export default App;
