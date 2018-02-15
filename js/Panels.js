class Panel extends React.Component {
    renderContent(name, content, title) {
        console.log('PANEL', this);
        title=(title && title !== undefined) ? title : name;

        return (
            <div id={"panel"+name} className="panel collapse">
                <div id={"heading"+name} className="panel-heading">
                    <div className="panel-title">
                        <a className="panel-toggle collapsed" role="button" data-toggle="collapse" href={"#collapse"+name}
                          aria-expanded="false" aria-controls={"collapse"+name}><span className="glyphicon glyphicon-th-large" aria-hidden="true"></span>
                          <span className="panel-label">{title}</span>
                        </a>
                        <a className="panel-close" role="button" data-toggle="collapse" tabIndex="0" href={"#panel"+name}><span className="esri-icon esri-icon-close" aria-hidden="true"></span></a>
                    </div>
                </div>
                <div id={"collapse"+name} className="panel-collapse collapse" role="tabpanel" aria-labelledby={"heading"+name}>
                    <div className="panel-body">

                        {content()}

                    </div>
                </div>
            </div>
      	);
    }
}

class PanelAbout extends Panel {
    render() {
        return super.renderContent("About", function() {
            return (
                <Help/>
            )
        });
    }
}
class PanelBasemaps extends Panel {
    render() {
        return super.renderContent("Basemaps", function() {
            return (
                <div id="basemapGalleryDiv"></div>
            )
        });
    }
    componentDidMount() {
      const self = this;
      require([
        "esri/widgets/BasemapGallery",
        "dojo/domReady!"
        ], 
        (BasemapGallery) => 
            new BasemapGallery({
              container: "basemapGalleryDiv",
              view: self.props.mapView
            })
        );
  }
}
class PanelLegend extends Panel {
    render() {
        return super.renderContent("Legend", function() {
            return (
                <div id="legendDiv"></div>
            )
        });
    }
    componentDidMount() {
      const self = this;
      require([
        "esri/widgets/Legend",
        "dojo/domReady!"
        ], 
        (Legend) => 
            new Legend({
              container: "legendDiv",
              view: self.props.mapView
            })
        );
  }
}
class PanelLayers extends Panel {
    render() {
        return super.renderContent("Layers", function() {
            return (
                <div id="layersDiv"></div>
            )
        });
    }
    componentDidMount() {
      const self = this;
      require([
        "esri/widgets/LayerList",
        "dojo/domReady!"
        ], 
        (LayerList) => 
            new LayerList({
              container: "layersDiv",
              view: self.props.mapView
            })
        );
  }
}
class PanelPrint extends Panel {
    render() {
        return super.renderContent("Print", function() {
            return (
                <div id="printDiv"></div>
            )
        });
    }
    componentDidMount() {
      const self = this;
      require([
        "esri/widgets/Print",
        "dojo/domReady!"
        ], 
        (Print) => 
            new Print({
                container: "printDiv",
                view: self.props.mapView,
                printServiceUrl: "https://utility.arcgisonline.com/arcgis/rest/services/Utilities/PrintingTools/GPServer/Export%20Web%20Map%20Task"
            })
        );
  }
}
