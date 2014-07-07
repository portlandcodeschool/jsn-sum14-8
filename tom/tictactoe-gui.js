var TicTacToeGui = function() { //module returning constructor:

  this.interpolateId = function(xyObj) {
    var id = 'grid0x' + xyObj.x + 'y' + xyObj.y;
    return id;
  };

  function Constructor() {

    this.mark = function(xyObj, symbol) {
      document.getElementById(interpolateId(xyObj)).innerHTML = symbol;
    };

    this.clear = function() {
      var table = document.getElementById('grid0');
      var cells = document.getElementsByTagName('td');
      for (var i = 0; i < cells.length; i++) {
        if (table.contains(cells[i])) { //To allow for multiple boards
          cells[i].innerText = '';
        }
      }
    };

    }

  

  // more code...
  return Constructor;	// return TTT gui constructor
}();
var gui = new TicTacToeGui;

