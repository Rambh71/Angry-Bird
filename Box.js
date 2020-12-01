class Box{
    constructor(x,y){

        var home={
            restitution:1
        }

        this.body = Bodies.rectangle(x,y,70,70,home);
        this.width = 70;
        this.height = 70;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("pink");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
} 