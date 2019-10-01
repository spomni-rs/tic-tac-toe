class TicTacToe {

  constructor() {
  
    this._matrix = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    
    this._symbol = 'x';
    this._winner = null;
    this._noTurns = false;
  }

    getCurrentPlayerSymbol() {
      return this._symbol;
    }

    nextTurn(rowIdx, colIdx) {
      if (this._matrix[rowIdx][colIdx]){
        return;
      };
    
      this._matrix[rowIdx][colIdx] = this._symbol;
      this._switchPlayerSymbol();
      
      this._updateWinner();
      this._updateNoTurns();
    }

    isFinished() {
      return !!this._winner || this.isDraw();
    }

    getWinner() {
      return this._winner;
    }

    noMoreTurns() {
      return this._noTurns;
    }

    isDraw() {
      return !this._winner && this._noTurns;
    }

    getFieldValue(rowIdx, colIdx) {
      return this._matrix[rowIdx][colIdx];
    }
    
    _switchPlayerSymbol(){
      this._symbol = (this._symbol === 'x') ? 'o' : 'x';
    }
    
    _updateWinner(){
      let m = this._matrix;
      
      // check rows
      for (let i=0; i<3; i++){
        let symbol = m[i][0]
        
        if (symbol !== null){
          if (m[i][1] === symbol
            && m[i][2] === symbol
          ){
            this._winner = symbol;
            return;
          }
        }
      }
      
      // check columns
      for (let i=0; i<3; i++){
        let symbol = m[0][i]
        
        if (symbol !== null){
          if (m[1][i] === symbol
            && m[2][i] === symbol
          ){
            this._winner = symbol;
            return;
          }
        }
      }
      
      // check first diagonals
      let symbol = m[1][1];
      
      if (symbol !== null){
        if ( (m[0][0] === symbol && m[2][2] === symbol)
          || (m[0][2] === symbol && m[2][0] === symbol)
        ){
          this._winner = symbol;
        }
      }
    }
    
    _updateNoTurns(){
    
      for (let i=0; i<3; i++){
        for (let j=0; j<3; j++){
          if (this._matrix[i][j] === null){
            return;
          }
        }
      }
      
      this._noTurns = true;
    }
}

module.exports = TicTacToe;