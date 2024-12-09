
let x = 80;
let speed = 3;

function setup(){
  const canvas = createCanvas(200,200);
  canvas.parent("sketch");
  background(140, 10, 50, 100);
  angleMode(DEGREES)
}

function draw() {
  background(130, 20, 70, 80)
    fill(290, 30, 200, 80)
    ellipse(x, height/2, 20, 20);
    x = x + speed;
    
    if(x > width - 20 || x < 20){
      speed = -speed;
    }
}
