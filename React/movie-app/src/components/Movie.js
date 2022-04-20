import React from "react";

const Movie = ({ movie, setSelectedMovie }) => {
	return (
		<article className="movie" onClick={() => setSelectedMovie(movie)}>
			<img src={movie.imageUrl} alt={movie.title} />
			<p className="info">
				{movie.releaseDate.split("-")[0]} / {movie.score}
			</p>
			<h4 className="title">{movie.title}</h4>
		</article>
	);
};

export default Movie;
