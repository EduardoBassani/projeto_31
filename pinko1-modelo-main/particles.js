class Particle {
    constructor(x, y) {
        super(x,y,30,30);
        this.image = loadImage("bem-te-vi-meme.jpg");
        var options = {
            restitution = 0.4
        }
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        //noStroke();
        //fill("white");
        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop();
    }

};