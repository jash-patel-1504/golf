const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ballObject
var player,playerImg

function preload(){
    bg=loadImage("background5.png")
skyImg=loadImage("blue-sky-background.png")
goal=loadImage("golfGoal5.png")
playerImg=loadImage("golfCharecter2.jpeg")
player1Img=loadImage("golfCharecter3.jpeg")
}

function setup(){
    var canvas = createCanvas(1450,700);
    engine = Engine.create();
    world = engine.world;
ballObject=new ball(200,550)
player=createSprite(100,500,50,50)
player.addImage("charecter1",playerImg)
}

function draw(){
   
    background(bg);
    Engine.update(engine);
    image(skyImg,0,0,1450,500)
    //strokeWeight(4);
   
    ballObject.display()
    image(goal,1300,400,80,160)
//}

//function keyPressed(){
if(keyCode===UP_ARROW){
    //Matter.Body.applyForce(ballObject.body,ballObject.body.position,{x:1300,y:400})
    ballObject.x=ballObject.x+50
}
drawSprites();
}

