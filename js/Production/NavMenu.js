class NavMenu extends React.Component {
	render() {
		return React.createElement(
			"div",
			{
				className:
					"dropdown calcite-dropdown calcite-text-dark calcite-bg-light",
				role: "presentation"
			},
			React.createElement(
				"a",
				{
					className: "dropdown-toggle",
					role: "button",
					"aria-haspopup": "true",
					"aria-expanded": "false",
					tabIndex: "0"
				},
				React.createElement(
					"div",
					{ className: "calcite-dropdown-toggle" },
					React.createElement(
						"span",
						{ className: "sr-only" },
						"Toggle dropdown menu"
					),
					React.createElement("span", null),
					React.createElement("span", null),
					React.createElement("span", null),
					React.createElement("span", null)
				)
			),
			React.createElement(
				"ul",
				{ className: "dropdown-menu", role: "menu" },
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							"data-target": "#panelAbout",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-file"
						}),
						" About"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							"data-target": "#panelBasemaps",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-th-large"
						}),
						" Basemaps"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							"data-target": "#panelLegend",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-list-alt"
						}),
						" Legend"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							"data-target": "#panelLayers",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-list"
						}),
						" Layers"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							"data-target": "#panelPrint",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-print"
						}),
						" Print"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							"data-target": "#panelAdvancedMenu",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-menu-hamburger"
						}),
						" Advanced Menu"
					)
				),
				React.createElement(
					"li",
					null,
					React.createElement(
						"a",
						{
							role: "menuitem",
							tabIndex: "0",
							href: "#",
							id: "calciteToggleNavbar",
							"aria-haspopup": "true"
						},
						React.createElement("span", {
							className: "glyphicon glyphicon-fullscreen"
						}),
						" Full Map"
					)
				)
			)
		);
	}
}
