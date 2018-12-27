"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Map = /** @class */ (function () {
    function Map(height, width) {
        this._height = height;
        this._width = width;
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
    Map.prototype.isBlocked = function (position) {
        if (this.isOutOfBounds(position)) {
            return true;
        }
        return this._collision[position.x][position.y];
    };
    Map.prototype.isOutOfBounds = function (position) {
        return position.x < 0 || position.y < 0 || position.x >= this._width || position.y >= this._height;
    };
    return Map;
}());
exports.default = Map;
//# sourceMappingURL=map.js.map