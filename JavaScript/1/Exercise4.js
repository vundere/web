class BankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    if (this.balance > amount) {
      this.balance -= amount;
    }
    else {
      console.error("Insufficient Funds");
    }
  }
}

/*
can use function instead of class, must put function in front of class functions and a this.function in the class constructor
*/
