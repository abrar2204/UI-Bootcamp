const pageElements = [
	{
		key: "1234",
		htmlElementName: "div",
		responsiveness: {
			default: 12,
			lg: 6,
		},
		childElements: [
			{
				key: "5678",
				htmlElementName: "p",
				childElements: ["Hello There!"],
				style: {
					color: "blue",
				},
			},
		],

		style: {
			border: "1px solid blue",
			backgroundColor: "#edeff2",
			textAlign: "center",
		},
	},
	{
		key: "91011",
		htmlElementName: "section",
		childElements: [
			{
				key: "12421",
				htmlElementName: "p",
				childElements: ["General Kenobi"],
				style: {
					color: "blue",
				},
			},
		],
		responsiveness: {
			default: 12,
			lg: 6,
		},

		style: {
			border: "1px solid blue",
			backgroundColor: "#edeff2",
			color: "#4d4d4d",
			textAlign: "center",
		},
	},
	{
		key: "121314",
		htmlElementName: "section",
		childElements: ["I"],
		responsiveness: {
			default: 12,
			sm: 6,
			lg: 3,
		},

		style: {
			padding: "16px 0px",
			backgroundColor: "aqua",
			border: "1px solid mediumpurple",
			textAlign: "center",
		},
	},
	{
		key: "151617",
		htmlElementName: "section",
		childElements: ["have"],
		responsiveness: {
			default: 12,
			sm: 6,
			lg: 3,
		},

		style: {
			padding: "16px 0px",
			backgroundColor: "aqua",
			border: "1px solid mediumpurple",
			textAlign: "center",
		},
	},
	{
		key: "181920",
		htmlElementName: "section",
		childElements: ["the"],
		responsiveness: {
			default: 12,
			sm: 6,
			lg: 3,
		},

		style: {
			padding: "16px 0px",
			backgroundColor: "aqua",
			border: "1px solid mediumpurple",
			textAlign: "center",
		},
	},
	{
		key: "212223",
		htmlElementName: "section",
		childElements: ["High Ground"],
		responsiveness: {
			default: 12,
			sm: 6,
			lg: 3,
		},

		style: {
			padding: "16px 0px",
			backgroundColor: "aqua",
			border: "1px solid mediumpurple",
			textAlign: "center",
		},
	},
];

export default pageElements;
