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

