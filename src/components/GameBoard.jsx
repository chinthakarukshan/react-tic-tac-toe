const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, rowIndex) => (<li key={rowIndex}>
                        <button>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    );
}