class Layout extends React.Component {
    render() {
    	return (
    		<RMap itemId="326320c9eab3489d8d17bc389ce1e023"/>
    	);
    }
	componentDidMount() {
	    if(responsiveVoice && responsiveVoice.voiceSupport()) {
	        responsiveVoice.speak('React Map Viewer');
	    }
	    console.log('LAYOUT', this);
	}
}

