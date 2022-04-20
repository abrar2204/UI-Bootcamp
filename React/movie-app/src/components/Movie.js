import React from "react";

const Movie = ({ movie, setSelectedMovie }) => {
	return (
		<article className="movie" onClick={() => setSelectedMovie(movie)}>
			<img src={movie.imageUrl} alt={movie.title} />

			<h4 className="title">
				{movie.title} ({movie.releaseDate.split("-")[0]})
			</h4>
			<p className="score">{movie.score}</p>
		</article>
	);
};

export default Movie;
