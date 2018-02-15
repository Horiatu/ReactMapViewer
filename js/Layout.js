class Layout extends React.Component {
	componentDidMount() {
	    if(responsiveVoice.voiceSupport()) {
	        responsiveVoice.speak('React Map Viewer');
	    }
	}
    render() {
    	return (
    		<div>
    		
			<NavBar/>			
    		<RMap/>
    		<Help/>

    		</div>
    	);
    }
}

ReactDOM.render(
    <Layout/>,
    document.body
);

