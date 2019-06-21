class Star {
    constructor() {
        const type = Math.floor(Math.random() * starTypes);
        const color = Math.floor(Math.random() * starColors);
        this.x = Math.random();
        this.y = Math.random();
        this.z = 1 + Math.random() * 5; // for parallax scrolling
        this.spriteX = type * Star.imgSize;
        this.spriteY = color * Star.imgSize;
    }

    show(w, h) {
        const SIZE = Star.imgSize;
        image(Star.sprite,
            this.x * w, this.y * h, SIZE / this.z, SIZE / this.z,
            this.spriteX, this.spriteY, SIZE, SIZE
        );
    }

    updatePositionPostScroll(relativeIncrease) {

        this.y -= relativeIncrease * Star.parallaxMultiplier / this.z;
    }
}

// dimensions of an individual star image in stars-sprite.png
Star.imgSize = 12;
Star.spritePath = "stars-sprite-" + Star.imgSize + ".png";
Star.sprite;
Star.bgColor = [22, 26, 29];
Star.parallaxMultiplier = 0.2;
