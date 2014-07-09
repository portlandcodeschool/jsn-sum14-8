var TicTacToeGui = function () { //module returning constructor:

    var gameNumber = 0;
    var gameState = "O";
    var callback = new Function();

    function Constructor() {

        var gameDiv = document.getElementById("tictactoe");
        var gameTable = document.createElement("table");
        var infoArea = document.getElementById("infoArea");
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
            var box = document.getElementById('grid' + this.gameNumber + 'x' + xyObj.x + 'y' + xyObj.y);
            box.textContent = symbol;

        }

        this.setAction = function (callback) {
            for (var col = 0; col < 3; col++) {
                for (var row = 0; row < 3; row++) {
                    var cell = document.getElementById('grid' + this.gameNumber + 'x' + row + 'y' + col);

                    function callbackMaker(r, c, cb, gn) {
                        var innerCB = cb;
                        var innerRow = r;
                        var innerCol = c;
                        var innerGn = gn;
                        return function () {
                            var innerCell = document.getElementById('grid' + innerGn + 'x' + innerRow + 'y' + innerCol);
                            innerCB(innerRow, innerCol);
                            console.log("Removing event listener from: " + innerCell.id);
                            innerCell.classList.add('green');
                            innerCell.removeEventListener('mouseenter', addNextMove, false);
                            innerCell.removeEventListener('mouseleave', removeNextMove, false);
                        }
                    }

                    cell.addEventListener('click', callbackMaker(row, col, callback, this.gameNumber));

                }

            }
        }

        for(var col = 0; col < 3; col++){
            for(var row = 0; row < 3; row++){
                var cell = document.getElementById('grid' + this.gameNumber + 'x' + row + 'y' + col);
                var addNextMove = function(){
                    this.textContent = getState();
                };
                var removeNextMove = function(){
                    this.textContent = "";
                }
                cell.addEventListener('mouseenter', addNextMove);
                cell.addEventListener('mouseleave', removeNextMove);

            }
        }

        this.getAction = function () {
            return(this.callback);
        }

        getState = function(){
            return gameState;
        }

        this.setState = function(newState){

            gameState = newState;

            switch (newState)
            {

                case "X":
                    infoArea.textContent = "It's player X's turn.";
                    break;
                case "O":
                    infoArea.textContent = "It's player O's turn.";
                    break;
                case null:
                    infoArea.textContent = "The game was a draw";
                    alert("Game was a draw!");
                    break;
                case "winner-X":
                    infoArea.textContent = "X won!";
                    alert("X won!");
                    break;
                case "winner-O":
                    infoArea.textContent = "O won!";
                    alert("O won!");
            }
        }

    }

    return Constructor;	// return TTT gui constructor
}()


