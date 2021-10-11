// initial level value
let level = 1;
let htmlLevel = document.querySelector('.level');
htmlLevel.innerHTML = level;

// Enemies our player must avoid
var Enemy = function(x,y,speed) {
  // Variables applied to each of our instances go here,
  // load images
   this.sprite = 'images/enemy-bug.png';
   this.x = x;
   this.y = y;
   this.speed = speed;
   this.width = 50;
   this.height = 50;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // Multiply by the dt parameter to ensure
  // the game runs at the same speed for all computers
  this.x += this.speed*dt;
  // if the enemies reach the right end of the canvas ==> move'em back to thier initial locations
  if(this.x > 500){
    this.x = 1;
    this.speed = Math.floor(Math.random() * 30) + 20 * level;
  }
/*
 Collision detection resource

https://medium.com/@hemalatha.psna/collision-detection-in-javascript-efafe8bba2c0
*/
// When collision occurs set the level to 1, and move the player back to the initial location
if(this.x < player.x + player.width && this.x + this.width > player.x &&
this.y < player.y + player.height && this.y + this.height > player.y
){
 level = 1;
 htmlLevel.innerHTML = level;
 player.x = 200;
 player.y = 400;
}

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
  // Variables applied to each of our instances go here,
  // load images
   this.sprite = 'images/char-boy.png';
   this.x = x;
   this.y = y;
   this.width = 50;
   this.height = 50;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (allowedKey) {
  switch (allowedKey) {
    case 'up':
     this.y = this.y - 90;
     if(this.y < 40){
       level++;
       htmlLevel.innerHTML = level;
       this.y = 400;
     }
     break;
     case 'down':
       if(this.y < 400){
           this.y = this.y + 90;
       }
      break;
      case 'left':
      if(this.x > 20){
        this.x = this.x - 90;
      }
       break;
       case 'right':
       if(this.x < 380){
         this.x = this.x + 90;
       }
        break;
  }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
let allEnemies = [
  new Enemy(1,230,Math.floor(Math.random() * 30) + 20),
  new Enemy(1,140,Math.floor(Math.random() * 30) + 20),
  new Enemy(1,60,Math.floor(Math.random() * 30) + 20)
];

// Place the player object in a variable called player
let player = new Player(200,400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
