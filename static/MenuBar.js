import React from "../_snowpack/pkg/react.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
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
} from "../_snowpack/pkg/@material-ui/core.js";
import {Menu, Notifications} from "../_snowpack/pkg/@material-ui/icons.js";
import SideMenu from "./SideMenu.js";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const MenuBar = () => {
  const sidemenuRef = React.useRef();
  const [menuopen, setMenuopen] = React.useState(false);
  const [notificationOpen, setNotificationOpen] = React.useState(false);
  const [numBadge, setNumBadge] = React.useState(1);
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.root
  }, /* @__PURE__ */ React.createElement(AppBar, {
    position: "static"
  }, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(IconButton, {
    edge: "start",
    className: classes.menuButton,
    color: "inherit"
  }, /* @__PURE__ */ React.createElement(Menu, {
    onClick: () => setMenuopen(true)
  })), /* @__PURE__ */ React.createElement(Typography, {
    variant: "h6",
    className: classes.title
  }, "maptileGlue"), /* @__PURE__ */ React.createElement(IconButton, {
    "aria-label": "show 17 new notifications",
    color: "inherit",
    onClick: () => setNotificationOpen(true)
  }, /* @__PURE__ */ React.createElement(Badge, {
    badgeContent: numBadge,
    color: "secondary"
  }, /* @__PURE__ */ React.createElement(Notifications, null))), /* @__PURE__ */ React.createElement(Dialog, {
    open: notificationOpen,
    onClose: () => {
      setNotificationOpen(false);
      setNumBadge(0);
    },
    "aria-labelledby": "お知らせ",
    "aria-describedby": "お知らせ画面"
  }, /* @__PURE__ */ React.createElement(DialogTitle, {
    id: "notification-dialog-title"
  }, "お知らせ"), /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "notification-dialog-content"
  }, "コア部分を", /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/Cocon/Leaflet.patchwork"
  }, "Cocon/Leaflet.patchwork"), "として切り出し公開しました！ まだプレリリースですがご自身のサイトに導入して使ってみてください！")), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => {
      setNotificationOpen(false);
      setNumBadge(0);
    },
    color: "primary"
  }, "閉じる"))))), /* @__PURE__ */ React.createElement(SideMenu, {
    ref: sidemenuRef,
    menuopen,
    setMenuopen
  }));
};
export default MenuBar;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL01lbnVCYXIuanN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjQTtBQUNBO0FBRUEsTUFBTSxZQUFZLFdBQVcsV0FBVTtBQUFBLEVBQ3RDLE1BQU07QUFBQSxJQUNMLFVBQVU7QUFBQTtBQUFBLEVBRVgsWUFBWTtBQUFBLElBQ1gsYUFBYSxNQUFNLFFBQVE7QUFBQTtBQUFBLEVBRTVCLE9BQU87QUFBQSxJQUNOLFVBQVU7QUFBQTtBQUFBO0FBSVosTUFBTSxVQUFVLE1BQU07QUFDckIsUUFBTSxjQUFjLE1BQU07QUFDMUIsUUFBTSxDQUFDLFVBQVUsZUFBZSxNQUFNLFNBQVM7QUFDL0MsUUFBTSxDQUFDLGtCQUFrQix1QkFBdUIsTUFBTSxTQUFTO0FBQy9ELFFBQU0sQ0FBQyxVQUFVLGVBQWUsTUFBTSxTQUFTO0FBRS9DLFFBQU0sVUFBVTtBQUNoQixTQUNDLG9DQUFDLE9BQUQ7QUFBQSxJQUFLLFdBQVcsUUFBUTtBQUFBLEtBQ3ZCLG9DQUFDLFFBQUQ7QUFBQSxJQUFRLFVBQVM7QUFBQSxLQUNoQixvQ0FBQyxTQUFELE1BQ0Msb0NBQUMsWUFBRDtBQUFBLElBQVksTUFBSztBQUFBLElBQVEsV0FBVyxRQUFRO0FBQUEsSUFBWSxPQUFNO0FBQUEsS0FDN0Qsb0NBQUMsTUFBRDtBQUFBLElBQU0sU0FBUyxNQUFNLFlBQVk7QUFBQSxPQUVsQyxvQ0FBQyxZQUFEO0FBQUEsSUFBWSxTQUFRO0FBQUEsSUFBSyxXQUFXLFFBQVE7QUFBQSxLQUFPLGdCQUluRCxvQ0FBQyxZQUFEO0FBQUEsSUFBWSxjQUFXO0FBQUEsSUFBNEIsT0FBTTtBQUFBLElBQVUsU0FBUyxNQUFNLG9CQUFvQjtBQUFBLEtBQ3JHLG9DQUFDLE9BQUQ7QUFBQSxJQUFPLGNBQWM7QUFBQSxJQUFVLE9BQU07QUFBQSxLQUNwQyxvQ0FBQyxlQUFELFNBR0Ysb0NBQUMsUUFBRDtBQUFBLElBQ0MsTUFBTTtBQUFBLElBQ04sU0FBUyxNQUFNO0FBQ2QsMEJBQW9CO0FBQ3BCLGtCQUFZO0FBQUE7QUFBQSxJQUViLG1CQUFnQjtBQUFBLElBQ2hCLG9CQUFpQjtBQUFBLEtBRWpCLG9DQUFDLGFBQUQ7QUFBQSxJQUFhLElBQUc7QUFBQSxLQUE0QixTQUM1QyxvQ0FBQyxlQUFELE1BQ0Msb0NBQUMsbUJBQUQ7QUFBQSxJQUFtQixJQUFHO0FBQUEsS0FBOEIsU0FDOUMsb0NBQUMsTUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQTZDLDRCQUE4QixzREFJN0Ysb0NBQUMsZUFBRCxNQUNDLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLFNBQVMsTUFBTTtBQUNkLDBCQUFvQjtBQUNwQixrQkFBWTtBQUFBO0FBQUEsSUFFYixPQUFNO0FBQUEsS0FBVSxZQU9yQixvQ0FBQyxVQUFEO0FBQUEsSUFBVSxLQUFLO0FBQUEsSUFBYTtBQUFBLElBQW9CO0FBQUE7QUFBQTtBQUtuRCxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
