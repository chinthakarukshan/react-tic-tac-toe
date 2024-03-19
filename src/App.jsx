import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
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
  const [players, setPlayers] = useState(
    {
      X:'Player 1',
      O:'Player 2'
    }
  );
  const [gameTurns, setGameTurns] = useState([]);

  const updatedGameBoard = [...initialBoard.map(array => [...array])];

  let winner = null;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;

    updatedGameBoard[row][col] = player;
  }

  for (const combination of WINNING_COMBINATIONS) {

    const firstSquareSymbol = updatedGameBoard[combination[0].row][combination[0].col];
    const secondSquareSymbol = updatedGameBoard[combination[1].row][combination[1].col];
    const thirdSquareSymbol = updatedGameBoard[combination[2].row][combination[2].col];

    if (firstSquareSymbol && secondSquareSymbol && thirdSquareSymbol && firstSquareSymbol === secondSquareSymbol && secondSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }

  }

  let isDraw = gameTurns.length === 9 && !winner;

  const activePlayer = getActivePlayer(gameTurns);

  function handleMatchReset() {
    setGameTurns([]);
  }

  function handleActivePlayer(rowIndex, colIndex) {

    setGameTurns((prevTurns) => {

      const currentPlayer = getActivePlayer(prevTurns);

      const latestTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns];

      return latestTurns;

    });
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol="X" isActivePlayer={activePlayer === 'X'} handleNameChange={handlePlayerNameChange}/>
          <Player initialName='Player 2' symbol="O" isActivePlayer={activePlayer === 'O'} handleNameChange={handlePlayerNameChange}/>
        </ol>
        {(winner || isDraw) && <GameOver winner={winner} onMatchReset={handleMatchReset}/>}
        <GameBoard onSelectActivePlayer={handleActivePlayer} gameBoard={updatedGameBoard} />
      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App;
