
let isBlinking = false;
let eyeHeight = 60;
let blinkTimer = 0;

function setup() {
    colorMode(HSL, 360, 100, 100, 100);
    createCanvas(600, 600);
    background(150, 100, 20, 30);
}

function draw() {
    background(150, 100, 20, 30);

    // Augen blinzeln 
    if (isBlinking) {
        eyeHeight -= 5;  
        if (eyeHeight <= 5) {
            isBlinking = false; 
            setTimeout(() => {
                eyeHeight = 60; 
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
}

function mousePressed() {
    
    let d1 = dist(mouseX, mouseY, 300, 400);
    let d2 = dist(mouseX, mouseY, 500, 400);

    if (d1 < 40 || d2 < 40) {
        isBlinking = true;
    }
}