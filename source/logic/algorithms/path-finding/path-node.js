"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PathNode = /** @class */ (function () {
    function PathNode(x, y) {
        this.x = x;
        this.y = y;
    }
    PathNode.prototype.equals = function (element) {
        if (this.x === element.x && this.y === element.y) {
            return true;
        }
        return false;
    };
    Object.defineProperty(PathNode.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PathNode.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return PathNode;
}());
exports.default = PathNode;
//# sourceMappingURL=path-node.js.map