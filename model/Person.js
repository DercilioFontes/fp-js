/**
 * Person object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
class Person {
  /**
   * Class Person creates person objects
   *
   * @param  {} ssnInput
   * @param  {} firstNameInput
   * @param  {} lastNameInput
   * @param  {} birthYearInput=null
   * @param  {} addressInput=null
   */
  constructor(ssnInput, firstNameInput, lastNameInput, birthYearInput = null, addressInput = null) {
    this.ssnField = ssnInput;
    this.firstNameField = firstNameInput;
    this.lastNameField = lastNameInput;
    this.birthYearField = birthYearInput;
    this.addressField = addressInput;
  }

  get ssn() {
    return this.ssn;
  }

  set ssn(ssnInput) {
    this.ssnField = ssnInput;
    return this;
  }

  get firstName() {
    return this.firstName;
  }

  set firstName(firstNameInput) {
    this.firstNameField = firstNameInput;
    return this;
  }

  get lastName() {
    return this.lastName;
  }

  set lastName(lastNameInput) {
    this.lastNameField = lastNameInput;
    return this;
  }

  get birthYear() {
    return this.birthYear;
  }

  set birthYear(birthYearInput) {
    this.birthYearField = birthYearInput;
    return this;
  }

  get address() {
    return this.address;
  }

  set address(addressInput) {
    this.addressField = addressInput;
    return this;
  }

  get fullName() {
    return `${this.firstNameField} ${this.lastNameField}`;
  }
}

module.exports = Person;
