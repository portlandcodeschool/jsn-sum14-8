
checkD = function (){
                var check='';
                check += document.getElementById('x0y0').textContent + document.getElementById('x1y1').textContent + document.getElementById('x2y2').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                                return true;
                check = '';
                check += document.getElementById('x2y0').textContent + document.getElementById('x1y1').textContent + document.getElementById('x0y2').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                        return true;
 
                return false;
        };

checkR = function (){
                var check='';
                check += document.getElementById('x0y0').textContent + document.getElementById('x1y0').textContent + document.getElementById('x2y0').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                                return true;

                check = '';
                check += document.getElementById('x0y1').textContent + document.getElementById('x1y1').textContent + document.getElementById('x2y1').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                        return true;

                check = '';
                check += document.getElementById('x0y2').textContent + document.getElementById('x1y2').textContent + document.getElementById('x2y2').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                        return true;
 
                return false;
        };

checkC = function (){
                var check='';
                check += document.getElementById('x0y0').textContent + document.getElementById('x0y1').textContent + document.getElementById('x0y2').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                                return true;
                check = '';
                check += document.getElementById('x1y0').textContent + document.getElementById('x1y1').textContent + document.getElementById('x1y2').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                        return true;

                check = '';
                check += document.getElementById('x2y0').textContent + document.getElementById('x2y1').textContent + document.getElementById('x2y2').textContent;
                if(( check === 'XXX') || (check === 'OOO'))
                        return true;
 
                return false;
        };
  
winner = function (){
        if(checkD() || checkR() || checkC())
                alert("you win");
        else
                alert("you lose");
 
        };
 



var TicTacToeGame = function(){

	function Constructor(endgameFn, gui) {
                
     }
     return Constructor;
	
}();

	
