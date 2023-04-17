class Vertex {
    constructor(x = parseFloat, y = parseFloat) {
        this.x = x;
        this.y = y;
    }
    values() {
        return { x: this.x, y: this.y };
    }
}
class Rectangle {
    constructor(v1 = Vertex, v2 = Vertex) {
        this.v1 = v1;
        this.v2 = v2;
    }
    center() {
        return { x: (v1.x + v2.x) / 2, y: (v1.y + v2.y) / 2 };
    }
}

const v1 = new Vertex(0, 20);
const v2 = new Vertex(20, 40);

const myRect = new Rectangle(v1, v2);

console.log(myRect.center());
