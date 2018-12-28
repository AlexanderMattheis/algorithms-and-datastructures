"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var vector_1 = require("../../../../source/logic/math/vector");
var test_helpers_1 = require("../../../test-helpers");
describe('Data-Structure - List Priority Queue', function () {
    it('Inserting elements.', function () {
        var vectors = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(vectors);
        chai_1.expect(testQueue.count).to.equal(5);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
    });
    it('Dequeuing.', function () {
        var vectors = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(vectors);
        var element = testQueue.dequeue();
        chai_1.expect(element).to.deep.equal(vectors[1]);
        chai_1.expect(testQueue.front()).to.deep.equal(vectors[0]);
        chai_1.expect(testQueue.frontPriority()).to.deep.equal(2);
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
    });
    it('Removing inside.', function () {
        var vectors = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(vectors);
        // 'equals' checks only for equality of x and y, such that 'bottomNode' with position (5,6) will be removed
        testQueue.remove(new vector_1.default(5, 6));
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([vectors[2], vectors[4], vectors[0], vectors[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[0], vectors[1]]);
    });
    it('Removing front.', function () {
        var vectors = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(vectors);
        testQueue.remove(vectors[1]);
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
    });
    it('Removing back.', function () {
        var nodes = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(nodes);
        testQueue.remove(nodes[2]);
        chai_1.expect(testQueue.count).to.equal(4);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
    });
    it('Removing non-existent.', function () {
        var vectors = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(vectors);
        testQueue.remove(new vector_1.default(5, 2));
        chai_1.expect(testQueue.count).to.equal(5);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
    });
    it("Testing 'contains'-operation.", function () {
        var vectors = test_helpers_1.default.getFiveVectors();
        var testQueue = test_helpers_1.default.fillQueue(vectors);
        chai_1.expect(testQueue.contains(new vector_1.default(5, 2))).to.equal(false);
        chai_1.expect(testQueue.contains(vectors[0])).to.equal(true);
        chai_1.expect(testQueue.contains(vectors[1])).to.equal(true);
        chai_1.expect(testQueue.contains(vectors[2])).to.equal(true);
        chai_1.expect(testQueue.contains(vectors[3])).to.equal(true);
        chai_1.expect(testQueue.contains(vectors[4])).to.equal(true);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
        chai_1.expect(test_helpers_1.default.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
    });
});
//# sourceMappingURL=list-priority-queue.spec.js.map