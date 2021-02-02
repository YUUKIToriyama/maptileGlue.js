/* main.js */

var map = L.map("map", {
	center: [35.0173, 135.7518],
	zoom: 15
})

var baseMap = L.tileLayer("https://a.tile.openstreetmap.org/{z}/{x}/{y}.png", {
	crossOrigin: true,
	detectRetina: true
})

map.addLayer(baseMap);


// ハンバーガーメニュー
var menuButton = document.querySelector(".menu-trigger");
var menu = document.getElementById("menu");
menuButton.addEventListener("click", () => {
	if (menuButton.className == "menu-trigger") {
		menuButton.setAttribute("class", "menu-trigger active");
		menu.style.opacity = 1;
		menu.style.pointerEvents = "auto";
	} else {
		menuButton.setAttribute("class", "menu-trigger");
		menu.style.opacity = 0;
		menu.style.pointerEvents = "none";
		menu.style.transition = "all 0.2s ease-out";
	}
})


// 地図読み込み処理
var maptileURL = document.getElementById("maptileURL");
var loadButton = document.getElementById("loadButton");
var tmsCheckbox = document.getElementById("tms");
var saveButton = document.getElementById("saveButton");

var options = {
	crossOrigin: true,
	detectRetina: true
}

loadButton.addEventListener("click", () => {
	saveButton.disabled = true;
	map.eachLayer(layer => {
		map.removeLayer(layer);
	})

	var url = maptileURL.value;
	if (tmsCheckbox.checked == true) {
		options.tms = true;
	} else {
		options.tms = false;
	}
	var baseMap = L.tileLayer(url, options);
	map.addLayer(baseMap);

	baseMap.on("load", () => {
		console.log("tilelayer loaded");
		saveButton.disabled = false;
		saveButton.autofocus = true;
	})
})

saveButton.addEventListener("click", () => takeScreenshot());

baseMap.on("tileerror", (error, tile) => {
	console.log(error);
	console.log(tile);
})
