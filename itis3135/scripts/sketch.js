class Car {
    constructor(cColor, x, y) {
        this.color = cColor;
        this.doors = 4;
        this.isConvertible = false;
        this.x = x;
        this.y = y;
        this.speed = 0;
    }

    start(speed) {
        this.speed = speed;
    }

    display() {
        fill(this.color);
        rect(this.x, this.y, 20, 10);
    }

    move() {
        this.x += this.speed;
        if (this.x < -20) {
            this.x = width;
        } else if (this.x > width) {
            this.x = -20;
        }
    }
}

// p5.js setup function
function setup() {
    createCanvas(200, 400);

    // Initialize the cars
    window.rav4 = new Car("silver", 100, 300);
    window.charger = new Car("gold", 0, 200);
    window.nova = new Car("blue", 200, 100);
    nova.doors = 2; // Update nova's doors property

    // Start the cars with different speeds
    rav4.start(2.3);
    charger.start(-4);
    nova.start(random(-1, 1));
}

// p5.js draw function
function draw() {
    background("beige");

    // Display and move all three cars
    rav4.display();
    charger.display();
    nova.display();

    rav4.move();
    charger.move();
    nova.move();
}