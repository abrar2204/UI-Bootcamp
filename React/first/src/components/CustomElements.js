import CustomElement from "./CustomElement";
import pageElements from "../data/pageElements";
import "../scss/customElements.scss";

function CustomElements() {
	return (
		<div className="custom-elements">
			{pageElements.map((element) => (
				<CustomElement {...element} />
			))}
		</div>
	);
}

export default CustomElements;
