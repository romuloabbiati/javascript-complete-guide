const movieList = document.getElementById('movie-list');

movieList.style['background-color'] = 'red';
movieList.style.display = 'block';


let person = {
    'first name': 'Romulo',
    age: 37,
    hobbies: ['Cooking', 'Coding'],
    greet: function() {
        console.log('Hi there!');
    }
};

// person.age = 36;
delete person.age;
// person.age = undefined;
// person.age = null;
person.isAdmin = true;

console.log(person['first name']);