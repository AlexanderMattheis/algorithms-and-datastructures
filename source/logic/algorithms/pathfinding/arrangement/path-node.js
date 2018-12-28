"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("../../../math/vector");
var PathNode = /** @class */ (function () {
    function PathNode(posX, posY) {
        this._fieldPos = new vector_1.default(posX, posY);
    }
    Object.defineProperty(PathNode.prototype, "exactDistanceFromStart", {
        get: function () {
            return this._exactDistanceFromStart;
        },
        set: function (value) {
            this._exactDistanceFromStart = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathNode.prototype, "fieldPos", {
        get: function () {
            return this._fieldPos;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathNode.prototype, "previous", {
        get: function () {
            return this._previous;
        },
        set: function (value) {
            this._previous = value;
        },
        enumerable: true,
        configurable: true
    });
    PathNode.prototype.equals = function (pathNode) {
        return this._fieldPos.equals(pathNode._fieldPos);
    };
    return PathNode;
}());
exports.default = PathNode;
//# sourceMappingURL=path-node.js.map