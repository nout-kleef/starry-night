let canvas;
let stars = [];
let starTypes, starColors;
let documentScrollPosition;
const STARRY_NIGHT_DEBUG = true;

function preload() {
    Star.sprite = loadImage(Star.spritePath);
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style("position", "fixed");
    ellipseMode(CORNER);
    // handle sprite
    Star.sprite.loadPixels();
    starTypes = Math.floor(Star.sprite.width / Star.imgSize);
    starColors = Math.floor(Star.sprite.height / Star.imgSize);
    for (let i = 0; i < 50; i++) {
        stars.push(new Star());
    }
    // frameRate(60);
    documentScrollPosition = getScrollPosition();
    window.onscroll = handleStarrNightScroll;
}

function draw() {
    const w = windowWidth;
    const h = windowHeight;
    background(Star.bgColor[0], Star.bgColor[1], Star.bgColor[2]);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show(w, h);
    }
    if (STARRY_NIGHT_DEBUG) {
        fill(255);
        textSize(32);
        text(Math.round(frameRate()), 10, 50);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function getScrollPosition() {
    return document.documentElement.scrollTop || document.body.scrollTop;
}

function handleStarrNightScroll() {
    const newScrollPosition = getScrollPosition();
    const relativeIncrease = (newScrollPosition - documentScrollPosition) / windowHeight;
    for (let i = 0; i < stars.length; i++) {
        stars[i].updatePositionPostScroll(relativeIncrease);
    }
    documentScrollPosition = newScrollPosition;
}
