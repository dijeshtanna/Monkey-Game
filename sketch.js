
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var blank, blankImage,white

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = 
    loadImage("rock-1.png");
 blankImage = loadImage("AAAABfTWSe7ZdX58pYgd5ps2GbI93QUKTIesqgUb8wPJxGa6xOsJXZOBhLFkIhIwZYS0hXZllJCzIIMC1B_vrI7ydpFw9B1l0QV0cqcR.png")
}



function setup() {
  //creating monkey
monkey=createSprite(80,315, 20,20);
monkey.addAnimation("moving", monkey_running);
monkey.scale=0.1
 ground = createSprite(400,350,900,10);
ground.velocityx=-4;
ground.x=ground.width/2;
console.log(ground.x);
  


  obstaclesGroup = new Group();
  FoodGroup = new Group();
  
}


function draw() { 
background(rgb(257,257,257));
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  
if(monkey.isTouching(FoodGroup)){
  FoodGroup.destroyEach();
  
}
  
  if(monkey.isTouching(obstaclesGroup)){
monkey.visible = false;
    whiteImage();
    blankImg();
}

  
  if(keyDown(                                                 "space")){
    monkey.velocityY = -17;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);                                       
                                              
  console.log(monkey.y)                                         
                          
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
   text("Survival Time: "+ survivalTime, 100,50); 
  
        spawnObstacles();
  spawnFood();

  drawSprites();
}

function whiteImage(){
  white = createSprite(170,50,200,70);
  white.shapeColour = "White";
}

function spawnObstacles(){
 if (frameCount % 120 === 0){
   obstacle = createSprite(600,280,10,10);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   obstacle.scale = 0.1;
   obstacle.collide(ground); 
   obstacle.setCollider("circle", 0, 0, 180);
 obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
}
}

function spawnFood(){
  if (frameCount % 80 === 0){
    banana = createSprite(420,180,10,20)
    banana.velocityX = -6;
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(100,180 ))
    banana.lifetime = 400
      FoodGroup.add(banana);

  }
}
function blankImg(){
  blank = createSprite(150,50,100,50);
  blank.addImage(blankImage);
  blank.scale = 0.1;
}