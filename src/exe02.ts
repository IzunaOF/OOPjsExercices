interface SquareProps {
    side: number,
}

class Square {
    square: SquareProps;
    constructor(square: SquareProps) {
        this.square = square
    }
    updateSquareSide(newSide: number) {
        this.square.side = newSide
    }
    getSideValue() {
        return this.square.side
    }
    getArea() {
        return this.square.side * this.square.side
    }
}