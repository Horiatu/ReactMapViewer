class NavBar extends React.Component {
    render() {
    	return (
    		<nav className="navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark">
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
}
