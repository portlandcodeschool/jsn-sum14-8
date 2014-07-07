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
		}

		this.xytoxyObj = function(x,y) { //takes x and y, returning xyObj that looks like {x:0, y:0}
		return {'x:'+x,'y'+y};
		}

		this.mark = function(xyObj,symbol){ //accepts xyObj that looks like {x:0, y:0}
			var elem = document.getElementById('grid0'+'x'+xyObj.x+'y'+xyObj.y);
			elem.innerHTML = symbol;
			elem.classList.add('mark');	
		} 
	}

 	// more code...
	return Constructor;	// return TTT gui constructor
}();