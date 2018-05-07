class NavBar extends React.Component {
	render() {
		// console.log('NAVBAR', this);
		return (
			<nav className="navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark">
				<NavMenu />
				<div className="calcite-title calcite-overflow-hidden">
					<span className="calcite-title-main">React Map Viewer</span>
					<span className="calcite-title-divider hidden-xs" />
					<span className="calcite-title-sub hidden-xs">
						Responsive Design: A Bootstrap theme for building modern
						map apps
					</span>
				</div>
				<ul className="nav navbar-nav calcite-nav">
					<li>
						<div className="calcite-navbar-search calcite-search-expander">
							<div id="searchWidgetDiv" />
						</div>
					</li>
				</ul>
			</nav>
		);
	}
	// componentDidMount() {
	// 	const self = this;
	// 	require([
	// 		"esri/widgets/Search",
	// 		"calcite-maps/calcitemaps-arcgis-support-v0.5",
	// 		"dojo/domReady!"
	// 	], function(Search, CalciteMapArcGISSupport) {
	// 		const searchWidget = new Search({
	// 			container: "searchWidgetDiv",
	// 			view: self.props.mapView,
	// 			locationEnabled: true
	// 		});
	// 		CalciteMapArcGISSupport.setSearchExpandEvents(searchWidget);
	// 		searchWidget.on("search-focus", function(ev) {
	// 			// console.log('search focus', ev, searchWidget);
	// 			responsiveVoice.speak(ev.target.allPlaceholder);
	// 		});
	// 		searchWidget.on("search-start", function(ev) {
	// 			// console.log("Search started", ev);
	// 			responsiveVoice.speak("Search");
	// 		});
	// 		searchWidget.on("search-complete", function(ev) {
	// 			// console.log('Search complete', ev, searchWidget);
	// 			responsiveVoice.speak(ev.results[0].results[0].name);
	// 		});
	// 	});
	// }
}
