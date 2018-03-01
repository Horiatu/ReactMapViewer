class PanelAdvancedMenu extends Panel {
	render() {
		return super.renderContent(
			"AdvancedMenu",
			function() {
				return React.createElement(
					"div",
					null,
					React.createElement(
						"div",
						{ className: "top" },
						React.createElement(
							"table",
							{ role: "presentation", className: "contentTitle" },
							React.createElement(
								"tbody",
								null,
								React.createElement(
									"tr",
									null,
									React.createElement(
										"td",
										{ rowSpan: "2" },
										React.createElement("img", {
											src: "images/logo.png",
											alt: "Logo"
										})
									),
									React.createElement(
										"td",
										{ className: "fullTable" },
										React.createElement("h1", null, "WCAG Demo")
									)
								),
								React.createElement(
									"tr",
									null,
									React.createElement(
										"td",
										null,
										React.createElement("h2", null, "Responsive Design")
									)
								)
							)
						)
					),
					React.createElement("div", { className: "clearfix" }),
					React.createElement(
						"div",
						{ className: "bottom" },
						React.createElement(
							"ul",
							{ className: "details" },
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("details"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE905"
								),
								React.createElement("span", null, "Details")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("search"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE986"
								),
								React.createElement("span", null, "Search")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("language"),
									role: "button"
								},
								React.createElement("img", {
									className: "details",
									src: "images/flag.CA.22.png",
									alt: ""
								}),
								React.createElement("span", null, "Language")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("overview map"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE9CA"
								),
								React.createElement("span", null, "Overview map")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("layer manager"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE916"
								),
								React.createElement("span", null, "Layer Manager")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("filters"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE90F"
								),
								React.createElement("span", null, "Filters")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("info-panel"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uEA0C"
								),
								React.createElement("span", null, "Info Panel")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("reverse geo-code"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE9CC"
								),
								React.createElement("span", null, "Reverse Geocode")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("feature list"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE93D"
								),
								React.createElement("span", null, "Feature List")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("measure"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE91E"
								),
								React.createElement("span", null, "Measure")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("share"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE931"
								),
								React.createElement("span", null, "Share")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("bookmarks"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE902"
								),
								React.createElement("span", null, "Bookmarks")
							),
							React.createElement(
								"li",
								{
									tabIndex: "0",
									onFocus: () => responsiveVoice.speak("print"),
									role: "button"
								},
								React.createElement(
									"span",
									{ className: "details fontIcon" },
									"\uE929"
								),
								React.createElement("span", null, "Print")
							)
						)
					)
				);
			},
			"glyphicon-menu-hamburger",
			"Advanced Menu"
		);
	}
}
