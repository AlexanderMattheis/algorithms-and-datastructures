"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_structure_1 = require("../data-structure");
var ArraySet = /** @class */ (function (_super) {
    __extends(ArraySet, _super);
    function ArraySet() {
        var _this = _super.call(this) || this;
        _this._array = [];
        return _this;
    }
    ArraySet.prototype.add = function (element) {
        if (this.indexOf(this._array, element) >= 0) {
            this._array.push(element);
            this.count++;
        }
    };
    ArraySet.prototype.indexOf = function (array, element) {
        for (var i = 0; i < array.length; i++) {
            if (array[i].equals(element)) {
                return i;
            }
        }
        return -1;
    };
    ArraySet.prototype.clear = function () {
        this._array = [];
    };
    ArraySet.prototype.contains = function (element) {
        if (this.indexOf(this._array, element) >= 0) {
            return true;
        }
        return false;
    };
    return ArraySet;
}(data_structure_1.default));
exports.default = ArraySet;
//# sourceMappingURL=array-set.js.map