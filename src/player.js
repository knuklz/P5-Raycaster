class Player {
    constructor(x, y){
        this.pos = createVector(x,y);
        this.ang = radians(0);
        this.ray;// = [];
        push();
        translate(this.pos.x, this.pos.y); 
        // this.rays.push(new Ray(this.pos,this.ang));
       this.ray = new Ray(this.pos,this.ang);
        pop();
    }
    
    angUp(){
        if(this.ang < 360) {
            this.ang += 5;
        } else {
            this.ang = 5;
        }
        this.ray.setAngle(radians(this.ang));
    }
    angDown(){
        if(this.ang >0){
            this.ang -= 5;
        } else {
            this.ang = 360;
        }
        this.ray.setAngle(radians(this.ang));
    }
    
    update(){
        if(keyIsDown(LEFT_ARROW)){
            this.angDown();
            console.log('left');
        } else if(keyIsDown(RIGHT_ARROW)){
            this.angUp();
        }
    }

    show(){
        stroke(255);
        push(); // Save Origin point
        translate(this.pos.x, this.pos.y); // Translate origin to player location
        ellipse(0, 0, 8, 8); // Draw Player
        
        // Display LOS Ray
        // for(let ray of this.rays){
            this.ray.show();
        // }
        
        pop(); // Translate position back to origin
    }
}