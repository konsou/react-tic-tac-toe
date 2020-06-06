import React from 'react'

const CurrentPlayer = ({ currentPlayer, winner }) => {
    if (winner) { 
        return (
            <div>
                <h1>{winner} IS THE WINNER!</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Current player is {currentPlayer}</h1>
            </div>
        )
    }
}

export default CurrentPlayer