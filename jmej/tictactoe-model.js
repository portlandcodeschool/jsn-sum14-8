var TicTacToeGame = (function(){
var squares = ["*", "*", "*", "*", "*", "*", "*", "*", "*"];
var address = ["00", "01", "02", "10", "11", "12", "20", "21", "22"];
 
function TicTacToeBoard(callbackFn){
    this.move = function(x, y, player){
        var newMove = String(x)+String(y);
        var square = address.indexOf(newMove);
        if (squares[square] != '*'){
            this.show();
            console.log(squares[square]+" already made that move!");
            }
        else{
            squares[square] = player; 
            console.log("nice move "+player);
            this.show();
            this.win();
            }
    }
    this.win = function(){
        for (var i = 0; i<3; i++){       
        if ((((squares[4] == squares[8]) && (squares[4] == squares [0])) || ((squares[4] == squares[2]) && (squares[4] == squares [6]))) && (squares[4] != "*"))
          {console.log(squares[4] + " is the winner!"); //finds diagonal wins
          callbackFn();}  
          else if ((squares[i * 3] != "*") && ((squares[i * 3] == squares[i * 3 + 1]) && 
              (squares[i * 3] == squares[i * 3 + 2]))) //finds horizontal wins
               {console.log(squares[i*3] + " is the winner!");
           return [{x:address[i*3][0], y:address[i*3][1]}, {x:address[(i*3)+1][0], y:address[(i*3)+1][1]}, {x:address[(i*3)+2][0], y:address[(i*3)+2][1]}];
           callbackFn();
          }
              else if (((squares[i] != "*")&&(squares[i] == squares[i+3])) && (squares[i] == squares [i+6])) //finds vertical wins
          {console.log(squares[i] + " is the winner!");
          return [{x:address[i][0], y:address[i][1]}, {x:address[i+3][0], y:address[i+3][1]}, {x:address[i+6][0], y:address[i+6][1]}];
          callbackFn();
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
    }
}

var gameOverMsg = function(){alert("Game Over!");}
var game = new TicTacToeBoard(gameOverMsg);
return game;
})();
