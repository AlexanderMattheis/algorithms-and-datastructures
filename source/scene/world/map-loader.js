"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = require("./map");
var MapLoader = /** @class */ (function () {
    function MapLoader() {
    }
    MapLoader.prototype.load = function (path) {
        // read in
        var height = 20;
        var width = 20;
        // create
        var map = new map_1.default(height, width);
        return map;
    };
    return MapLoader;
}());
exports.default = MapLoader;
//# sourceMappingURL=map-loader.js.map