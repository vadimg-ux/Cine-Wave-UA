// Movie Database
const movies = [
    { id: 1, title: 'Inception', year: 2010, director: 'Christopher Nolan' },
    { id: 2, title: 'Interstellar', year: 2014, director: 'Christopher Nolan' },
    { id: 3, title: 'The Matrix', year: 1999, director: 'The Wachowskis' },
    { id: 4, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont' }
];

// Render Functions
function renderMovies(movieList) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = '';
    movieList.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie');
        movieElement.innerHTML = `<h3>${movie.title} (${movie.year})</h3><p>Director: ${movie.director}</p>`;
        movieElement.addEventListener('click', () => openModal(movie));
        movieContainer.appendChild(movieElement);
    });
}

// Filter Functionality
function filterMovies(query) {
    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    renderMovies(filteredMovies);
}

// Search Feature
const searchInput = document.getElementById('search-input');
searchInput.addEventListener('input', (event) => {
    filterMovies(event.target.value);
});

// Modal Interactions
function openModal(movie) {
    const modal = document.getElementById('movie-modal');
    modal.querySelector('.modal-title').innerText = movie.title;
    modal.querySelector('.modal-director').innerText = `Director: ${movie.director}`;
    modal.querySelector('.modal-year').innerText = `Year: ${movie.year}`;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('movie-modal');
    modal.style.display = 'none';
}

// Close modal on outside click
window.addEventListener('click', (event) => {
    const modal = document.getElementById('movie-modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Initial render
renderMovies(movies);