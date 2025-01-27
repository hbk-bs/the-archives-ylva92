
function setup() {
    // this is function scope
    // setup is executed once
    createCanvas(400, 400);
    background("lightblue");
  
    //boden
    strokeWeight(2);
    stroke("grey");
    fill("darkgrey");
    rect(0, 220, 400, 180);
  
    //linke wand
    stroke("black");
    fill("darkgoldenrod");
    beginShape();
  
    // Add vertices.
    vertex(100, 60);
    vertex(150, 20);
    vertex(150, 265);
    vertex(100, 250);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  
    //rechte wand
    fill("darkorange");
    beginShape();
  
    // Add vertices.
    vertex(250, 60);
    vertex(150, 20);
    vertex(150, 265);
    vertex(250, 250);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  }
  
  function keyPressed() {
    if (key === "s") {
      save("my-image.png");
    }
  }