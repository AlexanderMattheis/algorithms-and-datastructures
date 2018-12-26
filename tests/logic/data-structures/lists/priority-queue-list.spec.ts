import { expect } from 'chai';
import 'mocha';

import PriorityQueueList from "../../../../source/logic/data-structures/lists/priority-queue-list";
import PathNode from "../../../../source/logic/algorithms/path-finding/path-node";
import TestHelpers from "./test-helpers";

describe('Priority Queue List', () => {

    it('Inserting elements.', () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it('Dequeuing.', () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        let element = testQueue.dequeue();

        expect(element).to.deep.equal(nodes[1]);
        expect(testQueue.front()).to.deep.equal(nodes[0]);
        expect(testQueue.frontPriority()).to.deep.equal(2);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
    });

    it('Removing inside.', () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        // 'equals' checks only for equality of x and y, such that 'bottomNode' with position (5,6) will be removed
        testQueue.remove(new PathNode(5, 6));

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[0], nodes[1]]);
    });

    it('Removing front.', () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        testQueue.remove(nodes[1]);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0]]);
    });

    it('Removing back.', () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        testQueue.remove(nodes[2]);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 4, true))
            .to.deep.equal([nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it('Removing non-existent.', () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        testQueue.remove(new PathNode(5,2));

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([nodes[2], nodes[4], nodes[3], nodes[0], nodes[1]]);
    });

    it("Testing 'contains'-operation.", () => {
        let nodes: PathNode[] = TestHelpers.getFivePathNodes();
        let testQueue: PriorityQueueList<PathNode> = TestHelpers.fillQueue(nodes);

        expect(testQueue.contains(new PathNode(5,2))).to.equal(false);
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
