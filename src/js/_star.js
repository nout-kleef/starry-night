class Star {
    constructor() {
        this.x = Math.random();
        this.y = Math.random();
    }

    show(w, h) {
        fill(255);
        noStroke();
        ellipse(this.x * w, this.y * h, 5, 5);
    }
}
