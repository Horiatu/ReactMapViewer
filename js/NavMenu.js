class NavMenu extends React.Component {
	render() {
		return (
			<div
				className="dropdown calcite-dropdown calcite-text-dark calcite-bg-light"
				role="presentation"
			>
				<a
					className="dropdown-toggle"
					role="button"
					aria-haspopup="true"
					aria-expanded="false"
					tabIndex="0"
				>
					<div className="calcite-dropdown-toggle">
						<span className="sr-only">Toggle dropdown menu</span>
						<span />
						<span />
						<span />
						<span />
					</div>
				</a>
				<ul className="dropdown-menu" role="menu">
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							data-target="#panelAbout"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-file" /> About
						</a>
					</li>
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							data-target="#panelBasemaps"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-th-large" />{" "}
							Basemaps
						</a>
					</li>
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							data-target="#panelLegend"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-list-alt" />{" "}
							Legend
						</a>
					</li>
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							data-target="#panelLayers"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-list" /> Layers
						</a>
					</li>
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							data-target="#panelPrint"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-print" /> Print
						</a>
					</li>
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							data-target="#panelAdvancedMenu"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-menu-hamburger" />{" "}
							Advanced Menu
						</a>
					</li>
					<li>
						<a
							role="menuitem"
							tabIndex="0"
							href="#"
							id="calciteToggleNavbar"
							aria-haspopup="true"
						>
							<span className="glyphicon glyphicon-fullscreen" />{" "}
							Full Map
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
