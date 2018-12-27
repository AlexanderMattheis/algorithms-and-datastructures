"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("../source/logic/math/vector");
var list_priority_queue_1 = require("../source/logic/data-structures/queues/list-priority-queue");
var TestHelpers = /** @class */ (function () {
    function TestHelpers() {
    }
    TestHelpers.fillQueue = function (nodes) {
        var testQueue = new list_priority_queue_1.default();
        testQueue.enqueue(nodes[0], 2);
        testQueue.enqueue(nodes[1], 1);
        testQueue.enqueue(nodes[2], 3.5);
        testQueue.enqueue(nodes[3], 2.4);
        testQueue.enqueue(nodes[4], 3.2);
        return testQueue;
    };
    TestHelpers.getDoublyLinkedListValues = function (list, count, fromRightEnd) {
        var values = new Array(count);
        if (fromRightEnd) {
            var currentNode = list.leaf;
            for (var i = values.length - 1; i >= 0; i--) {
                values[i] = currentNode.value;
                currentNode = currentNode.previous;
            }
        }
        else {
            var currentNode = list.root;
            for (var i = 0; i < values.length; i++) {
                values[i] = currentNode.value;
                currentNode = currentNode.next;
            }
        }
        return values;
    };
    TestHelpers.getLinkedListValues = function (startNode, count) {
        var values = new Array(count);
        var currentNode = startNode;
        for (var i = 0; i < values.length; i++) {
            values[i] = currentNode.value;
            currentNode = currentNode.next;
        }
        return values;
    };
    TestHelpers.getFivePathNodes = function () {
        var centerNode = new vector_1.default(5, 5);
        var upperNode = new vector_1.default(5, 4);
        var rightNode = new vector_1.default(6, 5);
        var bottomNode = new vector_1.default(5, 6);
        var leftNode = new vector_1.default(4, 5);
        return [centerNode, upperNode, rightNode, bottomNode, leftNode];
    };
    return TestHelpers;
}());
exports.default = TestHelpers;
//# sourceMappingURL=test-helpers.js.map