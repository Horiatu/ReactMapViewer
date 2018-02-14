class Help extends React.Component {
    render() {
    	return (
<div className="Help">
	<h1>Hello World</h1>
	<p>
Note: this page is a great way to try React but it's not suitable for production.<br/>
It slowly compiles JSX with Babel in the browser and uses a large development build of React.
	</p>
	<p>
To set up a production-ready React build environment, follow these instructions:</p>
	<ul>
		<li key='1'><a target='blank' href='https://reactjs.org/docs/add-react-to-a-new-app.html'>Add React to a new app</a></li>
		<li key='2'><a target='blank' href='https://reactjs.org/docs/add-react-to-an-existing-app.html'>Add React to an existing app</a></li>
	</ul>
	<p>
You can also use React without JSX, in which case you can remove Babel:
	</p>
	<ul>
		<li key='3'><a target='blank' href='https://reactjs.org/docs/react-without-jsx.html'>React without JSX</a></li>
		<li key='4'><a target='blank' href='https://reactjs.org/docs/cdn-links.html'>cdn links</a></li>
	</ul>
</div>
		);
	}
}
