import { g as getDefaultExportFromCjs, c as createCommonjsModule, a as commonjsGlobal } from './common/_commonjsHelpers-8c19dec8.js';

var main = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var takeScreenshot = function (filetype) { return __awaiter(void 0, void 0, void 0, function () {
    var layerNode, tileNodes, tileImages, canvas, w, h, context, dx, a;
    return __generator(this, function (_a) {
        layerNode = document.querySelector(".leaflet-tile-container");
        if (layerNode === null) {
            throw Error("class .leaflet-tile-container cannot find.");
        }
        tileNodes = layerNode.querySelectorAll("img");
        tileImages = {};
        Array.from(tileNodes).map(function (tileNode) {
            return {
                position: tileNode.src.split(/[./]/).slice(-3).slice(0, 2).map(function (num) { return parseInt(num); }),
                imgElement: tileNode
            };
        }).sort(function (a, b) {
            return a.position[0] - b.position[0];
        }).forEach(function (tile) {
            var x = tile.position[0];
            if (!tileImages.hasOwnProperty(x)) {
                tileImages[x] = [];
            }
            tileImages[x].push(tile.imgElement);
        });
        console.log(tileImages);
        canvas = document.createElement("canvas");
        w = Object.keys(tileImages).length;
        h = tileNodes.length / w;
        canvas.width = w * 256;
        canvas.height = h * 256;
        context = canvas.getContext("2d");
        dx = 0;
        Object.values(tileImages).forEach(function (images) {
            var dy = 0;
            images.forEach(function (image) {
                if (context === null) {
                    throw Error("context is null");
                }
                context.drawImage(image, 256 * dx, 256 * dy);
                dy++;
            });
            dx++;
        });
        a = document.createElement("a");
        a.href = canvas.toDataURL(filetype || "image/jpeg");
        if (filetype == "image/jpeg") {
            a.download = "download.jpg";
        }
        else {
            a.download = "download.png";
        }
        a.click();
        return [2];
    });
}); };
exports.default = takeScreenshot;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(main);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=leaflet.patchwork.js.map
