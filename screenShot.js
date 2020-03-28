/* screenShot.js */

async function takeScreenshot() {
	let canvasses = [];
	// タイルレイヤーがオプション「crossOrigin: true」のもと読み込まれていることが必要
	let layers = document.querySelectorAll(".leaflet-tile-container");
	layers.forEach(layer => {
		let tiles = layer.childNodes;
		let imgURLs = {};
		Array.from(tiles).map(x => [x.src.split(/[./]/).slice(-3).slice(0,2), x]).sort().forEach(image => {
			let x = image[0][0];
			if (!(imgURLs.hasOwnProperty(x))) {
				imgURLs[x] = [];
			}
			imgURLs[x].push(image[1]);
		})
		//console.log(imgURLs);
	
		let canvas = document.createElement("canvas");
		let w = Object.keys(imgURLs).length
		let h = tiles.length / w;
		canvas.width = w * 256;
		canvas.height = h * 256;
	
		let context = canvas.getContext("2d");
		let dx = 0;
		for (let [x,images] of Object.entries(imgURLs)) {
			let dy = 0;
			images.forEach(image => {
				context.drawImage(image, 256*dx, 256*dy);
				dy = dy + 1;
			})
			dx = dx + 1;
		}
		canvasses.push(canvas);
	})

	/*
	// レイヤーごとに生成したキャプチャーを透明度を適用しながら一枚に合成する
	let context = canvasses[0].getContext("2d");
	for (let m = 1; m < canvasses.length - 1; m++) {
		let opacity = parseFloat(document.getElementById(`slider-${m}`).value) / 10;
		console.log(opacity);
		let ctx = canvasses[m].getContext("2d");
		ctx.globalAlpha = opacity;
		let img = await loadImage(ctx.canvas.toDataURL("image/png"));
		context.drawImage(img, 0, 0);
	}

	function loadImage(url) {
		return new Promise(resolve => {
			let img = new Image();
			img.src = url;
			img.addEventListener("load", () => {
				resolve(img);
			})
		})
	}
	*/

	var a = document.createElement("a");
	a.href = await canvasses[0].toDataURL("image/png");
	a.download = "download.png";
	a.click();
}
