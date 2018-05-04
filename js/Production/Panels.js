class Panel extends React.Component {
    renderContent(name, content, icon, title) {
        // console.log('PANEL', this);
        title = title && title !== undefined ? title : name;
        icon = icon && icon !== undefined ? icon : "glyphicon-th-large";
        return React.createElement(
            "div",
            { id: "panel" + name, className: "panel collapse" },
            React.createElement(
                "div",
                { id: "heading" + name, className: "panel-heading" },
                React.createElement(
                    "div",
                    { className: "panel-title" },
                    React.createElement(
                        "a",
                        {
                            className: "panel-toggle collapsed",
                            role: "button",
                            "data-toggle": "collapse",
                            href: "#collapse" + name,
                            "aria-expanded": "false",
                            "aria-controls": "collapse" + name
                        },
                        React.createElement("span", {
                            className: "glyphicon " + icon,
                            "aria-hidden": "true"
                        }),
                        React.createElement(
                            "span",
                            { className: "panel-label" },
                            title
                        )
                    ),
                    React.createElement(
                        "a",
                        {
                            className: "panel-close",
                            role: "button",
                            "data-toggle": "collapse",
                            tabIndex: "0",
                            href: "#panel" + name
                        },
                        React.createElement("span", {
                            className: "esri-icon esri-icon-close",
                            "aria-hidden": "true"
                        })
                    )
                )
            ),
            React.createElement(
                "div",
                {
                    id: "collapse" + name,
                    className: "panel-collapse collapse",
                    role: "tabpanel",
                    "aria-labelledby": "heading" + name
                },
                React.createElement(
                    "div",
                    { className: "panel-body" },
                    content()
                )
            )
        );
    }
}

class PanelAbout extends Panel {
    render() {
        return super.renderContent(
            "About",
            function() {
                return React.createElement(Help, null);
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
                return React.createElement("div", { id: "basemapGalleryDiv" });
            }
        );
    }
    // constructor(props) {
    //     super(props);
    // }
}

class PanelPrint extends Panel {
    render() {
        return super.renderContent(
            "Print",
            function() {
                return React.createElement("div", { id: "printDiv" });
            },
            "glyphicon-print"
        );
    }
}

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
}

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
}
