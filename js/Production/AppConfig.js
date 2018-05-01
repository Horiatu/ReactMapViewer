class AppConfig extends React.Component {

	constructor(props) {
	    super(props);
	    const self = this;

	    this.state = {
	        promise: new RSVP.Promise((resolve, reject) => {
			    require(["esri/portal/PortalItem"], 
				function(PortalItem) { 
					new PortalItem({
						id: self.props.appId,
						url: self.props.portalUrl
					}).load().then((response) => {
						// console.log("item",r);
						response.fetchData().then(data => {
							const config = data.values;
							config.voice = self.props.voice;
							config.hasTool = function(name) {
		                        return this.config.hasOwnProperty('tool_'+name) && this.config['tool_'+name];
		                    };
		                    config.allTools = function(except=[]) {
		                        return Object.keys(this.config).filter(tool => (tool.indexOf('tool_')===0) && (except.findIndex(t => 'tool_'+t === tool)<0) && this.config[tool]).map(tool => tool.slice(5));
		                    };
							self.loaded = true;
							resolve(config);
							// console.log("AppConfig", config);
						});
					},
					(error) => {
						reject(error);
					});
				});
	        })
	    };
	}
}
