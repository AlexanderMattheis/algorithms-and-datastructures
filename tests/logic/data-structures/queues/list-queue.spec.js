"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
require("mocha");
var list_queue_1 = require("../../../../source/logic/data-structures/queues/list-queue");
describe('List Queue', function () {
    it('Adding elements.', function () {
        var testQueue = new list_queue_1.default(); // size: 5 !
        chai_1.expect(testQueue.front()).to.equal(null);
        // enqueue 6 elements (too many!)
        testQueue.enqueue(1);
        chai_1.expect(testQueue.front()).to.equal(1);
        testQueue.enqueue(5);
        testQueue.enqueue(6);
        testQueue.enqueue(6);
        testQueue.enqueue(8);
        chai_1.expect(testQueue.count).to.equal(5);
        chai_1.expect(testQueue.front()).to.equal(1);
    });
    it('Adding/Removing elements.', function () {
        var testQueue = new list_queue_1.default();
        chai_1.expect(testQueue.isEmpty()).to.equal(true);
        // adding
        testQueue.enqueue(1);
        chai_1.expect(testQueue.isEmpty()).to.equal(false);
        testQueue.enqueue(5);
        // removing first
        var value = testQueue.dequeue();
        chai_1.expect(testQueue.count).to.equal(1);
        chai_1.expect(value).to.equal(1);
        chai_1.expect(testQueue.isEmpty()).to.equal(false);
        // removing second
        value = testQueue.dequeue();
        chai_1.expect(testQueue.count).to.equal(0);
        chai_1.expect(value).to.equal(5);
        chai_1.expect(testQueue.isEmpty()).to.equal(true);
        // removing nothing
        value = testQueue.dequeue();
        chai_1.expect(testQueue.count).to.equal(0);
        chai_1.expect(value).to.equal(null);
        chai_1.expect(testQueue.isEmpty()).to.equal(true);
    });
});
//# sourceMappingURL=list-queue.spec.js.map