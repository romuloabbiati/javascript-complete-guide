// CLASSES / PRESENT AND FUTURE
class AgedPerson {
    printAge() {
        console.log(this.age);
    }
}

class Person {
    name = 'Romulo';

    constructor() {
        // super();
        this.age = 37;
        // this.greet = function() { 
        //             console.log(
        //     `Hi, I am ${this.name} and I am ${this.age} years old.`
        // );
        //  };
    }

    // this way is good because if I use arrow function/anonymous function
    // the this will refer to the object this is part of and not the object 
    // the called the function
    // greet = () => {
    //     console.log(
    //         `Hi, I am ${this.name} and I am ${this.age} years old.`
    //     );
    // }

    // greet = function() {
    //     console.log(
    //         `Hi, I am ${this.name} and I am ${this.age} years old.`
    //     );
    // }

    // this is a more CORRECT approach in terms of performance, but 
    // this will refer to the object that called THIS and I will 
    // need to use BIND() to refer to the object where the greet() method 
    // is created
    greet() {
        console.log(
            `Hi, I am ${this.name} and I am ${this.age} years old.`
        );
    }
}

// constructor function / IN THE PAST
// function Person() {
//     this.age = 37;
//     this.name = 'Romulo';
//     // this.greet = function() { ... }
// }

// Person.prototype.greet = function() {
//     console.log(
//         `Hi, I am ${this.name} and I am ${this.age} years old.`
//     );
// }

// Person.prototype = {
//     printAge() {
//         console.log(this.age);
//     }
// };

// Person.prototype.printAge = function() {
//     console.log(this.age);
// }

// console.dir(Person);

// const person = new Person();
// person.greet();
// person.printAge();
// console.log(person.length);
// console.log(person.toString());
// const person2 = new person.__proto__.constructor();
// console.dir(Object.prototype.__proto__);

const p = new Person();
const p2 = new Person();
// console.log(p.__proto__ === p2.__proto__);
console.log(p);

const button = document.getElementById('btn');
button.addEventListener('click', p.greet.bind(p));