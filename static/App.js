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
//# sourceMappingURL=App.js.map
