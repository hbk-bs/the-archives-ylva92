
function setup() {
    // this is function scope
    // setup is executed once
    createCanvas(400, 400);
    background("powderblue");
  
    //boden
    noStroke();
    fill("lightgreen");
    rect(0, 0, 400, 100);
  
    //haus
    fill("lightcoral");
    rect(170, 70, 70, 60);
  
    //dach
    fill("maroon");
    triangle(165, 130, 245, 130, 205, 170);
  
    //tür
    // Start drawing the shape.
    beginShape();
  
    // Add vertices.
    vertex(190, 70);
    vertex(190, 100);
    vertex(210, 100);
    vertex(210, 70);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  
    //sonne
    fill("gold");
    circle(70, 300, 80);
  }
  
  function keyPressed() {
    if (key === "s") {
      save("my-image.png");
    }
  }
  