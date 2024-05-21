// const ids = new Set(['Hi', 'from', 'set']);
// ids.add(2);
// if(ids.has('Hi')) {
//     ids.delete('Hi');
// }

// for (const entry of ids.entries()) {
//     console.log(entry[0]);
// }

// const person1 = {name: 'Romulo'};
// const person2 = {name: 'Isabela'};

// const personData = new Map([[person1, [{date: 'yesterday', price: 10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);

// console.log(personData);
// console.log(personData.get(person1));

// // for (const entry of personData.entries()) {
// //     console.log(entry);
// // }
// // for (const [key, value] of personData.entries()) {
// //     console.log(key, value);
// // }
// // for (const key of personData.keys()) {
// //     console.log(key);
// // }
// for (const value of personData.values()) {
//     console.log(value);
// }

let person = {name: 'Romulo'};
const persons = new WeakSet();
persons.add(person);

// ... some operation
// person = null;

console.log(persons);

const personData = new WeakMap();
personData.set(person, 'Extra info!');

person = null;

console.log(personData);

