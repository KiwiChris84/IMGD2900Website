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
let dingCount = 0;
let maxDings = 45;
PS.resetToyAppearance = function () {

	PS.color(PS.ALL,PS.ALL,0xF5F5DC);


	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.
	let result =  dingCount.toString();
	let randomNumber = Math.floor((Math.random() * (46 - 1) + 1));
	let quote = ""
	switch (randomNumber) {
		case(randomNumber = 1):
			quote = QUOTES.one;
			break;
		case(randomNumber = 2):
			quote = QUOTES.two;
			break;
		case(randomNumber = 3):
			quote = QUOTES.three;
			break;
		case(randomNumber = 4):
			quote = QUOTES.four;
			break;
		case(randomNumber = 5):
			quote = QUOTES.five;
			break;
		case(randomNumber = 6):
			quote = QUOTES.six;
			break;
		case(randomNumber = 7):
			quote = QUOTES.seven;
			break;
		case(randomNumber = 8):
			quote = QUOTES.eight;
			break;
		case(randomNumber = 9):
			quote = QUOTES.nine;
			break;
		case(randomNumber = 10):
			quote = QUOTES.ten;
			break;
		case(randomNumber = 11):
			quote = QUOTES.eleven;
			break;
		case(randomNumber = 12):
			quote = QUOTES.twelve;
			break;
		case(randomNumber = 13):
			quote = QUOTES.thirteen;
			break;
		case(randomNumber = 14):
			quote = QUOTES.fourteen;
			break;
		case(randomNumber = 15):
			quote = QUOTES.fifteen;
			break;
		case(randomNumber = 16):
			quote = QUOTES.sixteen;
			break;
		case(randomNumber = 17):
			quote = QUOTES.seventeen;
			break;
		case(randomNumber = 18):
			quote = QUOTES.eighteen;
			break;
		case(randomNumber = 19):
			quote = QUOTES.nineteen;
			break;
		case(randomNumber = 20):
			quote = QUOTES.twenty;
			break;
		case(randomNumber = 21):
			quote = QUOTES.twentyone;
			break;
		case(randomNumber = 22):
			quote = QUOTES.twentytwo;
			break;
		case(randomNumber = 23):
			quote = QUOTES.twentythree;
			break;
		case(randomNumber = 24):
			quote = QUOTES.twentyfour;
			break;
		case(randomNumber = 25):
			quote = QUOTES.twentyfive;
			break;
		case(randomNumber = 26):
			quote = QUOTES.twentysix;
			break;
		case(randomNumber = 27):
			quote = QUOTES.twentyseven;
			break;
		case(randomNumber = 28):
			quote = QUOTES.twentyeight;
			break;
		case(randomNumber = 29):
			quote = QUOTES.twentynine;
			break;
		case(randomNumber = 30):
			quote = QUOTES.thirty;
			break;
		case(randomNumber = 31):
			quote = QUOTES.thirtyone;
			break;
		case(randomNumber = 32):
			quote = QUOTES.thirtytwo;
			break;
		case(randomNumber = 33):
			quote = QUOTES.thirtythree;
			break;
		case(randomNumber = 34):
			quote = QUOTES.thirtyfour;
			break;
		case(randomNumber = 35):
			quote = QUOTES.thirtyfive;
			break;
		case(randomNumber = 36):
			quote = QUOTES.thirtysix;
			break;
		case(randomNumber = 37):
			quote = QUOTES.thirtyseven;
			break;
		case(randomNumber = 38):
			quote = QUOTES.thirtyeight;
			break;
		case(randomNumber = 39):
			quote = QUOTES.thirtynine;
			break;
		case(randomNumber = 40):
			quote = QUOTES.fourty;
			break;
		case(randomNumber = 41):
			quote = QUOTES.fourtyone;
			break;
		case(randomNumber = 42):
			quote = QUOTES.fourtytwo;
			break;
		case(randomNumber = 43):
			quote = QUOTES.fourtythree;
			break;
		case(randomNumber = 44):
			quote = QUOTES.fourtyfour;
			break;
		case(randomNumber = 45):
			quote = QUOTES.fourtyfive;
			break;
		case(randomNumber = 46):
			quote = QUOTES.fourtysix;
			break;
		case(randomNumber < 1 || randomNumber > 46 ):
			quote = QUOTES.fourtyfive;
			break;


	}

	PS.statusText(quote + " " + result);
	PS.color( 8, 8, DING.BUTTON);
	PS.color( 9, 8, DING.BUTTON);
	PS.color( 10, 8, DING.BUTTON);
	PS.color( 11, 8, DING.BUTTON);
	PS.color( 9, 9, DING.BELL);
	PS.color( 10, 9, DING.BELL);
	// Add any other initialization code you need here.
	//PS.color(8,5,PS.COLOR_YELLOW)
	for(let i= 1; i < 19; i++) {
		PS.color(i,19,DING.BUTTON)
		PS.color(i,18,DING.BELL)
	}
	for(let i= 2; i < 18; i++) {
		PS.color(i,17,DING.BELL)
		PS.color(i,16,DING.BELL)
		PS.color(i,15,DING.BELL)
	}
	for(let i= 3; i < 17; i++) {
		PS.color(i,13,DING.BELL)
		PS.color(i,14,DING.BELL)
	}
	for(let i= 4; i < 16; i++) {
		PS.color(i,12,DING.BELL)
	}
	for(let i= 5; i < 15; i++) {
		PS.color(i,11,DING.BELL)
	}
	for(let i= 6; i < 14; i++) {
		PS.color(i,10,DING.BELL)
	}

}
let DING ={
	BUTTON: 0xAD8621,
	BELL : 0xD7BE69,
	isDingable : true,
}
let QUOTES ={
	one: "Yeah, science!",
	two: "He defecated through a sunroof!",
	three: "I NEED TO SEE YOUR BOSS!",
	four: "SALAMANCA BLOOD!",
	five: "SALAMANCA MONEY!",
	six: "Woodrow Wilson? Willy Wonka?",
	seven: "My name is Skyler White, yo!",
	eight: "Werner Ziegler. Werner Ziegler.",
	nine: "Here's whats gonna happen.",
	ten: "Keep Huell happy.",
	eleven: "Yeah. Where they live. The cows.",
	twelve: "The virtues of child poisoning",
	thirteen: "Look at me Hector.",
	fourteen: "Are we on the planet Saturn?",
	fifteen: "Why the hell are we making meth?",
	sixteen: "A fly?",
	seventeen: "Rice and beans?",
	eighteen: "Ah, WIREEEEEEE.",
	nineteen: "Mr. White.",
	twenty: "Jesse.",
	twentyone: "Why are you blue?",
	twentytwo: "Tight, tight tight.",
	twentythree: "Go Land Crabs!",
	twentyfour: "Pimento cheese sandwich.",
	twentyfive: "Better Call Saul!",
	twentysix: "I will kill your infant daughter.",
	twentyseven: "Welcome to Los Pollos Hermanos.",
	twentyeight: "Petty with a prior.",
	twentynine: "Sir, if you have a complaint..",
	thirty: "You're slipping Jimmy!",
	thirtyone: "Chicanery.",
	thirtytwo: "I AM NOT CRAZY!",
	thirtythree: "A robot?",
	thirtyfour: "Pop Corners!",
	thirtyfive: "Blow my magic flute.",
	thirtysix: "Some of my finest Schraderbrau.",
	thirtyseven: "Zafiero Anejo.",
	thirtyeight: "Veggie bacon.",
	thirtynine: "Greatest legal mind I ever knew.",
	fourty: "It's a barrel, it rolls.",
	fourtyone: "Reasonably.",
	fourtytwo: "THE BOSS CAN SUCK ME!",
	fourtythree: "I had to drink my own pee.",
	fourtyfour: "Roll me further.",
	fourtyfive: "Bitch. - Jesse Pinkman",
	fourtysix: "Don't drink and drive, but if you do, call me."



}
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



	PS.gridSize( 20, 20);
	PS.color(PS.ALL,PS.ALL,0xF5F5DC);


	// This is also a good place to display
	// your game title or a welcome message
	// in the status line above the grid.
	// Uncomment the following code line and
	// change the string parameter as needed.

PS.resetToyAppearance();
};
PS.bellAnim = function (){

	PS.color(8,8,0xF5F5DC)
	PS.color(9,8,0xF5F5DC)
	PS.color(10,8,0xF5F5DC)
	PS.color(11,8,0xF5F5DC)
	PS.color(8,9,DING.BUTTON)
	PS.color(11,9,DING.BUTTON)
	PS.color(10,9,DING.BUTTON)
	PS.color(9,9,DING.BUTTON)
	setTimeout(function(){
		PS.resetToyAppearance();
	},10)
}
PS.explodeAnim = function () {


	PS.color(PS.ALL,PS.ALL,PS.COLOR_YELLOW);
	PS.color(1,1,PS.COLOR_RED);
	PS.color(1,2,PS.COLOR_RED);
	PS.color(1,3,PS.COLOR_RED)
	PS.color(1,4,PS.COLOR_RED)
	PS.color(2,2,PS.COLOR_RED)
	PS.color(2,4,PS.COLOR_RED)
	PS.color(3,2,PS.COLOR_RED)
	PS.color(3,3,PS.COLOR_RED)
	PS.color(3,4,PS.COLOR_RED)

	PS.color(4,5,PS.COLOR_RED)
	PS.color(4,6,PS.COLOR_RED)
	PS.color(4,7,PS.COLOR_RED)
	PS.color(5,5,PS.COLOR_RED)
	PS.color(5,7,PS.COLOR_RED)
	PS.color(6,5,PS.COLOR_RED)
	PS.color(6,6,PS.COLOR_RED)
	PS.color(6,7,PS.COLOR_RED)

	PS.color(7,8,PS.COLOR_RED)
	PS.color(7,9,PS.COLOR_RED)
	PS.color(7,10,PS.COLOR_RED)
	PS.color(8,8,PS.COLOR_RED)
	PS.color(8,10,PS.COLOR_RED)
	PS.color(9,8,PS.COLOR_RED)
	PS.color(9,9,PS.COLOR_RED)
	PS.color(9,10,PS.COLOR_RED)

	PS.color(10,11,PS.COLOR_RED)
	PS.color(10,12,PS.COLOR_RED)
	PS.color(10,13,PS.COLOR_RED)
	PS.color(11,11,PS.COLOR_RED)
	PS.color(12,11,PS.COLOR_RED)
	PS.color(12,12,PS.COLOR_RED)
	PS.color(12,13,PS.COLOR_RED)
	PS.color(13,11,PS.COLOR_RED)
	PS.color(14,11,PS.COLOR_RED)
	PS.color(14,12,PS.COLOR_RED)
	PS.color(14,13,PS.COLOR_RED)

	PS.color(16,1,PS.COLOR_RED)
	PS.color(16,2,PS.COLOR_RED)
	PS.color(16,3,PS.COLOR_RED)
	PS.color(16,4,PS.COLOR_RED)
	PS.color(16,5,PS.COLOR_RED)
	PS.color(16,6,PS.COLOR_RED)
	PS.color(16,7,PS.COLOR_RED)
	PS.color(16,8,PS.COLOR_RED)
	PS.color(16,9,PS.COLOR_RED)
	PS.color(16,10,PS.COLOR_RED)
	PS.color(16,11,PS.COLOR_RED)
	PS.color(16,12,PS.COLOR_RED)
	PS.color(16,14,PS.COLOR_RED)
	PS.color(16,15,PS.COLOR_RED)
	PS.color(16,16,PS.COLOR_RED)


	setTimeout(PS.resetToyAppearance,2500)
	setTimeout(function (){
		DING.isDingable = true;
	},2500)
}
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
   // PS.color( x, y, PS.COLOR_YELLOW );
	if (DING.isDingable === true) {
		if (dingCount >= maxDings) {
			DING.isDingable = false;
			setTimeout(function () {
				PS.audioPlay("fx_wilhelm");
				PS.explodeAnim();
			}, 1000);
			setTimeout(function () {
				PS.audioPlay("fx_blast1");
				PS.audioPlay("fx_bucket");
				PS.audioPlay("fx_bang");
			}, 2000)
			dingCount = 0;
		}
		else if ((y === 8) && (x === 8)) {
			PS.audioPlay("fx_ding")
			dingCount++
			PS.bellAnim();
		}
		else if ((y === 8) && (x === 9)) {
			PS.audioPlay("fx_ding")
			dingCount++
			PS.bellAnim();
		}
		else if ((y === 8) && (x === 10)) {
			PS.audioPlay("fx_ding")
			dingCount++
			PS.bellAnim();
		}
		else if ((y === 8) && (x === 11)) {
			PS.audioPlay("fx_ding")
			dingCount++
			PS.bellAnim();
		}

	}
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
	if (dingCount >= maxDings) {
		DING.isDingable = false;
		setTimeout(function () {
			PS.audioPlay("fx_wilhelm");
			PS.explodeAnim();
		}, 1000);
		setTimeout(function () {
			PS.audioPlay("fx_blast1");
			PS.audioPlay("fx_bucket");
			PS.audioPlay("fx_bang");
		}, 2000)
		dingCount = 0;
	}
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

