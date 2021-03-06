import React, { useState } from "react";
import Board from "./Board";
import GetPlayerNames from './GetPlayerNames'
const Game2 = () => {
  const [name, setName] = useState('X')
  const [name2, setName2] = useState('O')
  const init_board = Array(9).fill(null);
  const [board, setBoard] = useState(init_board);
  const [xIsNext, setXIsNext] = useState(true);
  const [gameStatus, setGameStatus] = useState(null);
  const [moveHistory, setMoveHistory] = useState([{ squares: board }]);
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
  const jumpTo = (step) => {
    setXIsNext(step % 2 === 0);
    setBoard(moveHistory[step].squares);
    setMoveHistory(moveHistory.slice(0, step + 1));
    if (gameStatus) {
      setGameStatus(null)
    }
  };
  const handleClick = (i) => {
    // TODO: make copy of the board
    const newBoard = [...board];
    // TODO: if index of the square clicked is filled do anything
    if (newBoard[i]) return;
    // TODO: add the new square value to the board copy
    newBoard[i] = xIsNext ? "X" : "O";
    // TODO: set the board equal to the copy
    setBoard(newBoard);
    // TODO: Check if there is a winner
    const winner = calculateWinner(newBoard);
    if (winner) {
      // TODO: declare the winner
      setGameStatus(winner);
      // TODO: reset the game board
      // setBoard(init_board);
      // TODO: reset the move history
      // setMoveHistory([{ squares: init_board }])
    }
    // TODO: set the move history state
    setMoveHistory(moveHistory.concat({ squares: newBoard }));
    // TODO: set the next players turn
    setXIsNext(!xIsNext);
  };
  const moves = moveHistory.map((step, move) => {
    return (
      <li className='history-list' key={move}>
        <button className='history-button'
          onClick={() => {
            jumpTo(move)
          }}
        >
          {move ? "Go to #" + move : (moveHistory.length > 1) ? "Restart" : "Start the Game"}
        </button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <GetPlayerNames
        name = {name} handleChange = {event => setName(event.target.value)}
        name2 = {name2} handleChange2 = {event => setName2(event.target.value)}
        />
        <Board onClick={(i) => handleClick(i)} squares={board} />
      </div>
      <div className="game-info">

        <div>{gameStatus
    ? "Winner is " + (gameStatus === "X" ? name : name2)
    : "Next Player is " + (xIsNext ? name : name2)}</div>
        <ul>{moves}</ul>
      </div>
    </div>
  );
};
export default Game2;