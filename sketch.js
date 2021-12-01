var path,boy,coin,bomb,energyDrink,leftBoundary,rightBoundary;
var pathImg,boyImg, coinImg, energyImg, bombImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  coinImg = loadImage("coin.png");
  energyImg = loadImage("energyDrink.png");
  bombImg = loadImage("bomb.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.08;
boy.addAnimation("JakeRunning",boyImg);
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createCoin();
    } else if (select_sprites == 2) {
      createBomb();
    }else {
      createEnergy();
    }
  }

}

function createCoin() {
  coin = createSprite(random(50, 350),40, 10, 10);
  coin.addImage(coin.Img);
  coin.scale=0.07;
  coin.velocityY = 3;
  coin.lifetime = 150;
    
  }
  
  function createBomb() {
  bomb = createSprite(random(50, 350),40, 10, 10);
  bomb.addImage(bombImg);
  bomb.scale=0.08;
  bomb.velocityY = 3;
  bomb.lifetime = 150;
  }
  
  function createEnergy() {
  energyDrink = createSprite(random(50, 350),40, 10, 10);
  energyDrink.addImage(energyImg);
  energyDrink.scale=0.06;
    energyDrink.velocityY = 3;
  energyDrink.lifetime = 150;
  }