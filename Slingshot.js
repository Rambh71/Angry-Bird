class Slingshot{
    constructor(bodyA,pointB){
        var con = {

            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.04,
            length : 10
        }

        this.pointB=pointB;
        this.sling = Constraint.create(con);
        this.img1=loadImage("sprites/sling1.png");
        this.img2=loadImage("sprites/sling2.png");
        this.img3=loadImage("sprites/sling3.png");
        World.add(myWorld,this.sling);
    }

       fly(){
           this.sling.bodyA=null;
       }

       attach(body){
           this.sling.bodyA=body;
       }

    display(){
        image(this.img1,300,120);
        image(this.img2,270,120);
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        push();
        stroke("#301608");

        if (pointA.x<220){
        strokeWeight(8);
        line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3);
        image(this.img3,pointA.x-30,pointA.y-10,15,30);
        }

        else{
         strokeWeight(5);
        line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
        line(pointA.x+25,pointA.y,pointB.x+30,pointB.y-3);
        image(this.img3,pointA.x+25,pointA.y-10,15,30);
        }
        
        pop();
        }
    }
}