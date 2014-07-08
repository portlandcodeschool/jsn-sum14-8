var TicTacToeGame = function() {

  function gameOver(winner) {
    console.log('Game Over. ' + winner.winner + ' wins!');
  }

  function show() {
    var str = '';
    for (var i = 0; i < 3; i++)
      str += this.board[i].join('') + '\n';

    return str;
  }

  function placeX(x, y) {
    if (this.board[y][x] !== '-') return;

    this.board[y][x] = 'X';

    if (this.gui) {
      this.gui.mark({x:x,y:y}, 'X');
      this.gui.setState('O');
    }

    if (this.winner()) {
      this.endgameFn(this.winner());
      if (this.gui)
        this.gui.setState(this.winner());
      return true;
    }

    return true;
  }

  function placeO(x, y) {
    if (this.board[y][x] !== '-') return;

    this.board[y][x] = 'O';

    if (this.gui) {
      this.gui.mark({x:x,y:y}, 'O');
      this.gui.setState('X');
    }

    if (this.winner()) {
      this.endgameFn(this.winner());
      if (this.gui)
        this.gui.setState(this.winner());
      return true;
    }

    return true;
  }

  //reset board
  function clear() {
    var i = 0;
    while (i < 3) {
      this.board[i] = ['-', '-', '-'];
      i++;
    }

    if (this.gui) this.gui.clear();
    return true;
  }

  function winner() {
    var board = this.board;
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
    return false;
  }

  function whoseTurn() {
    return this.gui.getState();
  }

  function takeTurn(x, y) {
    if (this.whoseTurn() === 'X')
      return this.placeX(x, y);
    this.placeO(x, y);
  }

  function Constructor(endgameFn, gui) {
    var game = this;
    this.board = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
    this.nextTurn = 'X';
    this.placeO = placeO;
    this.placeX = placeX;
    this.winner = winner;
    this.clear = clear;
    this.show = show;
    this.whoseTurn = whoseTurn;
    this.takeTurn = takeTurn;
    this.endgameFn = endgameFn || gameOver;
    this.gui = gui || null;

    if (this.gui) {
      this.gui.makeBoard();
      this.gui.setAction(function(x,y) {
        game.takeTurn(x,y);
      });
    }
  }

  return Constructor;	// return TTT game constructor
}();
