
function setup() {
    createCanvas(400, 400);
    background("lavender");
  
    //boden
    fill("limegreen");
    rect(0, 230, 400, 200);
  
    //linke wand
    fill("seagreen");
    beginShape();
  
    // Add vertices.
    vertex(100, 160);
    vertex(200, 180);
    vertex(170, 310);
    vertex(80, 270);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  
    //rechte wand
    fill("teal");
    beginShape();
  
    // Add vertices.
    vertex(300, 160);
    vertex(200, 180);
    vertex(170, 310);
    vertex(240, 270);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  
    //linke dachhälfte
    fill("sienna");
    triangle(100, 160, 200, 180, 140, 70);
  
    //rechte dachhälfte
    fill("saddlebrown");
    triangle(200, 180, 300, 160, 140, 70);
  
    //schatten --- verschoben
    fill("forestgreen");
    beginShape();
  
    // Add vertices.
    vertex(170, 310);
    vertex(240, 270);
    vertex(370, 300);
    vertex(360, 390);
  
    // Stop drawing the shape.
    endShape(CLOSE);
  }
  
  function keyPressed() {
    if (key === "s") {
      save("my-image.png");
    }
  }