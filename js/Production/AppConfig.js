class AppConfig extends React.Component {

	constructor(props) {
	    super(props);
	    this.loaded = false;
	    this.error = null;
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
							self.config = data.values;
							self.config.voice = self.props.voice;
							self.hasTool = function(name) {
		                        return this.config.hasOwnProperty('tool_'+name) && this.config['tool_'+name];
		                    };
		                    self.allTools = function(except=[]) {
		                        return Object.keys(this.config).filter(tool => (tool.indexOf('tool_')===0) && (except.findIndex(t => 'tool_'+t === tool)<0) && this.config[tool]).map(tool => tool.slice(5));
		                    };
							self.loaded = true;
							resolve(self.config);
							console.log("AppConfig", self);
						});
					},
					(error) => {
						self.error = error;
						reject(error);
						console.log('AppConfig Error', error);
					});
				});
	        })
	    };



	 //    require(["esri/portal/PortalItem"], 
		// function(PortalItem) { 
		// 	new PortalItem({
		// 		id: self.props.appId,
		// 		url: self.props.portalUrl
		// 	}).load().then((response) => {
		// 		// console.log("item",r);
		// 		response.fetchData().then(data => {
		// 			self.config = data.values;
		// 			self.config.voice = self.props.voice;
		// 			self.hasTool = function(name) {
  //                       return this.config.hasOwnProperty('tool_'+name) && this.config['tool_'+name];
  //                   };
  //                   self.allTools = function(except=[]) {
  //                       return Object.keys(this.config).filter(tool => (tool.indexOf('tool_')===0) && (except.findIndex(t => 'tool_'+t === tool)<0) && this.config[tool]).map(tool => tool.slice(5));
  //                   };
		// 			self.loaded = true;
		// 			self.state.promise.resolve(self.loaded);
		// 			console.log("AppConfig", self);
		// 		});
		// 	},
		// 	(error) => {
		// 		self.error = error;
		// 		self.state.promise.reject(error);
		// 		console.log('AppConfig Error', error);
		// 	});
		// });
	}
}

// const appConfig = new AppConfig({
// 		appId: "b54efa235b7f455f91b14396090ad3e3",
// 		portalUrl: "https://www.arcgis.com",
// 		voice: false
// 	});

// appConfig.state.promise.then((r) => {
// 	console.log(r);
// 	debugger;
// });

