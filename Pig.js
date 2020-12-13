class Pig{
    constructor(x,y){

        var home={
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,50,50,home);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("sprites/enemy.png");
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("blue");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
} 