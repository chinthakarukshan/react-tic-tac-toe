import { useState } from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {

    const [updatedGameBoard, setUpdatedGameBoard] = useState(initialBoard);

    function handleUpdateGameboard(rowIndex, colIndex) {
        setUpdatedGameBoard((existingGameBoard) => {
            const newGameBoard = [...existingGameBoard.map((gameBoardRow) => [...gameBoardRow])]
            newGameBoard[rowIndex][colIndex] = 'X';
            return newGameBoard;
        });
    }

    return (
        <ol id="game-board">
            {updatedGameBoard.map((row, rowIndex) => (<li key={rowIndex}>
                <ol>
                    {row.map((playerSymbol, colIndex) => (<li key={colIndex}>
                        <button onClick={() => handleUpdateGameboard(rowIndex,colIndex)}>{playerSymbol}</button>
                    </li>))}
                </ol>
            </li>))}
        </ol>
    );
}