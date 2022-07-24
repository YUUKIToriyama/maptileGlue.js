/* SideMenu.jsx */

import React from 'react';
import Link from '@mui/material/Link'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import {
	ChevronLeft,
	Help,
	GitHub,
	EmojiPeople
} from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const drawerWidth = 240;

const SideMenuRoot = styled(Drawer)(() => ({
	width: drawerWidth,
	flexShrink: 0,
	anchor: 'left',
}));
const DrawerHeader = styled(IconButton)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	justifyContent: "flex-end",
	...theme.mixins.toolbar
}));

const SideMenu = (props) => {

	React.useEffect(() => {
		props.setMenuopen(props.menuopen);
	}, [props.menuopen]);

	return (
		<SideMenuRoot
			variant='persistent'
			open={props.menuopen}
		>
			<DrawerHeader onClick={() => props.setMenuopen(false)}>
				<ChevronLeft />
			</DrawerHeader>
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

		</SideMenuRoot>
	);
}
export default SideMenu;