/* App.jsx */

import React from "react";
import {
	CssBaseline,
	Fab
} from '@material-ui/core';
import {
	Edit
} from '@material-ui/icons';
import { makeStyles } from "@material-ui/core/styles";
import {
	ModalMenu
} from 'materialui-component-collection';

import MenuBar from "./MenuBar";
import MapView from "./MapView";
import ModalContent from './ModalContent';

const useStyles = makeStyles(() => ({
	actionButton: {
		position: 'fixed',
		zIndex: 1000, //Leafletよりも上に表示しなければならない
		bottom: 70,
		right: 50
	}
}));

const App = () => {
	const [tilelayer, setTilelayer] = React.useState("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png");
	const [errorflag, setErrorflag] = React.useState(false);

	const classes = useStyles();
	const ActionButton = () => {
		return (
			<Fab color="primary" aria-label="open modal" className={classes.actionButton}>
				<Edit />
			</Fab>
		)
	}

	return (
		<div>
			<CssBaseline />
			<MenuBar />
			<MapView tilelayer={tilelayer} setErrorflag={setErrorflag} />
			<ModalMenu
				label={{
					title: "How to use",
					closeButton: "閉じる"
				}}
				transition={true}
				triggerElement={<ActionButton />}
			>
				<ModalContent setTilelayer={setTilelayer} errorflag={errorflag} setErrorflag={setErrorflag} />
			</ModalMenu>
		</div>
	)
}

export default App;