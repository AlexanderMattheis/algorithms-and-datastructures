"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack(size) {
        this._array = new Array(size);
        this._size = size;
        this._top = 0;
    }
    Stack.prototype.isEmpty = function () {
        return this._top == 0;
    };
    Stack.prototype.push = function (element) {
        if (this._top < this._size) {
            this._array[this._top++] = element;
        }
    };
    Stack.prototype.pop = function () {
        if (this._top > 0) {
            var lastTop = --this._top;
            var value = this._array[lastTop];
            this._array[this._top] = undefined;
            return value;
        }
        return null;
    };
    Stack.prototype.peek = function () {
        if (this._top > 0) {
            return this._array[this._top - 1];
        }
        return null;
    };
    Object.defineProperty(Stack.prototype, "top", {
        get: function () {
            return this._top;
        },
        enumerable: true,
        configurable: true
    });
    return Stack;
}());
exports.default = Stack;
//# sourceMappingURL=stack.js.map