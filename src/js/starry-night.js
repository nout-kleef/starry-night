let canvas;
let stars = [];
let starTypes, starColors;

function preload() {
    Star.sprite = loadImage(Star.spritePath);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    // handle sprite
    Star.sprite.loadPixels();
    starTypes = Math.floor(Star.sprite.width / Star.imgSize);
    starColors = Math.floor(Star.sprite.height / Star.imgSize);
    for (let i = 0; i < 50; i++) {
        stars.push(new Star());
    }
    frameRate(10);
}

function draw() {
    const w = windowWidth;
    const h = windowHeight;
    background(22, 26, 29);
    for (let i = 0; i < stars.length; i++) {
        stars[i].show(w, h);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
