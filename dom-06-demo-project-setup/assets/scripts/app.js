const movieList = document.getElementById('movie-list');
const movieModal = document.getElementById('add-modal');
const deleteModal = document.getElementById('delete-modal');
const backdrop = document.getElementById('backdrop');
const input = document.getElementsByTagName('input');
const entryTextSection = document.getElementById('entry-text');

const movies = [];

const openAddDummyButton1 = document.getElementById('btn-add-dummy-1');
const openAddDummyButton2 = document.getElementById('btn-add-dummy-2');
const openAddDummyButton3 = document.getElementById('btn-add-dummy-3');

const openAddMovieModalButton = document.getElementById('btn-add-movie');
const cancelAddMovieButton = movieModal.lastElementChild.querySelector('.btn--passive')
const addMovieButton = movieModal.lastElementChild.querySelector('.btn--success')

const updateUI = () => {
    if (movies.length === 0) {
        entryTextSection.style.display = 'block';
    } else {
        entryTextSection.style.display = 'none';
    }
}

const deleteMovie = movieId => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieId) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    movieList.children[movieIndex].remove();
    updateUI();
}

const deleteMovieHandler = movieId => {
    toggleDeleteModal();
    toggleBackdrop();
    const deleteMovieCancelButton = deleteModal.lastElementChild.querySelector('.btn--passive')
    let deleteMovieConfirmButton = deleteModal.lastElementChild.querySelector('.btn--danger')

    deleteMovieConfirmButton.replaceWith(deleteMovieConfirmButton.cloneNode(true));

    deleteMovieConfirmButton = deleteModal.lastElementChild.querySelector('.btn--danger')

    deleteMovieCancelButton.removeEventListener('click', deleteMovieCancelHandler);
    deleteMovieCancelButton.addEventListener('click', deleteMovieCancelHandler);
    deleteMovieConfirmButton.addEventListener('click', deleteMovieConfirmHandler.bind(null, movieId));
};

const renderNewMovieElement = (id, title, imageUrl, rating, description) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
        <div class="movie-element__image">
            <img src="${imageUrl}"/>
        </div>
        <div class="movie-element__info">
            <h2>${title}</h2>
            <p>${rating} / 10</p>
            <div style="padding-top: 10px;">
                <span>${description}</span>
            </div>
        </div>
    `;
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    movieList.append(newMovieElement);
}

const toggleBackdrop = () => backdrop.classList.toggle('visible');
const toggleMovieModal = () => movieModal.classList.toggle('visible');
const toggleDeleteModal = () => deleteModal.classList.toggle('visible');

function openAddMovieModalHandler() {
    toggleMovieModal();
    toggleBackdrop();
}
function addMovieHandler() {
    if (input[0].value.trim() === '' || input[1].value.trim() === '' || input[2].value.trim() === '' || input[3].value.trim() === '' || +input[2].value < 1 || +input[2].value > 10) {
        alert('Please enter valid values (rating between 1 and 10).');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: input[0].value,
        image: input[1].value,
        rating: input[2].value,
        description: input[3].value,
    }
    movies.push(newMovie);
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.image, newMovie.rating, newMovie.description);
    updateUI();
    closeAddMovieHandler();
}
function closeAddMovieHandler() {
    toggleBackdrop();
    toggleMovieModal();
    for (const el of input) {
        el.value = '';
    }
}
function deleteMovieConfirmHandler(movieId) {
    toggleDeleteModal();
    toggleBackdrop();
    deleteMovie(movieId);
}
function deleteMovieCancelHandler() {
    toggleDeleteModal();
    toggleBackdrop();
}
function addDummyMovieHandler1() {
    input[0].value = 'THE BOYS';
    input[1].value = 'https://m.media-amazon.com/images/M/MV5BYTY2ZjYyNGUtZGVkZS00MDNhLWIwMjMtZDk4MmQ5ZWI0NTY4XkEyXkFqcGdeQXVyMTY3MDE5MDY1._V1_FMjpg_UX1000_.jpg';
    input[2].value = 8.7;
    input[3].value = `A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.`;
}
function addDummyMovieHandler2() {
    input[0].value = 'Despicable Me 4';
    input[1].value = 'https://dx35vtwkllhj9.cloudfront.net/universalstudios/despicable-me-4/images/gallery/image6.jpg';
    input[2].value = 6.3;
    input[3].value = `After seven years we're finally getting another Despicable Me (if you don't count Minions: The Rise of Gru). The world’s favorite supervillain (turned Anti-Villain League agent) is back with a new adventure, new addition to the family (Gru Jr.), and new nemeses Maxime Le Mal (Will Ferrell) and Valentina (Sofia Vergara). With the popularity of this beloved franchise and Despicable Me 3 and Minions both grossing over $1 billion worldwide, we wouldn't be surprised if Despicable Me 4 turns out to be the big winner at the box office this summer.`;
}
function addDummyMovieHandler3() {
    input[0].value = 'Lady in the Lake';
    input[1].value = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqtPXe8gcR0c-AmqBKNUSUqkt6a3_2ogEQIg&s';
    input[2].value = 6.1;
    input[3].value = `Natalie Portman is making a rare TV appearance this year in an Apple TV+ drama from writer-director Alma Har'el (Honey Boy). Based on the bestselling novel by Laura Lippman, the seven-episode miniseries follows Portman’s Maddie Schwartz as she investigates two disturbing Baltimore murders. With Moses Ingram (“The Queen’s Gambit”) as co-star, alongside an impressive supporting cast, this period drama is poised to be a standout for the streaming service in a year of hot titles.`;
}

openAddDummyButton1.addEventListener('click', addDummyMovieHandler1);
openAddDummyButton2.addEventListener('click', addDummyMovieHandler2);
openAddDummyButton3.addEventListener('click', addDummyMovieHandler3);

openAddMovieModalButton.addEventListener('click', openAddMovieModalHandler);
cancelAddMovieButton.addEventListener('click', closeAddMovieHandler);
addMovieButton.addEventListener('click', addMovieHandler);
