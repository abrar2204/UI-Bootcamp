import React from "react";

const MovieBanner = ({ movie }) => {
	return (
		<section className="selected-movie">
			<img className="image" src={movie.backDrop} alt={movie.title} />

			<div className="info">
				<h2 className="title">{movie.title}</h2>
				<div>
					<p className="score">Score: {movie.score} / 10</p>
					<p>{movie.releaseDate.split("-")[0]}</p>
				</div>
				<p className="description">{movie.description}</p>
			</div>
		</section>
	);
};

export default MovieBanner;
