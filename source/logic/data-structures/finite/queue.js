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
var Queue = /** @class */ (function (_super) {
    __extends(Queue, _super);
    function Queue(size) {
        return _super.call(this, size) || this;
    }
    Queue.prototype.enqueue = function (element) {
        if (this._count < this._size) {
            this._count++;
            this._array[this._size - this._count] = element;
        }
    };
    /**
     * Removes last position and shifts everything once to the right.
     */
    Queue.prototype.dequeue = function () {
        if (this._count > 0) {
            this._count--;
            var temp = this._array[this._size - 1];
            this.shift(this._array); // this._array[this._size - 1] = undefined;
            return temp;
        }
        return null;
    };
    Queue.prototype.front = function () {
        if (this._count > 0) {
            return this._array[this._size - 1];
        }
        return null;
    };
    return Queue;
}(finite_structure_1.default));
exports.default = Queue;
//# sourceMappingURL=queue.js.map