"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import FileReader from "../../system/io/file-reader";
var map_1 = require("./map");
var symbols_1 = require("../../../source/system/symbols");
var type_converter_1 = require("../../system/typing/type-converter");
var MapLoader = /** @class */ (function () {
    function MapLoader() {
    }
    MapLoader.prototype.load = function (path) {
        // read in
        var mapData = this.readInMap(path);
        // @ts-ignore: create
        var map = new map_1.default(mapData.height, mapData.width);
        // @ts-ignore
        map.collision = mapData.collisionMap;
        return map;
    };
    MapLoader.prototype.readInMap = function (path) {
        // let fileReader: FileReader = new FileReader();
        // let mapData: string = fileReader.readInFile(path);
        var map = ".................................\n" +
            ".................................\n" +
            "....TT........................T..\n" +
            ".....T...........................\n" +
            ".....TTTTT.............TTTTTT....\n" +
            ".......T..................T......\n" +
            ".......T............TT....T......\n" +
            ".......T.............T....T......\n" +
            ".................................\n" +
            "..........................T......\n" +
            "..........................T..TT..\n" +
            ".TTTTTT.TTTT.................T...\n" +
            "........................T........\n" +
            "........................TTTT.....\n" +
            "..TT.....................T.......\n" +
            "...T.....................T.......\n" +
            "...T.............................\n" +
            "......TTTT....T......TT..........\n" +
            ".................................";
        var width = 0;
        var height = 0;
        var collisionMap = {};
        var pos = 0;
        var i = 0;
        var j = 0;
        while (pos < map.length) {
            if (map.charAt(pos) === symbols_1.default.Map.unblocked) {
                collisionMap[[i, j].toString()] = false;
                j++;
            }
            else if (map.charAt(pos) === symbols_1.default.Map.newLine) {
                i++;
                j = 0;
            }
            else {
                collisionMap[[i, j].toString()] = true;
                j++;
            }
            pos++;
            if (pos === map.length - 1) {
                height = i + 1;
                width = j + 1;
            }
        }
        return { height: height, width: width, collisionMap: new type_converter_1.default().to2DArray(collisionMap, height, width) };
    };
    return MapLoader;
}());
exports.default = MapLoader;
//# sourceMappingURL=map-loader.js.map