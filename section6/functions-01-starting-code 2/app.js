const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log('game is starting...');
}

// const person = {
//     name: 'Romulo', // a variable inside of an object is called PROPERTY
//     greet: function() { // a function inside of an object is called METHOD
//         console.log("Hello, I'm Romulo!");
//     }
// }

// person.greet();

console.dir(startGame);


startGameBtn.addEventListener('click', startGame);