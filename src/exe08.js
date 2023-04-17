class Animal {
    constructor() {
        this.ordem = "";
    }
}

class Monkey extends Animal {
    constructor(nome) {
        super();
        this.ordem = "primata";
        this.nome = nome;
        this.bucho = new Array(3).fill(null);
    }
    comer({ tipo, comida }) {
        const meuBrother = this.respeitaOsBrothers(tipo);
        if (!meuBrother) {
            for (let i = 0; i < this.bucho.length; i++) {
                if (this.bucho[i] === null) return (this.bucho[i] = comida);
            }
        }
        return this.bucho;
    }
    digerir() {
        return this.bucho.fill(null);
    }
    verBarriguinha() {
        const barriguinha = [].concat(
            ...this.bucho.filter((comida) => {
                if (comida != null) return comida;
            })
        );

        return barriguinha;
    }
    respeitaOsBrothers(brother) {
        return this.ordem == brother ? true : false;
    }
}

const monkey = new Monkey("Marcelo");
monkey.comer({ tipo: "Fruta", comida: "Maça" });
monkey.comer({ tipo: "Fruta", comida: "Laranja" });
monkey.comer({ tipo: "primata", comida: "Meu Amigo Charlie Brown" });
console.log(monkey.bucho);
console.log(monkey.verBarriguinha());
