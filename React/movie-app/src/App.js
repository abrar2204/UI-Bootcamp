import "./styles/App.scss";

import MovieBanner from "./components/MovieBanner";
import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
	// const [selectedMovie, setSelectedMovie] = useState({
	// 	title: "",
	// 	description: "",
	// 	imageUrl: "",
	// 	releaseDate: "",
	// });
	// const [filterText, setFilterText] = useState("");
	// const [filteredMovies, setFilteredMovies] = useState([]);

	// useEffect(() => {
	// 	const filtered = movies.filter((movie) =>
	// 		movie.title.toLowerCase().includes(filterText.toLowerCase())
	// 	);
	// 	if (!!filtered.length) {
	// 		setSelectedMovie(filtered[0]);
	// 	}
	// 	setFilteredMovies(filtered);
	// }, [filterText, movies]);

	// const filterTextHandler = (e) => setFilterText(e.target.value);

	// const sortByAscendingOrder = () => {
	// 	setMovies((cur) =>
	// 		[...cur].sort((a, b) =>
	// 			a.title.toLowerCase().localeCompare(b.title.toLowerCase())
	// 		)
	// 	);
	// };

	// const sortByDescendingOrder = () => {
	// 	setMovies((cur) =>
	// 		[...cur].sort((a, b) =>
	// 			b.title.toLowerCase().localeCompare(a.title.toLowerCase())
	// 		)
	// 	);
	// };

	return (
		<div className="App">
			<Header />
			<MovieBanner />
			<Movies />
		</div>
	);
}

export default App;
