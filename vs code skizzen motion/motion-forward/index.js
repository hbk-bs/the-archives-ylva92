
let x = 0;
let y = 0;
let s = 1;
let w = 2;

function setup() {
	const canvas = createCanvas(150, 150);
	canvas.parent("sketch");
	x = width / 2;
	y = height / 2;
	
}

function draw() {
	background(180);
fill(300, 80, 100, 100)
	strokeWeight(w);
	circle(x, y, s);
	s *= 1.09;
	w -= 0.005;
	if (s > 70) {
		s = 1;
		w = 2;
	}
}