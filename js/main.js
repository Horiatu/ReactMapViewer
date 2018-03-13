class AppConfig extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = {
	        config: null,
	    };

	    const self = this;

	    require(["esri/portal/PortalItem"], 
		function(PortalItem) { 
			new PortalItem({
				id: self.props.appId,
				url: self.props.portalUrl
			}).load().then((r)=>{
				// console.log("item",r);
				r.fetchData().then(d => {
					self.config = d.values;
					console.log("config",self.config);
				});
			},
			(error) => console.log('error', error));
		});
	}
}


