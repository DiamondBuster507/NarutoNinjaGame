var PLAY = 1;
var END = 0;
var gameState = PLAY;
var gameOver, gameOverImg;


var naruto, narutoImg;
var shurikenGroup, shuriken, shurikenImg;
var madaraGroup, madara, madaraImg;
var orichimaruGroup, orichimaru, orichimaruImg;
var painGroup, pain, painImg;
var cashG, cash;

var villageImg;

var score;


function preload(){
// load objects start
narutoImg = loadImage("ninja.png")
shurikenImg = loadImage("shurikenNaruto.png")
madaraImg = loadImage("madara.png")
painImg = loadImage("pain.png")
orichimaruImg = loadImage("orochimaru.png")
cashImg = loadImage("cash.png")

villageImg = loadImage("village.jpeg")
gameOverImg = loadImage("game over.jpeg")
}

function setup() {
createCanvas(1120,600);

village = createSprite(400,400,20,20);
village.addImage(villageImg);
village.scale=0.75;
village.velocityY = 4;

naruto = createSprite(510,530,20,20);
naruto.addImage(narutoImg)
naruto.scale = 0.08;

gameOver = createSprite(550,290,20,20);
gameOver.addImage(gameOverImg);

  painGroup=new Group();
  orichimaruGroup=new Group();
  madaraGroup=new Group();
  shurikenGroup = createGroup();
  cashG=new Group();
  
  console.log("Hello" + 5);
  
  naruto.setCollider("circle",0,0,700);
  naruto.debug = true
  
  score = 0
}



function draw() {
background("lightblue");

naruto.x = World.mouseX;
edges= createEdgeSprites();
naruto.collide(edges);

   // release arrow when space key is pressed
   if (keyDown("space")) {
    createShuriken();
    
  }

  gameOver.visible = false;

  //code to reset the background
  if(village.y > height ){
    village.y = height/2;
  }

  createPain();
  createCash();
  createMadara();
  createOrichimaru();

  if (cashG.isTouching(naruto)) {
    cashG.destroyEach();
    score=score+50;

  }  

  if  (madaraGroup.isTouching(shuriken)) {
    madaraGroup.destroyEach();
    score=score+20;
    
  }

  if  (orichimaruGroup.isTouching(shuriken)) {
    orichimaruGroup.destroyEach();
    score=score+20;
    
  }

  if  (painGroup.isTouching(shuriken)) {
    painGroup.destroyEach();
    score=score+20;
    
  }



  if  (madaraGroup.isTouching(naruto)) {
gameState = END;
  }

  if  (orichimaruGroup.isTouching(naruto)) {
    gameState = END;
  }

  if  (painGroup.isTouching(naruto)) {
gameState = END;
  }

  if (gameState === END) {
    painGroup.setVelocityYEach(0);
    madaraGroup.setVelocityYEach(0);
    orichimaruGroup.setVelocityYEach(0);
    cashG.setVelocityYEach(0);
    painGroup.setLifetimeEach(-1);
    madaraGroup.setLifetimeEach(-1);
    orichimaruGroup.setLifetimeEach(-1);
    cashG.setLifetimeEach(-1);
    gameOver.visible = true;
  }

drawSprites()
textSize(20);
fill(255);
text("Score: "+ score,1000,100);
}


function createShuriken() {
  shuriken= createSprite(510,530,20,20);
  shuriken.addImage(shurikenImg);
  shuriken.x=naruto.x;
  shuriken.velocityY = -4;
  shuriken.lifetime = 120;
  shuriken.scale = 0.05;
  shurikenGroup.add(shuriken);
}


function createCash() {
  if (World.frameCount % 250 == 0) {
  cash = createSprite(Math.round(random(100, width-100),532, 20, 20));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 170;
  cashG.add(cash);
  }
}

function createMadara() {
  if (World.frameCount % 200 == 0) {
  madara = createSprite(Math.round(random(100, width-100),530, 20, 20));
  madara.addImage(madaraImg);
  madara.scale=0.12;
  madara.velocityY = 3;
  madara.lifetime = 170;
  madaraGroup.add(madara);
  }
}

function createOrichimaru() {
  if (World.frameCount % 230 == 0) {
 orichimaru = createSprite(Math.round(random(100, width-100),530, 20, 20));
 orichimaru.addImage(orichimaruImg);
 orichimaru.scale=0.12;
 orichimaru.velocityY = 3;
 orichimaru.lifetime = 170;
 orichimaruGroup.add(orichimaru);
  }
}

function createPain() {
  if (World.frameCount % 220 == 0) {
 pain = createSprite(Math.round(random(100, width-100),530, 20, 20));
 pain.addImage(painImg);
 pain.scale=0.12;
 pain.velocityY = 3;
 pain.lifetime = 170;
 painGroup.add(pain);
  }
}
