function installTicTacToe() {
	// consider making these global during debugging...
	var gui = new TicTacToeGui();
	var game = new TicTacToeGame(null, //optional endgame callback
								 gui); //optional game interface
	return game;
};


window.addEventListener("load", installTicTacToe);// runs when all HTML has loaded

// you should be able to call installTicTacToe manually
//   to install more games in the same window!

var TicTacToeGui = function() { //module returning constructor:

	// Your code here...

	function Constructor() {
		
		this.clearall = function (){
			for (var y = 0; y < 3; y++){
				for (var x = 0; x < 3; x++){
				var elem = document.getElementById('grid0'+'x'+x+'y'+y)
				elem.innerHTML = "";
				}
			}
		};
        
		this.mark = function(xyObj,symbol){ //accepts xyObj that looks like {x:0, y:0}
			var elem = document.getElementById('grid0'+'x'+xyObj.x+'y'+xyObj.y);
			elem.innerHTML = symbol;
			elem.classList.add('mark');	
		} 
	};

 	// more code...
	return Constructor;	// return TTT gui constructor
}();


//var tttgame = new TicTacToeGui();

//tttgame.mark({x:0,y:0},'o');

//tttgame.clear();
var gameOverMsg = function(){alert("Game Over!");} //optional callbackfn for game model


var TicTacToeGame = function(endgameCallback, gui){ //model module returning contructor
var squares = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
var address = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
 
function TicTacToeBoard(endgameCallback,gui){
    
    this.xytoxyObj = function(x,y) { //takes x and y, returning xyObj that looks like {x:0, y:0}
       return {x:+x,y:+y};
		}
    this.move = function(x, y, player){
        var newMove = String(x)+String(y);
        var square = address.indexOf(newMove);
        if (squares[square] != '*'){
            this.show();
            console.log(squares[square]+" already made that move!");
            }
        else{
            squares[square] = player;
            gui.mark(this.xytoxyObj(x, y), player);
            console.log("nice move "+player);
            this.show();
            this.win();
            }
    }
    this.win = function(){
        for (var i = 0; i<3; i++){       
        if ((((squares[4] == squares[8]) && (squares[4] == squares [0])) || ((squares[4] == squares[2]) && (squares[4] == squares [6]))) && (squares[4] != "*"))
          {console.log(squares[4] + " is the winner!"); //finds diagonal wins
          this.clear()
          callbackFn();
          }
          else if ((squares[i * 3] != "*") && ((squares[i * 3] == squares[i * 3 + 1]) && 
              (squares[i * 3] == squares[i * 3 + 2]))) //finds horizontal wins
              {console.log(squares[i*3] + " is the winner!");
              this.clear();
              callbackFn();
              return [{x:address[i*3][0], y:address[i*3][1]}, {x:address[(i*3)+1][0], y:address[(i*3)+1][1]}, {x:address[(i*3)+2][0], y:address[(i*3)+2][1]}];
             }
              else if (((squares[i] != "*")&&(squares[i] == squares[i+3])) && (squares[i] == squares [i+6])) //finds vertical wins
               {console.log(squares[i] + " is the winner!");
               this.clear();
               callbackFn();
               return [{x:address[i][0], y:address[i][1]}, {x:address[i+3][0], y:address[i+3][1]}, {x:address[i+6][0], y:address[i+6][1]}];
             }
          }
      } 
    this.show = function(){
        var row0 = String(squares[0])+" "+String(squares[1])+" "+String(squares[2]);
        var row1 = String(squares[3])+" "+String(squares[4])+" "+String(squares[5]);
        var row2 = String(squares[6])+" "+String(squares[7])+" "+String(squares[8]);
        console.log(row2+"\n"+" "+row1+"\n"+" "+row0);
 
    }
    this.clear = function(){
        squares = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
        this.show();
        gui.clearall(); 
    }
};
return TicTacToeBoard;
}();

var gui1 = new TicTacToeGui();
var game1 = new TicTacToeGame(gameOverMsg, gui1);