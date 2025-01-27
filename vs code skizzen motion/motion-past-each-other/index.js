

let y = -21;
let x = 150;
let y2 = 440
let x2 = 250

function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background("indigo");
  //Ball links
  fill ("lightcoral")
  ellipse(x, y, 50, 50);

  //Ball rechts
  fill ("lightsalmon")
  ellipse(x2, y2, 40, 40);

  // Bewegung nach unten
  y += 3;

  // Bewegung nach oben
  y2 -= 3;


  // Ball 1 fängt oben wieder an (loop)
  if (y > height + 21) {
    y = -21;
  }

  // Ball 2 fängt unten wieder an (loop)
  if (y2 < -40) {
    y2 = 440;
  }
}

