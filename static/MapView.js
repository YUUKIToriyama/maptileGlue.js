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
      attribution: '地理院タイル by <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>',
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvbWFwdGlsZUdsdWUvbWFwdGlsZUdsdWUvc3JjL01hcFZpZXcuanN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBRUEsc0JBQXNCLE1BQU0sVUFBVTtBQUFBLEVBQ3JDLFlBQVksT0FBTztBQUNsQixVQUFNO0FBQ04sU0FBSyxTQUFTLE1BQU0sVUFBVTtBQUM5QixTQUFLO0FBRUwsU0FBSztBQUVMLFNBQUs7QUFBQTtBQUFBLEVBSU4sb0JBQW9CO0FBQ25CLFNBQUssTUFBTSxFQUFFLElBQUksS0FBSyxPQUFPLFNBQVMsUUFBUSxDQUFDLFNBQVMsV0FBVztBQUNuRSxTQUFLLFlBQVksRUFBRSxVQUFVLDZEQUE2RDtBQUFBLE1BQ3pGLGFBQWE7QUFBQSxNQUNiLElBQUk7QUFBQSxNQUNKLGFBQWE7QUFBQTtBQUVkLFNBQUssVUFBVSxNQUFNLEtBQUs7QUFDMUIsU0FBSyxlQUFlLEVBQUUsUUFBUSxPQUFPLENBQUUsV0FBYSxLQUFLLFlBQWEsSUFBSTtBQUFBLE1BQ3pFLGdCQUFnQjtBQUFBLE1BQ2hCLFdBQVc7QUFBQTtBQUVaLFNBQUssYUFBYSxNQUFNLEtBQUs7QUFBQTtBQUFBLEVBSTlCLG1CQUFtQixXQUFXO0FBQzdCLFlBQVEsSUFBSSxLQUFLLE1BQU07QUFDdkIsUUFBSSxLQUFLLE1BQU0sYUFBYSxVQUFVLFdBQVc7QUFFaEQsV0FBSyxhQUFhLFlBQVksS0FBSztBQUNuQyxXQUFLLElBQUksWUFBWSxLQUFLO0FBRTFCLFdBQUssWUFBWSxFQUFFLFVBQVUsS0FBSyxNQUFNLFdBQVc7QUFBQSxRQUNsRCxhQUFhO0FBQUE7QUFFZCxXQUFLLGFBQWEsYUFBYSxLQUFLLFdBQVc7QUFDL0MsV0FBSyxVQUFVLE1BQU0sS0FBSztBQUUxQixXQUFLLFVBQVUsR0FBRyxhQUFhLENBQUMsVUFBVTtBQUl6QyxhQUFLLE1BQU0sYUFBYTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBUTNCLFNBQVM7QUFDUixXQUNDLG9DQUFDLE9BQUQ7QUFBQSxNQUFLLEtBQUssS0FBSztBQUFBLE1BQVEsT0FBTyxDQUFFLFFBQVEsUUFBUSxPQUFPO0FBQUE7QUFBQTtBQUFBO0FBSzFELGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
