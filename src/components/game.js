import React, { Component } from 'react';
import Board from './board';

export default class Game extends Component {
  constructor() {
    super();

    this.state= {
      loja: Array(9).fill(null),
      value: null,
      rradha: true,
    };
  }
  onClick(i) {
   const loja = this.state.loja.slice();
   loja[i] = 'X';
   this.setState({loja: loja});

    if(this.state.rradha) {
      loja[i] = 'X';
      this.setState({
        rradha:!this.state.rradha,
        loja: loja,
      });
    }
    else {
      loja[i] = 'O';
      this.setState({
        rradha:!this.state.rradha,
        loja: loja,
      });
    }
    console.log(this.state.loja);
  }

  rinisLojen() {
    this.setState({
      loja: Array(9).fill(null),
    });
  }

  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={i => this.onClick(i)} value={this.state.loja} turn={this.state.rradha ? 'X' : 'O'}/>
        </div>
        <div className="game-info">
          <div>
            <button onClick={() => this.rinisLojen()}>
              Restart
            </button>
          </div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
