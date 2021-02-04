/* MapView.jsx */

import React from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

class MapView extends React.Component {
	constructor(props) {
		super(props);
		this.mapRef = React.createRef(null);
		this.map;
		// 初期状態で表示されているレイヤー
		this.baselayer;
		// ユーザーが追加して表示するレイヤー
		this.overlayer;
		// レイヤーコントロール
		this.layercontrol;
	}

	// 初回実行
	componentDidMount() {
		this.map = L.map(this.mapRef.current).setView([35.0173, 135.7518], 15);
		this.baselayer = L.tileLayer("https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png", {
			attribution: '地理院タイル by <a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>',
			id: 'monoquro-chiriin',
			crossOrigin: true
		})
		this.baselayer.addTo(this.map);
		this.layercontrol = L.control.layers({ "baselayer": this.baselayer }, {}, {
			hideSingleBase: true,
			collapsed: false
		});
		this.layercontrol.addTo(this.map);
	}

	// propsが変更されたとき実行
	componentDidUpdate(prevProps) {
		console.log(this.props.tilelayer);
		if (this.props.tilelayer != prevProps.tilelayer) {
			// 古いレイヤーを削除
			if (this.overlayer != undefined) {
				this.layercontrol.removeLayer(this.overlayer);
				this.map.removeLayer(this.overlayer);
			}
			// 新しいレイヤーを作成
			this.overlayer = L.tileLayer(this.props.tilelayer);
			this.layercontrol.addOverlay(this.overlayer, "hogehoge")
			this.overlayer.addTo(this.map);
		}
	}

	render() {
		return (
			<div ref={this.mapRef} style={{ height: "90vh", width: "100%" }}></div>
		)
	}
}

export default MapView;