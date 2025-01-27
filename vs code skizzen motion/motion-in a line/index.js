

let circlePositions = [ { x: 0, y: 0}, { x: -50, y: -50 }, { x: -100, y: -100 }];
let speed = 2;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background("blue");
  for (let i = 0; i < circlePositions.length; i++) {
    let positions = circlePositions[i];
    fill("aquamarine");
    ellipse(positions.x, positions.y, 40);
    positions.x = positions.x + speed;
    positions.y = positions.y + speed;
  }

  circlePositions.forEach(positions => {
    if (positions.x > width || positions.y > height) {
      positions.x = -50;
      positions.y = -50;
    }
  })
;
}
