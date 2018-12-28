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
        var map = new map_1.default(mapData.width, mapData.height);
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
        var x = 0;
        var y = 0;
        while (pos < map.length) {
            if (map.charAt(pos) === symbols_1.default.Map.unblocked) {
                collisionMap[[x, y].toString()] = false;
                x++;
            }
            else if (map.charAt(pos) === symbols_1.default.Map.newLine) {
                y++;
                x = 0;
            }
            else {
                collisionMap[[x, y].toString()] = true;
                x++;
            }
            pos++;
            if (pos === map.length - 1) {
                height = y + 1;
                width = x + 1;
            }
        }
        return { height: height, width: width, collisionMap: new type_converter_1.default().to2DArray(collisionMap, width, height) };
    };
    return MapLoader;
}());
exports.default = MapLoader;
//# sourceMappingURL=map-loader.js.map