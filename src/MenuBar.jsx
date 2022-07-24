/* MenuBar.jsx */

import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar"
import Link from "@mui/material/Link"
import Badge from "@mui/material/Badge"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Dialog from "@mui/material/Dialog"
import DialogTitle from "@mui/material/DialogTitle"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogActions from "@mui/material/DialogActions"
import { Menu, Notifications } from "@mui/icons-material";
import SideMenu from "./SideMenu";

const MenuBarRoot = styled(AppBar)(() => ({
	flexGrow: 1,
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
	marginRight: theme.spacing(2),
	color: "inherit",
}));
const ToolbarTitle = styled(Typography)(() => ({
	flexGrow: 1,
}));

const MenuBar = () => {
	const sidemenuRef = React.useRef();
	const [menuopen, setMenuopen] = React.useState(false);
	const [notificationOpen, setNotificationOpen] = React.useState(false);
	const [numBadge, setNumBadge] = React.useState(1);

	return (
		<MenuBarRoot>
			<AppBar position="static">
				<Toolbar>
					<MenuButton edge="start">
						<Menu onClick={() => setMenuopen(true)} />
					</MenuButton>
					<ToolbarTitle variant="h6">maptileGlue</ToolbarTitle>
					<IconButton
						aria-label="show 17 new notifications"
						color="inherit"
						onClick={() => setNotificationOpen(true)}
					>
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
								コア部分を
								<Link href="https://github.com/Cocon/Leaflet.patchwork">
									Cocon/Leaflet.patchwork
								</Link>
								として切り出し公開しました！
								まだプレリリースですがご自身のサイトに導入して使ってみてください！
							</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button
								onClick={() => {
									setNotificationOpen(false);
									setNumBadge(0);
								}}
								color="primary"
							>
								閉じる
							</Button>
						</DialogActions>
					</Dialog>
				</Toolbar>
			</AppBar>
			<SideMenu
				ref={sidemenuRef}
				menuopen={menuopen}
				setMenuopen={setMenuopen}
			/>
		</MenuBarRoot>
	);
};

export default MenuBar;
