var heading=0;
var PC1;
var NPC1 = [];
var count=0 ;
var bullect ;
function setup() {
  createCanvas(1200,600);
  PC1 = new PC();
  for(i=0;i<15;i++){
    NPC1.push(new NPC());
  }
}

function draw() {
  background(0,0,0);  
  PC1.display();
  
  for(i=0;i<15;i++){
    NPC1[i].display();
    NPC1[i].move();
  }
  /*
  if (NPC1.isTouching(PC1)){
  count=count+10;
  if (count=== 100){
    PC1.destory();
    background("white");
    text("GameOver",600,300);

  }
  }
  */
 if (keyDown("space")){
  bullect= new createbullect();
  }
}

function createBullet() {
  var bullet= createSprite(PC1.x,PC1.y, 5, 10);      
  bullet.shapeColor = "red";
  bullet.velocityY = -1;
  bullet.lifetime = 1000;
  bulletGroup.add(bullet);
}
