var iss,spacecraft,invisibleblock;
var hasDocked;

var hasDocked = false;

function preload(){
  issImage = loadImage("Images/iss.png");
  spacebgImage = loadImage("Images/spacebg.jpg");
  spacecraft1Image = loadImage("Images/spacecraft1.png");
  spacecraft2Image = loadImage("Images/spacecraft2.png");
  spacecraft3Image = loadImage("Images/spacecraft3.png");
  spacecraft4Image = loadImage("Images/spacecraft4.png");
}

function setup() {
  createCanvas(800,400);
  
  iss = createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.25;

  spacecraft = createSprite(185,240);
  spacecraft.addImage(spacecraft1Image);
  spacecraft.scale = 0.15;

  invisibleblock = createSprite(312,130,5,5);
  invisibleblock.shapeColor="white";
}

function draw() {
  background(spacebgImage);
  
  if (!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
    if (keyDown("DOWN_ARROW")){
      spacecraft.y = spacecraft.y +2;
    }
    if (keyDown("RIGHT_ARROW")){
      spacecraft.x = spacecraft.x +2;
    }
    if (keyDown("LEFT_ARROW")){
      spacecraft.x = spacecraft.x -2;
    }
  }

  if (keyDown("UP_ARROW")){
    spacecraft.addImage(spacecraft2Image);
    spacecraft.y = spacecraft.y -2;
  }
  if (keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraft1Image);
    spacecraft.y = spacecraft.y +2;
  }
  if (keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraft3Image);
    spacecraft.x = spacecraft.x +2;
  }
  if (keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraft4Image);
    spacecraft.x = spacecraft.x -2;
  }

  if (spacecraft.isTouching(invisibleblock)){
    textSize(20);
    text("DOCKING SUCCESSFUL!",400,350);

  }
  
  drawSprites();
}