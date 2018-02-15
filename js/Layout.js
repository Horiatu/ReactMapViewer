class Layout extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	map: null,
	    };
	}
    render() {
    	return (
    		<div>

    		<RMap itemId="326320c9eab3489d8d17bc389ce1e023"/>
    		<Help/>

    		</div>
    	);
    }
	componentDidMount() {
	    if(responsiveVoice && responsiveVoice.voiceSupport()) {
	        responsiveVoice.speak('React Map Viewer');
	    }
	    console.log('LAYOUT', this);
	}
}

