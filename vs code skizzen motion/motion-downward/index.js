
let y = -21;
let x = 200;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("black");
  // Zeichne den Ball
  ellipse(x, y, 50, 50);

  // Bewege den Ball nach unten
  y += 4;

  x = x + random(-2, 2)

  // Wenn der Ball das Loch erreicht hat, setze ihn zurück
  if (y > height + 21) {
    y = -21;
  }
}
