var TicTacToeGui = function() { //module returning constructor:

  this.interpolateId = function(xyObj) {
    var id = 'grid0x' + xyObj.x + 'y' + xyObj.y;
    return id;
  }

  function Constructor() {

    this.mark = function(xyObj, symbol) {
      document.getElementById(interpolateId(xyObj)).innerText = symbol;
    }

    this.clear = function() {
      //
    }

  }

  // more code...
  return Constructor;	// return TTT gui constructor
}();
