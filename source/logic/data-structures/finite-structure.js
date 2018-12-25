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
var data_structure_1 = require("./data-structure");
var FiniteStructure = /** @class */ (function (_super) {
    __extends(FiniteStructure, _super);
    function FiniteStructure(size) {
        var _this = _super.call(this) || this;
        _this._array = new Array(size);
        _this._size = size;
        return _this;
    }
    Object.defineProperty(FiniteStructure.prototype, "size", {
        get: function () {
            return this._size;
        },
        enumerable: true,
        configurable: true
    });
    return FiniteStructure;
}(data_structure_1.default));
exports.default = FiniteStructure;
//# sourceMappingURL=finite-structure.js.map