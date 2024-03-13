import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

function App() {

  const [activePlayer, setActivePlayer] = useState('X');

  function handleActivePlayer() {
    setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? 'O' : 'X');
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol="X" isActivePlayer={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol="O" isActivePlayer={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectActivePlayer={handleActivePlayer} activePlayerSymbol={activePlayer}/>
      </div>
    </main>
  );
}

export default App;
