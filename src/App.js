import React, { useState } from 'react';
import './App.css';
import Board from './components/Board'
import PlayerInfo from './components/PlayerInfo'

function App() {
    const [ board, setBoard ] = useState([[null, null, null],
                                          [null, null, null],
                                          [null, null, null]])
    const [ currentPlayer, setCurrentPlayer ] = useState('X')  
    const [ winner, setWinner ] = useState(null)
  
    const changePlayer = () => currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
    const makeAMove = (row, column) => {
        console.log('MOVE', currentPlayer, row, column)
        if (board[row][column] === null && winner === null) {
            const newBoard = [ ...board ]
            newBoard[row][column] = currentPlayer
            setBoard(newBoard)
            changePlayer()
            setWinner(checkWinner())
        } else {
            console.log('INVALID MOVE')
        }
    }
    const checkWinner = () => {
        // rows
        for (const row of board) { 
            if (row.every(cell => cell === row[0]) && row[0] !== null) { 
                return row[0]
            } 
        }
        // columns
        for (const column of [0, 1, 2]) {
            if (board[0][column] === board[1][column] && 
                board[1][column] === board[2][column] && 
                board[0][column] !== null){ 
                    return board[0][column]
            }
        }
        // diagonals
        if (board[0][0] === board[1][1] && 
            board[1][1] === board[2][2] &&
            board[1][1] !== null) { 
                return board[1][1] }
        if (board[0][2] === board[1][1] && 
            board[1][1] === board[2][0] &&
            board[1][1] !== null) { 
                return board[1][1] }

        // check for tie
        if (board.every(row =>
            row.every(cell =>
                cell !== null))){
                    return "TIE"
                }
        return null
    }
    const resetBoard = () => {
        setBoard([[null, null, null],
                  [null, null, null],
                  [null, null, null]])
        setCurrentPlayer('X')
        setWinner(null)
    }

return (
        <div className="App">
            <PlayerInfo currentPlayer={currentPlayer} winner={winner} />
            <Board board={board} handleClick={makeAMove} />
            <button onClick={resetBoard}>Reset board</button>
        </div>
    ); 
}

export default App;
