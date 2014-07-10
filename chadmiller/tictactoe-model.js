var TicTacToeGame = function() {

  function gameOver(winner) {
    if (!winner)
      return console.log('Game Over. Nobody wins.');
    console.log('Game Over. ' + winner.winner + ' wins!');
  }

  function Constructor(endGameFn, gui) {

    var game = this;
    var board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
    var nextTurn = 'X';
    var numTurns = 1;

    this.endGameFn = endGameFn || gameOver;
    this.gui = gui || null;

    if (this.gui) {
      this.gui.makeBoard();
      this.gui.setState('X');
      this.gui.setAction(function(x, y) {
        game.takeTurn(x, y);
      });
    }

    this.show = function() {
      var str = '';
      for (var i = 0; i < 3; i++)
        str += board[i].join('') + '\n';
      return str;
    }

    this.checkWinner = function() {
      var winner = this.winner();

      if (winner === null || winner.winner) {
        this.endGameFn(winner);
        if (this.gui)
          this.gui.setState(winner);
      }
    }

    this.placeX = function(x, y) {
      if (board[y][x] !== '-') return;

      board[y][x] = 'X';

      if (this.gui) {
        this.gui.mark({x:x,y:y}, 'X');
        this.gui.setState('O');
      }

      this.checkWinner();
      numTurns++;
      return true;
    }

    this.placeO = function(x, y) {
      if (board[y][x] !== '-') return;

      board[y][x] = 'O';

      if (this.gui) {
        this.gui.mark({x:x,y:y}, 'O');
        this.gui.setState('X');
      }

      this.checkWinner();
      numTurns++;
      return true;
    }

    //reset board
    this.clear = function() {
      var i = 0;
      while (i < 3) {
        board[i] = ['-', '-', '-'];
        i++;
      }

      if (this.gui) this.gui.clear();
      numTurns = 0;
      return true;
    }

    this.winner =  function() {
      var winner;
      //loop through each symbol
      for (var i = 0; i < 2; i++) {
        var symbol = (i === 0 ? 'X' : 'O');
        //check rows
        for (var y = 0; y < 3; y++) {
          if (board[y][0] === symbol &&
              board[y][1] === symbol &&
              board[y][2] === symbol) {
            winner = [{x:0,y:y},{x:1,y:y},{x:2,y:y}];
            winner.winner = symbol;
            return winner;
          }
        }
        //check cols
        for (var x = 0; x < 3; x++) {
          if (board[0][x] === symbol &&
              board[1][x] === symbol &&
              board[2][x] === symbol) {
            winner = [{x:x,y:0},{x:x,y:1},{x:x,y:2}];
            winner.winner = symbol;
            return winner;
          }
        }
        //check diags
        if (board[0][0] === symbol &&
            board[1][1] === symbol &&
            board[2][2] === symbol) {
          winner = [{x:0,y:0},{x:1,y:1},{x:2,y:2}];
          winner.winner = symbol;
          return winner;
        }
        if (board[0][2] === symbol &&
            board[1][1] === symbol &&
            board[2][0] === symbol) {
          winner = [{x:2,y:0},{x:1,y:1},{x:0,y:2}];
          winner.winner = symbol;
          return winner;
        }
      }
      //check for a draw
      if (numTurns === 9) {
        return null;
      }
      return false;
    }

    this.whoseTurn = function() {
      return this.gui.getState();
    }

    this.takeTurn = function(x, y) {
      if (this.whoseTurn() === 'X')
        return this.placeX(x, y);
      this.placeO(x, y);
    }

  }

  return Constructor;	// return TTT game constructor
}();
