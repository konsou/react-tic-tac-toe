import React from 'react'
import Row from './Row'
import './Board.css'

const Board = ({ board }) => {
    return ( 
        <div className="Board">
            {board.map((row, index) => <><Row row={row} key={`row${index}`} /><br /></>)}
        </div>)
}

export default Board