
function setup() {
	// this is function scope
	// setup is executed once
	createCanvas(400, 400);

	//hintere wand
	fill("grey");
	rect(150, 150, 100, 70);

	//obere wand
	fill("lightgrey");
	beginShape();

	// Add the vertices.
	vertex(150, 150);
	vertex(250, 150);
	vertex(300, 100);
	vertex(100, 100);

	// Stop drawing the shape.
	endShape(CLOSE);

	//untere wand
	fill("white");
	beginShape();

	vertex(150, 220);
	vertex(250, 220);
	vertex(300, 200);
	vertex(100, 200);

	// Stop drawing the shape.

	endShape(CLOSE);

	// save images
}

function keyPressed() {
	if (key === "s") {
		save("my-image.png");
	}
}