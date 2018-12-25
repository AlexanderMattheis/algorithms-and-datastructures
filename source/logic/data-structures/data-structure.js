"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DataStructure = /** @class */ (function () {
    function DataStructure() {
        this._count = 0;
    }
    Object.defineProperty(DataStructure.prototype, "count", {
        get: function () {
            return this._count;
        },
        set: function (value) {
            this._count = value;
        },
        enumerable: true,
        configurable: true
    });
    DataStructure.prototype.isEmpty = function () {
        return this._count == 0;
    };
    DataStructure.prototype.shift = function (array) {
        for (var i = array.length - 1; i > 0; i--) {
            array[i] = array[i - 1];
        }
    };
    return DataStructure;
}());
exports.default = DataStructure;
//# sourceMappingURL=data-structure.js.map