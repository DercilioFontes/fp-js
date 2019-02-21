/**
 * Address object
 * Domain model object for LMS use cases covered in the book
 * Author: Luis Atencio
 */
class Address {
  /**
   * Construct a new address object
   * @param country Country code (required)
   * @param state State code
   * @param city City name
   * @param zip Zip code value object instance
   * @param street Street name
   *
   */
  constructor(country, state = null, city = null, zip = null, street = null) {
    this.countryField = country;
    this.stateField = state;
    this.cityField = city;
    this.zipField = zip;
    this.streetField = street;
  }

  get street() {
    return this.street;
  }

  set street(street) {
    this.streetField = street;
    return this;
  }

  get city() {
    return this.city;
  }

  set city(city) {
    this.cityField = city;
    return this;
  }

  get state() {
    return this.state;
  }

  set state(state) {
    this.stateField = state;
    return this;
  }

  get zip() {
    return this.zip;
  }

  set zip(zip) {
    this.zipField = zip;
    return this;
  }

  get country() {
    return this.country;
  }

  set country(country) {
    this.countryField = country;
    return this;
  }
}

module.exports = Address;
