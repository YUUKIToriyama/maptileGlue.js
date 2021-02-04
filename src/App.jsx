/* App.jsx */

import React from "react";
import { CssBaseline } from '@material-ui/core';
import MenuBar from "./MenuBar";
import MapView from "./MapView";
import ModalMenu from "./ModalMenu";

const App = () => {
	const [tilelayer, setTilelayer] = React.useState("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png");
	return (
		<div>
			<CssBaseline />
			<MenuBar />
			<MapView tilelayer={tilelayer} />
			<ModalMenu setTilelayer={setTilelayer} />
		</div>
	)
}

export default App;