/*
game.js for Perlenspiel 3.3.x
Last revision: 2022-03-15 (BM)

Perlenspiel is a scheme by Professor Moriarty (bmoriarty@wpi.edu).
This version of Perlenspiel (3.3.x) is hosted at <https://ps3.perlenspiel.net>
Perlenspiel is Copyright © 2009-22 Brian Moriarty.
This file is part of the standard Perlenspiel 3.3.x devkit distribution.

Perlenspiel is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Perlenspiel is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Lesser General Public License for more details.

You may have received a copy of the GNU Lesser General Public License
along with the Perlenspiel devkit. If not, see <http://www.gnu.org/licenses/>.
*/

/*
This JavaScript file is a template for creating new Perlenspiel 3.3.x games.
Any unused event-handling function templates can be safely deleted.
Refer to the tutorials and documentation at <https://ps3.perlenspiel.net> for details.
*/

/*
The following comment lines are for JSHint <https://jshint.com>, a tool for monitoring code quality.
You may find them useful if your development environment is configured to support JSHint.
If you don't use JSHint (or are using it with a configuration file), you can safely delete these two lines.
*/

/* jshint browser : true, devel : true, esversion : 6, freeze : true */
/* globals PS : true */

"use strict"; // Do NOT remove this directive!

/*
PS.init( system, options )
Called once after engine is initialized but before event-polling begins.
This function doesn't have to do anything, although initializing the grid dimensions with PS.gridSize() is recommended.
If PS.grid() is not called, the default grid dimensions (8 x 8 beads) are applied.
Any value returned is ignored.
[system : Object] = A JavaScript object containing engine and host platform information properties; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/
var currentScreen = "boot";
var score = 0;
var day = true;
var daytext = "schrodinger"
PS.init = function( system, options ) {
	// Uncomment the following code line
	// to verify operation:

	// PS.debug( "PS.init() called\n" );

	// This function should normally begin
	// with a call to PS.gridSize( x, y )
	// where x and y are the desired initial
	// dimensions of the grid.
	// Call PS.gridSize() FIRST to avoid problems!
	// The sample call below sets the grid to the
	// default dimensions (8 x 8).
	// Uncomment the following code line and change
	// the x and y parameters as needed.

	PS.gridSize( 11, 11 );
	PS.color(PS.ALL,PS.ALL,PS.COLOR_GRAY);
	currentScreen = "start";

	PS.setLevel(currentScreen);


	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.



	// Add any other initialization code you need here.
};

/*
PS.touch ( x, y, data, options )
Called when the left mouse button is clicked over bead(x, y), or when bead(x, y) is touched.
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.touch = function( x, y, data, options ) {
	// Uncomment the following code line
	// to inspect x/y parameters:
if(currentScreen === "start"){
	if (x >= 2 && x <= 8) {
		if (y === 10) {
			PS.audioPlay("fx_wilhelm");
			//PS.debug("back to start, fail 1");
			PS.setLevel("start");
		}
		if (y === 8) {
			PS.audioPlay("fx_ding");
			score++;
			//PS.debug("start level passed!")
			day  = false;
			PS.setLevel("level1")

		}
	}
}
else if (currentScreen === "level1") {
	if (x === 5 && y === 7) {
		PS.audioPlay("fx_ding");
		score++
		day = true
		PS.setLevel("level2")
	} else {
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")

		PS.setLevel("start");
	}
}
else if (currentScreen === "level2"){
		if (!(x === 5 && y === 7)){
			PS.audioPlay("fx_ding");
			score++
			day = false
			PS.setLevel("level3")
		}
		else{
			PS.audioPlay("fx_wilhelm");
			//PS.debug("back to start, fail 2")
			PS.setLevel("start");
		}
}
else if (currentScreen === "level3"){
	if ((x === 7 && y === 5)){
		PS.audioPlay("fx_ding");
		score++
		day = true;
		PS.setLevel("level4")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level4"){
	if ((x === 3 && y === 5)){
		PS.audioPlay("fx_ding");
		day = false;
		score++
		PS.setLevel("level5")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level5"){
	if ((x === 3 && y === 9)){
		PS.audioPlay("fx_ding");
		score++
		day = true
		PS.setLevel("level6")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
	else if(currentScreen === "level6"){
		if (x >= 2 && x <= 8) {
			if (y === 8) {
				PS.audioPlay("fx_wilhelm");
				//PS.debug("back to start, fail 1");
				PS.setLevel("start");
			}
			if (y === 10) {
				PS.audioPlay("fx_ding");
				score++;
				//PS.debug("start level passed!")
				day  = false;
				PS.setLevel("level7")
			}
		}
	}
else if (currentScreen === "level7"){
	if ((x === 7 && y === 9)){
		PS.audioPlay("fx_ding");
		score++
		day = false
		PS.setLevel("level8")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level8"){
	if ((x === 7 && y === 7)){
		PS.audioPlay("fx_ding");
		score++
		day = true
		PS.setLevel("level9")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level9"){
	if ((x === 5 && y === 5)){
		PS.audioPlay("fx_ding");
		score++
		day = false
		PS.setLevel("level10")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level10"){
	if ((x === 7 && y === 7)){
		PS.audioPlay("fx_ding");
		score++
		day = true
		PS.setLevel("level11")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level11"){
	if ((x === 7 && y === 9)){
		PS.audioPlay("fx_ding");
		score++
		day = false
		PS.setLevel("level12")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level12") {
	if (x === 5 && y === 7) {
		PS.audioPlay("fx_ding");
		score++
		day = true
		PS.setLevel("level13")
	} else {
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")

		PS.setLevel("start");
	}
}
else if (currentScreen === "level13"){
	if (!(x === 7 && y === 5)){
		PS.audioPlay("fx_ding");
		score++
		day = false
		PS.setLevel("level14")
	}
	else{
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")
		PS.setLevel("start");
	}
}
else if (currentScreen === "level14") {
	if (x === 5 && y === 7) {
		PS.audioPlay("fx_ding");
		score++
		day = true
		PS.setLevel("level15")
	} else {
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")

		PS.setLevel("start");
	}
}
else if (currentScreen === "level15") {
	if (x === 7 && y === 7) {
		PS.audioPlay("fx_ding");
		score++
		day = false
		PS.setLevel("win")
	} else {
		PS.audioPlay("fx_wilhelm");
		//PS.debug("back to start, fail 2")

		PS.setLevel("start");
	}
}
};



PS.setLevel = function(level){
	if(level === "start"){
		day = false
		score = 0;
	}
	PS.color(PS.ALL,PS.ALL,PS.COLOR_GRAY);
	PS.glyph(PS.ALL,PS.ALL,"")
	PS.setDay(day);
	PS.setLevelText(level);
	PS.setLevelSolution(level);
	PS.setLevelPuzzle(level);
	currentScreen = level;

}
PS.setLevelText = function(level) {
	if (level === "boot") {

	}
	else if (level === "win") {
		PS.statusText("YOU WIN!");
		PS.audioPlay("fx_tada");
	}
	else {
		PS.statusText(daytext + score.toString());
	}

}
PS.setDay = function(day){
	if(day === true){
		daytext = "It's Opposite Day! Your Score is: "
	}
	if (day === false) {
		daytext = "It isn't Opposite Day! Your Score is: "
	}
}
PS.setLevelPuzzle = function(level) {
	switch(level) {
		case "boot":
			break;
		case "start":
			PS.color(2, 8, PS.COLOR_GREEN);
			PS.glyph(2, 8, "S");
			PS.color(3, 8, PS.COLOR_GREEN);
			PS.glyph(3, 8, "T");
			PS.color(4, 8, PS.COLOR_GREEN);
			PS.glyph(4, 8, "A");
			PS.color(5, 8, PS.COLOR_GREEN);
			PS.glyph(5, 8, "R")
			PS.color(6, 8, PS.COLOR_GREEN);
			PS.glyph(6, 8, "T");
			PS.color(7, 8, PS.COLOR_GREEN);
			PS.glyph(7, 8, "!");
			PS.color(8, 8, PS.COLOR_GREEN);
			PS.glyph(8, 8, "!");
			break;
		case "level6":
			PS.color(2, 8, PS.COLOR_GREEN);
			PS.glyph(2, 8, "S");
			PS.color(3, 8, PS.COLOR_GREEN);
			PS.glyph(3, 8, "T");
			PS.color(4, 8, PS.COLOR_GREEN);
			PS.glyph(4, 8, "A");
			PS.color(5, 8, PS.COLOR_GREEN);
			PS.glyph(5, 8, "R")
			PS.color(6, 8, PS.COLOR_GREEN);
			PS.glyph(6, 8, "T");
			PS.color(7, 8, PS.COLOR_GREEN);
			PS.glyph(7, 8, "!");
			PS.color(8, 8, PS.COLOR_GREEN);
			PS.glyph(8, 8, "!");
			break;
		case "level1":
			PS.color(5,2,PS.COLOR_ORANGE);
			break;
		case "level2":
			PS.color(5,2,PS.COLOR_ORANGE);
			break;
		case "level3":
			PS.color(5,2,PS.COLOR_YELLOW);
			PS.glyph(5,2,"→")
			break;
		case "level4":
			PS.color(5,2,PS.COLOR_YELLOW);
			PS.glyph(5,2,"→")
			break;
		case "level5":
			PS.color(5,2,PS.COLOR_CYAN);
			break;
		case "level7":
			PS.glyph(5,2,"9")
			break;
		case "level8":
			PS.color(4,2,PS.COLOR_RED)
			PS.glyph(5,2,"+")
			PS.color(6,2,PS.COLOR_BLUE)
			break;
		case "level9":
			PS.color(4,2,PS.COLOR_RED)
			PS.glyph(5,2,"+")
			PS.color(6,2,PS.COLOR_BLUE)
			break;
		case "level10":
			PS.glyph(5,2,"↓")
			PS.color(5,2,PS.COLOR_RED)
			break;
		case "level11":
			PS.glyph(5,2,"↓")
			PS.color(5,2,PS.COLOR_RED)
			break;
		case "level12":
			PS.glyph(3,1,"L")
			PS.glyph(4,1,"V")
			PS.glyph(5,1,"L")
			PS.glyph(6,1,"2")
			PS.glyph(7,1,"?")
			break;
		case "level13":
			PS.glyph(3,1,"L")
			PS.glyph(4,1,"V")
			PS.glyph(5,1,"L")
			PS.glyph(6,1,"4")
			PS.glyph(7,1,"?")
			break;
		case "level14":
			PS.glyph(3,1,"R")
			PS.glyph(4,1,"O")
			PS.glyph(5,1,"C")
			PS.glyph(6,1,"K")
			PS.glyph(7,1,"!")
			break;
		case "level15":
			PS.glyph(3,1,"R")
			PS.glyph(4,1,"O")
			PS.glyph(5,1,"C")
			PS.glyph(6,1,"K")
			PS.glyph(7,1,"!")
			break;
		case "win":
			PS.color(PS.ALL,PS.ALL,PS.COLOR_YELLOW)
			PS.glyph(PS.ALL,PS.ALL,"")
			PS.glyph(3,5,"Y")
			PS.glyph(4,5,"O")
			PS.glyph(5,5,"U")
			PS.glyph(6,5,"W")
			PS.glyph(7,5,"I")
			PS.glyph(8,5,"N")
			PS.glyph(9,5,"!")
			break;
	}
}

PS.setLevelSolution = function(level) {
	switch(level){
		case "boot":
			break;
		case "start":
			PS.color(2,10,PS.COLOR_RED);
			PS.glyph(2,10,"L");
			PS.color(3,10,PS.COLOR_RED);
			PS.glyph(3,10,"E");
			PS.color(4,10,PS.COLOR_RED);
			PS.glyph(4,10,"A");
			PS.color(5,10,PS.COLOR_RED);
			PS.glyph(5,10,"V")
			PS.color(6,10,PS.COLOR_RED);
			PS.glyph(6,10,"E");
			PS.color(7,10,PS.COLOR_RED);
			PS.glyph(7,10,"!");
			PS.color(8,10,PS.COLOR_RED);
			PS.glyph(8,10,"!");
			break;
		case "level6":
			PS.color(2,10,PS.COLOR_RED);
			PS.glyph(2,10,"L");
			PS.color(3,10,PS.COLOR_RED);
			PS.glyph(3,10,"E");
			PS.color(4,10,PS.COLOR_RED);
			PS.glyph(4,10,"A");
			PS.color(5,10,PS.COLOR_RED);
			PS.glyph(5,10,"V")
			PS.color(6,10,PS.COLOR_RED);
			PS.glyph(6,10,"E");
			PS.color(7,10,PS.COLOR_RED);
			PS.glyph(7,10,"!");
			PS.color(8,10,PS.COLOR_RED);
			PS.glyph(8,10,"!");
			break;
		case "level5":
			PS.color(3, 5, PS.COLOR_YELLOW)
			PS.color(5, 5, PS.COLOR_BLUE)
			PS.color(7 ,5, PS.COLOR_RED)

			PS.color(3, 7, PS.COLOR_RED)
			PS.color(5, 7, PS.COLOR_MAGENTA)
			PS.color(7 ,7, PS.COLOR_GREEN)

			PS.color(3, 9, PS.COLOR_CYAN)
			PS.color(5, 9, PS.COLOR_WHITE)
			PS.color(7 ,9, PS.COLOR_WHITE)
			break;
		case "level14":

			PS.color(3, 7, PS.COLOR_WHITE)
			PS.glyph(3, 7, "R")

			PS.color(5, 7, PS.COLOR_WHITE)
			PS.glyph(5, 7, "P")

			PS.color(7, 7, PS.COLOR_WHITE)
			PS.glyph(7, 7, "S")

			break;
		case "level15":

			PS.color(3, 7, PS.COLOR_WHITE)
			PS.glyph(3, 7, "R")

			PS.color(5, 7, PS.COLOR_WHITE)
			PS.glyph(5, 7, "P")

			PS.color(7, 7, PS.COLOR_WHITE)
			PS.glyph(7, 7, "S")

			break;
		case "win":
			PS.color(PS.ALL,PS.ALL,PS.COLOR_YELLOW)
			PS.glyph(PS.ALL,PS.ALL,"")
			PS.glyph(3,5,"Y")
			PS.glyph(4,5,"O")
			PS.glyph(5,5,"U")
			PS.glyph(6,5,"W")
			PS.glyph(7,5,"I")
			PS.glyph(8,5,"N")
			PS.glyph(9,5,"!")
			break;
		default:
			PS.color(3, 5, PS.COLOR_BLUE)
			PS.color(5, 5, PS.COLOR_YELLOW)
			PS.color(7 ,5, PS.COLOR_RED)

			PS.color(3, 7, PS.COLOR_GREEN)
			PS.color(5, 7, PS.COLOR_ORANGE)
			PS.color(7 ,7, PS.COLOR_MAGENTA)

			PS.color(3, 9, PS.COLOR_BLACK)
			PS.color(5, 9, PS.COLOR_CYAN)
			PS.color(7 ,9, PS.COLOR_WHITE)
			break;

	}
}
/*
PS.release ( x, y, data, options )
Called when the left mouse button is released, or when a touch is lifted, over bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.release = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.release() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse button/touch is released over a bead.
};

/*
PS.enter ( x, y, button, data, options )
Called when the mouse cursor/touch enters bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.enter = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.enter() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch enters a bead.
};

/*
PS.exit ( x, y, data, options )
Called when the mouse cursor/touch exits bead(x, y).
This function doesn't have to do anything. Any value returned is ignored.
[x : Number] = zero-based x-position (column) of the bead on the grid.
[y : Number] = zero-based y-position (row) of the bead on the grid.
[data : *] = The JavaScript value previously associated with bead(x, y) using PS.data(); default = 0.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exit = function( x, y, data, options ) {
	// Uncomment the following code line to inspect x/y parameters:

	// PS.debug( "PS.exit() @ " + x + ", " + y + "\n" );

	// Add code here for when the mouse cursor/touch exits a bead.
};

/*
PS.exitGrid ( options )
Called when the mouse cursor/touch exits the grid perimeter.
This function doesn't have to do anything. Any value returned is ignored.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.exitGrid = function( options ) {
	// Uncomment the following code line to verify operation:

	// PS.debug( "PS.exitGrid() called\n" );

	// Add code here for when the mouse cursor/touch moves off the grid.
};

/*
PS.keyDown ( key, shift, ctrl, options )
Called when a key on the keyboard is pressed.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyDown = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is pressed.
};

/*
PS.keyUp ( key, shift, ctrl, options )
Called when a key on the keyboard is released.
This function doesn't have to do anything. Any value returned is ignored.
[key : Number] = ASCII code of the released key, or one of the PS.KEY_* constants documented in the API.
[shift : Boolean] = true if shift key is held down, else false.
[ctrl : Boolean] = true if control key is held down, else false.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
*/

PS.keyUp = function( key, shift, ctrl, options ) {
	// Uncomment the following code line to inspect first three parameters:

	// PS.debug( "PS.keyUp(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );

	// Add code here for when a key is released.
};

/*
PS.input ( sensors, options )
Called when a supported input device event (other than those above) is detected.
This function doesn't have to do anything. Any value returned is ignored.
[sensors : Object] = A JavaScript object with properties indicating sensor status; see API documentation for details.
[options : Object] = A JavaScript object with optional data properties; see API documentation for details.
NOTE: Currently, only mouse wheel events are reported, and only when the mouse cursor is positioned directly over the grid.
*/

PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

//	 var device = sensors.wheel; // check for scroll wheel
//
//	 if ( device ) {
//	   PS.debug( "PS.input(): " + device + "\n" );
//	 }

	// Add code here for when an input event is detected.
};

