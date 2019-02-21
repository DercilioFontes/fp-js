const _ = require('lodash');

const Person = require('./model/Person');
const Address = require('./model/Address');

const p1 = new Person('111-11-1111', 'Haskell', 'Curry');
p1.address = new Address('US');
p1.birthYear = 1900;

const p2 = new Person('222-22-2222', 'Barkley', 'Rosser');
p2.address = new Address('Greece');
p2.birthYear = 1907;

const p3 = new Person('333-33-3333', 'John', 'von Neumann');
p3.address = new Address('Hungary');
p3.birthYear = 1903;

const p4 = new Person('444-44-4444', 'Alonzo', 'Church');
p4.address = new Address('US');
p4.birthYear = 1903;

// const name = p => p.fullName;

const arrayOfPeople = [p1, p2, p3, p4];

const fullNameArray = _.map(arrayOfPeople, s => (s !== null && s !== undefined ? s.fullName : ''));

console.log(fullNameArray);
