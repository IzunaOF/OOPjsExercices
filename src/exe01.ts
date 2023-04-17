interface BallProps {
    color: string,
    diametro: number,
    material: string,
}

class Ball {
    PI = 3.14
    atributtes: BallProps
    raio = 0
    constructor(atributtes: BallProps) {
        this.atributtes = atributtes
        this.raio = this.atributtes.diametro * this.PI
    }
    changeColor(newColor: string) {
        this.atributtes.color = newColor
    }
    showColor() {
        return this.atributtes.color
    }
    getRaio() {
        this.raio;
    }
}
const myNewBall = new Ball({ color: 'Vermelho', diametro: 4, material: 'Borracha' })

console.log(myNewBall.showColor());
