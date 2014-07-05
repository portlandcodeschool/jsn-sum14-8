var TicTacToeGame = function() { //module returning constructor:

	// Revised HW5 solution here, including...
    function TicTacToeBoard(callBack, gui) {
        if(!callBack) callBack = function(msg){console.log(msg)};
        var size = 3;
        var cells = [];
        var numCells = (Math.pow(size,2));
        var xPos = 0;
        var yPos = 0;
        var gridScore = [];
        var numberOfMoves = 0;

        for(i = 0; i < ((size*2)+2); i++){
            gridScore[i] = 0;
        }

        for (i = 0; i < numCells; i++) {
            cells[i] = {};
            cells[i].xPos = xPos;
            cells[i].yPos = yPos;
            cells[i].contents = ".";
            xPos++;
            if (xPos > (size-1)) {
                yPos++;
                xPos = 0;
            }
        }
        var show = function () {
            var count = 0;
            var row = "";
            for (i = 0; i < numCells; i++) {
                row += (cells[i].contents + " ");
                count++;
                if (count == size) {
                    row += "\n";
                    count = 0;
                }
            }
            console.log(row);
        }

        this.show = show;

        var place = function(x,y,team, score){
            var success = true;
            cells.map(function (item) {
                if ((item.xPos == x) && (item.yPos == y)) {
                    if (item.contents != ".") success = undefined;
                    else {
                        item.contents = team;
                        gui && gui.mark({x:x, y:y},team);
                        gridScore[x] += score;
                        gridScore[size + y] += score;
                        if (x == y) gridScore[(size * 2)+1] += score;
                        if ((2 - x) == y) gridScore[(size * 2)+2] += score;
                        winner();
                        numberOfMoves++;
                        if(numberOfMoves == numCells) callBack("The game was a draw!");
                    }
                }

            })
            return success;
        }
        this.placeX = function (x, y) {
            return place(x,y,"x",1);
        }
        this.placeO = function (x, y) {
            return place(x,y,"o", -1);
        }
        this.clear = function () {
            gui && gui.clear();
            cells.map(function (item) {
                item.contents = ".";
            })
            for(i = 0; i < (size+2); i++){
                gridScore[i] = 0;
            }
            numberOfMoves = 0;
        }

        var winner = function () {
            var result = [];
            gridScore.map(function (item, index) {
                if((item == -size) || (item == size)){
                    console.log("We have a winner!");
                    show();
                    for(i = 0; i < size; i++){
                        if(index < size) result[i] = {x:index,y:i};
                        if(index >= size) result[i] = {x:i, y:(index-(size-1))};
                        if(index >= ((size*2)+1)) result[i] = {x:i, y:i};
                        if(index == ((size*2)+2)) result[i] = {x:(i), y:((size-1)-i)}
                    }
                    (item == size) ? result.winner = "x" : result.winner = "o";
                    callBack("The winner was " + result.winner + "!");
                };

            })

            return result;
        }
        this.winner = winner;
    }



    //function Constructor(endgameFn, gui) {
		// more code...
	//}

	//return Constructor;	// return TTT game constructor
    return TicTacToeBoard;
}();
