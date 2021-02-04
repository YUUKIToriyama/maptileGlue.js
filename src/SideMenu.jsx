/* SideMenu.jsx */

import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import {
	Link,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton
} from '@material-ui/core';
import {
	ChevronLeft,
	Help,
	GitHub,
	EmojiPeople
} from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
}));

const SideMenu = (props) => {

	React.useEffect(() => {
		props.setMenuopen(props.menuopen);
	}, [props.menuopen]);

	const classes = useStyles();
	return (
		<Drawer
			className={classes.drawer}
			variant='persistent'
			anchor='left'
			open={props.menuopen}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton onClick={() => props.setMenuopen(false)}>
					<ChevronLeft />
				</IconButton>
			</div>
			<Divider />
			<List>
				<Link href='https://github.com/YUUKIToriyama/maptileGlue'>
					<ListItem button key='Github'>
						<ListItemIcon>
							<GitHub />
						</ListItemIcon>
						<ListItemText>View Source Code</ListItemText>
					</ListItem>
				</Link>
				<Link href="https://github.com/YUUKIToriyama">
					<ListItem button key='Author'>
						<ListItemIcon>
							<EmojiPeople />
						</ListItemIcon>
						<ListItemText>Author info</ListItemText>
					</ListItem>
				</Link>
				<ListItem button key='Help'>
					<ListItemIcon>
						<Help />
					</ListItemIcon>
					<ListItemText>Show Help</ListItemText>
				</ListItem>
			</List>
		</Drawer>
	);
}
export default SideMenu;