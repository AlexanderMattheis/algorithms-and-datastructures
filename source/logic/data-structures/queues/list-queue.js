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
var node_1 = require("../node");
var doubly_linked_structure_1 = require("../doubly-linked-structure");
var ListQueue = /** @class */ (function (_super) {
    __extends(ListQueue, _super);
    function ListQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListQueue.prototype.enqueue = function (element) {
        if (this._startNode === undefined) {
            this._startNode = new node_1.default(element);
            this._lastNode = this._startNode;
        }
        else {
            this._lastNode.next = new node_1.default(element, null, this._lastNode);
            this._lastNode = this._lastNode.next;
        }
        this.count++;
    };
    /**
     * Removes last position and shifts everything once to the right.
     */
    ListQueue.prototype.dequeue = function () {
        if (this._startNode !== null) {
            var startNode = this._startNode;
            this.removeFirst();
            return startNode.value;
        }
        return null;
    };
    ListQueue.prototype.front = function () {
        if (this._count > 0) {
            return this._startNode.value;
        }
        return null;
    };
    return ListQueue;
}(doubly_linked_structure_1.default));
exports.default = ListQueue;
//# sourceMappingURL=list-queue.js.map