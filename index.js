console.log('hello world');
const form = document.querySelector('form');
const message = document.querySelector('#message');

const addMovie = evt => {
    evt.preventDefault();
    let inputField = document.querySelector('input');

    let movie = document.createElement('li');
    let movieTitle = document.createElement('span');
    let deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'x';
    deleteBtn.addEventListener('click', deleteMovie);

    movieTitle.textContent = inputField.value;
    movieTitle.addEventListener('click', crossOffMovie);
    movie.appendChild(movieTitle);
    movie.appendChild(deleteBtn);

    document.querySelector('ul').appendChild(movie);
};

const deleteMovie = evt => {
    evt.target.parentNode.remove();
    message.textContent = "Movie deleted!";
};

const crossOffMovie = evt => {
    let { target } = evt;
    target.classList.toggle('checked');

    if(target.classList.contains('checked')) {
        message.textContent = "Movie watched!";
    } else {
        message.textContent = "Movie added back!";
    };
};

form.addEventListener('submit', addMovie);