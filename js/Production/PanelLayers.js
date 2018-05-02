class PanelLayers extends Panel {
    render() {
        return super.renderContent(
            "Layers",
            function() {
                return React.createElement("div", { id: "layersDiv" });
            },
            "glyphicon-list"
        );
    }
    // constructor(props) {
    //     super(props);
    //     const self = this;
    //     require([
    //         "esri/widgets/LayerList",
    //         "dojo/query",
    //         "dojo/dom-attr",
    //         "dojo/domReady!"
    //     ], (LayerList, query, domAttr) => {
    //         const layerList = new LayerList({
    //             container: "layersDiv",
    //             view: self.props.mapView
    //         });

    //         const layersNode = dojo.byId("layersDiv");
    //         if (layersNode) {
    //             new MutationObserver(mutations => {
    //                 // console.log('mutations', mutations);
    //                 const labels = query(".esri-layer-list__item-title");
    //                 // console.log('labels', labels);

    //                 labels.forEach(label => {
    //                     domAttr.set(
    //                         label,
    //                         "onfocus",
    //                         'responsiveVoice.speak("' + label.innerText + '")'
    //                     );
    //                     // console.log(label)
    //                 });
    //             }).observe(layersNode, {
    //                 attributes: false,
    //                 childList: true,
    //                 characterData: false
    //             });
    //         }
    //     });
    // }
}
