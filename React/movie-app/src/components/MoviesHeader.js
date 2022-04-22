import React, { useState } from "react";
import { useMovie } from "../context/MovieContext";
import AddMovieForm from "./AddMovieForm";

const MoviesHeader = () => {
	const {
		state: { filterQuery, moviesDisplayedInPage, sortOrder },
		actions: {
			setFilterQuery,
			sortMoviesBy,

			changeNoOfMoviesInPage,
		},
	} = useMovie();

	const [isAddFormVisible, setisAddFormVisible] = useState(false);

	const sortHandler = (e) => {
		sortMoviesBy(e.target.value);
	};

	const movieCountInPageHandler = (e) => {
		changeNoOfMoviesInPage(e.target.value);
	};

	return (
		<>
			<header className="info">
				<h2>Popular Movies</h2>
				<div className="search-filter">
					<input
						placeholder="Search..."
						value={filterQuery}
						onChange={(e) => setFilterQuery(e.target.value)}
					/>
					<div>
						<select
							name="sort"
							id="sort"
							onChange={sortHandler}
							value={sortOrder}
						>
							<option value="ascending">A - Z</option>
							<option value="descending">Z - A</option>
						</select>
						<select
							name="sort"
							id="sort"
							onChange={movieCountInPageHandler}
							value={moviesDisplayedInPage}
						>
							<option value={1}>1</option>
							<option value={2}>2</option>
							<option value={5}>5</option>
							<option value={10}>10</option>
						</select>

						<button
							className="add-movie"
							onClick={() => setisAddFormVisible(true)}
						>
							Add Movie
						</button>
					</div>
				</div>
			</header>
			<AddMovieForm
				isAddFormVisible={isAddFormVisible}
				setisAddFormVisible={setisAddFormVisible}
			/>
		</>
	);
};

export default MoviesHeader;
