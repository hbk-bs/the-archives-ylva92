function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(300, 300);
	background(180, 100, 3, 100);
  
	//ist nur bennenung der Koordinaten,für übersicht//jetzt bewegt es sich mit der canvas
	const x = (n) => width * n;
	const y = (n) => height * n;
	const w = (n) => width * n;
	const h = (n) => height * n;
  
	rectMode(CENTER);
  
	//lichtkegel
	fill(180, 100, 40, 60);
	triangle(x(0.5), y(0), x(-0.18), y(1), w(1.85), h(2));
  
	//glühlampe
	fill(50, 100, 50, 80);
	circle(x(0.5), y(0.3), w(0.1));
  
	//lampenschirm rechte hälfte
	fill(10, 100, 10, 100);
	triangle(x(0.5), y(0), x(0.3), y(0.3), w(0.7), h(0.3));
  
	//lampenschirm linke hälfte
	fill(10, 100, 5, 100);
	triangle(x(0.5), y(0), x(0.3), y(0.3), w(0.5), h(0.3));
  }
  
  function keyPressed() {
	if (key === "s") {
	  save("perspective.png");
	}
  }
  
