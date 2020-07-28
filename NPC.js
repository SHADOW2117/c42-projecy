class NPC{
    constructor(){
        this.interiorWidth = random(width);
        this.interiorHeight = random(height);
        this.Velocity = random(0.1,0.5);
    }

    display(){
        push();
        noFill();
        stroke("white");
        ellipse(this.interiorWidth,this.interiorHeight,20,20);
        pop();
    }

    move(){
        this.interiorWidth+=this.Velocity;
        this.interiorHeight+=this.Velocity;
    }
}