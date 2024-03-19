export default function GameOver({winner, onMatchReset}) {
    return (
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a draw.</p>}
            <p><button onClick={onMatchReset}>Rematch!</button></p>
        </div>
    );
}