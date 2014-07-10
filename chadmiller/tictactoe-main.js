function installTicTacToe() {
	var gui = new TicTacToeGui();
	var game = new TicTacToeGame(null, gui);
	return game;
}

window.addEventListener("load", installTicTacToe);