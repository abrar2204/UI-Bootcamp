import React, { createContext, useContext, useReducer, useEffect } from "react";
import { apiLink } from "../apiConfig";

const MovieContext = createContext();

const initialState = {
	movies: [],
	filteredMovies: [],
	selectedMovie: {},
	currentPageIndex: 0,
	moviesDisplayedInPage: 5,
	filterQuery: "",
	sortOrder: "ascending",
};

const SET_ALL = "movies.set.all";
const SET_FILTERED_MOVIES = "movies.set.filtered";
const SELECT_MOVIE = "movies.select";
const SET_FILTER_QUERY = "movies.set.query";
const SET_SORT_ORDER = "movies.set.sort-order";
const ADD_MOVIE = "movies.add";
const SET_PAGE = "movies.set.page";
const SET_MOVIES = "movies.set";
const SET_MOVIES_IN_PAGE = "movies.set.page.count";

const sortDescending = (arr) =>
	[...arr].sort((a, b) =>
		b.title.toLowerCase().localeCompare(a.title.toLowerCase())
	);

const sortAscending = (arr) =>
	[...arr].sort((a, b) =>
		a.title.toLowerCase().localeCompare(b.title.toLowerCase())
	);

const reducer = (state, action) => {
	switch (action.type) {
		case SET_ALL:
			return {
				...state,
				movies: action.payload.movies,
				filteredMovies: action.payload.movies,
				selectedMovie: action.payload.movies[0],
			};
		case SET_MOVIES:
			return {
				...state,
				movies: action.payload.movies,
			};
		case SET_FILTERED_MOVIES:
			return {
				...state,
				filteredMovies: action.payload.movies,
			};
		case SELECT_MOVIE:
			return {
				...state,
				selectedMovie: action.payload.movie,
			};

		case SET_FILTER_QUERY:
			return {
				...state,
				filterQuery: action.payload.query,
			};
		case ADD_MOVIE:
			const newArray =
				state.sortOrder === "ascending"
					? sortAscending([...state.movies, action.payload.movie])
					: sortDescending([...state.movies, action.payload.movie]);

			const mIdx = newArray.findIndex(
				(elem) => elem.title === action.payload.movie.title
			);

			return {
				...state,
				currentPageIndex: parseInt(
					(mIdx / state.moviesDisplayedInPage).toString(),
					10
				),
				movies: newArray,
			};
		case SET_PAGE:
			return {
				...state,
				currentPageIndex: action.payload.page,
			};
		case SET_SORT_ORDER:
			return {
				...state,
				sortOrder: action.payload.order,
				movies:
					action.payload.order === "ascending"
						? sortAscending(state.movies)
						: sortDescending(state.movies),
			};
		case SET_MOVIES_IN_PAGE:
			return {
				...state,
				moviesDisplayedInPage: action.payload.n,
			};
		default:
			return state;
	}
};

const MovieProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		const fetchMovieData = async () => {
			try {
				const res = await fetch(apiLink, { method: "get" });
				const data = await res.json();
				console.log(data.results);
				const movieList = data.results.map((movie) => ({
					title: movie.title,
					description: movie.overview,
					releaseDate: movie.release_date,
					backDrop: "https://image.tmdb.org/t/p/original" + movie.backdrop_path,
					imageUrl: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
					score: movie.vote_average,
				}));
				console.log("Setting all movies");
				dispatch({
					type: SET_MOVIES,
					payload: {
						movies: sortAscending(movieList),
					},
				});
			} catch (err) {
				console.log(err);
			}
		};
		fetchMovieData();
	}, []);

	const selectMovie = (movie) => {
		dispatch({
			type: SELECT_MOVIE,
			payload: { movie },
		});
	};

	const addMovie = (movie) => {
		dispatch({
			type: ADD_MOVIE,
			payload: {
				movie,
			},
		});
	};

	useEffect(() => {
		const filtered = state.movies.filter((movie) =>
			movie.title.toLowerCase().includes(state.filterQuery.toLowerCase())
		);

		if (!!filtered.length) {
			dispatch({
				type: SELECT_MOVIE,
				payload: { movie: filtered[0] },
			});
		}
		dispatch({
			type: SET_FILTERED_MOVIES,
			payload: {
				movies: filtered,
			},
		});
	}, [state.movies, state.filterQuery]);

	const setFilterQuery = (query) => {
		dispatch({
			type: SET_FILTER_QUERY,
			payload: {
				query,
			},
		});
	};

	const changePageTo = (page) => {
		dispatch({
			type: SET_PAGE,
			payload: {
				page,
			},
		});
	};

	const sortMoviesBy = (order) => {
		dispatch({
			type: SET_SORT_ORDER,
			payload: {
				order,
			},
		});
	};

	const changeNoOfMoviesInPage = (n) => {
		dispatch({
			type: SET_MOVIES_IN_PAGE,
			payload: {
				n: parseInt(n, 10),
			},
		});
	};

	return (
		<MovieContext.Provider
			value={{
				state,
				actions: {
					sortMoviesBy,
					selectMovie,
					setFilterQuery,
					addMovie,
					changePageTo,
					changeNoOfMoviesInPage,
				},
			}}
		>
			{children}
		</MovieContext.Provider>
	);
};

const useMovie = () => {
	const { state, actions } = useContext(MovieContext);
	return { state, actions };
};

export default MovieProvider;

export { useMovie };
