class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
}

class InvestAccount extends BankAccount {
    constructor(tax, balance = 0) {
        super(balance);
        this.tax = tax;
    }
    addTax() {
        return (this.balance += this.balance / 10);
    }
}

const account = new InvestAccount(10, 1000);

account.addTax();
account.addTax();
account.addTax();
account.addTax();
account.addTax();

console.log(account.balance);
