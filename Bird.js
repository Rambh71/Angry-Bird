class Bird{
    constructor(x,y){

        var home={
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,50,50,home);
        this.width = 50;
        this.height = 50;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
} 