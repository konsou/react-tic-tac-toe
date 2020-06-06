import React from 'react'
import Row from './Row'
import './Board.css'

const Board = ({ board, handleClick }) => {
    return ( 
        <div className="Board">
            {board.map((row, index) => <Row row={row} rowNumber={index} handleClick={handleClick} key={`row${index}`} />)}
        </div>)
}

export default Board