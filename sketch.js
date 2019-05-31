var player;
var block = [];
var b;
var resta;
var resta2;
var resta3;
var ballCollision;
var music;
var blockBoom;
var effect
var stars = [];

var speed;
var playerScore = 0;


function preload(){
     music = loadSound("music/Boomopera.mp3")
     ballCollision =loadSound("sound/pistol/Ball.mp3")
     blockBoom =loadSound("sound/pistol/pop.mp3")
     effect =loadSound("sound/pistol/Pistol.mp3")
   
}

function setup() {
  createCanvas(800, 600);
    for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
  music.play();
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
    speed = map(150,0, width, 0, 50);
  background(0);
  translate(width / 0, height / 0);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
  resta.show();
  resta2.show();
  resta3.show();
  player.move();
  player.show();
  b.move();
  for(var i = 0; i < block.length; i++){
    block[i].show();
    if(b.collision(block[i])){
      blockBoom.play();
      b.vy = - b.vy;
      block.splice(i,1);
      playerScore = playerScore + 1;
      
    }
    
       textSize(22)
    fill(255)
    text(`Score:${playerScore}`, width - 165, 20)
    
  
}
if(b.collision(player))
  b.vy = - b.vy;
if(b.y < 0)
  b.vy = - b.vy;
b.show();
  
if(b.collision(player))
  ballCollision.play();
  
  
  
  
 
}