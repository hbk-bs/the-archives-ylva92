
let isBlinking = false;
let eyeHeight = 60;
let textSizeValue = 24;
let textColor = [0, 0, 0]; 

function setup() {
    colorMode(HSL, 360, 100, 100, 100);
    createCanvas(800, 800);
    background(150, 100, 20, 30);
}

function draw() {
    background(150, 100, 20, 30);

    // Augen blinzeln lassen
    if (isBlinking) {
        eyeHeight -= 5;
        if (eyeHeight <= 5) {
            isBlinking = false;
            setTimeout(() => {
                eyeHeight = 60;
                textSizeValue = 24; 
                textColor = [0, 0, 0]; 
            }, 200);
        }
    }

    rectMode(CENTER);

    // Augenlider
    noStroke();
    fill(200, 20, 80, 100);
    circle(300, 400, 80);
    circle(500, 400, 80);

    // Augen
    noStroke();
    fill(200, 0, 100, 100);
    ellipse(300, 400, 80, eyeHeight);
    ellipse(500, 400, 80, eyeHeight);

    // Pupillen
    if (eyeHeight > 10) {
        fill(0, 0, 0, 100);
        circle(300, 400, 10);
        circle(500, 400, 10);
    }

    // Text über den Augen
    fill(textColor);
    textAlign(CENTER, CENTER);
    textSize(15);
    text("Bitte nicht in die Augen pieksen!", width / 2, 150);
}

function mousePressed() {
    let d1 = dist(mouseX, mouseY, 300, 400);
    let d2 = dist(mouseX, mouseY, 500, 400);

    if (d1 < 40 || d2 < 40) {
        isBlinking = true;
        textColor = [0, 100, 50]; 
        
    }
}