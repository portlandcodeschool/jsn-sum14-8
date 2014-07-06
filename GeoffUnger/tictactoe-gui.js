var TicTacToeGui = function () { //module returning constructor:

    var gameNumber = 0;
    var callback = new Function();

    function Constructor() {

        var gameDiv = document.getElementById("tictactoe");
        var gameTable = document.createElement("table");
        var tableRow, tableCol;
        gameTable.setAttribute("id", "grid" + gameNumber);
        table = gameDiv.appendChild(gameTable);
        for (var row = 0; row < 3; row++) {
            tableRow = document.createElement("tr")
            gameTable.appendChild(tableRow);
            for (col = 0; col < 3; col++) {
                tableCol = document.createElement("td");
                tableCol.setAttribute("id", "grid" + gameNumber + "x" + col + "y" + row);
                tableRow.appendChild(tableCol);

            }
        }

        this.gameNumber = gameNumber;

        gameNumber++;

        this.clear = function () {
            var allSquares = document.getElementsByTagName("td");
            for (var i = 0; i < 9; i++) {
                allSquares[i].innerText = " ";
            }

        }
        this.mark = function (xyObj, symbol) {
            console.log('grid' + this.gameNumber + 'x' + xyObj.x + 'y' + xyObj.y);
            var box = document.getElementById('grid' + this.gameNumber + 'x' + xyObj.x + 'y' + xyObj.y);
            box.innerText = symbol;
        }

        this.setAction = function (callback) {

            for (var col = 0; col < 3; col++) {
                for (var row = 0; row < 3; row++) {
                    var cell = document.getElementById('grid' + this.gameNumber + 'x' + row + 'y' + col);

                    function callbackMaker(r, c, cb) {
                        var innerCB = cb;
                        var innerRow = r;
                        var innerCol = c;
                        return function () {
                            innerCB(innerRow, innerCol);
                        }
                    }

                    cell.onclick = callbackMaker(row, col, callback);
                }

            }
        }

        this.getAction = function () {
            return(this.callback);
        }

    }

    return Constructor;	// return TTT gui constructor
}()

/*var gameNumber = 0;
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
 }*/
//window.addEventListener('load', drawHTML);