const movieList = document.getElementById('movie-list');
const movieModal = document.getElementById('add-modal');
const openAddMovieModalHandler = document.getElementById('btn-add-movie');
const openAddDummyHandler = document.getElementById('btn-add-dummy');
const cancelAddMovieHandler = movieModal.lastElementChild.querySelector('.btn--passive')
const addMovieHandler = movieModal.lastElementChild.querySelector('.btn--success')

function openAddMovieModal() {
    movieModal.classList.toggle('visible');
}
function addMovie() {
    let title = document.getElementById('title').value;
    let url = document.getElementById('image-url').value;
    let rating = document.getElementById('rating').value;
    let li = document.createElement('li');
    li.innerHTML += `
        <li class="movie-element">
            <h2>${title}</h2>
            <p>${rating}</p>
            <img class="movie-element__image" src="${url}"/>
        </li>
        `;
    movieList.append(li);
    closeAddMovie();
}
function closeAddMovie() {
    movieModal.classList.toggle('visible');
    document.getElementById('title').value = '';
    document.getElementById('image-url').value = '';
    document.getElementById('rating').value = '';
}
function addDummyMovie() {
    document.getElementById('title').value = 'THE BOYS';
    document.getElementById('image-url').value = 'https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg';
    document.getElementById('rating').value = 8.7;
}

openAddDummyHandler.addEventListener('click', addDummyMovie);

openAddMovieModalHandler.addEventListener('click', openAddMovieModal);
cancelAddMovieHandler.addEventListener('click', closeAddMovie);
addMovieHandler.addEventListener('click', addMovie);