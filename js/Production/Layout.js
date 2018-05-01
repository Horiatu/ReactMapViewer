class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	componentDidCatch(error, info) {
		// Display fallback UI
		this.setState({ hasError: true });
		// You can also log the error to an error reporting service
		console.log("Error - ErrorBoundary", error, info);
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return React.createElement("h1", null, "Something went wrong.");
		}
		return this.props.children;
	}
}

//
class Layout extends React.Component {
	constructor(props) {
		super(props);
	};

	render() {
		return React.createElement(
			ErrorBoundary,
			null,
			React.createElement(RMap, {
				appId: this.props.appId,
				portalUrl: this.props.portalUrl
			})
		);
	}
}
