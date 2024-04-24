const startGameBtn = document.getElementById('start-game-btn');

// FUNCTION EXPRESSION
// this one is read by the browser however I need to initialise 
// first before I use
// const startGame = function() {
//     console.log('game is starting...');
// }

// FUNCTION DECLARATION / FUNCTION STATEMENT
// this way, this function gets hoisted by the browser. It means 
// the browser will read the file once and place this function at 
// the top and initialise this function
// function startGame() {
//     console.log('game is starting...');
// }

startGame();

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

// console.dir(startGame);


startGameBtn.addEventListener('click', startGame);