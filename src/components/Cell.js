import React from 'react'
import './Cell.css'

const Cell = ({ content }) => {
    if (content === null) { content = "(empty)" }
    return (
        <div className="Cell">{content}</div>
    )
}

export default Cell