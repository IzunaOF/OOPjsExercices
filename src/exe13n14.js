import crypto from "crypto";
class Employee {
    constructor(firstName, lastName, salary) {
        this.registry = crypto.randomUUID();
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
    getStatus() {
        const name = [].concat(this.firstName, this.lastName).join(" ");
        return `Employee Name: ${name}`;
    }
    salaryIncrease(percent) {
        return (this.salary += this.salary * (percent / 100));
    }
}

const employee = new Employee("Alberto", "Roberto", 3500);

console.log(employee.getStatus());

console.log(employee.salaryIncrease(10));
