class NavBar extends React.Component {
    render() {
        // console.log('NAVBAR', this);
        return React.createElement(
            "nav",
            {
                className:
                    "navbar calcite-navbar navbar-fixed-top calcite-text-light calcite-bg-dark"
            },
            React.createElement(NavMenu, null),
            React.createElement(
                "div",
                { className: "calcite-title calcite-overflow-hidden" },
                React.createElement(
                    "span",
                    { className: "calcite-title-main" },
                    "React Map Viewer"
                ),
                React.createElement("span", {
                    className: "calcite-title-divider hidden-xs"
                }),
                React.createElement(
                    "span",
                    { className: "calcite-title-sub hidden-xs" },
                    this.props.title
                    // "Responsive Design: A Bootstrap theme for building modern map apps"
                )
            ),
            React.createElement(
                "ul",
                { className: "nav navbar-nav calcite-nav" },
                React.createElement(
                    "li",
                    null,
                    React.createElement(
                        "div",
                        {
                            className:
                                "calcite-navbar-search calcite-search-expander"
                        },
                        React.createElement("div", { id: "searchWidgetDiv" })
                    )
                )
            )
        );
    }
}
