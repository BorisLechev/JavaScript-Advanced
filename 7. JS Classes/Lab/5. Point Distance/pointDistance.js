class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(firstPoint, secondPoint) {
        let xDelta = firstPoint.x - secondPoint.x;
        let yDelta = firstPoint.y - secondPoint.y;

        return Math.sqrt(xDelta ** 2 + yDelta ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));