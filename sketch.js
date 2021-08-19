var sea, seaImg; 
var ship, shipImg;

function preload(){
seaImg=loadImage("sea.png");
shipImg=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){

createCanvas(400,400);
background("blue");

sea=createSprite(400,200);
sea.addImage(seaImg);
sea.velocityX = -4;
sea.scale=0.3;
sea.x= sea.width/8;

ship=createSprite(130,160,20,50);
ship.addAnimation("movingShip",shipImg)
ship.scale=0.25;


}

function draw() {
background(0);
sea.velocityX = -4;
if (sea.x<0){
    sea.x = sea.width/8;
}

drawSprites();

}