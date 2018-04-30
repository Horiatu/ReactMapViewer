class RMap extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "div",
                { className: "calcite-map calcite-map-absolute" },
                React.createElement("div", { id: "mapViewDiv" }),
                React.createElement(
                    "div",
                    {
                        className:
                            "calcite-panels calcite-panels-right calcite-text-light calcite-bg-dark panel-group"
                    },
                    React.createElement(PanelAbout, null),
                    React.createElement(PanelBasemaps, {
                        mapView: this.state.mapView
                    }),
                    React.createElement(PanelLegend, {
                        mapView: this.state.mapView
                    }),
                    React.createElement(PanelLayers, {
                        mapView: this.state.mapView
                    }),
                    React.createElement(PanelPrint, {
                        mapView: this.state.mapView
                    }),
                    React.createElement(PanelAdvancedMenu, null)
                )
            ),
            React.createElement(NavBar, { 
                mapView: this.state.mapView,
                title: (this.config && this.config.title && this.config.title !== "") ? 
                    this.config.title : 
                    "Responsive Design: A Bootstrap theme for building modern map apps" 
            })
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            map: null,
            mapView: null
        };
        const self = this;

        // const hasTool = function(this, name) {

        // };

        require([
            "dojo/dom-class",
            // ArcGIS
            "esri/WebMap",
            "esri/views/MapView",
            "esri/portal/PortalItem",

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
        ], function(
            domClass,
            WebMap,
            MapView,
            PortalItem,
            Print,
            BasemapToggle,
            ScaleBar,
            Collapse,
            Dropdown,
            CalciteMaps,
            CalciteMapArcGISSupport
        ) {
            /******************************************************************
             *
             * Create the map, view and widgets
             *
             ******************************************************************/
            // console.log('RMAP', self);

            // console.log('PortalItem', PortalItem);
            new PortalItem({
                id: self.props.appId, 
                url: self.props.portalUrl 
            }).load().then(r => {
                // console.log("appConfig item",r);
                r.fetchData().then(d => {
                    self.config = d.values;
                    self.config.hasTool = function(name) {
                        return this.hasOwnProperty('tool_'+name) && this['tool_'+name];
                    };
                    self.config.allTools = function() {
                        return Object.keys(this).filter(tool => tool.indexOf('tool_')===0 && this[tool]).map(tool => tool.slice(5));
                    };
                    // console.log("allTools", self.config.allTools());
                    // console.log("appConfig", self.config);

                    // Map
                    const map = new WebMap({
                        portalItem: {
                            id: self.config.webmap 
                        }
                    });

                    // View
                    const mapView = new MapView({
                        container: "mapViewDiv",
                        map: map,
                        padding: {
                            top: 50,
                            bottom: 0
                        }
                    });

                    self.setState({
                        map: map,
                        mapView: mapView
                    });

                    // Popup and panel sync
                    mapView.then(function() {
                        CalciteMapArcGISSupport.setPopupPanelSync(mapView);
                        domClass.remove(document.body, "app-loading");
                    });

                    // BasemapToggle *
                    var basemapToggle = new BasemapToggle({
                        view: mapView,
                        secondBasemap: "satellite"
                    });
                    mapView.ui.add(basemapToggle, "bottom-right");

                    // // Scalebar
                    // var scaleBar = new ScaleBar({
                    //     view: mapView
                    // });
                    // mapView.ui.add(scaleBar, "bottom-left");
                                    
                });
            }, 
            error => console.log('error', error));
        });
    }
}
