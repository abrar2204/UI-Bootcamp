import React from "react";

const CustomElement = ({
	htmlElementName: Tag,
	childElements = [],
	style = {},
	responsiveness = {},
}) => {
	const columnClassNames = Object.keys(responsiveness).reduce(
		(prevKey, curKey) => {
			if (curKey === "default") {
				return `col-${responsiveness[curKey]} `;
			}
			return prevKey + `col-${curKey}-${responsiveness[curKey]} `;
		},
		""
	);

	return (
		<Tag className={columnClassNames} style={style}>
			{childElements.map((child) =>
				typeof child === "object" ? <CustomElement {...child} /> : child
			)}
		</Tag>
	);
};

export default CustomElement;
