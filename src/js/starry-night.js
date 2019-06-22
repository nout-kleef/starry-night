let canvas;
let stars = [];
let starTypes, starColors;
let documentScrollPosition;

function preload() {
    Star.sprite = loadImage(Star.spritePath);
}

function setup() {
    // set up canvas for p5.js
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-1");
    canvas.style("position", "fixed");
    ellipseMode(CORNER);
    // handle sprite
    Star.sprite.loadPixels();
    starTypes = Math.floor(Star.sprite.width / Star.imgSize);
    starColors = Math.floor(Star.sprite.height / Star.imgSize);
    // create stars
    const populationSize = windowWidth * windowHeight / 14000;
    for (let i = 0; i < populationSize; i++)
        stars.push(new Star());
    // handle parallax scrolling
    documentScrollPosition = getScrollPosition();
    window.onscroll = handleStarryNightScroll;
}

function draw() {
    const w = windowWidth;
    const h = windowHeight;
    background(Star.bgColor[0], Star.bgColor[1], Star.bgColor[2]);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].show(w, h);
    }
    if (Star.DEBUG) {
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

function handleStarryNightScroll() {
    const newScrollPosition = getScrollPosition();
    const relativeIncrease = (newScrollPosition - documentScrollPosition) / windowHeight;
    for (let i = 0; i < stars.length; i++) {
        stars[i].updatePositionPostScroll(relativeIncrease);
    }
    documentScrollPosition = newScrollPosition;
}
