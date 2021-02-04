import React from "../_snowpack/pkg/react.js";
import "../_snowpack/pkg/leaflet/dist/leaflet.css.proxy.js";
import L from "../_snowpack/pkg/leaflet.js";
class MapView extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef(null);
    this.map;
    this.baselayer;
    this.layercontrol;
  }
  componentDidMount() {
    this.map = L.map(this.mapRef.current).setView([35.0173, 135.7518], 15);
    this.baselayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
      attribution: '\u5730\u7406\u9662\u30BF\u30A4\u30EB by <a href="https://maps.gsi.go.jp/development/ichiran.html">\u56FD\u571F\u5730\u7406\u9662</a>',
      id: "monoquro-chiriin",
      crossOrigin: true
    });
    this.baselayer.addTo(this.map);
    this.layercontrol = L.control.layers({baselayer: this.baselayer}, {}, {
      hideSingleBase: true,
      collapsed: false
    });
    this.layercontrol.addTo(this.map);
  }
  componentDidUpdate(prevProps) {
    console.log(this.props.tilelayer);
    if (this.props.tilelayer != prevProps.tilelayer) {
      this.layercontrol.removeLayer(this.baselayer);
      this.map.removeLayer(this.baselayer);
      this.baselayer = L.tileLayer(this.props.tilelayer, {
        crossOrigin: true
      });
      this.layercontrol.addBaseLayer(this.baselayer, "hogehoge");
      this.baselayer.addTo(this.map);
      this.baselayer.on("tileerror", (event) => {
        this.props.setErrorflag(true);
      });
    }
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      ref: this.mapRef,
      style: {height: "90vh", width: "100%"}
    });
  }
}
export default MapView;
//# sourceMappingURL=MapView.js.map
