const movieList = [
  {
    title: "Movie 1",
    description: "Description 1",
    imageUrl:
      "https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734",
    seats: 54,
  },
  {
    title: "Movie 2",
    description: "Description 2",
    imageUrl:
      "https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734",
    seats: 60,
  },
  {
    title: "Movie 3",
    description: "Description 3",
    imageUrl:
      "https://static.wikia.nocookie.net/marvel_dc/images/4/4b/Batman_Vol_3_86_Textless.jpg/revision/latest?cb=20200502132734",
    seats: 65,
  },
];


const addMovieToBanner = (index) => {
  const movie = movieList[index];
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
  selectedMovieSeats.innerHTML = movie.seats;
};
addMovieToBanner(0);

const movies = document.querySelector('.movies');

movieList.forEach((movie,idx)=>{
    const article = document.createElement('article');
    const figure = document.createElement('figure');
    const figureCaption = document.createElement('figcaption');
    const image =document.createElement('img');
    image.setAttribute('src',movie.imageUrl);
    figureCaption.innerHTML = movie.title;

    figure.appendChild(image);
    figure.appendChild(figureCaption);

    article.appendChild(figure);
    article.addEventListener('click',()=>{
        addMovieToBanner(idx)
    })
    movies.appendChild(article)
})