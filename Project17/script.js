const API_URL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d30752ffc423bf0d3f21d7d8d7e02df5&page=1&language=vi';
const IMAGE_PATH = 'https://image.tmdb.org/t/p/w1280/';
const SEARCH_API =
  'https://api.themoviedb.org/3/search/movie?api_key=d30752ffc423bf0d3f21d7d8d7e02df5&language=vi&page=1&query=';

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

//get initial movies
getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
function showMovies(movies) {
  main.innerHTML = '';
  Array.from(movies).map((movie) => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEL = document.createElement('div');
    movieEL.classList.add('movie');
    movieEL.innerHTML = `<img
    src="${IMAGE_PATH + poster_path}"
    alt=""
    class="movie__image"
  />
  <div class="movie__info">
    <h3 class="movie__title">${title}</h3>
    <span class="movie__score ${getClassByRate(
      vote_average
    )}">${vote_average}</span>
  </div>
  <div class="movie__over-view">
    <h3>Over View</h3>
    ${overview}
  </div>`;
    main.appendChild(movieEL);
  });
}
function getClassByRate(rate) {
  if (rate >= 8) {
    return 'movie__score--green';
  } else if (rate >= 5) {
    return 'movie__score--orange';
  } else {
    return 'movie__score--red';
  }
}
