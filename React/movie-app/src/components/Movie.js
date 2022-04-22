import React from "react";
import { useMovie } from "../context/MovieContext";

const Movie = ({ movie }) => {
	const {
		actions: { selectMovie },
	} = useMovie();
	return (
		<article className="movie" onClick={() => selectMovie(movie)}>
			<img src={movie.imageUrl} alt={movie.title} />

			<h4 className="title">
				{movie.title} ({movie.releaseDate.split("-")[0]})
			</h4>
			<p className="score">{movie.score}</p>
		</article>
	);
};

export default Movie;
