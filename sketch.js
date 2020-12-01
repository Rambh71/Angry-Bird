const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box,box2;

function setup(){
    createCanvas(1200,600);

    myEngine = Engine.create();
    myWorld = myEngine.world;

    box = new Box(800,560);
    box2=new Box(1000,560);
    pig=new Pig(900,560);
    bird=new Bird(100,100);
    

    ground=new Ground(600,590,1200,20);
    
}

function draw(){
    background(0);
    Engine.update(myEngine);
   
    box.display();
    box2.display();
    pig.display();
    bird.display();
   ground.display();
} 