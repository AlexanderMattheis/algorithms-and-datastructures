"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vector_1 = require("../source/logic/math/vector");
var list_priority_queue_1 = require("../source/logic/data-structures/queues/list-priority-queue");
var TestHelpers = /** @class */ (function () {
    function TestHelpers() {
    }
    TestHelpers.fillQueue = function (vectors) {
        var testQueue = new list_priority_queue_1.default();
        testQueue.enqueue(vectors[0], 2);
        testQueue.enqueue(vectors[1], 1);
        testQueue.enqueue(vectors[2], 3.5);
        testQueue.enqueue(vectors[3], 2.4);
        testQueue.enqueue(vectors[4], 3.2);
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
    TestHelpers.getFiveVectors = function () {
        var center = new vector_1.default(5, 5);
        var upper = new vector_1.default(5, 4);
        var right = new vector_1.default(6, 5);
        var bottom = new vector_1.default(5, 6);
        var left = new vector_1.default(4, 5);
        return [center, upper, right, bottom, left];
    };
    return TestHelpers;
}());
exports.default = TestHelpers;
//# sourceMappingURL=test-helpers.js.map