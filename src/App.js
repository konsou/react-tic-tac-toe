import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Board'
import CurrentPlayer from './components/CurrentPlayer'

function App() {
  const [ board, setBoard ] = useState([[null, null, null],
                                        [null, null, null],
                                        [null, null, null]])
  const [ currentPlayer, setCurrentPlayer ] = useState('X')    
  
  const changePlayer = () => currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X')
  const makeAMove = (row, column) => {
    console.log('MOVE', currentPlayer, row, column)
    const newBoard = [ ...board ]
    console.log(newBoard)
    newBoard[row][column] = currentPlayer
    console.log(newBoard)
    setBoard(newBoard)
    changePlayer()
  }

  return (
    <div className="App">
      <CurrentPlayer currentPlayer={currentPlayer} />
      <Board board={board} handleClick={makeAMove} />
      <button onClick={changePlayer}>Change player</button>
    </div>
  );
}

export default App;
