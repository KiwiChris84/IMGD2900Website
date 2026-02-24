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
var eel
var carbattery_red
var carbattery_yellow
var redspawn
var yellowspawn
var score = 0
var scoretext
var respawn
var seed = 0
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

	redspawn = PS.random(18)
	yellowspawn = PS.random(18)

	PS.gridSize( 20, 20 );
	PS.color(PS.ALL,PS.ALL, 0xDEF4FC)
	PS.color(PS.ALL,19,0xC2B280)
	PS.color(PS.ALL,0,0x87CEEB)
	PS.color(5,17, PS.COLOR_GREEN)
	PS.color(4,16, PS.COLOR_GREEN)
	PS.color(4,18, PS.COLOR_GREEN)
	PS.color(PS.ALL,1, 0xE8E4C9)
	PS.color(0,1,0x87CEEB)
	PS.color(1,1,0x87CEEB)
	PS.color(2,1,0x87CEEB)
	PS.color(18,1,0x87CEEB)
	PS.color(19,1,0x87CEEB)
	PS.color(PS.ALL,2, 0xE8E4C9)
	PS.color(0,2,0x87CEEB)
	PS.color(1,2,0x87CEEB)
	PS.color(2,2,0x87CEEB)
	PS.color(3,2,0x87CEEB)
	PS.color(17,2,0x87CEEB)
	PS.color(18,2,0x87CEEB)
	PS.color(19,2,0x87CEEB)
	eel = PS.spriteSolid(3,1)
	PS.spriteSolidColor(eel,PS.COLOR_GRAY)
	PS.spriteMove(eel, 10, 15);

	carbattery_red = PS.spriteSolid(1,1)
	PS.spriteSolidColor(carbattery_red,PS.COLOR_RED)
	PS.spriteMove(carbattery_red, redspawn,2);

	carbattery_yellow = PS.spriteSolid(1,1)
	PS.spriteSolidColor(carbattery_yellow,PS.COLOR_YELLOW)
	PS.spriteMove(carbattery_yellow, yellowspawn,2);

	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

	PS.statusText("RECHARGE THE ELECTRIC EEL!")

	PS.timerStart(PS.DEFAULT, function(){
		seed = Number(PS.elapsed())
		PS.seed(seed);
		respawn = PS.random(18)
		if(PS.spriteMove(carbattery_yellow).y < 18) {
		setTimeout(function(){

			PS.spriteMove(carbattery_yellow, PS.spriteMove(carbattery_yellow).x,PS.spriteMove(carbattery_yellow).y + 1)
			PS.recolor()
		},100)

		}
		else{
			setTimeout(function(){
				PS.spriteMove(carbattery_yellow, respawn,1)
				//PS.recolor()
			},100)

		}
		if(PS.spriteMove(carbattery_red).y < 18) {
			setTimeout(function(){

				PS.spriteMove(carbattery_red, PS.spriteMove(carbattery_red).x,PS.spriteMove(carbattery_red).y + 1)
				PS.recolor()
			},50)

		}
		else{
			setTimeout(function(){
				PS.spriteMove(carbattery_red, respawn,1)
				//PS.recolor()
			},50)

		}

	})
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

	// PS.debug( "PS.touch() @ " + x + ", " + y + "\n" );

	// Add code here for mouse clicks/touches
	// over a bead.

};

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

	 //PS.debug( "PS.keyDown(): key=" + key + ", shift=" + shift + ", ctrl=" + ctrl + "\n" );


	// Add code here for when a key is pressed.
	if(key === 113) {
		PS.color(PS.spriteMove(eel).x - 1, 14, PS.COLOR_YELLOW)
		PS.color(PS.spriteMove(eel).x + 1, 14, PS.COLOR_YELLOW)
		PS.color(PS.spriteMove(eel).x, 14, PS.COLOR_YELLOW)
		PS.color(PS.spriteMove(eel).x - 1, 16, PS.COLOR_YELLOW)
		PS.color(PS.spriteMove(eel).x + 1, 16, PS.COLOR_YELLOW)
		PS.color(PS.spriteMove(eel).x, 16, PS.COLOR_YELLOW)
		if(PS.color(PS.spriteMove(carbattery_yellow).x,PS.spriteMove(carbattery_yellow).y + 1) === PS.COLOR_YELLOW){
			score++
			PS.spriteMove(carbattery_yellow, respawn,1)
			PS.audioPlay("fx_bucket")
		}
		setTimeout(function () {
			PS.audioPlay("fx_scratch")
			PS.recolor()
		}, 100)
	}
	if(key === 101) {
		PS.color(PS.spriteMove(eel).x - 1, 14, PS.COLOR_RED)
		PS.color(PS.spriteMove(eel).x + 1, 14, PS.COLOR_RED)
		PS.color(PS.spriteMove(eel).x, 14, PS.COLOR_RED)
		PS.color(PS.spriteMove(eel).x - 1, 16, PS.COLOR_RED)
		PS.color(PS.spriteMove(eel).x + 1, 16, PS.COLOR_RED)
		PS.color(PS.spriteMove(eel).x, 16, PS.COLOR_RED)
		if(PS.color(PS.spriteMove(carbattery_red).x,PS.spriteMove(carbattery_red).y + 1) === PS.COLOR_RED){
			score++
			PS.spriteMove(carbattery_red, respawn,1)
			PS.audioPlay("fx_bucket")
		}

		setTimeout(function () {
			PS.audioPlay("fx_scratch")
			PS.recolor()
		}, 100)
	}


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
PS.recolor = function(){
	PS.color(PS.ALL,PS.ALL,0xDEF4FC)
	PS.alpha(PS.ALL, PS.ALL,255)

	PS.color(PS.ALL,19,0xC2B280)
	PS.color(5,17, PS.COLOR_GREEN)
	PS.color(4,16, PS.COLOR_GREEN)
	PS.color(4,18, PS.COLOR_GREEN)

	PS.color(10,16, PS.COLOR_GREEN)
	PS.color(11,17, PS.COLOR_GREEN)
	PS.color(12,18, PS.COLOR_GREEN)
	scoretext = score.toString()
	PS.color(PS.ALL,0,0x87CEEB)
	PS.color(PS.ALL,1, 0xE8E4C9)
	PS.color(0,1,0x87CEEB)
	PS.color(1,1,0x87CEEB)
	PS.color(2,1,0x87CEEB)
	PS.color(18,1,0x87CEEB)
	PS.color(19,1,0x87CEEB)
	PS.color(PS.ALL,2, 0xE8E4C9)
	PS.color(0,2,0x87CEEB)
	PS.color(1,2,0x87CEEB)
	PS.color(2,2,0x87CEEB)
	PS.color(3,2,0x87CEEB)
	PS.color(17,2,0x87CEEB)
	PS.color(18,2,0x87CEEB)
	PS.color(19,2,0x87CEEB)
	PS.spriteSolidColor(eel,PS.COLOR_GRAY)
	PS.spriteSolidAlpha(eel,255)
	PS.color(PS.spriteMove(eel).x - 1,PS.spriteMove(eel).y, PS.COLOR_GRAY)
	PS.color(PS.spriteMove(eel).x + 1,PS.spriteMove(eel).y, PS.COLOR_GRAY)
	PS.color(PS.spriteMove(eel).x,PS.spriteMove(eel).y, PS.COLOR_GRAY)

	PS.spriteSolidColor(carbattery_red,PS.COLOR_RED)
	PS.spriteSolidAlpha(carbattery_red,255)
	PS.color(PS.spriteMove(carbattery_red).x,PS.spriteMove(carbattery_red).y, PS.COLOR_RED)

	PS.spriteSolidColor(carbattery_yellow,PS.COLOR_YELLOW)
	PS.spriteSolidAlpha(carbattery_yellow,255)
	PS.color(PS.spriteMove(carbattery_yellow).x,PS.spriteMove(carbattery_yellow).y, PS.COLOR_YELLOW)
	PS.statusText("CAR BATTERIES COLLECTED: " + scoretext)
}
PS.input = function( sensors, options ) {
	// Uncomment the following code lines to inspect first parameter:

	var device = sensors.wheel; // check for scroll wheel
var offset
	if(device === PS.WHEEL_BACKWARD){
		offset = PS.spriteMove(eel).x - 1
		if(offset > 0){
			PS.spriteMove(eel,offset, PS.spriteMove(eel).y)
		}
		PS.recolor()
	}
	if(device === PS.WHEEL_FORWARD){
		offset = PS.spriteMove(eel).x + 1
		if(offset < 19){
		PS.spriteMove(eel,offset, PS.spriteMove(eel).y)
		}
		PS.recolor()
	}
	//  if ( device ) {
	//    PS.debug( "PS.input(): " + device + "\n" );
 // }
};

