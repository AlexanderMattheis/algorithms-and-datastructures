"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = require("../../../source/system/defaults");
var value_cache_1 = require("./value-cache");
var DistanceType;
(function (DistanceType) {
    DistanceType[DistanceType["Euclidean"] = 0] = "Euclidean";
    DistanceType[DistanceType["Manhattan"] = 1] = "Manhattan";
    DistanceType[DistanceType["Chebychev"] = 2] = "Chebychev";
    DistanceType[DistanceType["Edge"] = 3] = "Edge";
})(DistanceType = exports.DistanceType || (exports.DistanceType = {}));
var Distance = /** @class */ (function () {
    function Distance() {
    }
    Distance.prototype.getLength = function (start, end, type) {
        if (type === DistanceType.Edge) {
            return this.getEdgeLength(start, end);
        }
        else if (type === DistanceType.Chebychev) {
            return this.chebychev(start, end);
        }
        else if (type === DistanceType.Euclidean) {
            return this.euclidean(start, end);
        }
        else if (type === DistanceType.Manhattan) {
            return this.manhattan(start, end);
        }
        return defaults_1.default.Error.notContained;
    };
    Distance.prototype.getEdgeLength = function (start, end) {
        var deltaX = end.x - start.x;
        var deltaY = end.y - start.y;
        var isDiagonal = deltaX !== 0 && deltaY !== 0;
        return isDiagonal ? value_cache_1.default.sqrt2 : 1;
    };
    Distance.prototype.chebychev = function (start, end) {
        var deltaX = Math.abs(end.x - start.x);
        var deltaY = Math.abs(end.y - start.y);
        return Math.max(deltaX, deltaY);
    };
    Distance.prototype.euclidean = function (start, end) {
        var deltaX = end.x - start.x;
        var deltaY = end.y - start.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };
    Distance.prototype.manhattan = function (start, end) {
        var deltaX = Math.abs(end.x - start.x);
        var deltaY = Math.abs(end.y - start.y);
        return deltaX + deltaY;
    };
    return Distance;
}());
exports.default = Distance;
//# sourceMappingURL=distance.js.map