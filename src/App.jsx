import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);

  function handleActivePlayer(rowIndex, colIndex) {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');

    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const latestTurns = [{square: {row: rowIndex, col: colIndex}, player:currentPlayer}, ...prevTurns];

      return latestTurns;

    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol="X" isActivePlayer={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol="O" isActivePlayer={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectActivePlayer={handleActivePlayer} turns={gameTurns}/>
      </div>
    </main>
  );
}

export default App;
