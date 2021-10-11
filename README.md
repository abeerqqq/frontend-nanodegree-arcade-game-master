# 🏃 Classic Arcade Game Clone 🐛

## Table of Contents 🔍

* [GENERAL](#general)
* [PROPERTIES](#properties)
* [METHODS](#methods)
* [HOW THE GAME WORKS](#how-the-game-works)
* [HOW TO RUN THE GAME](#how-to-run-the-game)

## GENERAL
  This game is written with HTML\CSS\JavaScript.
It contains canvas with three rows: Grass , Stones, Water.
this game also include two important objects: Enemy and Player.


## PROPERTIES
Multiple properties included with each constructor As:

 * X and y coordinates for both the player and the enemies.
 * Sprite which is necessary for setting the objects images.
 * Speed for the Enemy which is necessary for setting the speed for the enemy objects.


## METHODS
Multiple methods are also necessary for the game to work such as:

 * **update()**
  1. Makes the enemies move along the x axis and the speed increases as the level increase.
  2. Update the enemies locations once they reach the right end of the canvas the method will move them back to the left end.
  3. Collision detection.
  4. Update the level once collision occurs, the value of the level variable will be 1.  
  5. Move the player back to the initial location when collision occurs.

 * **render()**

   For both Enemy and Player. It draw the enemies and the player on the screen.

 * **handleInput()**

   just for the Player.
   It receives the user input and move the player according to the pressed key
   But it involves restrictions for the movement (The player won't be able to move outside the canvas).
   Once the player reach the water the level will increase by one and the player
   move back to the initial location.

##  HOW THE GAME WORKS
  The player will be in its initial location and the enemies will keep on moving along the x axis.
  The player can move up, down, left and right *inside the canvas*.
 Once the player reaches the water it will be considered a win and the level increases by 1.
  The player must avoid  the enemies.

##  HOW TO RUN THE GAME
  1. Open index.html file.
  2. Start moving the player by pressing the keyboard arrows (left, right, up and down).
  3. Avoid the collision with bugs to win the game.
