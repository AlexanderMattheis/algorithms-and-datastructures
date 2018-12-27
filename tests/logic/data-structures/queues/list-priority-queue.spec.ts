import { expect } from 'chai';
import 'mocha';

import ListPriorityQueue from "../../../../source/logic/data-structures/queues/list-priority-queue";
import Vector from "../../../../source/logic/math/vector";
import TestHelpers from "../../../test-helpers";

describe('List Priority Queue', () => {

    it('Inserting elements.', () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        expect(testQueue.count).to.equal(5);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it('Dequeuing.', () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        let element = testQueue.dequeue();

        expect(element).to.deep.equal(nodes[1]);
        expect(testQueue.front()).to.deep.equal(nodes[0]);
        expect(testQueue.frontPriority()).to.deep.equal(2);

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
    });

    it('Removing inside.', () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        // 'equals' checks only for equality of x and y, such that 'bottomNode' with position (5,6) will be removed
        testQueue.remove(new Vector(5, 6));

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[0], nodes[1]]);
    });

    it('Removing front.', () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        testQueue.remove(nodes[1]);

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
    });

    it('Removing back.', () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        testQueue.remove(nodes[2]);

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it('Removing non-existent.', () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        testQueue.remove(new Vector(5,2));

        expect(testQueue.count).to.equal(5);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it("Testing 'contains'-operation.", () => {
        let nodes: Vector[] = TestHelpers.getFivePathNodes();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        expect(testQueue.contains(new Vector(5,2))).to.equal(false);
        expect(testQueue.contains(nodes[0])).to.equal(true);
        expect(testQueue.contains(nodes[1])).to.equal(true);
        expect(testQueue.contains(nodes[2])).to.equal(true);
        expect(testQueue.contains(nodes[3])).to.equal(true);
        expect(testQueue.contains(nodes[4])).to.equal(true);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });
});
