import React from 'react'
import Cell from './Cell'
import './Row.css'

const Row = ({ row }) => { 
    return (
        <div className="Row">
            { row.map((cell, index) => <Cell content={cell} key={index} /> ) }
        </div>
    )
}

export default Row