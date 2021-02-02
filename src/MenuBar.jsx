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
	const classes = makeStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit">
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						maptileGlue
				</Typography>
				</Toolbar>
			</AppBar>
		</div>
	)
}

export default MenuBar;