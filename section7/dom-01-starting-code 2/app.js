// const h1 = document.getElementById('main-title');
// h1.textContent = 'Some new title!';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' (Changed!)';

// // const allLis = document.querySelectorAll('li');
// const allLis = document.getElementsByTagName('li');

// for (const allLisEl of allLis) {
//     console.dir(allLisEl);
// }

const ul = document.body.firstElementChild.nextElementSibling;
const firstLi = ul.firstElementChild;

console.log(firstLi);


const section = document.querySelector('section');
const button = document.querySelector('button');

// section.style.backgroundColor = 'blue';

section.className = 'red-bg';

button.addEventListener('click', () => {
    // if (section.className === 'red-bg visible') {
    //     section.className = 'red-bg invisible';
    // } else {
    //     section.className = 'red-bg visible';
    // }
    section.classList.toggle('invisible');
});

