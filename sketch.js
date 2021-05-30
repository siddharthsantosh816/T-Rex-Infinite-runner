var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sun,sunImg;
var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloudsGroup, cloudImage;
var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5;
var collideSound, jumpSound;
var obsX, cldX;

var score=0,vCheck =1;
var gameOver, restart;
var touches =[];
var games,objects;

function preload(){
  trex_running =   loadAnimation('images/trex1.png','images/trex3.png','images/trex4.png');
  trex_collided = loadAnimation('images/trex_collided.png');
  sunImg = loadImage('images/sun.png');

  
  groundImage = loadImage('images/ground2.png');
  
  cloudImage = loadImage('images/cloud.png');
  
  obstacle1 = loadImage('images/obstacle1.png');
  obstacle2 = loadImage('images/obstacle2.png');
  obstacle3 = loadImage('images/obstacle3.png');
  obstacle4 = loadImage('images/obstacle4.png');
  obstacle5 = loadImage('images/obstacle5.png');
    
  gameOverImg = loadImage('images/gameOver.png');
  
  restartImg = loadImage('images/restart.png');
  jumpSound = loadSound('images/jump.wav');
  collideSound = loadSound('images/collided.wav');
}

function setup() {
  createCanvas(displayWidth, displayHeight-130);
  games=new Game();
  games.start();
  score = 0;
  obsX = 0;
  cldX=0;
}

function draw() {
  background(170,206,251);
  textSize(20);
  text("Score: "+score, sun.x-200,50);
  //console.log(score);
  image(groundImage,-displayWidth/2,displayHeight-160,displayWidth*500,40);
 
  drawSprites();
  if(gameState === PLAY) {
      games.plays();
  }
  if(gameState=== END) {
    games.ends();
    if(mousePressedOver(restart)) {
         games.restart();
         
      }
    }
  }
   
