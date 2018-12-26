"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var graph_node_1 = require("../../../../source/logic/algorithms/pathfinding/graph-node");
var test_helpers_1 = require("../../../test-helpers");
describe('List Priority Queue', function () {
    it('Inserting elements.', function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        chai_1.expect(testQueue.count).to.equal(5);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });
    it('Dequeuing.', function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        var element = testQueue.dequeue();
        chai_1.expect(element).to.deep.equal(nodes[1]);
        chai_1.expect(testQueue.front()).to.deep.equal(nodes[0]);
        chai_1.expect(testQueue.frontPriority()).to.deep.equal(2);
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
    });
    it('Removing inside.', function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        // 'equals' checks only for equality of x and y, such that 'bottomNode' with position (5,6) will be removed
        testQueue.remove(new graph_node_1.default(5, 6));
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[0], nodes[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[0], nodes[1]]);
    });
    it('Removing front.', function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        testQueue.remove(nodes[1]);
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
    });
    it('Removing back.', function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        testQueue.remove(nodes[2]);
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
    });
    it('Removing non-existent.', function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        testQueue.remove(new graph_node_1.default(5, 2));
        chai_1.expect(testQueue.count).to.equal(5);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });
    it("Testing 'contains'-operation.", function () {
        var nodes = test_helpers_1.default.getFivePathNodes();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        chai_1.expect(testQueue.contains(new graph_node_1.default(5, 2))).to.equal(false);
        chai_1.expect(testQueue.contains(nodes[0])).to.equal(true);
        chai_1.expect(testQueue.contains(nodes[1])).to.equal(true);
        chai_1.expect(testQueue.contains(nodes[2])).to.equal(true);
        chai_1.expect(testQueue.contains(nodes[3])).to.equal(true);
        chai_1.expect(testQueue.contains(nodes[4])).to.equal(true);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });
});
//# sourceMappingURL=list-priority-queue.spec.js.map