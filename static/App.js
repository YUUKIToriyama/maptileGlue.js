import React from "../_snowpack/pkg/react.js";
import {
  CssBaseline,
  Fab
} from "../_snowpack/pkg/@material-ui/core.js";
import {
  Edit
} from "../_snowpack/pkg/@material-ui/icons.js";
import {makeStyles} from "../_snowpack/pkg/@material-ui/core/styles.js";
import {
  ModalMenu
} from "../_snowpack/pkg/materialui-component-collection.js";
import MenuBar from "./MenuBar.js";
import MapView from "./MapView.js";
import ModalContent from "./ModalContent.js";
const useStyles = makeStyles(() => ({
  actionButton: {
    position: "fixed",
    zIndex: 1e3,
    bottom: 70,
    right: 50
  }
}));
const App = () => {
  const [tilelayer, setTilelayer] = React.useState("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png");
  const [errorflag, setErrorflag] = React.useState(false);
  const classes = useStyles();
  const ActionButton = () => {
    return /* @__PURE__ */ React.createElement(Fab, {
      color: "primary",
      "aria-label": "open modal",
      className: classes.actionButton
    }, /* @__PURE__ */ React.createElement(Edit, null));
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(MenuBar, null), /* @__PURE__ */ React.createElement(MapView, {
    tilelayer,
    setErrorflag
  }), /* @__PURE__ */ React.createElement(ModalMenu, {
    label: {
      title: "How to use",
      closeButton: "閉じる"
    },
    transition: true,
    triggerElement: /* @__PURE__ */ React.createElement(ActionButton, null)
  }, /* @__PURE__ */ React.createElement(ModalContent, {
    setTilelayer,
    errorflag,
    setErrorflag
  })));
};
export default App;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL0FwcC5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFlBQVksV0FBVyxNQUFPO0FBQUEsRUFDbkMsY0FBYztBQUFBLElBQ2IsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsT0FBTztBQUFBO0FBQUE7QUFJVCxNQUFNLE1BQU0sTUFBTTtBQUNqQixRQUFNLENBQUMsV0FBVyxnQkFBZ0IsTUFBTSxTQUFTO0FBQ2pELFFBQU0sQ0FBQyxXQUFXLGdCQUFnQixNQUFNLFNBQVM7QUFFakQsUUFBTSxVQUFVO0FBQ2hCLFFBQU0sZUFBZSxNQUFNO0FBQzFCLFdBQ0Msb0NBQUMsS0FBRDtBQUFBLE1BQUssT0FBTTtBQUFBLE1BQVUsY0FBVztBQUFBLE1BQWEsV0FBVyxRQUFRO0FBQUEsT0FDL0Qsb0NBQUMsTUFBRDtBQUFBO0FBS0gsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsYUFBRCxPQUNBLG9DQUFDLFNBQUQsT0FDQSxvQ0FBQyxTQUFEO0FBQUEsSUFBUztBQUFBLElBQXNCO0FBQUEsTUFDL0Isb0NBQUMsV0FBRDtBQUFBLElBQ0MsT0FBTztBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBO0FBQUEsSUFFZCxZQUFZO0FBQUEsSUFDWixnQkFBZ0Isb0NBQUMsY0FBRDtBQUFBLEtBRWhCLG9DQUFDLGNBQUQ7QUFBQSxJQUFjO0FBQUEsSUFBNEI7QUFBQSxJQUFzQjtBQUFBO0FBQUE7QUFNcEUsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
