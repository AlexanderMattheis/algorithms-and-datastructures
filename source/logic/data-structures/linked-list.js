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
var node_1 = require("./substructures/node");
var LinkedList = /** @class */ (function (_super) {
    __extends(LinkedList, _super);
    function LinkedList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Appends at the last position.
     */
    LinkedList.prototype.append = function (value) {
        if (this._startNode === undefined) {
            this._startNode = new node_1.default(value);
            this._lastNode = this._startNode;
        }
        else {
            this._lastNode.next = new node_1.default(value);
            this._lastNode = this._lastNode.next;
        }
        this.count++;
    };
    /**
     * Inserts after the given node position.
     */
    LinkedList.prototype.insert = function (value, position) {
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
            currentNode.next = new node_1.default(value, oldNextNode);
            this.count++;
        }
    };
    /**
     * Deletes at the given position.
     */
    LinkedList.prototype.delete = function (position) {
        var currentNode = this._startNode;
        if (position === 0) { // remove first
            this.removeFirst();
            this.count--;
        }
        else if (position > 0 && position < this.count) {
            var previousNode = new node_1.default();
            // search position
            for (var i = 0; i < position; i++) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
            // remove
            previousNode.next = currentNode.next;
            // currentNode = undefined;  // not necessary since no more in data-structure after leaving this function
            if (position === this.count - 1) { // after removing last
                this._lastNode = previousNode;
            }
            this.count--;
        }
    };
    LinkedList.prototype.removeFirst = function () {
        if (this.count > 0) {
            var nextNode = this._startNode.next;
            this._startNode = nextNode;
            if (this.count === 1) { // change pointer of lastNode
                this._lastNode = nextNode;
            }
        }
    };
    LinkedList.prototype.getAllValues = function () {
        var values = new Array(this.count);
        var currentNode = this._startNode;
        for (var i = 0; i < values.length; i++) {
            values[i] = currentNode.value;
            currentNode = currentNode.next;
        }
        return values;
    };
    return LinkedList;
}(data_structure_1.default));
exports.default = LinkedList;
//# sourceMappingURL=linked-list.js.map