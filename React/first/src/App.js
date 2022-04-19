import CustomElement from "./components/CustomElement";
import pageElements from "./data/pageElements";
import "./App.scss";

function App() {
	return (
		<div className="App">
			{pageElements.map((element) => (
				<CustomElement {...element} />
			))}
		</div>
	);
}

export default App;
