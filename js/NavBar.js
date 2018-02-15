class NavBar extends React.Component {
    render() {
    	console.log('NAVBAR', this);
    	return (
    		<nav className="navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark">
    			<NavMenu/>
			    <div className="calcite-title calcite-overflow-hidden">
			      <span className="calcite-title-main">React Map Viewer</span>
			      <span className="calcite-title-divider hidden-xs"></span>
			      <span className="calcite-title-sub hidden-xs">Responsive Design: A Bootstrap theme for building modern map apps</span>
			    </div>
			    <ul className="nav navbar-nav calcite-nav">
			      <li>
			        <div className="calcite-navbar-search calcite-search-expander">
			          <div id="searchWidgetDiv"></div>
			        </div>
			      </li>
			    </ul>
    		</nav>
    	);
    }
    componentDidMount() {
        const self = this;
    	require([
            "esri/widgets/Search",
            "calcite-maps/calcitemaps-arcgis-support-v0.5",
            "dojo/domReady!"
        ], 
        function(Search, CalciteMapArcGISSupport) {
	    	const searchWidget = new Search({
                container: "searchWidgetDiv",
                view: self.props.mapView
            });
	        CalciteMapArcGISSupport.setSearchExpandEvents(searchWidget);
        });
	}
}
