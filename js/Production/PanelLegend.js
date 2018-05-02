class PanelLegend extends Panel {
    render() {
        return super.renderContent(
            "Legend",
            function() {
                return React.createElement("div", { id: "legendDiv" });
            },
            "glyphicon-list-alt"
        );
    }

    // constructor(props) {
    //     super(props);
    //     const self = this;
    //     require([
    //         "esri/widgets/Legend",
    //         "dojo/query",
    //         "dojo/dom-attr",
    //         "dojo/dom-style",
    //         "dojo/domReady!"
    //     ], (Legend, query, domAttr, domStyle) => {
    //         const legend = new Legend({
    //             container: "legendDiv",
    //             view: self.props.mapView
    //         });

    //         const legendNode = dojo.byId("legendDiv");
    //         if (legendNode) {
    //             new MutationObserver(function(mutations) {
    //                 mutations.forEach(function(mutation) {
    //                     if (
    //                         mutation.addedNodes &&
    //                         mutation.addedNodes.length >= 1
    //                     ) {
    //                         for (
    //                             var i = 0;
    //                             i < mutation.addedNodes.length;
    //                             i++
    //                         ) {
    //                             var node = mutation.addedNodes[i];
    //                             if (domStyle.get(node, "display") !== "none") {
    //                                 const serviceLabels = query(
    //                                     ".esri-legend__service-label, .esri-legend__layer-caption, .esri-legend__layer-row"
    //                                 );
    //                                 // console.log(node, serviceLabels);
    //                                 serviceLabels.forEach(label => {
    //                                     domAttr.set(label, "tabindex", 0);
    //                                     domAttr.set(
    //                                         label,
    //                                         "onfocus",
    //                                         'responsiveVoice.speak("' +
    //                                             label.innerText +
    //                                             '")'
    //                                     );
    //                                     // console.log(label)
    //                                 });
    //                             }
    //                         }
    //                     }
    //                 });
    //             }).observe(legendNode, {
    //                 attributes: true,
    //                 childList: true,
    //                 characterData: false
    //             });
    //         }
    //     });
    // }
}
