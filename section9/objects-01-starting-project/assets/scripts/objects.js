const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';

const userChosenKeyName = 'level';

let person = {
    'first name': 'Romulo',
    age: 37,
    hobbies: ['Cooking', 'Coding'],
    [userChosenKeyName]: '...',
    greet: function() {
        console.log('Hi there!');
    },
    1.5: 'Hello'
};

// person.age = 36;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

const keyName = 'first name';

console.log(person[keyName]);
console.log(person[1.5]);
console.log(person);