var TicTacToeGui = function() { //module returning constructor:


	function Constructor() {


		this.clear = function(){
            var allSquares = document.getElementsByTagName("td");
            for(var i = 0; i < 9; i++){
                allSquares[i].innerText = " ";
            }

        }
        this.mark = function(xyObj,symbol){
            var box = document.getElementById('grid0x' + xyObj.x + 'y' + xyObj.y);
            box.innerText = symbol;
        }
	}

 	// more code...
	return Constructor;	// return TTT gui constructor



}();

var gameNumber = 0;
var drawHTML = function(){
    var gameDiv = document.getElementById("tictactoe");
    var gameTable = document.createElement("table");
    var tableRow, tableCol;
    gameTable.setAttribute("id", "grid" + gameNumber);
    table = gameDiv.appendChild(gameTable);
    for (var row = 0; row < 3; row++){
        tableRow = document.createElement("tr")
        gameTable.appendChild(tableRow);
        for(col = 0; col < 3; col++){
            tableCol = document.createElement("td");
            tableCol.setAttribute("id", "grid" + gameNumber + "x" + col + "y" + row);
            tableRow.appendChild(tableCol);

        }
    }
}
window.addEventListener('load', drawHTML);