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
                ),
                React.createElement(NavBar, { 
                    mapView: this.state.mapView,
                    title: (this.config && this.config.title && this.config.title !== "") ? 
                        this.config.title : 
                        "Responsive Design: A Bootstrap theme for building modern map apps" 
                })
            ),
        );
    }

    constructor(props) {
        super(props);
        this.state = {
            map: null,
            mapView: null
        };
        const self = this;

        new AppConfig({
            appId: this.props.appId,//"b54efa235b7f455f91b14396090ad3e3",
            portalUrl: this.props.portalUrl,//"https://www.arcgis.com",
            voice: false
        }).state.promise.then((config) => {
            this.config = config;
            require([
                "dojo/dom-class",
                // ArcGIS
                "esri/WebMap",
                "esri/views/MapView",

                // Widgets
                "esri/widgets/Print",
                "esri/widgets/BasemapToggle",
                "esri/widgets/ScaleBar",

                // Bootstrap
                "bootstrap/Collapse",
                "bootstrap/Dropdown",

                // Calcite Maps
                "calcite-maps/calcitemaps-v0.5",
                // Calcite Maps ArcGIS Support
                "calcite-maps/calcitemaps-arcgis-support-v0.5",
                // "dojo/domReady!"
            ], function(
                domClass,
                WebMap,
                MapView,
                Print,
                BasemapToggle,
                ScaleBar,
                Collapse,
                Dropdown,
                CalciteMaps,
                CalciteMapArcGISSupport) 
            {
                // console.log('promise response', config);
                const map = new WebMap({
                    portalItem: {
                        id: config.webmap 
                    }
                });

                const mapView = new MapView({
                    container: "mapViewDiv",
                    map: map,
                    padding: {
                        top: 50,
                        // bottom: 0
                    }
                });

                // Popup and panel sync
                mapView.then(function() {
                    self.setState({
                        map: map,
                        mapView: mapView
                    });

                    CalciteMapArcGISSupport.setPopupPanelSync(mapView);
                    domClass.remove(document.body, "app-loading");

                    require([
                        "esri/widgets/BasemapGallery",
                        "dojo/domReady!"
                    ], 
                    BasemapGallery => new BasemapGallery({
                        container: "basemapGalleryDiv",
                        view: self.state.mapView
                    }));

                    require([
                        "esri/widgets/Legend",
                        "dojo/query",
                        "dojo/dom-attr",
                        "dojo/dom-style",
                        "dojo/domReady!"
                    ], 
                    (Legend, query, domAttr, domStyle) => {
                        const legend = new Legend({
                            container: "legendDiv",
                            view: self.state.mapView
                        });

                        const legendNode = dojo.byId("legendDiv");
                        if (legendNode) {
                            new MutationObserver(function(mutations) {
                                mutations.forEach(function(mutation) {
                                    if (
                                        mutation.addedNodes &&
                                        mutation.addedNodes.length >= 1
                                    ) {
                                        for (
                                            var i = 0;
                                            i < mutation.addedNodes.length;
                                            i++
                                        ) {
                                            var node = mutation.addedNodes[i];
                                            if (domStyle.get(node, "display") !== "none") {
                                                const serviceLabels = query(
                                                    ".esri-legend__service-label, .esri-legend__layer-caption, .esri-legend__layer-row"
                                                );
                                                // console.log(node, serviceLabels);
                                                serviceLabels.forEach(label => {
                                                    domAttr.set(label, "tabindex", 0);
                                                    domAttr.set(
                                                        label,
                                                        "onfocus",
                                                        'responsiveVoice.speak("' +
                                                            label.innerText +
                                                            '")'
                                                    );
                                                    // console.log(label)
                                                });
                                            }
                                        }
                                    }
                                });
                            }).observe(legendNode, {
                                attributes: true,
                                childList: true,
                                characterData: false
                            });
                        }
                    });

                    require([
                        "esri/widgets/LayerList",
                        "dojo/query",
                        "dojo/dom-attr",
                        "dojo/domReady!"
                    ], 
                    (LayerList, query, domAttr) => {
                        const layerList = new LayerList({
                            container: "layersDiv",
                            view: self.state.mapView
                        });

                        const layersNode = dojo.byId("layersDiv");
                        if (layersNode) {
                            new MutationObserver(mutations => {
                                // console.log('mutations', mutations);
                                const labels = query(".esri-layer-list__item-title");
                                // console.log('labels', labels);

                                labels.forEach(label => {
                                    domAttr.set(
                                        label,
                                        "onfocus",
                                        'responsiveVoice.speak("' + label.innerText + '")'
                                    );
                                    // console.log(label)
                                });
                            }).observe(layersNode, {
                                attributes: false,
                                childList: true,
                                characterData: false
                            });
                        }
                    });

                    require([
                        "esri/widgets/Print", 
                        "dojo/domReady!"
                    ], 
                    Print => new Print({
                        container: "printDiv",
                        view: self.state.mapView,
                        printServiceUrl:
                            "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
                    }));
                    

                    const basemapToggle = new BasemapToggle({
                        view: mapView,
                        secondBasemap: "satellite"
                    });
                    mapView.ui.add(basemapToggle, "bottom-right");

                    const scaleBar = new ScaleBar({
                        view: mapView
                    });
                    mapView.ui.add(scaleBar, "bottom-left");
                });

                if (config.voice && responsiveVoice && responsiveVoice.voiceSupport()) {
                    responsiveVoice.speak("React Map Viewer");
                        $(".calcite-title-main").click(ev => {
                        responsiveVoice.speak(ev.currentTarget.innerText);
                    });
                }
            });
        },
        (error) => {
            console.log('Error reading configuration', error);
        }
    )}
}
