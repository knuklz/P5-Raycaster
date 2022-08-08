class Player {
    constructor(x, y){
        this.pos = createVector(x,y);
        this.ang = 0;
        this.rays = [];
        push();
        translate(this.pos.x, this.pos.y); 
        this.rays.push(new Ray(this.pos,0));
        pop();
    }
    show(){
        stroke(255);
        push(); // Save Origin point
        translate(this.pos.x, this.pos.y); // Translate origin to player location
        ellipse(0, 0, 8, 8); // Draw Player
        
        // Display LOS Ray
        for(let ray of this.rays){
            ray.show();
        }
        
        pop(); // Translate position back to origin
    }
}