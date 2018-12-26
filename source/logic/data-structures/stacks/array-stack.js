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
var finite_structure_1 = require("../finite-structure");
var ArrayStack = /** @class */ (function (_super) {
    __extends(ArrayStack, _super);
    function ArrayStack(size) {
        return _super.call(this, size) || this;
    }
    ArrayStack.prototype.push = function (element) {
        if (this._count < this._size) {
            this._array[this._count] = element;
            this._count++;
        }
    };
    ArrayStack.prototype.pop = function () {
        if (this._count > 0) {
            this._count--;
            return this._array[this._count];
        }
        return null;
    };
    ArrayStack.prototype.top = function () {
        if (this._count > 0) {
            return this._array[this._count - 1];
        }
        return null;
    };
    return ArrayStack;
}(finite_structure_1.default));
exports.default = ArrayStack;
//# sourceMappingURL=array-stack.js.map