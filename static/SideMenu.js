import React from "../_snowpack/pkg/react.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
import {
  Link,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "../_snowpack/pkg/@material-ui/core.js";
import {
  ChevronLeft,
  Help,
  GitHub,
  EmojiPeople
} from "../_snowpack/pkg/@material-ui/icons.js";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));
const SideMenu = (props) => {
  React.useEffect(() => {
    props.setMenuopen(props.menuopen);
  }, [props.menuopen]);
  const classes = useStyles();
  return /* @__PURE__ */ React.createElement(Drawer, {
    className: classes.drawer,
    variant: "persistent",
    anchor: "left",
    open: props.menuopen,
    classes: {
      paper: classes.drawerPaper
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.drawerHeader
  }, /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => props.setMenuopen(false)
  }, /* @__PURE__ */ React.createElement(ChevronLeft, null))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/YUUKIToriyama/maptileGlue"
  }, /* @__PURE__ */ React.createElement(ListItem, {
    button: true,
    key: "Github"
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(GitHub, null)), /* @__PURE__ */ React.createElement(ListItemText, null, "View Source Code"))), /* @__PURE__ */ React.createElement(Link, {
    href: "https://github.com/YUUKIToriyama"
  }, /* @__PURE__ */ React.createElement(ListItem, {
    button: true,
    key: "Author"
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(EmojiPeople, null)), /* @__PURE__ */ React.createElement(ListItemText, null, "Author info"))), /* @__PURE__ */ React.createElement(ListItem, {
    button: true,
    key: "Help"
  }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Help, null)), /* @__PURE__ */ React.createElement(ListItemText, null, "Show Help"))));
};
export default SideMenu;
//# sourceMappingURL=SideMenu.js.map
