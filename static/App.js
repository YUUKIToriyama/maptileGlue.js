import React from "../_snowpack/pkg/react.js";
import {CssBaseline} from "../_snowpack/pkg/@material-ui/core.js";
import MenuBar from "./MenuBar.js";
import MapView from "./MapView.js";
import ModalMenu from "./ModalMenu.js";
const App = () => {
  const [tilelayer, setTilelayer] = React.useState("https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png");
  const [errorflag, setErrorflag] = React.useState(false);
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(MenuBar, null), /* @__PURE__ */ React.createElement(MapView, {
    tilelayer,
    setErrorflag
  }), /* @__PURE__ */ React.createElement(ModalMenu, {
    setTilelayer,
    errorflag,
    setErrorflag
  }));
};
export default App;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL0FwcC5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTSxNQUFNLE1BQU07QUFDakIsUUFBTSxDQUFDLFdBQVcsZ0JBQWdCLE1BQU0sU0FBUztBQUNqRCxRQUFNLENBQUMsV0FBVyxnQkFBZ0IsTUFBTSxTQUFTO0FBRWpELFNBQ0Msb0NBQUMsT0FBRCxNQUNDLG9DQUFDLGFBQUQsT0FDQSxvQ0FBQyxTQUFELE9BQ0Esb0NBQUMsU0FBRDtBQUFBLElBQVM7QUFBQSxJQUFzQjtBQUFBLE1BQy9CLG9DQUFDLFdBQUQ7QUFBQSxJQUFXO0FBQUEsSUFBNEI7QUFBQSxJQUFzQjtBQUFBO0FBQUE7QUFLaEUsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
