import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      PLAY_ONE_SYMBOL: 'X',
      PLAY_TWO_SYMBOL: 'O',
      currentTurn: 'X',
      board: Array(9).join('.').split('.'),
      winner: null,
    }
  }


  handleClick(index) {
    if (this.state.board[index] == '' && !this.state.winner) {
      this.state.board[index] = this.state.currentTurn
      this.setState({
        board: this.state.board,
        currentTurn: this.state.currentTurn == this.state.PLAY_ONE_SYMBOL ? this.state.PLAY_TWO_SYMBOL : this.state.PLAY_ONE_SYMBOL,
        winner: this.checkWinner(),
      })
    }
  }


  checkWinner() {
    const currentTurn = this.state.currentTurn
    const symbols = this.state.board
    const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    return winningCombos.find((combo) => {
      if (symbols[combo[0]] !== '' && symbols[combo[1]] !== '' && symbols[combo[2]] !== '' && symbols[combo[0]] === symbols[combo[1]] && symbols[combo[1]] === symbols[combo[2]]) {
        return currentTurn
      }
      return false
    })
  }


  render() {
    return (
      <div className="ttt-container">
        <div className="winner-container">
        {this.state.winner ?
          <h1>{`The winner is ${this.state.winner}`}</h1> :
          null}
        </div>

        <div className="board">
          { this.state.board.map((cell, index) =>
            <div className="square" onClick={() => this.handleClick(index)}>{cell}</div>,
          ) }
        </div>
      </div>

    );
  }
}

export default App;
