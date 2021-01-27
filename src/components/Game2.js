import React, { useState } from "react";
import Board from "./Board";
const Game2 = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [moveHistory, setMoveHistory] = useState([
    { squares: Array(9).fill(null) },
  ]);
  const [current, setCurrent] = useState(moveHistory[moveHistory.length - 1]);
  
  const jumpTo = (step) => {
    setXIsNext(step % 2 === 0);
    setStepNumber(step);
    setMoveHistory(moveHistory.slice(0, step + 1));
  };
  const handleClick = (i) => {
    const game_history = moveHistory.slice(0, stepNumber + 1);
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setMoveHistory(game_history.concat({ squares: squares }));
    setXIsNext(!xIsNext);
    setStepNumber(moveHistory.length);
    setCurrent(moveHistory[moveHistory.length - 1]);
  };
  const winner = calculateWinner(current.squares);
  const moves = moveHistory.map((step, move) => {
    const desc = move ? "Go to #" + move.squares : "Start the Game";
    return (
      <li className='history-list' key={move}>
        <button className='history-button' 
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });
  let status = winner
    ? "Winner is " + winner
    : "Next Player is " + (xIsNext ? "X" : "O");
  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={(i) => handleClick(i)} squares={current.squares} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};

const calculateWinner = (squares) => {
    const winnerLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLines.length; i++) {
      const [a, b, c] = winnerLines[i];
      if (squares[a] === squares[b] && squares[b] === squares[c])
        return squares[a];
    }
    return null;
  };
export default Game2;