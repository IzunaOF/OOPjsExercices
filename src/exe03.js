const prompt = require('prompt-sync')()

export class Rectangle {
    constructor(length = 0,
        height = 0) {
        this.length = length;
        this.height = height
    }
    uptadeBaseValue(newBase = 0) {
        this.length = newBase
    }
    uptadeHeightValue(newHeight = 0) {
        this.height = newHeight
    }
    getArea() {
        return 2 * (this.length + this.height);
    }
    getPerimetro() {
        return this.length * this.height
    }
}

function getAmountOfMaterialToBeUse(localArea = 0, materialArea = 0) {
    const rubble = localArea % materialArea
    const amountMaterial = localArea / materialArea

    if (rubble !== 0) return amountMaterial + 1
    return amountMaterial;
}

function amountOfMaterials() {
    const length = parseFloat(prompt('Informe o comprimento do local: '));
    const height = parseFloat(prompt('Informe a largura do local: '));

    const lengthTread = parseFloat(prompt('Informe o comprimento do piso: '));
    const heightTread = parseFloat(prompt('Informe a largura do piso: '));

    const lengthBaseboard = parseFloat(prompt('Informe o comprimento do rodapé: '));
    const heightBaseboard = parseFloat(prompt('Informe a largura do rodapé: '));

    const localArea = new Rectangle(length, height).getArea();
    const treadArea = new Rectangle(lengthTread, heightTread).getArea();
    const baseboardArea = new Rectangle(lengthBaseboard, heightBaseboard).getArea();

    const treadQuantity = getAmountOfMaterialToBeUse(localArea, treadArea).toFixed()

    const baseboardQuantity = getAmountOfMaterialToBeUse(localArea, baseboardArea).toFixed()

    return `Para as medidas informadas você irá usar uma quantidade de ${treadQuantity} de pisos e uma quantidade de ${baseboardQuantity} de rodapés.`
}

// const construcao = amountOfMaterials()
const Rect = Rectangle();
export default Rect;