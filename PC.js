class PC{
    constructor(){
       
    }

    display(){
        push();
        fill(255);
        translate(200,200);
        rotate(heading);
        triangle(-10,10,10,10,0,-10);
        pop();
        if(keyDown(RIGHT_ARROW)){
            heading+=10;
        }
        if(keyDown(LEFT_ARROW)){
            heading-=10;
        }
         
    }  
    
}