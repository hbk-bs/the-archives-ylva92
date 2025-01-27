
function setup() {
    // this is function scope
    // setup is executed once
    createCanvas(400, 400);
  
    //linkes dreieck
    fill("grey");
    beginShape();
  
    // Add the vertices.
    vertex(170, 300);
    vertex(170, 90);
    vertex(50, 30);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  
    //rechtes dreieck
    fill("navy");
    beginShape();
  
    // Add the vertices.
    vertex(170, 300);
    vertex(170, 90);
    vertex(300, 30);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  }
  
  function keyPressed() {
    if (key === "s") {
      save("my-image.png");
    }
  }
  