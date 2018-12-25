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
var doubly_linked_list_1 = require("./doubly-linked-list");
var PriorityQueueList = /** @class */ (function (_super) {
    __extends(PriorityQueueList, _super);
    function PriorityQueueList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PriorityQueueList.prototype.insert = function (element, priority) {
        var currentNode = this._startNode;
        while (currentNode !== null) {
            if (priority >= currentNode.priority) {
                var oldNextNode = currentNode.next;
                var newNode = new node_1.default(element, oldNextNode, currentNode);
                currentNode.next.previous = newNode;
                currentNode.next = newNode;
                break;
            }
            currentNode = currentNode.next;
        }
        this.count++;
    };
    PriorityQueueList.prototype.dequeue = function () {
        var minValue = this._lastNode.value;
        this.removeLast();
        this.count--;
        return minValue;
    };
    PriorityQueueList.prototype.remove = function (element) {
        var previousNode;
        var currentNode = this._startNode;
        while (currentNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;
            // @ts-ignore
            if (currentNode.value.equals(element)) {
                currentNode.next.previous = previousNode;
                previousNode.next = currentNode.next;
                break;
            }
        }
        this.count--;
    };
    PriorityQueueList.prototype.front = function () {
        return this._lastNode.value;
    };
    PriorityQueueList.prototype.frontPriority = function () {
        return this._lastNode.priority;
    };
    PriorityQueueList.prototype.contains = function (element) {
    };
    return PriorityQueueList;
}(doubly_linked_list_1.default));
exports.default = PriorityQueueList;
//# sourceMappingURL=priority-queue-list.js.map