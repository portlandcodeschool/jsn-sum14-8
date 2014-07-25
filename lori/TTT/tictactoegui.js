var TicTacToeGui = function() { 




// document.getElementById('x0y0').addEventListener('click',function(){
	


var array = ["x0y0","x1y0","x2y0","x0y1", "x1y1", "x2y1","x0y2","x1y2","x2y2"];

		function clear(){
			for(var i =0; i < array.length; ++i ){
				var element = document.getElementById(array[i]);
				if(element.textContent !== ''){
					element.textContent ="";
				
				}
			}

		}

function mark(xyObj,symbol) {
	document.getElementById(xyObj).textContent = symbol;
			}
	
return Constructor;	
}();

// this.placeX = function (address){
// 		 this.place[address] = 'X';
// 	};

// 	this.placeO = function (address){
// 		 this.place[address] = 'O';
// 	}