class Pig extends BaseClass{
    constructor(x,y){
        super(x,y,65,65);
        this.image=loadImage("sprites/enemy.png")
        this.Visiblity=255 
    }

   display(){
    if (this.body.speed<2){
        super.display();
    }  
    
    else{
        World.remove(myWorld,this.body);
        push();
        this.Visiblity=this.Visiblity-5;
        tint(255,this.Visiblity);
        image(this.image,this.body.position.x,this.body.position.y,65,65);
        pop();
    }
   } 
} 