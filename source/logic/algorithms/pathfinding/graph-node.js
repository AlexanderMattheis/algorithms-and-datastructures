"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GraphNode = /** @class */ (function () {
    function GraphNode(x, y) {
        this.x = x;
        this.y = y;
    }
    GraphNode.prototype.equals = function (element) {
        if (this.x === element.x && this.y === element.y) {
            return true;
        }
        return false;
    };
    Object.defineProperty(GraphNode.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GraphNode.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
        },
        enumerable: true,
        configurable: true
    });
    return GraphNode;
}());
exports.default = GraphNode;
//# sourceMappingURL=graph-node.js.map