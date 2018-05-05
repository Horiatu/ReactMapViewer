class AppConfig extends React.Component {
	static hasTool(config, name) {
		return config.hasOwnProperty('tool_' + name) && config['tool_' + name];
	}

	static allTools(config, except = []) {
		return Object.keys(config).filter(tool => (tool.indexOf('tool_') === 0) && (except.findIndex(t => 'tool_' + t === tool) < 0) && config[tool]).map(tool => tool.slice(5));
	}

	constructor(props) {
		super(props);

		return new Promise((resolve, reject) => {
			require(["esri/portal/PortalItem"],
				PortalItem => {
					new PortalItem({
						id: props.appId,
						url: props.portalUrl
					}).load().then(
						(response) => {
							// console.log("item", response);
							response.fetchData().then(data => {
								const config = data.values;
								config.voice = props.voice;

								// console.log('AppConfig', config, AppConfig.allTools(config));
								resolve(config);
							});
						},
						(error) => {
							reject(error);
						});
				});
		});
	}
}