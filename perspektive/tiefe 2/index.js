document.addEventListener("DOMContentLoaded", () => {
	console.log("DOM is loaded");
});
function setup() {
	colorMode(HSL, 360, 100, 100, 100);
	createCanvas(300, 300);
	background(180, 100, 10, 80);
  
	//ist nur bennenung der Koordinaten,für übersicht//jetzt bewegt es sich mit der canvas
	const x = (n) => width * n;
	const y = (n) => height * n;
	const w = (n) => width * n;
	const h = (n) => height * n;
  
	rectMode(CENTER);
  
	//boden
	fill(30, 100, 30, 80);
	rect(x(1), y(1), w(2), h(1));
  
	//schatten
	fill(30, 100, 10, 80);
	ellipse(x(0.4), y(0.85), w(0.4), h(0.2));
  
	//loch schwarz
	fill(30, 100, 5, 80);
	ellipse(x(0.4), y(0.9), w(0.31), h(0.1));
  
	//kugel
	fill(340, 100, 30, 100);
	circle(x(0.5), y(0.65), w(0.4));
  }
  
  function keyPressed() {
	if (key === "s") {
	  save("perspective.png");
	}
  }