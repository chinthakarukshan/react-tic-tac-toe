const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectActivePlayer, turns }) {

    /*const [updatedGameBoard, setUpdatedGameBoard] = useState(initialBoard);

    function handleUpdateGameboard(rowIndex, colIndex) {
        setUpdatedGameBoard((existingGameBoard) => {
            const newGameBoard = [...existingGameBoard.map((gameBoardRow) => [...gameBoardRow])]
            newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return newGameBoard;
        });
        onSelectActivePlayer();
    }*/

    const updatedGameBoard = initialBoard;

    for (const turn of turns) {
        const {square, player} = turn;
        const {row, col} = square;

        updatedGameBoard[row][col] = player;
    }

    return (
        <ol id="game-board">
            {updatedGameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                        <button onClick={() => onSelectActivePlayer(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    );
}