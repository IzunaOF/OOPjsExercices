class Car {
    constructor(consumo) {
        this.consumo = consumo;
        this.fuelTank = 0;
        this.maxFuelRange = 350;
    }
    addFuel(liters) {
        return (this.fuelTank += liters);
    }
    moveFoward(km) {
        if (this.fuelTank <= 0) return { message: "Out of Gas!" };
        const fuelSpend = km / this.consumo;
        const restTank = this.fuelTank - fuelSpend;
        this.fuelTank = restTank < 0 ? 0 : restTank;
        return fuelSpend;
    }
    getFuelTankLevel() {
        if (this.fuelTank <= 0) return { message: "Out of Gas!" };
        const level = ((this.fuelTank / 350) * 100).toFixed(2);
        return { message: `${level}%` };
    }
    autonomy() {
        const fuel = this.fuelTank;
        const kml = this.consumo * (fuel < 1 ? 0 : fuel);
        const mtl = this.consumo * fuel * 100;
        return { km: kml < 1 ? 0 : kml.toFixed(), mt: mtl.toFixed() };
    }
    painel() {
        return {
            velocity: 80,
            autonomy: `km:${this.autonomy().km} / ${this.autonomy().mt}:metros`,
        };
    }
}

const fusca = new Car(10);

console.log(fusca.painel());
console.log(fusca.addFuel(50));
console.log(fusca.painel());
console.log(fusca.getFuelTankLevel());
fusca.moveFoward(10);
console.log(fusca.moveFoward(312.45));
console.log(fusca.getFuelTankLevel().message);
console.log(fusca.painel());
