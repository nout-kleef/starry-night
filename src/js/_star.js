class Star {
    constructor() {
        const type = Math.floor(Math.random() * starTypes);
        const color = Math.floor(Math.random() * starColors);
        this.x = Math.random();
        this.y = Math.random();
        this.spriteX = type * Star.imgSize;
        this.spriteY = color * Star.imgSize;
    }

    show(w, h) {
        const SIZE = Star.imgSize;
        image(Star.sprite,
            this.x * w, this.y * h, SIZE, SIZE,
            this.spriteX, this.spriteY, SIZE, SIZE
        );
    }
}

// dimensions of an individual star image in stars-sprite.png
Star.imgSize = 6;
Star.spritePath = "stars-sprite-" + Star.imgSize + ".png";
Star.sprite;
