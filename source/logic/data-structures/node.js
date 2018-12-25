"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(value, next, previous) {
        this._value = value;
        this._next = next;
        this._previous = previous;
    }
    Object.defineProperty(Node.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "next", {
        get: function () {
            return this._next;
        },
        set: function (value) {
            this._next = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previous", {
        get: function () {
            return this._previous;
        },
        set: function (value) {
            this._previous = value;
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}());
exports.default = Node;
//# sourceMappingURL=node.js.map