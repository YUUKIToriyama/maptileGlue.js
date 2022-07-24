/* App.jsx */

import React from "react";
import { CssBaseline } from '@mui/material';
import { Fab } from '@mui/material';
import {
	Edit
} from '@mui/icons-material';
import { styled } from "@mui/material/styles";
import { ModalMenu } from './ModalMenu';

import MenuBar from "./MenuBar";
import MapView from "./MapView";
import ModalContent from './ModalContent';

const ActionButton = styled(Fab)(({ theme }) => ({
	color: theme.palette.primary,
	position: "fixed",
	zIndex: 1000, // Leafletよりも上に表示しなければならない
	bottom: 70,
	right: 50
}));

const App = () => {
	const [tilelayer, setTilelayer] = React.useState("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png");
	const [errorflag, setErrorflag] = React.useState(false);

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
				triggerElement={
					<ActionButton aria-label='open model'>
						<Edit />
					</ActionButton>
				}
			>
				<ModalContent setTilelayer={setTilelayer} errorflag={errorflag} setErrorflag={setErrorflag} />
			</ModalMenu>
		</div>
	)
}

export default App;