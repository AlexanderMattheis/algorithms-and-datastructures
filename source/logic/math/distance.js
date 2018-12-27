"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaults_1 = require("../../../source/system/defaults");
var value_cache_1 = require("./value-cache");
var DistanceType;
(function (DistanceType) {
    DistanceType[DistanceType["Euclidean"] = 0] = "Euclidean";
    DistanceType[DistanceType["Manhattan"] = 1] = "Manhattan";
    DistanceType[DistanceType["Chebychev"] = 2] = "Chebychev";
})(DistanceType || (DistanceType = {}));
var Distance = /** @class */ (function () {
    function Distance() {
    }
    Distance.getLength = function (start, end, type) {
        if (type === DistanceType.Chebychev) {
            return Distance.chebychev(start, end);
        }
        else if (type === DistanceType.Euclidean) {
            return Distance.euclidean(start, end);
        }
        else if (type === DistanceType.Manhattan) {
            return Distance.manhattan(start, end);
        }
        return defaults_1.default.error;
    };
    Distance.chebychev = function (start, end) {
        var deltaX = Math.abs(end.x - start.x);
        var deltaY = Math.abs(end.y - start.y);
        return Math.max(deltaX, deltaY);
    };
    Distance.euclidean = function (start, end) {
        var deltaX = end.x - start.x;
        var deltaY = end.y - start.y;
        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };
    Distance.manhattan = function (start, end) {
        var deltaX = Math.abs(end.x - start.x);
        var deltaY = Math.abs(end.y - start.y);
        return deltaX + deltaY;
    };
    Distance.getEdgeLength = function (start, end) {
        var deltaX = end.x - start.x;
        var deltaY = end.y - start.y;
        var isDiagonal = deltaX !== 0 && deltaY !== 0;
        return isDiagonal ? value_cache_1.default.sqrt2 : 1;
    };
    return Distance;
}());
exports.default = Distance;
//# sourceMappingURL=distance.js.map