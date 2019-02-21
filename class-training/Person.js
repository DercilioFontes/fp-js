class Person {
  constructor(fistName, lastName) {
    this.fistName = fistName;
    this.lastName = lastName;
  }

  fullName() {
    return `${this.fistName} ${this.lastName}`;
  }
}

module.exports = Person;
