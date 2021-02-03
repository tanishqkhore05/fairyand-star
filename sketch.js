var starnight,starnightImage;
var fairy,fairyImage;
var star,starImage;



function preload()
{
   //preload the images here

   
   starnightImage=loadImage("images/starnight.png");
   fairyImage=loadImage("images/fairy1.png");
   starImage=loadImage("images/star.png")
 }

function setup() {
  createCanvas(600, 600);
  starnight=createSprite(300,315);
  starnight.addImage(starnightImage,"starnight.png");
  starnight.scale="0.4"

  fairy=createSprite(100,470);
  fairy.addImage(fairyImage,"fairy1.png");
  fairy.scale="0.2";

  star=createSprite(500,40,20,20);
  star.addImage(starImage,"star.png");
  star.scale="00.15"

  // star.x= starBody.position.x
  // star.y= starBody.position.y

}


function draw() {
  background("red");

  if(keyDown("RIGHT_ARROW")){
    fairy.x = fairy.x + 5;
  }

  if(keyDown("LEFT_ARROW")){
    fairy.x = fairy.x - 5;
  }

  if(keyDown("DOWN_ARROW")){
    star.velocityY = 6;
  }

  drawSprites();
}
