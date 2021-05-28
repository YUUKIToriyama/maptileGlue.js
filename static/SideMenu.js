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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL1NpZGVNZW51LmpzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU9BLE1BQU0sY0FBYztBQUVwQixNQUFNLFlBQVksV0FBVyxDQUFDLFVBQVc7QUFBQSxFQUN4QyxRQUFRO0FBQUEsSUFDUCxPQUFPO0FBQUEsSUFDUCxZQUFZO0FBQUE7QUFBQSxFQUViLGFBQWE7QUFBQSxJQUNaLE9BQU87QUFBQTtBQUFBLEVBRVIsY0FBYztBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLElBQ1osU0FBUyxNQUFNLFFBQVEsR0FBRztBQUFBLE9BRXZCLE1BQU0sT0FBTztBQUFBLElBQ2hCLGdCQUFnQjtBQUFBO0FBQUE7QUFJbEIsTUFBTSxXQUFXLENBQUMsVUFBVTtBQUUzQixRQUFNLFVBQVUsTUFBTTtBQUNyQixVQUFNLFlBQVksTUFBTTtBQUFBLEtBQ3RCLENBQUMsTUFBTTtBQUVWLFFBQU0sVUFBVTtBQUNoQixTQUNDLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLFdBQVcsUUFBUTtBQUFBLElBQ25CLFNBQVE7QUFBQSxJQUNSLFFBQU87QUFBQSxJQUNQLE1BQU0sTUFBTTtBQUFBLElBQ1osU0FBUztBQUFBLE1BQ1IsT0FBTyxRQUFRO0FBQUE7QUFBQSxLQUdoQixvQ0FBQyxPQUFEO0FBQUEsSUFBSyxXQUFXLFFBQVE7QUFBQSxLQUN2QixvQ0FBQyxZQUFEO0FBQUEsSUFBWSxTQUFTLE1BQU0sTUFBTSxZQUFZO0FBQUEsS0FDNUMsb0NBQUMsYUFBRCxTQUdGLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxNQUFELE1BQ0Msb0NBQUMsTUFBRDtBQUFBLElBQU0sTUFBSztBQUFBLEtBQ1Ysb0NBQUMsVUFBRDtBQUFBLElBQVUsUUFBTTtBQUFBLElBQUMsS0FBSTtBQUFBLEtBQ3BCLG9DQUFDLGNBQUQsTUFDQyxvQ0FBQyxRQUFELFFBRUQsb0NBQUMsY0FBRCxNQUFjLHVCQUdoQixvQ0FBQyxNQUFEO0FBQUEsSUFBTSxNQUFLO0FBQUEsS0FDVixvQ0FBQyxVQUFEO0FBQUEsSUFBVSxRQUFNO0FBQUEsSUFBQyxLQUFJO0FBQUEsS0FDcEIsb0NBQUMsY0FBRCxNQUNDLG9DQUFDLGFBQUQsUUFFRCxvQ0FBQyxjQUFELE1BQWMsa0JBR2hCLG9DQUFDLFVBQUQ7QUFBQSxJQUFVLFFBQU07QUFBQSxJQUFDLEtBQUk7QUFBQSxLQUNwQixvQ0FBQyxjQUFELE1BQ0Msb0NBQUMsTUFBRCxRQUVELG9DQUFDLGNBQUQsTUFBYztBQUFBO0FBTW5CLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
