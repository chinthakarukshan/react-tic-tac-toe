import { useState } from "react";

function Player({initialName, symbol, isActivePlayer, handleNameChange}) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(() => false);

    let buttonLabel = "Edit";
    let playerNameField = <span className="player-name">{playerName}</span>;

    if (isEditing) {
        buttonLabel="Save";
        playerNameField = <input type="text" required value={playerName} onChange={onNameChange}/>
    }

    function handleEditClick() {
        setIsEditing((buttonStatus) => !buttonStatus);

        if (isEditing) {
            handleNameChange(symbol, playerName);
        }

    }

    function onNameChange(event){
        setPlayerName((currentName) => event.target.value);
    }

    return (
        <li className={isActivePlayer ? 'active' : undefined}>
            <span className="player">
              {playerNameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonLabel}</button>
        </li>
    );

}



export default Player;