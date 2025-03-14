
let isBlinking = false;
let eyeHeight;
let eyeSize;
let eyeX1, eyeX2, eyeY;
let textSizeValue;
let textColor = [0, 0, 0];

function setup() {
    createCanvas(windowWidth, windowHeight);
    updateValues();
    colorMode(HSL, 360, 100, 100, 100);
    background(150, 100, 20, 30);
}

function draw() {
    background(150, 100, 20, 30);

    // Blinzeln
    if (isBlinking) {
        eyeHeight -= eyeSize * 0.1;
        if (eyeHeight <= eyeSize * 0.1) {
            isBlinking = false;
            setTimeout(() => {
                eyeHeight = eyeSize;
                textSizeValue = eyeSize * 0.3; 
                textColor = [0, 0, 0]; 
            }, 200);
        }
    }

    rectMode(CENTER);

    // Augenlider
    noStroke();
    fill(200, 20, 80, 100);
    circle(eyeX1, eyeY, eyeSize);
    circle(eyeX2, eyeY, eyeSize);

    // Augen
    noStroke();
    fill(200, 0, 100, 100);
    ellipse(eyeX1, eyeY, eyeSize, eyeHeight);
    ellipse(eyeX2, eyeY, eyeSize, eyeHeight);

    // Pupillen (nur wenn Augen offen)
    if (eyeHeight > eyeSize * 0.1) {
        fill(0, 0, 0, 100);
        circle(eyeX1, eyeY, eyeSize * 0.125);
        circle(eyeX2, eyeY, eyeSize * 0.125);
    }

    // Text über den Augen
    fill(textColor);
    textAlign(CENTER, CENTER);
    textSize(textSizeValue);
    text("Bitte nicht in die Augen pieksen!", width / 2, height * 0.2);
}

function mousePressed() {
    let d1 = dist(mouseX, mouseY, eyeX1, eyeY);
    let d2 = dist(mouseX, mouseY, eyeX2, eyeY);

    if (d1 < eyeSize / 2 || d2 < eyeSize / 2) {
        isBlinking = true;
        textSizeValue = eyeSize * 0.4; // Größere Schrift
        textColor = [0, 100, 50]; // Rote Schrift
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    updateValues();
}

function updateValues() {
    eyeSize = min(width, height) * 0.14;
    eyeHeight = eyeSize;
    eyeX1 = width * 0.35;
    eyeX2 = width * 0.65;
    eyeY = height * 0.5;
    textSizeValue = eyeSize * 0.3;
}