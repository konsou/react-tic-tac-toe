import React from 'react'
import './Cell.css'

const Cell = ({ content, rowNumber, cellNumber, handleClick }) => {
    //console.log('Cell', rowNumber, cellNumber)
    if (content === null) { content = "(empty)" }
    return (
        <div className="Cell" onClick={() => handleClick(rowNumber, cellNumber)}>{content}</div>
    )
}

export default Cell