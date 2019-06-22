class Star {
    constructor(height) {
        const type = Math.floor(Math.random() * Star.types);
        const color = Math.floor(Math.random() * Star.colors);
        this.imgColor = Star.spriteReplacements[color];
        this.x = Math.random();
        if (typeof height === "undefined") {
            this.toBeReplaced = true; // only replace initial population
            this.y = Math.random();
        } else {
            this.y = height + Math.random() *
                Star.stopRenderingThreshold - Star.stopRenderingThreshold / 2;
            this.toBeReplaced = false;
        }
        this.z = 1 + Math.random() * 5; // for parallax scrolling
        this.spriteX = type * Star.imgSize;
        this.spriteY = color * Star.imgSize;
        this.brightness = 0;
        // different starts for individual stars
        this.noiseX = Math.random() * 10;
        this.noiseSpeed = 0.05 + Math.random() * 0.025;
        this.displayDimensions = Star.imgSize / this.z;
    }

    show(w, h) {
        if (this.y < -10 || this.y + 10 > windowHeight) return;
        // only render pictures if we absolutely need to:
        if (this.displayDimensions >= Star.imageThreshold) {
            // render as image
            tint(255, this.brightness);
            image(Star.sprite,
                this.x * w, this.y * h,
                this.displayDimensions, this.displayDimensions,
                this.spriteX, this.spriteY,
                Star.imgSize, Star.imgSize
            );
        } else {
            fill(this.imgColor[0], this.imgColor[1], this.imgColor[2],
                this.brightness);
            noStroke();
            if (this.displayDimensions >= Star.ellipseThreshold) {
                // render as ellipse
                ellipse(
                    this.x * w, this.y * h,
                    this.displayDimensions, this.displayDimensions
                );
            } else if (this.displayDimensions >= Star.rectangleThreshold) {
                // render as rectangle
                rect(
                    this.x * w, this.y * h,
                    this.displayDimensions, this.displayDimensions
                );
            } else {
                // render as single point
                stroke(this.imgColor[0], this.imgColor[1], this.imgColor[2],
                    this.brightness);
                point(this.x * w, this.y * h);
            }
        }

    }

    update() {
        this.noiseX += this.noiseSpeed;
        this.brightness = noise(this.noiseX) * 255;
    }

    updatePositionPostScroll(relativeIncrease) {
        this.y -= relativeIncrease * Star.parallaxMultiplier / this.z;
        if (!this.toBeReplaced) return;
        if (this.y < Star.SCREEN_TOP) {
            if (Star.DEBUG) console.info("adding new star at bottom");
            Star.population.push(new Star(Star.SCREEN_BOTTOM));
            this.toBeReplaced = false;
        } else if (this.y > Star.SCREEN_BOTTOM) {
            if (Star.DEBUG) console.info("adding new star at top");
            Star.population.push(new Star(Star.SCREEN_TOP));
            this.toBeReplaced = false;
        }
    }
}

// dimensions of an individual star image in stars-sprite.png
Star.imgSize = 12;
// decide how to render a star based on these minimum dimension requirements
Star.imageThreshold = 5;
Star.ellipseThreshold = 2.2;
Star.rectangleThreshold = 1.5;
Star.stopRenderingThreshold = 0.02;
Star.spritePath = "stars-sprite-" + Star.imgSize + ".png";
Star.sprite;
Star.types;
Star.colors;
// estimated characteristic color for each respective star color
Star.spriteReplacements = [
    [232, 175, 4],
    [198, 125, 184],
    [64, 214, 51],
    [74, 97, 191],
    [214, 164, 64],
    [224, 74, 4]
];
Star.bgColor = [22, 26, 29];
Star.parallaxMultiplier = 0.2;
Star.populationSize;
Star.population = [];
Star.DEBUG = false;
Star.SCREEN_BOTTOM = 1 + Star.stopRenderingThreshold;
Star.SCREEN_TOP = -Star.stopRenderingThreshold;
