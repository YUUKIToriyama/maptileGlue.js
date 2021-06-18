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
			collapsed: false // 標準では非表示
		});
		this.layercontrol.addTo(this.map);
	}

	// propsが変更されたとき実行
	componentDidUpdate(prevProps) {
		console.log(this.props.tilelayer);
		if (this.props.tilelayer != prevProps.tilelayer) {
			// 古いレイヤーを削除
			this.layercontrol.removeLayer(this.baselayer);
			this.map.removeLayer(this.baselayer);
			// 新しいレイヤーを作成
			this.baselayer = L.tileLayer(this.props.tilelayer, {
				crossOrigin: true
			});
			this.layercontrol.addBaseLayer(this.baselayer, "hogehoge")
			this.baselayer.addTo(this.map);
			// baselayerのエラー処理
			this.baselayer.on("tileerror", (event) => {
				//alert("地図タイルが正しく読み込まれませんでした");
				// todo
				// textfieldをエラー表示にする
				this.props.setErrorflag(true);
			})
		}
	}

	render() {
		return (
			<div ref={this.mapRef} style={{ height: "90vh", width: "100%" }}></div>
		)
	}
}

export default MapView;