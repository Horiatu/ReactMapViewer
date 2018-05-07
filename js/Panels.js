class Panel extends React.Component {
    renderContent(name, content, icon, title) {
        // console.log('PANEL', this);
        title = title && title !== undefined ? title : name;
        icon = icon && icon !== undefined ? icon : "glyphicon-th-large";
        return (
            <div id={"panel" + name} className="panel collapse">
                <div id={"heading" + name} className="panel-heading">
                    <div className="panel-title">
                        <a
                            className="panel-toggle collapsed"
                            role="button"
                            data-toggle="collapse"
                            href={"#collapse" + name}
                            aria-expanded="false"
                            aria-controls={"collapse" + name}
                        >
                            <span
                                className={"glyphicon " + icon}
                                aria-hidden="true"
                            />
                            <span className="panel-label">{title}</span>
                        </a>
                        <a
                            className="panel-close"
                            role="button"
                            data-toggle="collapse"
                            tabIndex="0"
                            href={"#panel" + name}
                        >
                            <span
                                className="esri-icon esri-icon-close"
                                aria-hidden="true"
                            />
                        </a>
                    </div>
                </div>
                <div
                    id={"collapse" + name}
                    className="panel-collapse collapse"
                    role="tabpanel"
                    aria-labelledby={"heading" + name}
                >
                    <div className="panel-body">{content()}</div>
                </div>
            </div>
        );
    }
}

class PanelAbout extends Panel {
    render() {
        return super.renderContent(
            "About",
            function() {
                return <Help />;
            },
            "glyphicon-file"
        );
    }
}

class PanelBasemaps extends Panel {
    render() {
        return super.renderContent(
            "Basemaps", 
            function() {
                return <div  id="basemapGalleryDiv"/>;
            }
        );
    }
}

class PanelLegend extends Panel {
    render() {
        return super.renderContent(
            "Legend",
            function() {
                return <div id="legendDiv"/>;
            },
            "glyphicon-list-alt"
        );
    }
}

class PanelLayers extends Panel {
    render() {
        return super.renderContent(
            "Layers",
            function() {
                return <div id="layersDiv"/>;
            },
            "glyphicon-list"
        );
    }
}

class PanelPrint extends Panel {
    render() {
        return super.renderContent(
            "Print",
            function() {
                return <div id="printDiv"/>;
            },
            "glyphicon-print"
        );
    }
}

// class PanelBasemaps extends Panel {
//     render() {
//         return super.renderContent("Basemaps", function() {
//             return <div id="basemapGalleryDiv" />;
//         });
//     }
//     componentDidMount() {
//         const self = this;
//         require([
//             "esri/widgets/BasemapGallery",
//             "dojo/domReady!"
//         ], BasemapGallery =>
//             new BasemapGallery({
//                 container: "basemapGalleryDiv",
//                 view: self.props.mapView
//             }));
//     }
// }

// class PanelPrint extends Panel {
//     render() {
//         return super.renderContent(
//             "Print",
//             function() {
//                 return <div id="printDiv" />;
//             },
//             "glyphicon-print"
//         );
//     }
//     componentDidMount() {
//         const self = this;
//         require(["esri/widgets/Print", "dojo/domReady!"], Print =>
//             new Print({
//                 container: "printDiv",
//                 view: self.props.mapView,
//                 printServiceUrl:
//                     "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
//             }));
//     }
// }
