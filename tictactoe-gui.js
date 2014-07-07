var TicTacToeGui = function() { //module returning constructor:

    //board constructor
	function Board() {
        var cell1 = document.getElementById('grid0x0y0');
        var cell2 = document.getElementById('grid0x1y0');
        var cell3 = document.getElementById('grid0x2y0');
        var cell4 = document.getElementById('grid0x0y1');
        var cell5 = document.getElementById('grid0x1y1');
        var cell6 = document.getElementById('grid0x2y1');
        var cell7 = document.getElementById('grid0x0y2');
        var cell8 = document.getElementById('grid0x1y2');
        var cell9 = document.getElementById('grid0x2y2');
        var arrayOfCells = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
		
        this.clearBoard = function() {
            for(var i = 0; i < arrayOfCells.length; i++) {
                arrayOfCells[i].removeChild();
            }
        }
        this.mark = function(xyObj, symbol) {
            var id = 'grid0'+'x'+xyObj.x+'y'+xyObj.y;
            var markToAdd = document.createElement('span');
            markToAdd.innerHTML = symbol;
            document.getElementById(id).appendChild(markToAdd);
        }
	}

 	// more code...
	return Board;	// return TTT gui constructor
}();