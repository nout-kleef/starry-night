let canvas;
let documentScrollPosition;

function preload() {
    Star.sprite = loadImage(Star.spritePath);
}

function setup() {
    // set up canvas for p5.js
    canvas = createCanvas(windowWidth, windowHeight);
    // canvas.position(0, 0);
    canvas.elt.style.zIndex = "-1";
    canvas.elt.style.position = "fixed";
    canvas.elt.style.left = "0";
    canvas.elt.style.top = "0";
    ellipseMode(CORNER);
    // handle sprite
    Star.sprite.loadPixels();
    Star.types = Math.floor(Star.sprite.width / Star.imgSize);
    Star.colors = Math.floor(Star.sprite.height / Star.imgSize);
    // create stars
    Star.populationSize = windowWidth * windowHeight / 14000;
    for (let i = 0; i < Star.populationSize; i++)
        Star.population.push(new Star());
    // handle parallax scrolling
    documentScrollPosition = getScrollPosition();
    window.onscroll = handleStarryNightScroll;
    /* (nearly) all devices will be able to handle 35 fps, so setting this
     * as the maximum fps ensures similar looking flickering on different
     * devices
     */
    frameRate(35);
}

function draw() {
    const w = windowWidth;
    const h = windowHeight;
    background(Star.bgColor[0], Star.bgColor[1], Star.bgColor[2]);
    for (let i = 0; i < Star.population.length; i++) {
        Star.population[i].update();
        Star.population[i].show(w, h);
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
    for (let i = 0; i < Star.population.length; i++) {
        Star.population[i].updatePositionPostScroll(relativeIncrease);
    }
    documentScrollPosition = newScrollPosition;
}
