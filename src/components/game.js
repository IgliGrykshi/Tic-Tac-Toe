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
    if(this.fituesi(this.state.loja) || loja[i]){
      return;
    }
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
  }

  rinisLojen() {
    this.setState({
      loja: Array(9).fill(null),
      rradha: true,
    });
  }
  fituesi(loja) {
    const fitore = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    for(let j=0;j<fitore.length;j++){
      const [a,b,c] = fitore[j];
      if(loja[a] == loja[b] && loja[a] == loja[c]){
        if(this.state.rradha && loja[a] != null){
        return "O";
        }
        else if(loja[a] != null){
          return "X";
        }
      }
    }
    return null;
  }


  render() {
    const winner = this.fituesi(this.state.loja);
    let status;
    if(winner){
      status = "Fituesi eshte : " + winner;
    }
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
          <div>{status}</div>
        </div>
      </div>
    );
  }
}
