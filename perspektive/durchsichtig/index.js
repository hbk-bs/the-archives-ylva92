function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(300, 300);
	background(340, 100, 40, 80);
  
	//ist nur bennenung der Koordinaten,für übersicht//jetzt bewegt es sich mit der canvas
	const x = (n) => width * n;
	const y = (n) => height * n;
	const w = (n) => width * n;
	const h = (n) => height * n;
  
	rectMode(CENTER);
  
	//back
	fill(123, 90, 50, 60);
	rect(x(0.6), y(0.4), w(0.5), h(0.5));
  
	//line 1
	line(x(0.35), y(0.15), w(0.15), h(0.35));
  
	//line 2
	line(x(0.85), y(0.15), w(0.65), h(0.35));
  
	//line 3
	line(x(0.35), y(0.65), w(0.15), h(0.85));
  
	//line 4
	line(x(0.85), y(0.65), w(0.65), h(0.85));
  
	//front
	fill(123, 90, 50, 60);
	rect(x(0.4), y(0.6), w(0.5), h(0.5));
  }
  
  function keyPressed() {
	if (key === "s") {
	  save("perspective.png");
	}
  }
  
