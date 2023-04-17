interface PersonProps {
    firstName: string,
    lastName: string,
    age: number,
    height: number,
    weight: number,
}

const defaultValueOfPerson: PersonProps = {
    firstName: 'Person',
    lastName: 'Default',
    age: 1,
    height: 40 / 100,
    weight: 3500,
}

class Person {
    person: PersonProps
    constructor(person: PersonProps = defaultValueOfPerson) {
        this.person = person
    }
    getOnInYears(options: 'auto' | 'handle', value?: number) {
        if (this.person.age <= 21) {
            this.growUp(0.5);
        }
        switch (options) {
            case 'auto': this.person.age++; break;
            case 'handle': this.person.age += value; break;
            default: 'Make sure you send the right parameters. Any value modified!'
        }
    }
    weightIncrease(newWeight: number) {
        this.person.weight += newWeight
    }
    weightDecrease(newWeight: number) {
        this.person.weight -= newWeight
    }
    growUp(newHeight: number) {
        this.person.height += newHeight
    }
}

const myPerson = new Person();