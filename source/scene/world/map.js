"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path_node_1 = require("../../logic/algorithms/pathfinding/arrangement/path-node");
var Map = /** @class */ (function () {
    function Map(height, width) {
        this._height = height;
        this._width = width;
        this._nodes = this.getFreshNodes(height, width);
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
    Map.prototype.isBlocked = function (posX, posY) {
        if (this.isOutOfBounds(posX, posY)) {
            return true;
        }
        return this._collision[posX][posY];
    };
    Map.prototype.isOutOfBounds = function (posX, posY) {
        return posX < 0 || posY < 0 || posX >= this._width || posY >= this._height;
    };
    Map.prototype.getFreshNodes = function (height, width) {
        var nodes = [];
        for (var i = 0; i < height; i++) {
            nodes[i] = [];
            for (var j = 0; j < width; j++) {
                nodes[i][j] = new path_node_1.default(i, j);
            }
        }
        return nodes;
    };
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=map.js.map