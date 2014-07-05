function TicTacToeBoard() {

  var rows = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
      trialCoords = [];

  this.isValid = function (move) {
    if (!(move == 1 || move == 2 || move == 3)) {
      console.log('Invalid move');
      return false;
    }
    return true;
  };

  this.isAvailable = function (x, y) {
    if (this.isValid(x) && this.isValid(y)) {
      if (rows[y - 1][x - 1] === '-') {
        return true;
      } else {
        console.log('That space is occupied');
        return false;
      }
    } else {
      return false;
    }
  };

  this.cellValue = function(coord) {
    return rows[(coord[1])][(coord[0]) ];
  };

  this.placeX = function (x, y) {
    if (this.isAvailable(x, y)) {
      rows[y - 1][x - 1] = 'X';
      if (this.winner()) {
        this.callback();
        return;
      }
    } else {
      return false;
    }
  };

  this.placeO = function (x, y) {
    if (this.isAvailable(x, y)) {
      rows[y - 1][x - 1] = 'O';
      if (this.winner()) {
        this.callback();
        return;
      }
    } else {
      return false;
    }
  }

  this.clear = function () {
    for (var i = 0; i <=2; i++) {
      for (var j = 0; j <=2; j++) {
        rows[i][j] = '-';
      }
    }
  }

  this.checkCoords = function(coords) {
    for (var i = 0; i < coords.length; i++) {
      if ((this.cellValue(coords[i]) !== 'X') && (this.cellValue(coords[i]) !== 'O')) {
        return false;
      } else if (this.cellValue(coords[i]) !== this.cellValue(coords[0])) {
        return false;
      }
    }
    trialCoords.winner = this.cellValue(coords[0]);
    return true;
  }

  this.horizontalCheck = function () {
    for (var h = 0; h < rows.length; h++) {
      trialCoords = [];
      for (var i = 0; i < rows.length; i++) {
        trialCoords.push([i, h]);
      }
    if (this.checkCoords(trialCoords)) { return true; }
    }
    return false;
  }

  this.verticalCheck = function () {
    for (var i = 0; i < rows.length; i++) {
      trialCoords = [];
      for (var j = 0; j < rows.length; j++) {
        trialCoords.push([i, j]);
      }
      if (this.checkCoords(trialCoords)) {return true; }
    }
    return false;
  }

  this.diagonalCheck = function () {
    trialCoords = [];
    for (var i = 0; i < rows.length; i++) {
      trialCoords.push([i, i])
    }
    if (!this.checkCoords(trialCoords)) {
      trialCoords = [];
      for (var j = 0; j < rows.length; j++) {
        trialCoords.push([ j, (rows.length - 1 - j)]);
      }
    }
    return this.checkCoords(trialCoords);
  }

  this.makeCoordinate = function (coord) {
    var coordinate = {};
    coordinate.x = coord[0];
    coordinate.y = coord[1];
    return coordinate;
  }

  this.winningCoords = function(coords) {
    var winnerArray = [], obj = { x: undefined, y: undefined };
    for ( var i = 0; i < coords.length; i++ ) {
      winnerArray.push(this.makeCoordinate(coords[i]));
    }
    winnerArray.winner = coords.winner;
    return winnerArray;
  }

  this.winner = function () {
    if (this.horizontalCheck()) { return this.winningCoords(trialCoords); }
    else if (this.verticalCheck()) { return this.winningCoords(trialCoords); }
    else if (this.diagonalCheck()) { return this.winningCoords(trialCoords); }
    else { return false; }
  }

  this.show = function () {
    var display = '';
    rows.forEach( function(row) {
      display = '';
      row.forEach( function(cell) {
        display += cell;
      });
      console.log(display); 
    })
  };
  
  this.callback = function () {
    console.log('Game over, man!');
  }

}

var test = new TicTacToeBoard;
console.log('/nBefore moves:');
test.show();
console.log('/n' + 'After moves:');
test.placeX(1,1);
test.placeO(2,2);
test.placeX(3,3);
test.placeO(2,3);
test.placeX(2,1);
test.placeO(1,3);
test.placeX(3,1);
test.show();
console.log(test.winner());
