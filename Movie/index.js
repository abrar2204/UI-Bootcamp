const apiKey = '7b8c8f8b9689aede3b63d1d563236916';
const apiLink = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`

const fetchMovieData = async () => {
  try {
    const res = await fetch(apiLink, { method: 'get' });
    const data = await res.json();
    const movieList = data.results.map((movie) => ({
      title: movie.title,
      description: movie.overview,
      releaseDate: movie.release_date,
      imageUrl: 'https://image.tmdb.org/t/p/w200' + movie.poster_path
    }))
    console.log(movieList);
    addMovieToBanner(movieList[0]);
    addMovies(movieList);
  } catch (err) {
    console.log(err)
  }
}

fetchMovieData();

const addMovieToBanner = (movie) => {

  const selectedMovieElement = document.querySelector(".selected-movie");
  const selectedMovieImage = selectedMovieElement.querySelector(
    ".selected-movie-image"
  );
  const selectedMovieTitle = selectedMovieElement.querySelector(
    ".selected-movie-title"
  );
  const selectedMovieDescription = selectedMovieElement.querySelector(
    ".selected-movie-description"
  );
  const selectedMovieSeats = selectedMovieElement.querySelector(
    ".selected-movie-seats"
  );

  selectedMovieImage.setAttribute("src", movie.imageUrl);
  selectedMovieTitle.innerHTML = movie.title;
  selectedMovieDescription.innerHTML = movie.description;
  selectedMovieSeats.innerHTML = movie.releaseDate;
};


const addMovies = (movieList) => {
  const movies = document.querySelector('.movies');

  movieList.forEach((movie) => {
    const article = document.createElement('article');
    article.classList.add('movie')
    const figure = document.createElement('figure');
    const figureCaption = document.createElement('figcaption');
    const image = document.createElement('img');
    image.src = movie.imageUrl;
    figureCaption.innerHTML = movie.title;

    figure.appendChild(image);
    figure.appendChild(figureCaption);

    article.appendChild(figure);
    article.addEventListener('click', () => {
      addMovieToBanner(movie)
    })
    movies.appendChild(article)
  })
}
