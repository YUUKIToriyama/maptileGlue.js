/* MenuBar.jsx */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
}))

const MenuBar = () => {
	const sidemenuRef = React.useRef();
	const [menuopen, setMenuopen] = React.useState(false);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit">
						<MenuIcon onClick={() => setMenuopen(true)} />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						maptileGlue
				</Typography>
				</Toolbar>
			</AppBar>
			<SideMenu ref={sidemenuRef} menuopen={menuopen} setMenuopen={setMenuopen} />
		</div>
	)
}

export default MenuBar;