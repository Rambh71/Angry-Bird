class Log{
    constructor(x,y,height,angle){

        var home={
            restitution:1,
            friction:1
        }

        this.body = Bodies.rectangle(x,y,20,height,home);
        this.width =  20;
        this.height = height;
        this.image=loadImage("sprites/wood2.png");
        this.angle=Matter.Body.setAngle(this.body,angle);
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("brown");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
} 