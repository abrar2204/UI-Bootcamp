import React from "react";
import { useMovie } from "../context/MovieContext";

const MovieBanner = () => {
	const {
		state: { selectedMovie: movie },
	} = useMovie();
	return (
		<section className="selected-movie">
			<img className="image" src={movie.backDrop} alt={movie.title} />

			<div className="info">
				<h2 className="title">{movie.title}</h2>
				<div>
					<p className="score">Score: {movie.score} / 10</p>
					<p className="release">{movie.releaseDate?.split("-")[0]}</p>
				</div>
				<p className="description">{movie.description}</p>
			</div>
		</section>
	);
};

export default MovieBanner;
