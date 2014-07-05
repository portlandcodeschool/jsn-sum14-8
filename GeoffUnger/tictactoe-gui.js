var TicTacToeGui = function() { //module returning constructor:

	// Your code here...

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