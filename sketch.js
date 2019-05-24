var player;
var block = [];
var b;
var resta;
var resta2;
var resta3;

function setup() {
  createCanvas(800, 600);
  player = new Player();
  b = new Ball();
  resta = new Resta;
  resta2 = new Resta2;
  resta3 = new Resta3;
  for(var i = 0; i < 6; i++)
  for(var j = 0; j < 12; j++)
    block.push(new Block(j*80,i*40));
}

function draw() {
  background(0);
  resta.show();
  resta2.show();
  resta3.show();
  player.move();
  player.show();
  b.move();
  for(var i = 0; i < block.length; i++){
    block[i].show();
    if(b.collision(block[i])){
      b.vy = - b.vy;
      block.splice(i,1);
    }
    
  
}
if(b.collision(player))
  b.vy = - b.vy;
if(b.y < 0)
  b.vy = - b.vy;
b.show();
}