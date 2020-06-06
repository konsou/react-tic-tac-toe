import React from 'react'
import Cell from './Cell'
import './Row.css'

const Row = ({ row, rowNumber, handleClick }) => { 
    return (
        <div className="Row">
            { row.map((cell, index) => <Cell 
                                        content={cell} 
                                        rowNumber={rowNumber}
                                        cellNumber={index}
                                        handleClick={handleClick} 
                                        key={`row-${rowNumber}-cell-${index}`} 
                                        /> ) }
        </div>
    )
}

export default Row