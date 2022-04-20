import { useEffect, useState } from "react";
import "./styles/App.css";
import { apiLink } from "./apiConfig";

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
				const movieList = data.results.map((movie) => ({
					title: movie.title,
					description: movie.overview,
					releaseDate: movie.release_date,
					imageUrl: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
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
				<h1>Movies</h1>
				<div className="header-components">
					<input
						placeholder="Search Movie.."
						value={filterText}
						onChange={filterTextHandler}
					/>
					<button onClick={sortByAscendingOrder}>A-Z</button>
					<button onClick={sortByDescendingOrder}>Z-A</button>
				</div>
			</header>
			<section className="selected-movie">
				<img
					className="selected-movie-image"
					src={selectedMovie.imageUrl}
					alt={selectedMovie.title}
				/>
				<div>
					<h2 className="selected-movie-title">{selectedMovie.title}</h2>
					<p className="selected-movie-description">
						{selectedMovie.description}
					</p>
					<p className="selected-movie-release">
						<strong>Release Date:</strong> {selectedMovie.releaseDate}
					</p>
				</div>
			</section>
			<section className="movies">
				{filteredMovies.map((movie, idx) => (
					<article
						className="movie"
						key={idx}
						onClick={() => setSelectedMovie(movie)}
					>
						<figure>
							<img src={movie.imageUrl} alt={movie.title} />
							<figcaption>{movie.title}</figcaption>
						</figure>
					</article>
				))}
			</section>
		</div>
	);
}

export default App;
