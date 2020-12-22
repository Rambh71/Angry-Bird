const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var box,box2,bg;
var gameState="onSling";

function preload(){
      bg=loadImage("sprites/bg.png");
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
    background(bg);
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
    if (keyCode===32){
        sling.attach(bird.body);
    }
}