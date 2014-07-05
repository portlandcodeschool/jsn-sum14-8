var TicTacToeGui = function() { //module returning constructor:

  this.interpolateId = function(xyObj) {
    var id = 'grid0' + xyObj.x + 'x' + xyObj.y + 'y';
    return id;
  }

  this.mark = function(xyObj, symbol) {
    document.getElementById(interpolateId(xyObj)).innerText = symbol;
  }

  this.clear = function() {
    //
  }

  function Constructor() {
    // more code...
  }

  // more code...
  return Constructor;	// return TTT gui constructor
}();
