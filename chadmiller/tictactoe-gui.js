var TicTacToeGui = function() {

  var nextId = 0;

  function highlightWinner(boardId, winner) {
    for (var i = 0; i < winner.length; i++) {
      var id = 'grid' + boardId + 'x' + winner[i].x + 'y' + winner[i].y;
      var td = document.getElementById(id);
      td.classList.add('winner');
    }
  }

  function Constructor() {

    var id = nextId;
    this.board = null;
    this.callback = null;
    this.gameOver = false;

    // clear the board of all marks
    this.clear = function() {
      var tds = this.board.getElementsByTagName('td');
      for (var i = 0; i < tds.length; i++)
        tds[i].innerHTML = '';
    }

    // add a mark symbol in the cell at position xyObj,
    // which has the form {x:0,y:0}
    this.mark = function(xyObj, symbol) {
      if (!this.board) return;
      if (this.gameOver) return;

      var cellId = 'grid' + id + 'x' + xyObj.x + 'y' + xyObj.y;
      var cell = document.getElementById(cellId);
      cell.innerHTML = symbol;
    }

    this.makeBoard = function() {
      var board = this;
      var mainDiv = document.getElementById('tictactoe');
      var table = document.createElement('table');
      table.id = 'grid' + id;

      for (var y = 0; y < 3; y++) {
        var tr = document.createElement('tr');
        for (var x = 0; x < 3; x++) {
          var td = document.createElement('td');
          td.id = 'grid' + id + 'x' + x + 'y' + y;

          td.addEventListener("click", function(x,y,td) {
            return function() {
              // save the new state
              td.state = board.getState();
              return board.callback(x,y);
            };
          }(x,y,td), false);

          td.addEventListener("mouseenter", function() {
            if (board.gameOver) return;
            // save the state before changing
            this.state = this.innerHTML;
            if (!this.innerHTML)
              this.innerHTML = board.getState();
          },false);

          td.addEventListener("mouseleave", function() {
            if (board.gameOver) return;
            // state changed with a click event
            if (this.state === this.innerHTML) return;
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

    this.setAction = function(callback) {
      this.callback = callback;
    }

    this.getAction = function() {
      return this.callback;
    }

    this.getState = function() {
      return this.newState;
    }

    this.setState = function(newState) {
      if (newState === null) {
        this.board.style.background = 'red';
        this.gameOver = true;
        return;
      }
      if (newState.winner) {
        highlightWinner(id, newState);
        this.gameOver = true;
        return;
      }
      this.newState = newState;
    }
  }

  return Constructor;
}();