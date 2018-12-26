import { expect } from 'chai';
import 'mocha';

import PriorityQueueList from "../../../../source/logic/data-structures/lists/priority-queue-list";
import PathNode from "../../../../source/logic/algorithms/path-finding/path-node";
import TestHelpers from "./test-helpers";

describe('Priority Queue List', () => {

    it('Inserting elements.', () => {
        let testQueue: PriorityQueueList<PathNode> = new PriorityQueueList();

        let centerNode: PathNode = new PathNode(5,5);

        let upperNode: PathNode = new PathNode(5,4);
        let rightNode: PathNode = new PathNode(6,5);
        let bottomNode: PathNode = new PathNode(5,6);
        let leftNode: PathNode = new PathNode(4,5);

        testQueue.insert(centerNode, 2);

        testQueue.insert(upperNode, 1);
        testQueue.insert(rightNode, 3.5);
        testQueue.insert(bottomNode, 2.4);
        testQueue.insert(leftNode, 3.2);

        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode, upperNode]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode, upperNode]);
    });

    it('Dequeuing.', () => {
        let testQueue: PriorityQueueList<PathNode> = new PriorityQueueList();

        let centerNode: PathNode = new PathNode(5,5);

        let upperNode: PathNode = new PathNode(5,4);
        let rightNode: PathNode = new PathNode(6,5);
        let bottomNode: PathNode = new PathNode(5,6);
        let leftNode: PathNode = new PathNode(4,5);

        testQueue.insert(centerNode, 2);

        testQueue.insert(upperNode, 1);
        testQueue.insert(rightNode, 3.5);
        testQueue.insert(bottomNode, 2.4);
        testQueue.insert(leftNode, 3.2);

        let element = testQueue.dequeue();

        expect(element).to.deep.equal(upperNode);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode]);
        expect(TestHelpers.getDoublyLinkedListValues(testQueue, 5, true))
            .to.deep.equal([rightNode, leftNode, bottomNode, centerNode]);
    });
});
