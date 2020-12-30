const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var box,box2,bg,back;
var gameState="onSling";

function preload(){
    getTime(); 
      
}

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box = new Box(800,560);
    box2=new Box(1000,560);
    pig=new Pig(900,560);
    log1=new Log(900,510,300,PI/2);
    
    box3=new Box(800,460);
    box4=new Box(1000,460);
    pig2=new Pig(900,460);
    log2=new Log(900,410,300,PI/2);

   box5=new Box(900,360);
   log3=new Log(800,300,150,PI/7);
   log4=new Log(1000,300,150,-PI/7);

    bird=new Bird(100,100);
    ground=new Ground(600,590,1200,20);
    platform=new Ground(200,450,400,280);

   
    sling=new Slingshot(bird.body,{x:300,y:150});

   
}

function draw(){
    if (bg){
    background(bg);
    }
    Engine.update(myEngine);
    box.display();
    box2.display();
    box3.display();
    box4.display();
    pig.display();
    pig2.display();
    box5.display();
    bird.display();
    log1.display();
    log2.display();
    log3.display();
    log4.display();
   ground.display();
   sling.display();
   platform.display();
} 

function mouseDragged(){
    if (gameState !== "launched"){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})
    }
}

function mouseReleased(){
    sling.fly();
    gameState="launched";
}

function keyPressed(){
    if (keyCode===32 && bird.body.speed<1){
        bird.trajectory=[];
        Matter.Body.setPosition(bird.body,{x:300,y:150})
        sling.attach(bird.body);
    }
}

async function getTime(){

  var response= await fetch("http://worldtimeapi.org/timezone/Asia/Kolkata");
  var responseJSON= await response.json();
  var dt = responseJSON.datetime;
  var hour = dt.slice(11,13);
 // console.log(responseJSON);

 if (hour>=06 && hour<=19){
     back="sprites/bg.png";
 }
 else{
     back="sprites/bg2.jpg";
 }

 bg=loadImage(back);
}