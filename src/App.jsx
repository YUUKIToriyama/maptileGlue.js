/* App.jsx */

import React from "react";
import { CssBaseline } from '@material-ui/core';
import MenuBar from "./MenuBar";
import MapView from "./MapView";
import ModalMenu from "./ModalMenu";

const App = () => {
	const [tilelayer, setTilelayer] = React.useState("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png");
	const [errorflag, setErrorflag] = React.useState(false);

	return (
		<div>
			<CssBaseline />
			<MenuBar />
			<MapView tilelayer={tilelayer} setErrorflag={setErrorflag} />
			<ModalMenu setTilelayer={setTilelayer} errorflag={errorflag} setErrorflag={setErrorflag} />
		</div>
	)
}

export default App;