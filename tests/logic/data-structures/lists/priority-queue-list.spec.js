"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var priority_queue_list_1 = require("../../../../source/logic/data-structures/lists/priority-queue-list");
var path_node_1 = require("../../../../source/logic/algorithms/path-finding/path-node");
var test_helpers_1 = require("./test-helpers");
describe('Priority Queue List', function () {
    it('Inserting elements.', function () {
        var testQueue = new priority_queue_list_1.default();
        var centerNode = new path_node_1.default(5, 5);
        var upperNode = new path_node_1.default(5, 4);
        var rightNode = new path_node_1.default(6, 5);
        var bottomNode = new path_node_1.default(5, 6);
        var leftNode = new path_node_1.default(4, 5);
        testQueue.insert(centerNode, 2);
        testQueue.insert(upperNode, 1);
        testQueue.insert(rightNode, 3.5);
        testQueue.insert(bottomNode, 2.4);
        testQueue.insert(leftNode, 3.2);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode, upperNode]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode, upperNode]);
    });
    it('Dequeuing.', function () {
        var testQueue = new priority_queue_list_1.default();
        var centerNode = new path_node_1.default(5, 5);
        var upperNode = new path_node_1.default(5, 4);
        var rightNode = new path_node_1.default(6, 5);
        var bottomNode = new path_node_1.default(5, 6);
        var leftNode = new path_node_1.default(4, 5);
        testQueue.insert(centerNode, 2);
        testQueue.insert(upperNode, 1);
        testQueue.insert(rightNode, 3.5);
        testQueue.insert(bottomNode, 2.4);
        testQueue.insert(leftNode, 3.2);
        var element = testQueue.dequeue();
        chai_1.expect(element).to.deep.equal(upperNode);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode]);
    });
});
//# sourceMappingURL=priority-queue-list.spec.js.map