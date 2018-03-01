class Help extends React.Component {
	render() {
		return React.createElement(
			"div",
			{ className: "Help" },
			React.createElement("h1", null, "Hello World"),
			React.createElement(
				"p",
				null,
				"Note: this page is a great way to try React but it's not suitable for production.",
				React.createElement("br", null),
				"It slowly compiles JSX with Babel in the browser and uses a large development build of React."
			),
			React.createElement(
				"p",
				null,
				"To set up a production-ready React build environment, follow these instructions:"
			),
			React.createElement(
				"ul",
				null,
				React.createElement(
					"li",
					{ key: "1" },
					React.createElement(
						"a",
						{
							target: "blank",
							href:
								"https://reactjs.org/docs/add-react-to-a-new-app.html"
						},
						"Add React to a new app"
					)
				),
				React.createElement(
					"li",
					{ key: "2" },
					React.createElement(
						"a",
						{
							target: "blank",
							href:
								"https://reactjs.org/docs/add-react-to-an-existing-app.html"
						},
						"Add React to an existing app"
					)
				)
			),
			React.createElement(
				"p",
				null,
				"You can also use React without JSX, in which case you can remove Babel:"
			),
			React.createElement(
				"ul",
				null,
				React.createElement(
					"li",
					{ key: "3" },
					React.createElement(
						"a",
						{
							target: "blank",
							href:
								"https://reactjs.org/docs/react-without-jsx.html"
						},
						"React without JSX"
					)
				),
				React.createElement(
					"li",
					{ key: "4" },
					React.createElement(
						"a",
						{
							target: "blank",
							href: "https://reactjs.org/docs/cdn-links.html"
						},
						"cdn links"
					)
				)
			)
		);
	}
}
