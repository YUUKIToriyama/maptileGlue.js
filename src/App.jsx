/* App.jsx */

import React from "react";
import { CssBaseline } from '@material-ui/core';
import MenuBar from "./MenuBar";

class App extends React.Component {
	/*	constructor(props) {
	
		}
	*/
	render() {
		return (
			<div>
				<CssBaseline />
				<MenuBar />
				<h1>hello</h1>
			</div>
		)
	}
}

export default App;