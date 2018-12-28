import { expect } from 'chai';
import 'mocha';

import ListPriorityQueue from "../../../../source/logic/data-structures/queues/list-priority-queue";
import Vector from "../../../../source/logic/math/vector";
import TestHelpers from "../../../test-helpers";

describe('Data-Structure - List Priority Queue', () => {

    it('Inserting elements.', () => {
        let vectors: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(vectors);

        expect(testQueue.count).to.equal(5);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
    });

    it('Dequeuing.', () => {
        let vectors: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(vectors);

        let element = testQueue.dequeue();

        expect(element).to.deep.equal(vectors[1]);
        expect(testQueue.front()).to.deep.equal(vectors[0]);
        expect(testQueue.frontPriority()).to.deep.equal(2);

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
    });

    it('Removing inside.', () => {
        let vectors: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(vectors);

        // 'equals' checks only for equality of x and y, such that 'bottomNode' with position (5,6) will be removed
        testQueue.remove(new Vector(5, 6));

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([vectors[2], vectors[4], vectors[0], vectors[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[0], vectors[1]]);
    });

    it('Removing front.', () => {
        let vectors: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(vectors);

        testQueue.remove(vectors[1]);

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0]]);
    });

    it('Removing back.', () => {
        let nodes: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(nodes);

        testQueue.remove(nodes[2]);

        expect(testQueue.count).to.equal(4);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it('Removing non-existent.', () => {
        let vectors: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(vectors);

        testQueue.remove(new Vector(5,2));

        expect(testQueue.count).to.equal(5);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
    });

    it("Testing 'contains'-operation.", () => {
        let vectors: Vector[] = TestHelpers.getFiveVectors();
        let testQueue: ListPriorityQueue<Vector> = TestHelpers.fillQueue(vectors);

        expect(testQueue.contains(new Vector(5,2))).to.equal(false);
        expect(testQueue.contains(vectors[0])).to.equal(true);
        expect(testQueue.contains(vectors[1])).to.equal(true);
        expect(testQueue.contains(vectors[2])).to.equal(true);
        expect(testQueue.contains(vectors[3])).to.equal(true);
        expect(testQueue.contains(vectors[4])).to.equal(true);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([vectors[2], vectors[4], vectors[3], vectors[0], vectors[1]]);
    });
});
