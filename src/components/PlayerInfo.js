import React from 'react'

const PlayerInfo = ({ currentPlayer, winner }) => {
    let text
    if (winner === 'TIE') { text = "IT'S A TIE" }
    else if (winner) { text = `${winner} IS THE WINNER!` }
    else { text = `Current player is ${currentPlayer}` }

    return (
        <div>
            <h1>{text}</h1>
        </div>
    )

}

export default PlayerInfo