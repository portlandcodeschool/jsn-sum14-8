var TicTacToeGui = function() { //module returning constructor:

  var boardCount = 0;

  function interpolateId(xyObj) {
    var id = 'grid0x' + xyObj.x + 'y' + xyObj.y;
    return id;
  }

  function Constructor() {

    this.buildBoard = function() {
      var table = document.createElement('table');
      var numOfRows = 3;
      var div = document.getElementById('tictactoe');
      for(var i = 0; i < numOfRows; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < numOfRows; j++) {
          var td = document.createElement('td');
          td.setAttribute('id', 'grid' + boardCount + 'x' + j  + 'y' + i);
          td.setAttribute('id', 'grid' + boardCount + 'x' + j  + 'y' + i);
          if (i == 0) {
            td.classList.add('top');
          }
          if (j == 0) {
            td.classList.add('left');
          }
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      table.setAttribute('id', 'grid' + boardCount);
      div.appendChild(table);
      boardCount++;
    };

    this.mark = function(xyObj, symbol) {
      document.getElementById(interpolateId(xyObj)).innerHTML = symbol;
    };

    this.clear = function() {
      var table = document.getElementById('grid0');
      var cells = document.getElementsByTagName('td');
      console.log(cells);
      for (var i = 0; i < cells.length; i++) {
        if (table.contains(cells[i])) { //To allow for multiple boards
          cells[i].innerHTML = '';
        }
      }
    };

    }

  

  // more code...
  return Constructor;	// return TTT gui constructor
}();
var gui = new TicTacToeGui();

