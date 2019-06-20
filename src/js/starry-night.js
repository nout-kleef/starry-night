let canvas;
let stars = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    for (let i = 0; i < 50; i++) {
        stars.push(new Star());
    }
    frameRate(10);
}

function draw() {
    const w = windowWidth;
    const h = windowHeight;
    background(130);
    for (let i = 0; i < stars.length; i++) {
        stars[i].show(w, h);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
