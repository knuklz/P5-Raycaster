
let wall;
let ray;

function setup() {
  createCanvas(800 ,400);
  wall = new Boundary(300, 100, 300, 300);
  ray = new Ray(100,200);
}

function draw() {
  background(1);
  wall.show();
  ray.show();

  let pt = ray.cast(wall);
  console.log(pt);  
  
  // if(pt) {
  //   stroke(255);
  //   ellipse(pt.x, pt.y, 8, 8);
  // }



}
