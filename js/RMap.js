class RMap extends React.Component {
    render() {
      	return (
          <div>
      			<div className="calcite-map calcite-map-absolute">
      			    <div id="mapViewDiv"></div>

                <div className="calcite-panels calcite-panels-right calcite-text-light calcite-bg-dark panel-group">
                    <PanelAbout/>
                    <PanelBasemaps mapView={this.state.mapView}/>
                    <PanelLegend mapView={this.state.mapView}/>
                    <PanelLayers mapView={this.state.mapView}/>
                    <PanelPrint mapView={this.state.mapView}/>
                    <PanelAdvancedMenu/>
                </div>

      			</div>
            <NavBar mapView={this.state.mapView}/>
          </div>
      	);
    }
  	constructor(props) {
        super(props);
        this.state = {
            map: null,
            mapView: null,
        };
        const self = this;

        require([
            "dojo/dom-class", 
            // ArcGIS
            "esri/WebMap",
            "esri/views/MapView",

            // Widgets
            "esri/widgets/BasemapToggle",
            "esri/widgets/ScaleBar",

            // Bootstrap
            "bootstrap/Collapse",
            "bootstrap/Dropdown",

            // Calcite Maps
            "calcite-maps/calcitemaps-v0.5",
            // Calcite Maps ArcGIS Support
            "calcite-maps/calcitemaps-arcgis-support-v0.5",
            "dojo/domReady!"
        ], 
        function(
            domClass, 
            WebMap, MapView, 
            Print, BasemapToggle, ScaleBar, Collapse, Dropdown, 
            CalciteMaps, CalciteMapArcGISSupport) {

            /******************************************************************
             *
             * Create the map, view and widgets
             * 
             ******************************************************************/
            // console.log('RMAP', self);

            // Map
            const map = new WebMap({
                portalItem: {
                    id: self.props.itemId
                }
            });
            
            // View
            const mapView = new MapView({
                container: "mapViewDiv",
                map: map,
                padding: {
                    top: 50,
                    bottom: 10
                }
            });

            self.setState({
                map: map,
                mapView: mapView,
            });

            // Popup and panel sync
            mapView.then(function(){
                CalciteMapArcGISSupport.setPopupPanelSync(mapView);
                domClass.remove(document.body, "app-loading");
            });

            // BasemapToggle *
            var basemapToggle = new BasemapToggle({
                view: mapView,
                secondBasemap: "satellite"
            });
            mapView.ui.add(basemapToggle, "bottom-right");          
            
            // Scalebar
            var scaleBar = new ScaleBar({
                view: mapView
            });
            mapView.ui.add(scaleBar, "bottom-left");
        });
	  }
}