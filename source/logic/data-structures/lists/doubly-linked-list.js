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
var node_1 = require("../node");
var DoublyLinkedList = /** @class */ (function (_super) {
    __extends(DoublyLinkedList, _super);
    function DoublyLinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DoublyLinkedList.prototype, "root", {
        get: function () {
            return this._startNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoublyLinkedList.prototype, "leaf", {
        get: function () {
            return this._lastNode;
        },
        enumerable: true,
        configurable: true
    });
    DoublyLinkedList.prototype.append = function (value) {
        if (this._startNode === undefined) {
            this._startNode = new node_1.default(value);
            this._lastNode = this._startNode;
        }
        else {
            this._lastNode.next = new node_1.default(value, null, this._lastNode);
            this._lastNode = this._lastNode.next;
        }
        this.count++;
    };
    DoublyLinkedList.prototype.insert = function (value, position) {
        var currentNode = this._startNode;
        // inserting when list is empty or after the last position
        if ((position === 0 && this.count === 0) || position === this.count - 1) {
            this.append(value);
        }
        else if (position >= 0 && position < this.count) { // this.count - 1 would also be correct
            // search position
            for (var i = 0; i < position; i++) {
                currentNode = currentNode.next;
            }
            // insert
            var oldNextNode = currentNode.next;
            var newNode = new node_1.default(value, oldNextNode, currentNode);
            currentNode.next.previous = newNode;
            currentNode.next = newNode;
            this.count++;
        }
    };
    /**
     * Deletes at the given position.
     */
    DoublyLinkedList.prototype.delete = function (position) {
        var currentNode = this._startNode;
        if (position === 0) { // remove first
            this.removeFirst();
        }
        else if (position === this.count - 1) { // removing last
            this.removeLast();
        }
        else if (position > 0 && position < this.count) {
            // search position
            for (var i = 0; i < position; i++) {
                currentNode = currentNode.next;
            }
            // remove
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;
            this.count--;
        }
    };
    DoublyLinkedList.prototype.removeFirst = function () {
        if (this.count > 0) {
            this._startNode = this._startNode.next;
            if (this._startNode !== null) {
                this._startNode.previous = undefined;
            }
            if (this.count === 1) { // change pointer of lastNode
                this._lastNode = undefined;
            }
            this.count--;
        }
    };
    DoublyLinkedList.prototype.removeLast = function () {
        if (this.count > 0) {
            this._lastNode = this._lastNode.previous;
            if (this._lastNode !== null) {
                this._lastNode.next = undefined;
            }
            if (this.count === 1) { // change pointer of firstNode
                this._startNode = undefined;
            }
            this.count--;
        }
    };
    return DoublyLinkedList;
}(data_structure_1.default));
exports.default = DoublyLinkedList;
//# sourceMappingURL=doubly-linked-list.js.map