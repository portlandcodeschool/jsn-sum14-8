var TicTacToeGui = function() {

	var nextId = 0;

	// clear the board of all marks
  function clear() {
    var tds = this.board.getElementsByTagName('td');
    for (var i = 0; i < tds.length; i++)
      tds[i].innerHTML = '';
  }

  // add a mark symbol in the cell at position xyObj,
  // which has the form {x:0,y:0}
  function mark(xyObj, symbol) {
    if (!this.board) return;
    if (this.gameOver) return;

    var id = 'grid' + this.id + 'x' + xyObj.x + 'y' + xyObj.y;
    var cell = document.getElementById(id);
    cell.innerHTML = symbol;
  }

  function makeBoard() {
    var board = this;
    var mainDiv = document.getElementById('tictactoe');
    var table = document.createElement('table');
    table.id = 'grid' + this.id;

    for (var y = 0; y < 3; y++) {
      var tr = document.createElement('tr');
      for (var x = 0; x < 3; x++) {
        var td = document.createElement('td');
        td.id = 'grid' + this.id + 'x' + x + 'y' + y;

        td.addEventListener("click", function(x,y,td) {
          return function() {
            // save the new state
            td.state = board.newState;
            return board.callback(x,y);
          };
        }(x,y,td), false);

        td.addEventListener("mouseenter", function() {
          if (board.gameOver) return;
          // save the state before changing
          this.state = this.innerHTML;
          if (!this.innerHTML)
            return this.innerHTML = board.newState;
        },false);

        td.addEventListener("mouseleave", function() {
          if (board.gameOver) return;
          // state changed with a click event
          if (this.state === this.innerHTML)
            return;
          this.innerHTML = '';
        },false);

        tr.appendChild(td);
      }
      table.appendChild(tr);
    }

    this.board = table;
    mainDiv.appendChild(table);
    nextId++;
  }

  function setAction(callback) {
    this.callback = callback;
  }

  function getAction() {
    return this.callback;
  }

  function getState() {
    return this.newState;
  }

  function highlightWinner(boardId, winner) {
    for (var i = 0; i < winner.length; i++) {
      var id = 'grid' + boardId + 'x' + winner[i].x + 'y' + winner[i].y;
      var td = document.getElementById(id);
      td.style.color = 'yellow';
    }
  }

  function setState(newState) {
    if (newState.winner) {
      highlightWinner(this.id, newState);
      this.gameOver = true;
    }
    if (newState === null) {
      this.board.style.background = 'red';
      this.gameOver = true;
    }
    this.newState = newState;
  }

	function Constructor() {
		this.id = nextId;
		this.board = null;
		this.callback = null;
		this.gameOver = false;
		this.clear = clear;
		this.mark = mark;
		this.setAction = setAction;
		this.getAction = getAction;
		this.newState = 'X';
		this.getState = getState;
		this.setState = setState;
		this.makeBoard = makeBoard;
	}

	return Constructor;
}();