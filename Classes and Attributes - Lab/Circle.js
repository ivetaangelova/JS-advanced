class Circle {
    _radius;

    constructor(radius) {
        this.radius = radius;
    }

    get radius() {
        return this._radius;
    }

    set radius(value) {
        return this._radius = value;
    }

    get diameter() {
        return this.radius * 2;
    }

    set diameter(value) {
        if (typeof value !== 'number') {
            throw new Error("Diameter has to be a number!");
        }
        this._radius = value / 2;
    }

    get area() {
        return Math.PI * (this.radius ** 2);
    }
}
let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);