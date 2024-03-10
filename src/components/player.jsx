import { useState } from "react";

function Player({name, symbol}) {

    const [isEditing, setIsEditing] = useState(() => false);

    let buttonLabel = "Edit";
    let playerNameField = <span className="player-name">{name}</span>;

    if (isEditing) {
        buttonLabel="Save";
        playerNameField = <input type="text" required value={name}/>
    }

    function handleEditClick() {
        setIsEditing(!isEditing);
    }

    return (
        <li>
            <span className="player">
              {playerNameField}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonLabel}</button>
        </li>
    );

}



export default Player;