
function setup() {
    colorMode(HSL, 360, 100, 100, 100);
    createCanvas(300, 300);
    background(270, 90, 70, 80);
  
    //ist nur bennenung der Koordinaten,für übersicht//jetzt bewegt es sich mit der canvas
    const x = (n) => width * n;
    const y = (n) => height * n;
    const w = (n) => width * n;
    const h = (n) => height * n;
  
    rectMode(CENTER);
  
    //das dunkle rec
    fill(320, 80, 20);
    rect(x(0.4), y(0.75), w(0.5), h(0.15));
  
    //das helle rec
    fill(320, 80, 40);
    rect(x(0.5), y(0.7), w(0.5), h(0.15));
  }
  
  function keyPressed() {
    if (key === "s") {
      save("perspective.png");
    }
  }