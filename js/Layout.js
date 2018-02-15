class Layout extends React.Component {
	componentDidMount() {
	    if(responsiveVoice && responsiveVoice.voiceSupport()) {
	        responsiveVoice.speak('React Map Viewer');
	    }
	}
    render() {
    	return (
    		<div>

			<NavBar/>			
    		<RMap itemId="326320c9eab3489d8d17bc389ce1e023"/>
    		<Help/>

    		</div>
    	);
    }
}

