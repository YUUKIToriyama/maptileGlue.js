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
    "aria-labelledby": "\u304A\u77E5\u3089\u305B",
    "aria-describedby": "\u304A\u77E5\u3089\u305B\u753B\u9762"
  }, /* @__PURE__ */ React.createElement(DialogTitle, {
    id: "notification-dialog-title"
  }, "\u304A\u77E5\u3089\u305B"), /* @__PURE__ */ React.createElement(DialogContent, null, /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "notification-dialog-content"
  }, "maptileGlue\u304C\u30EA\u30EA\u30FC\u30B9\u3055\u308C\u307E\u3057\u305F\uFF01\u611F\u60F3\u30FB\u30D7\u30EB\u30EA\u30AF\u304A\u5F85\u3061\u3057\u3066\u304A\u308A\u307E\u3059\uFF01")), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: () => {
      setNotificationOpen(false);
      setNumBadge(0);
    },
    color: "primary"
  }, "\u9589\u3058\u308B"))))), /* @__PURE__ */ React.createElement(SideMenu, {
    ref: sidemenuRef,
    menuopen,
    setMenuopen
  }));
};
export default MenuBar;
//# sourceMappingURL=MenuBar.js.map
