const {
    Layout,
    showFoods,
    food,
    createTamagushi,
    P,
    validateNames,
    farmGreetings,
    eventsBilboard,
} = require("./exe07");
const { TamagushiFarm, farmOptions } = require("./Fazendinha");

const tamagushi = [];

function choosePet(name = " ") {
    return tamagushi.filter((pet) => {
        return pet.nome == name;
    });
}

function TamagushiWorld() {
    let player;
    do {
        let name = P("Qual seu nome Jogador? >> ").char();
        const rx = validateNames(name);
        player = { name: rx.str, status: rx.status };
    } while (!player.status);
    const newTamagushi = createTamagushi(player.name, tamagushi.length);

    tamagushi.push(newTamagushi);

    const playingWith = new Array(1).fill(null);

    let isAlive = true;

    let onPlayground = true;
    let action = " ";
    let nameTarget = " ";

    do {
        const pet = playingWith[0] || tamagushi[0];
        const step = Layout(player.name, pet.nome);

        onPlayground = step == (7 || 8) ? false : true;

        if (onPlayground) {
            switch (step) {
                case 1:
                    showFoods();
                    const chosenFood = P("?? Hmm: ").num();
                    const toFeed = food.get(chosenFood);
                    pet.feed(toFeed.foodValue);
                    action = "playground";
                    break;
                case 2:
                    P("\nBanho Jhonson & Jhonson").print();
                    action = "dream";
                    break;

                case 3:
                    P("\nContando carneirinhos").print();
                    break;

                case 4:
                    const playTime = P(
                        `${pet.nome} está te perguntando! Quanto tempo vamos nos devertir lá fora? `
                    ).num();
                    for (let i = 0; i < playTime; i++) {
                        P("Brincando ... muito divertido!").print();
                        pet.onPlayground();
                    }
                    break;

                case 5:
                case 6:
                    if (step == 5) nameTarget = P("Qual o nome do Pet: ").char();
                    else {
                        const newPet = createTamagushi();
                        tamagushi.push(newPet);
                        nameTarget = tamagushi[tamagushi.length - 1].nome;
                    }
                    const petToPlay = choosePet(nameTarget);
                    playingWith.fill(...petToPlay);
                    break;

                case 25:
                    P(`\n*/*/**/**/*/* \nSensacional, você me achou !\n${pet.status()}\n */*/**/**/*/*`).print();
                    break;

                default:
                    P("Poxa eu só queria fazer algo legal! que tal escolher denovo").print();
                    break;
            }
        }
        isAlive = pet.tamagushiIsAlive();

        if (!isAlive) P("Ah, como pode! Você deixou seu Pet morrer. Uma amizade chega ao fim. ");
        pet.inGame(action);
        if (!onPlayground)
            P(`\nVocê: Até mais amiguinho.\nPet: Foi Divertido brincar com você ${player.name}!\n`).print();

        if (step == 7) {
            const Farm = new TamagushiFarm();
            Farm.uptadeFarm(tamagushi);

            P(`Bem vindo ${player.name}, Vamos explorar a Fazenda Tamagushi!`).print();

            farmGreetings();
            eventsBilboard();
            let onFarming = true;
            do {
                farmOptions.forEach((announcement, x) => {
                    P(x, announcement).print();
                });

                const farmStep = P("Sistema: Escolha > ").num();

                if (farmStep == 6) onFarming = false;
                if (onFarming) {
                    switch (farmStep) {
                        case 1:
                            showFoods();
                            const chosenFood = P("Criar um banquete de > ").num();
                            Farm.feedEveryone(chosenFood);
                            P(`O banque de ${chosenFood} foi um sucesso. Todos os Pets estão mais felizes`);
                            break;
                        case 2:
                            Farm.noMoreMonkeysJumpingOnTheBed();
                            break;
                        case 3:
                            Farm.playEveryone();
                            P(
                                "A Turma se reuniu e fez a maior bagunça, estão todos felizes, porem, cansados e famintos. "
                            ).print();
                            break;
                        case 4:
                            const somePets = [];
                            for (let i = 0; i < 4; i++) {
                                const petAt = Math.floor(Math.random() * Farm.pets.size);
                                const pet = Farm.pets.get(petAt);
                                somePets.push(pet.nome);
                            }
                            P(`Saiba o que ${somePets.join(", ")} tem a falar sobre o ambiente da fazenda.`);
                            break;
                        case 5:
                            onPlayground = true;
                            onFarming = false;
                            break;
                        default:
                            P(
                                "A Fazenda é Grande mas não o bastante pra você errar o caminho",
                                "Tente Novamente Chefe"
                            ).print();
                            break;
                    }
                }
            } while (onFarming);
        }
    } while (onPlayground && isAlive);
}

TamagushiWorld();
