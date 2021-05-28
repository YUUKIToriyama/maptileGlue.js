import React from "../_snowpack/pkg/react.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
import {
  AppBar,
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
  }, "maptileGlueがリリースされました！感想・プルリクお待ちしております！")), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL01lbnVCYXIuanN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBYUE7QUFDQTtBQUVBLE1BQU0sWUFBWSxXQUFXLFdBQVU7QUFBQSxFQUN0QyxNQUFNO0FBQUEsSUFDTCxVQUFVO0FBQUE7QUFBQSxFQUVYLFlBQVk7QUFBQSxJQUNYLGFBQWEsTUFBTSxRQUFRO0FBQUE7QUFBQSxFQUU1QixPQUFPO0FBQUEsSUFDTixVQUFVO0FBQUE7QUFBQTtBQUlaLE1BQU0sVUFBVSxNQUFNO0FBQ3JCLFFBQU0sY0FBYyxNQUFNO0FBQzFCLFFBQU0sQ0FBQyxVQUFVLGVBQWUsTUFBTSxTQUFTO0FBQy9DLFFBQU0sQ0FBQyxrQkFBa0IsdUJBQXVCLE1BQU0sU0FBUztBQUMvRCxRQUFNLENBQUMsVUFBVSxlQUFlLE1BQU0sU0FBUztBQUUvQyxRQUFNLFVBQVU7QUFDaEIsU0FDQyxvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFXLFFBQVE7QUFBQSxLQUN2QixvQ0FBQyxRQUFEO0FBQUEsSUFBUSxVQUFTO0FBQUEsS0FDaEIsb0NBQUMsU0FBRCxNQUNDLG9DQUFDLFlBQUQ7QUFBQSxJQUFZLE1BQUs7QUFBQSxJQUFRLFdBQVcsUUFBUTtBQUFBLElBQVksT0FBTTtBQUFBLEtBQzdELG9DQUFDLE1BQUQ7QUFBQSxJQUFNLFNBQVMsTUFBTSxZQUFZO0FBQUEsT0FFbEMsb0NBQUMsWUFBRDtBQUFBLElBQVksU0FBUTtBQUFBLElBQUssV0FBVyxRQUFRO0FBQUEsS0FBTyxnQkFJbkQsb0NBQUMsWUFBRDtBQUFBLElBQVksY0FBVztBQUFBLElBQTRCLE9BQU07QUFBQSxJQUFVLFNBQVMsTUFBTSxvQkFBb0I7QUFBQSxLQUNyRyxvQ0FBQyxPQUFEO0FBQUEsSUFBTyxjQUFjO0FBQUEsSUFBVSxPQUFNO0FBQUEsS0FDcEMsb0NBQUMsZUFBRCxTQUdGLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFNBQVMsTUFBTTtBQUNkLDBCQUFvQjtBQUNwQixrQkFBWTtBQUFBO0FBQUEsSUFFYixtQkFBZ0I7QUFBQSxJQUNoQixvQkFBaUI7QUFBQSxLQUVqQixvQ0FBQyxhQUFEO0FBQUEsSUFBYSxJQUFHO0FBQUEsS0FBNEIsU0FDNUMsb0NBQUMsZUFBRCxNQUNDLG9DQUFDLG1CQUFEO0FBQUEsSUFBbUIsSUFBRztBQUFBLEtBQThCLDZDQUlyRCxvQ0FBQyxlQUFELE1BQ0Msb0NBQUMsUUFBRDtBQUFBLElBQ0MsU0FBUyxNQUFNO0FBQ2QsMEJBQW9CO0FBQ3BCLGtCQUFZO0FBQUE7QUFBQSxJQUViLE9BQU07QUFBQSxLQUFVLFlBT3JCLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLEtBQUs7QUFBQSxJQUFhO0FBQUEsSUFBb0I7QUFBQTtBQUFBO0FBS25ELGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
