const prompt = require("prompt-sync")();

const P = (...str) => {
    const element = str.join(" ");
    const constructor = {
        print() {
            const consoling = element;
            console.log(consoling);
        },
        num() {
            return parseInt(prompt(element));
        },
        char() {
            return prompt(element);
        },
    };
    return constructor;
};

class Tamagushi {
    constructor(nome, registry) {
        this.registry = registry;
        this.nome = nome;
        this.fome = 100;
        this.health = 100;
        this.age = 0;
        this.happy = 100;
        this.energy = 100;
        this.alive = true;
    }
    changeName(novoNome) {
        return (this.nome = novoNome);
    }
    feed(alimento) {
        this.fome = this.fome + alimento > 100 ? 100 : this.fome + alimento;
    }
    healthStatus() {
        return (this.health = (this.fome + this.happy) / 2);
    }
    humor() {
        return (this.fome + this.health + this.happy) / 3;
    }
    happiness(hapii = 0) {
        this.happy = (this.humor() + this.healthStatus() ) / 2 + hapii;
        return this.happy;
    }
    regulateEnergy() {
        if (this.health < 65 && this.energy > 80) this.energy = 80;
    }
    onPlayground() {
        this.fome -= 3;
        this.health += 0.2;
        this.happy += 5;
        this.energy -= 7;

        this.regulateEnergy();
    }
    tamagushiIsAlive() {
        if (this.fome <= 0) return !this.alive;
        return this.alive;
    }
    inGame(activity) {
        switch (activity) {
            case "playground":
                this.fome -= 5;
                break;
            case "dream":
                this.fome -= 3;
                break;
            default:
                this.fome -= 1;
                break;
        }
    }
    status() {
        return `\tNome: ${this.nome} Idade: ${this.age}\n Fome:${
            this.fome
        } | Saude:${this.healthStatus()} | Alegria:${this.happiness()} | Humor:${this.humor()}`;
    }
}

const options = new Map();
options.set(1, "Alimentar");
options.set(2, "Banho");
options.set(3, "Dormir");
options.set(4, "Brincar");
options.set(5, "Trocar Pet");
options.set(6, "Criar novo Pet");
options.set(7, "Ir para a fazenda");
options.set(8, "Diga, até mais Amiguinho!");

const foods = new Map();
foods.set(1, { food: "Maçã", foodValue: 12 });
foods.set(2, { food: "Biscoito", foodValue: 7 });
foods.set(3, { food: "Doce", foodValue: 3 });
foods.set(4, { food: "Bolo", foodValue: 8 });
foods.set(5, { food: "Cereal", foodValue: 15 });

// const pet = new Tamagushi("Roberto");
function validateNames(name = "Esqueci Do Nome Velho") {
    const regex = new RegExp(/\w{3,}/);
    const ok = regex.test(name);
    return { str: name, status: ok };
}
const createTamagushi = (player, petRegistry) => {
    let valid;
    do {
        const name = P(`Olá ${player}, você poderia me dar um nome? >> `).char();
        const rx = validateNames(name);
        valid = { name: rx.str, status: rx.status };
    } while (!valid.status);

    P(`\nAdorei!... isso! meu nome é ${valid.name}, demais!`).print();
    P(
        "\nBem Vindo ao Tamagushi World,",
        "\n\tDivita-se com seu Pet Virtual",
        "\n\tAlimente, dê banho, coloque para dormir",
        "\n\te o mais divertido 'Hora do parquinho'",
        "\n\tbrinque sempre com seu amigo Pet Virtual"
    ).print();

    return new Tamagushi(valid.name, petRegistry);
};

function Layout(player, petName) {
    P(`\nO que eu vamo fazer agora ${player}?`).print();
    P(`\tCuidando de ${petName}\n`).print();
    options.forEach((a, b) => {
        P(`${b} -`, a).print();
    });

    return P("Sistema: Escolha > ").num();
}
function showFoods() {
    foods.forEach((a, b) => {
        P(`${b} > ${a.food}\t aumenta: ${a.foodValue}`).print();
    });
}

function eventsBilboard() {
    P("\n*/_*/_*/_*/ Um Evento está no ar ... press enter e saida mais\n").char();
    P(
        "\nEvento: Adote um Tamagushi",
        "  O clima de compaixão está na região, e todos os TamagushiLovers se uniram para trazer o melhor dos Pets: Amor, Alegria e Diversão",
        "\tAdotar: você pode escolher entre os pets anunciados, pode ainda receber um bônus se combinar com sua 'Turma' tamagushi.",
        "\tDoe: você tambem pode participar ajudando seus amigos, eles vão ficar felizes em Adotar um de seus Pets;\nsua 'Turma' tamagushi não ficará triste, receba recompensas incríveis",
        "Participe já desta confraternização, a alegria é contagiante.\n",
        "\t* Bonus exclusivos,\nRecompensas aleatórias,\n"
    ).print();
    P("terminei de ler = enter ").char();
}

function farmGreetings() {
    P("precione enter para continuar . . .").char();
    P(
        "\n\tAqui você pode cuidar de todos os seus Pets ",
        "\nQue tal um Banquete ! ** Você pode alimentar todos os seus Pets de uma só vez!.",
        '\nFesta do Pijama ! organize a noite dos seus pets com "Hora da Soneca"',
        '\nDivirta-se seus Pets com o momento "Gincana"!\n\t Organize vários eventos e competições entre seus pets',
        "\n\n\t Adicione Novos Pets a qualquer momento"
    ).print();
}
module.exports = {
    createTamagushi,
    options,
    foods,
    P,
    Layout,
    showFoods,
    validateNames,
    Tamagushi,
    farmGreetings,
    eventsBilboard,
};
