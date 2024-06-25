// CLASSES / PRESENT AND FUTURE
// class AgedPerson {
//     printAge() {
//         console.log(this.age);
//     }
// }

// class Person extends AgedPerson {
//     name = 'Romulo';

//     constructor() {
//         super();
//         this.age = 37;
//     }

//     greet() {
//         console.log(
//             `Hi, I am ${this.name} and I am ${this.age} years old.`
//         );
//     }
// }

// constructor function / IN THE PAST
function Person() {
    this.age = 37;
    this.name = 'Romulo';
    this.greet = function() {
        console.log(
                        `Hi, I am ${this.name} and I am ${this.age} years old.`
                    );
    }
}

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

Person.prototype.printAge = function() {
    console.log(this.age);
}

console.dir(Person);

const person = new Person();
person.greet();
person.printAge();
console.log(person.__proto__);
const person2 = new person.__proto__.constructor();
console.log(person2);