// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5);
// // const moreNumber = new Array(5);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(listItems);
// console.log(arrayListItems);

// const hobbies = ['Coding', 'Cooking', 'Studying'];
// const personalData = [37, 'Romulo', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoint of data) {
//         console.log(dataPoint);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 2);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);
// testResults.push(5.91);

// console.log(storedResults, testResults);

// // console.log(testResults.indexOf(1.5));\\
// console.log(testResults.lastIndexOf(1.5));

// console.log('Is 10.99 included in this array', testResults.includes(10.99));
// console.log('Is 10.99 included in this array', testResults.indexOf(10.99) !== -1);

// const personData = [{name: 'Romulo'}, {name: 'Isabela'}];
// console.log(personData.indexOf({name: 'Isabela'}));

// const isabela = personData.find((person, idx, persons) => {
//     return person.name = 'Isabela';
// });

// // console.log(isabela);

// isabela.name = 'Anna';

// console.log(isabela, personData);

// const annaIndex = personData.findIndex((person, idx, persons) => {
//     return person.name = 'Anna';
// });

// console.log(annaIndex);

// the result of the
// indexOf() method when using objects, which are reference values, is
// -1, because I'm looking for an object in memory and in the argument
// of indexOf() I passed another object, so the method could not find
// a matching object because both are different. There is another
// method that works for this case.

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//     taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
  const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});

// console.log(prices, taxAdjustedPrices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

// console.log(sortedPrices.reverse());
console.log(sortedPrices);

// const filteredArray = prices.filter((price, idx, prices) => {
//     return price > 6;
// });

// const filteredArray = prices.filter((p) => p > 6);

// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //     sum += price;
// // });

// // console.log(sum);

// let sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);

// console.log(sum);

// // split()
// const data = "new york;10.99;2000";

// const transformedData = data.split(";");
// transformedData[1] = +transformedData[1];
// console.log(transformedData);

// // join()
// const nameFragments = ["Romulo", "Hipolito Abbiati"];
// const name = nameFragments.join(" ");
// console.log(name);

// // SPREAD OPERATOR
// const copiedNameFragments = [...nameFragments];
// nameFragments.push("Mr.");
// console.log(nameFragments, copiedNameFragments);

// console.log(Math.min(...prices));

// const persons = [
//   { name: "Romulo", age: 37 },
//   { name: "Isabela", age: 32 },
// ];
// const copiedPersons = [
//   ...persons.map((person) => ({ name: person.name, age: person.age })),
// ];
// persons.push({ name: "Anna", age: 36 });
// persons[0].age = 38;

// console.log(persons, copiedPersons);

const nameData = ['Romulo', 'Hipolito Abbiati', 'Mr', 37];
// const firstName = nameData[0];
// const lastName = nameData[1];

const [ firstName, lastName, ...otherInformation ] = nameData;

console.log(firstName, lastName, otherInformation);