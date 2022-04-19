import CustomElement from "./CustomElement";
import pageElements from "./pageElements";
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
