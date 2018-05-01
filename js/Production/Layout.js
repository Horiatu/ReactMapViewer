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
				appId: "b54efa235b7f455f91b14396090ad3e3",
				portalUrl: "https://www.arcgis.com",
				//"http://esrica-tsg.maps.arcgis.com",
			})
		);
	}

	// componentDidMount() {
	// 	if (responsiveVoice && responsiveVoice.voiceSupport()) {
	// 		responsiveVoice.speak("React Map Viewer");
	// 		$("p, span, a").click(ev => {
	// 			responsiveVoice.speak(ev.currentTarget.innerText);
	// 		});
	// 	}
	// }
}
