const { Tamagushi, P } = require("./exe07");

class TamagushiFarm {
    constructor() {
        this.pets = new Map();
    }
    petEntrys() {
        const entrys = [];
        this.pets.forEach((a, b) => {
            entrys.push(b);
        });
        const len = entrys.length;
        const lastKey = entrys.sort((a, b) => a - b).slice(len - 1, len);
        return { petsOnFarm: entrys, lastRegistry: lastKey[0] != undefined ? lastKey[0] : 0 };
    }
    uptadeFarm(importedPets) {
        for (let i = 0; i < importedPets.length; i++) {
            const pet = importedPets[i];
            this.pets.set(pet.registry, pet);
        }
    }
    removePet(...petsRegistrys) {
        for (let i = 0; i < petsRegistrys.length; i++) {
            this.pets.delete(petsRegistrys[i]);
        }
    }
    feedEveryone(feedValue) {
        this.pets.forEach((a) => {
            a.feed(feedValue);
            a.happy += 0.5;
        });
        // showFoods();
        //             const food = P("?? Hmm: ").num();
        //             const toFeed = food.get(food);
        //             pet.feed(toFeed.foodValue);
    }
    takeCareEveryone() {
        this.pets.forEach((a) => {
            a.feed(feedValue);
        });
    }
    playEveryone() {
        this.pets.forEach((a) => {
            a.onPlayground();
        });
    }
    noMoreMonkeysJumpingOnTheBed(){
        P("Todos foram dormir .").print()
    }
    petsOnFarm(petName) {
        const pets = this.pets;
        const farm = this.petEntrys();
        const schema = {
            newPet: function () {
                const petSchema = new Tamagushi(petName, farm.lastRegistry + 1);
                pets.set(farm.lastRegistry + 1, petSchema);
            },
            getPet: function (myPets = []) {
                return myPets.filter((pet) => {
                    return pet.nome == petName;
                });
            },
        };
        return schema;
    }
}

// const Farm = new TamagushiFarm();
// console.log(Farm);
// Farm.petsOnFarm("Cebolinha").newPet();

// Farm.petsOnFarm("Lulu").newPet();
// Farm.feedEveryone(10);
// Farm.petsOnFarm("Jsaer").newPet();
// Farm.feedEveryone(10);

// const f = [];
// Farm.pets.forEach((a, b, c) => {
//     f.push(a);
// });
// Farm.feedEveryone(-80);
// const a = Farm.petsOnFarm("Jsaer").getPet(f);

// Farm.feedEveryone(10);
// const del = Farm.removePet(3);

// const g = [];
// Farm.pets.forEach((a, b, c) => {
//     g.push(a);
// });
// const b = Farm.petsOnFarm("Jsaer").getPet(g);
// console.log(b);
// console.log(Farm.pets);
// console.log(Farm);
const farmOptions = new Map();
farmOptions.set(1, "criar um Banquete");
farmOptions.set(2, "Todos para a cama"); //Hora da Soneca
farmOptions.set(3, "criar Gincana");
farmOptions.set(4, "assembléia Tamagushi");
farmOptions.set(5, "Cuidar de um Pet específico");
farmOptions.set(6, "Finalizar o dia"); // O sol se pôs, fechando as porteiras...
module.exports = {
    TamagushiFarm,
    farmOptions,
};
