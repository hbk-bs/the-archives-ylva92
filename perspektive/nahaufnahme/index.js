function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(300, 300);
	background(240, 100, 10, 80);
  
	//ist nur bennenung der Koordinaten,für übersicht//jetzt bewegt es sich mit der canvas
	const x = (n) => width * n;
	const y = (n) => height * n;
	const w = (n) => width * n;
	const h = (n) => height * n;
  
	rectMode(CENTER);
  
	//plan : dreieck
	noStroke();
	fill(350, 60, 20);
	triangle(x(0.65), y(0.6), x(0.3), y(1), w(0.34), h(0.4));
  
	//seite
	fill(350, 60, 20);
	rect(x(0.2), y(0.9), w(0.9), h(0.6));
  
	//front
	fill(350, 70, 40);
	rect(x(0.0), y(0.8), w(0.7), h(0.79));
  }
  
  function keyPressed() {
	if (key === "s") {
	  save("perspective.png");
	}
  }