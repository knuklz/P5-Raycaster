class Ray {
    constructor(x1, y1){
        this.pos = createVector(x1, y1);
        this.dir = createVector(1, 0);
    }
    show(){
        stroke(255);

        // Save default origin point
        push();
        
        // Move origin point to current position                       
        translate(this.pos.x,this.pos.y); 
        
        // Draw a line from pos to target
        line(0, 0, this.dir.x * 10, this.dir.y * 10);
        
        // Return origin point to location saved prior
        pop();
    }
    cast(wall){
        // Describing coordinates of the wall
        const x1 = wall.a.x;
        const y1 = wall.a.y;
        const x2 = wall.b.x;
        const y2 = wall.b.y;

        // Describing coordinates of the player
        const x3 = this.pos.x;
        const y3 = this.pos.y;
        const x4 = this.pos.x + this.dir.x;
        const y4 = this.pos.y + this.dir.y;

        const den = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
        // console.log(den);
        if(den == 0) {
            return;
        }
        
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / den;
        const u = -((x1 - x2) * (y1 - y2) - (y1 - y3) * (x1 - x3)) / den;

        const pointX = (x1 + t * (x2 - x1));
        const pointY = (y1 + t * (y2 - y1));


        if(t > 0 && t < 1 && u > 0){
            return createVector(pointX, pointY);
        } else {
            return;
        }


    }
}