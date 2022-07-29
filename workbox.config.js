/* workbox.config.js */

module.exports = {
	// キャッシュ保持の対象となるディレクトリ
	globDirectory: "build/",
	// キャッシュするファイル
	globPatterns: ["**/*.{js,json,css,jpg,png,html,txt}"],
	// serviceWorkerの場所
	swDest: "build/sw.js",
	// ラインタイムキャッシュ
	runtimeCaching: [{
		urlPattern: /^https:\/\/fonts\.googleapis\.com/,
		handler: "StaleWhileRevalidate",
		options: {
			cacheName: "google-fonts-stylesheets",
		},
	},
	{
		urlPattern: /^https:\/\/fonts\.gstatic\.com/,
		handler: "CacheFirst",
		options: {
			cacheName: "google-fonts-webfonts",
			expiration: {
				// GoogleFontsは7日間キャッシュする
				maxAgeSeconds: 60 * 60 * 24 * 7,
				maxEntries: 30,
			},
		},
	},
	],
	// キャッシュ対象とするファイルのサイズ上限を4MBに設定
	maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
};