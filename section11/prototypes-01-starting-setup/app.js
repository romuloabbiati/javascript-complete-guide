// CLASSES / PRESENT AND FUTURE
// class Person {
//     name = 'Romulo';

//     constructor() {
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

const person = new Person();
person.greet();