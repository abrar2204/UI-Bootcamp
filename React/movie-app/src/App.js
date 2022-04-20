import { useEffect, useState } from "react";
import "./styles/App.scss";
import { apiLink } from "./apiConfig";
import Movie from "./components/Movie";
import MovieBanner from "./components/MovieBanner";

function App() {
	const [movies, setMovies] = useState([]);
	const [selectedMovie, setSelectedMovie] = useState({
		title: "",
		description: "",
		imageUrl: "",
		releaseDate: "",
	});
	const [filterText, setFilterText] = useState("");
	const [filteredMovies, setFilteredMovies] = useState([]);

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
				setSelectedMovie(movieList[0]);
				setMovies(movieList);
				setFilteredMovies(movieList);
			} catch (err) {
				console.log(err);
			}
		};
		fetchMovieData();
	}, []);

	useEffect(() => {
		const filtered = movies.filter((movie) =>
			movie.title.toLowerCase().includes(filterText.toLowerCase())
		);
		if (!!filtered.length) {
			setSelectedMovie(filtered[0]);
		}
		setFilteredMovies(filtered);
	}, [filterText, movies]);

	const filterTextHandler = (e) => setFilterText(e.target.value);

	const sortByAscendingOrder = () => {
		setMovies((cur) =>
			[...cur].sort((a, b) =>
				a.title.toLowerCase().localeCompare(b.title.toLowerCase())
			)
		);
	};

	const sortByDescendingOrder = () => {
		setMovies((cur) =>
			[...cur].sort((a, b) =>
				b.title.toLowerCase().localeCompare(a.title.toLowerCase())
			)
		);
	};

	return (
		<div className="App">
			<header className="header">
				<h1>Bisney +</h1>
				<nav>
					<a href="/">Home</a>
					<a href="/">Movies</a>
					<a href="/">Show</a>
				</nav>
			</header>
			<MovieBanner movie={selectedMovie} />
			<section className="popular">
				<div className="info">
					<h2>Popular Movies</h2>
					<div className="search-filter">
						<input
							placeholder="Search Movie.."
							value={filterText}
							onChange={filterTextHandler}
						/>
						<button onClick={sortByAscendingOrder}>A - Z</button>
						<button onClick={sortByDescendingOrder}>Z - A</button>
					</div>
				</div>

				<section className="movies">
					{filteredMovies.map((movie, idx) => (
						<Movie
							movie={movie}
							key={idx}
							setSelectedMovie={setSelectedMovie}
						/>
					))}
				</section>
			</section>
		</div>
	);
}

export default App;
