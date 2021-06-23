/* MenuBar.jsx */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
	AppBar,
	Link,
	Badge,
	Button,
	Toolbar,
	Typography,
	IconButton,
	Dialog,
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions
} from "@material-ui/core";
import {
	Help,
	GitHub,
	EmojiPeople,
	Menu,
	Notifications
} from '@material-ui/icons';
import { SideMenu } from 'materialui-component-collection';

const sideMenuItems = [
	{
		href: "https://github.com/YUUKIToriyama/maptileGlue",
		name: "GitHub",
		icon: GitHub,
		text: "View Source Code"
	},
	{
		href: "https://github.com/YUUKIToriyama",
		name: "Author",
		icon: EmojiPeople,
		text: "About Author"
	},
	{
		href: "#",
		name: "Help",
		icon: Help,
		text: "Show Help"
	}
];

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
}));

const MenuBar = () => {
	const [menuOpen, setMenuOpen] = React.useState(false);
	const [notificationOpen, setNotificationOpen] = React.useState(false);
	const [numBadge, setNumBadge] = React.useState(1);

	const classes = useStyles();
	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit">
						<Menu onClick={() => setMenuOpen(true)} />
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						maptileGlue
					</Typography>

					<IconButton aria-label="show 17 new notifications" color="inherit" onClick={() => setNotificationOpen(true)}>
						<Badge badgeContent={numBadge} color="secondary">
							<Notifications />
						</Badge>
					</IconButton>
					<Dialog
						open={notificationOpen}
						onClose={() => {
							setNotificationOpen(false);
							setNumBadge(0);
						}}
						aria-labelledby="お知らせ"
						aria-describedby="お知らせ画面"
					>
						<DialogTitle id="notification-dialog-title">お知らせ</DialogTitle>
						<DialogContent>
							<DialogContentText id="notification-dialog-content">
								コア部分を<Link href="https://github.com/Cocon/Leaflet.patchwork">Cocon/Leaflet.patchwork</Link>として切り出し公開しました！
								まだプレリリースですがご自身のサイトに導入して使ってみてください！
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={() => {
									setNotificationOpen(false);
									setNumBadge(0);
								}}
								color="primary">
								閉じる
							</Button>
						</DialogActions>
					</Dialog>
				</Toolbar>
			</AppBar>
			<SideMenu
				state={[menuOpen, setMenuOpen]}
				items={sideMenuItems}
			/>
		</div>
	)
}

export default MenuBar;