
function setup() {
    colorMode(HSL, 360, 100, 100, 100);
    createCanvas(800, 800);
    background(150, 100, 20, 30);
  
    //ist nur bennenung der Koordinaten,für übersicht//jetzt bewegt es sich mit der canvas
    const x = (n) => width * n;
    const y = (n) => height * n;
    const w = (n) => width * n;
    const h = (n) => height * n;
  
    rectMode(CENTER);
  
    //linkes augenlid
    noStroke();
    fill(200, 20, 80, 100);
    circle(300, 400, 80);
  
    //rechtes augenlid
    noStroke();
    circle(500, 400, 80);
  
    //linkes auge
    noStroke();
    fill(200, 0, 100, 100);
    ellipse(300, 400, 80, 60);
  
    //rechtes auge
    noStroke();
    ellipse(500, 400, 80, 60);
  
    //linkes auge pupille
    noStroke();
    fill(0, 0, 0, 100);
    circle(300, 400, 10);
  
    //rechtes auge pupille
    noStroke();
    fill(0, 0, 0, 100);
    circle(500, 400, 10);
  }