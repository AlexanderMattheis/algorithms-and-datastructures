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
var DoublyLinkedStructure = /** @class */ (function (_super) {
    __extends(DoublyLinkedStructure, _super);
    function DoublyLinkedStructure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DoublyLinkedStructure.prototype, "root", {
        get: function () {
            return this._startNode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DoublyLinkedStructure.prototype, "leaf", {
        get: function () {
            return this._lastNode;
        },
        enumerable: true,
        configurable: true
    });
    DoublyLinkedStructure.prototype.contains = function (element) {
        var currentNode = this._startNode;
        while (currentNode !== undefined) {
            if (currentNode.value === element) { // test if pointing to same reference
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    };
    DoublyLinkedStructure.prototype.removeFirst = function () {
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
    DoublyLinkedStructure.prototype.removeLast = function () {
        if (this.count > 0) {
            this._lastNode = this._lastNode.previous;
            if (this._lastNode !== undefined) {
                this._lastNode.next = undefined;
            }
            if (this.count === 1) { // change pointer of firstNode
                this._startNode = undefined;
            }
            this.count--;
        }
    };
    return DoublyLinkedStructure;
}(data_structure_1.default));
exports.default = DoublyLinkedStructure;
//# sourceMappingURL=doubly-linked-structure.js.map