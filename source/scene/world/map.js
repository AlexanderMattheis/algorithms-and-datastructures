"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_node_1 = require("../../logic/algorithms/pathfinding/arrangement/path-node");
var Map = /** @class */ (function () {
    function Map(width, height) {
        this._height = height;
        this._width = width;
        this._nodes = this.getFreshNodes(width, height);
    }
    Object.defineProperty(Map.prototype, "collision", {
        get: function () {
            return this._collision;
        },
        set: function (value) {
            this._collision = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "nodes", {
        get: function () {
            return this._nodes;
        },
        set: function (value) {
            this._nodes = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Map.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: true,
        configurable: true
    });
    Map.prototype.isBlocked = function (posX, posY) {
        if (this.isOutOfBounds(posX, posY)) {
            return true;
        }
        return this._collision[posX][posY];
    };
    Map.prototype.isOutOfBounds = function (posX, posY) {
        return posX < 0 || posY < 0 || posX >= this._width || posY >= this._height;
    };
    Map.prototype.getFreshNodes = function (width, height) {
        var nodes = [];
        for (var x = 0; x < width; x++) {
            nodes[x] = [];
            for (var y = 0; y < height; y++) {
                nodes[x][y] = new path_node_1.default(x, y);
            }
        }
        return nodes;
    };
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=map.js.map