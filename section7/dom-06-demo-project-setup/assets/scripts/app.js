const addMovieModal = document.getElementById('add-modal');

const backdrop = document.getElementById('backdrop');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toggleMovieModal = () => { // function() {}
    addMovieModal.classList.toggle('visible');
    toggleBackgrop();
};

const toggleBackgrop = () => {
    backdrop.classList.toggle('visible');
};

const backdropClickHandler = () => {
    toggleMovieModal();
};

const cancelAddMovie = () => {
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);