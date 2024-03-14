export default function Log({ gameTurns }) {

    //const auditLogs = gameTurns.map((gameTurn) => {});

    return (
        <>
            <ol id="log">
                {gameTurns.map((gameTurn) => <li key={`${gameTurn.square.row}${gameTurn.square.col}`}>{gameTurn.player} selected {gameTurn.square.row},{gameTurn.square.col}</li>)}
            </ol>
        </>
    );
}