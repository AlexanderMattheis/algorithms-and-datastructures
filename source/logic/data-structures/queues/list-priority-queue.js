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
var ListPriorityQueue = /** @class */ (function (_super) {
    __extends(ListPriorityQueue, _super);
    function ListPriorityQueue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListPriorityQueue.prototype.enqueue = function (element, priority) {
        var nodeNumber = 0;
        if (this._startNode !== undefined) {
            var currentNode = this._startNode;
            var previousNode = void 0;
            // iterate over all positions until a position is found
            // at which the new elements' priority is bigger than/equal the position right of it
            while (currentNode !== undefined) {
                // @ts-ignore
                if (priority >= currentNode.priority) {
                    var newNode = new node_1.default(element);
                    newNode.priority = priority;
                    newNode.previous = currentNode.previous;
                    newNode.next = currentNode;
                    if (currentNode.previous !== undefined) {
                        currentNode.previous.next = newNode;
                    }
                    currentNode.previous = newNode;
                    if (nodeNumber === 0) { // insertion at the first place
                        this._startNode = newNode;
                    }
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
                nodeNumber++;
            }
            if (currentNode === undefined) { // inserting at the last position
                var newNode = new node_1.default(element, undefined, previousNode);
                newNode.priority = priority;
                previousNode.next = newNode;
                this._lastNode = newNode;
            }
        }
        else { // case: no node is contained in the list
            this._startNode = new node_1.default(element);
            this._startNode.priority = priority;
            this._lastNode = this._startNode;
        }
        this.count++;
    };
    ListPriorityQueue.prototype.dequeue = function () {
        var highestPriorityElement = this._lastNode.value;
        this.removeLast();
        return highestPriorityElement;
    };
    ListPriorityQueue.prototype.remove = function (element) {
        var previousNode;
        var currentNode = this._startNode;
        // @ts-ignore
        if (this._lastNode.value.equals(element)) { // deletion at the front
            var noPrevious = this._lastNode.previous === undefined;
            if (noPrevious) {
                this._lastNode = undefined;
                this._startNode = this._lastNode;
            }
            else { // reference previous.next to undefined
                this._lastNode.previous.next = undefined;
                this._lastNode = this._lastNode.previous; // new last node
            }
            this.count--;
        }
        // @ts-ignore
        else if (this._startNode.value.equals(element)) { // deletion at the back
            var noNext = this._startNode.next === undefined;
            if (noNext) {
                this._startNode = undefined;
                this._lastNode = this._startNode;
            }
            else { // reference previous.next to undefined
                this._startNode.next.previous = undefined;
                this._startNode = this._startNode.next; // new start node
            }
            this.count--;
        }
        else {
            while (currentNode !== undefined) {
                // @ts-ignore
                if (currentNode.value.equals(element)) {
                    // hint: the previous node definitely exists since it is the "inner"-case
                    currentNode.next.previous = previousNode;
                    previousNode.next = currentNode.next;
                    this.count--;
                    break;
                }
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    };
    ListPriorityQueue.prototype.front = function () {
        return this._lastNode.value;
    };
    ListPriorityQueue.prototype.frontPriority = function () {
        return this._lastNode.priority;
    };
    ListPriorityQueue.prototype.clear = function () {
        this._startNode = undefined;
        this._lastNode = undefined;
    };
    return ListPriorityQueue;
}(doubly_linked_structure_1.default));
exports.default = ListPriorityQueue;
//# sourceMappingURL=list-priority-queue.js.map