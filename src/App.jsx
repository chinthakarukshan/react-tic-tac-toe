import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function getActivePlayer(turns) {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {

  const [gameTurns, setGameTurns] = useState([]);

  const updatedGameBoard = initialBoard;

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        updatedGameBoard[row][col] = player;
    }

  const activePlayer = getActivePlayer(gameTurns);

  function handleActivePlayer(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {

      const currentPlayer = getActivePlayer(prevTurns);

      const latestTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return latestTurns;

    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol="X" isActivePlayer={activePlayer === 'X'} />
          <Player initialName='Player 2' symbol="O" isActivePlayer={activePlayer === 'O'} />
        </ol>
        <GameBoard onSelectActivePlayer={handleActivePlayer} gameBoard={updatedGameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
