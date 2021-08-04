
var trex, trex_running;
var ground_image;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  ground_image = loadImage("ground2.png");
  
}

function setup() {

  createCanvas(600,200);
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running)
  edges = createEdgeSprites();
  trex.scale = 0.5;
  trex.x = 50;

  ground = createSprite (200,180,400,20);
  ground.addImage ("ground", ground_image);
  
 ground.x = ground.width/2;
 
 
}

function draw() 
{
  background(255);
  ground.velocityX = -2;
  console.log("Trex Runner");
  console.log(trex.y);
  console.log(ground.x);
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  trex.velocityY = trex.velocityY + 0.5;
  trex.collide(ground);
  trex.collide(edges[3]);
  drawSprites();
}




