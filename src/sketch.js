
let wall;
// let ray;
let player;

function setup() {
  createCanvas(800 ,400);
  wall = new Boundary(300, 100, 300, 300);
  // ray = new Ray(100,200);
  player = new Player(20,20);
}

function draw() {
  player.pos.x = mouseX -20;
  player.pos.y = mouseY -20;
  
  player.update();

  background(1);
  wall.show();
  player.show();
  
  
  let pt = player.ray.cast(wall);
  if(pt) {
    stroke(255);
    ellipse(pt.x, pt.y, 8, 8);
  }



}
