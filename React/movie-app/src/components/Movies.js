import React from "react";
import MoviesHeader from "./MoviesHeader";
import Movie from "./Movie";
import { useMovie } from "../context/MovieContext";
import Pagination from "./Pagination";
import { useMemo } from "react";
const Movies = () => {
	const {
		state: { filteredMovies: movies, moviesDisplayedInPage, currentPageIndex },
	} = useMovie();

	const offset = useMemo(
		() => currentPageIndex * moviesDisplayedInPage,
		[currentPageIndex, moviesDisplayedInPage]
	);
	console.log("Offset", offset, offset + moviesDisplayedInPage);
	return (
		<section className="popular">
			<MoviesHeader />
			<section className="movies">
				{movies
					.slice(offset, offset + moviesDisplayedInPage)
					.map((movie, idx) => (
						<Movie movie={movie} key={idx} />
					))}
			</section>
			<Pagination />
		</section>
	);
};

export default Movies;
