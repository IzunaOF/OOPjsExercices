class FuelPump {
    constructor(fuelType, priceLt, fuelRange) {
        this.fuelType = fuelType;
        this.priceLt = priceLt;
        this.fuelRange = fuelRange;
        this.maxFuelRange = 10000;
    }

    moneyFillUp(value) {
        const literMoney = this.priceLt / value;
        this.updateFuelAmount({ fillStatus: "fill", liters: literMoney });
        const action = {
            paid: value,
            perLiter: this.priceLt,
            provided: literMoney,
        };
        return action;
    }
    literFillUp(liters) {
        const due = liters * this.priceLt;
        this.updateFuelAmount({ fillStatus: "fill", liters: liters });
        const action = {
            debt: due,
            perLiter: this.priceLt,
            provided: liters,
        };
        return action;
    }
    pricePerLiter(n) {
        this.priceLt = n;
    }
    alterFuelType(t) {
        this.fuelType = t;
    }
    refuelPump(liters) {
        if (this.fuelRange + liters > this.maxFuelRange) return { message: "danger! maximum capacity violated" };
        this.updateFuelAmount({ fillStatus: "refuel", liters: liters });
    }
    updateFuelAmount({ fillStatus, liters }) {
        fillStatus == "fill" ? (this.fuelRange -= liters) : (this.fuelRange += liters);
    }
}

const pumpPower = new FuelPump("Gasoline", 1.78, 7451);
