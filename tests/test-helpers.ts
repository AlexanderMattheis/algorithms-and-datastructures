import DoublyLinkedList from "../source/logic/data-structures/lists/doubly-linked-list";
import Node from "../source/logic/data-structures/node";
import Vector from "../source/logic/math/vector";
import ListPriorityQueue from "../source/logic/data-structures/queues/list-priority-queue";
import DoublyLinkedStructure from "../source/logic/data-structures/doubly-linked-structure";

export default class TestHelpers {
    public static fillQueue(nodes: Vector[]): ListPriorityQueue<Vector> {
        let testQueue: ListPriorityQueue<Vector> = new ListPriorityQueue();

        testQueue.enqueue(nodes[0], 2);
        testQueue.enqueue(nodes[1], 1);
        testQueue.enqueue(nodes[2], 3.5);
        testQueue.enqueue(nodes[3], 2.4);
        testQueue.enqueue(nodes[4], 3.2);

        return testQueue;
    }

    public static getDoublyLinkedListValues<T>(list: DoublyLinkedStructure<T>, count: number, fromRightEnd?: boolean): T[] {
        let values: T[] = new Array(count);

        if (fromRightEnd) {
            let currentNode: Node<T> = list.leaf;

            for (let i: number = values.length - 1; i >= 0; i--) {
                values[i] = currentNode.value;
                currentNode = currentNode.previous;
            }
        } else {
            let currentNode: Node<T> = list.root;

            for (let i: number = 0; i < values.length; i++) {
                values[i] = currentNode.value;
                currentNode = currentNode.next;
            }
        }

        return values;
    }

    public static getLinkedListValues(startNode: Node<number>, count: number): number[] {
        let values: number[] = new Array(count);

        let currentNode: Node<number> = startNode;

        for (let i: number = 0; i < values.length; i++) {
            values[i] = currentNode.value;
            currentNode = currentNode.next;
        }

        return values;
    }

    public static getFivePathNodes(): Vector[] {
        let centerNode: Vector = new Vector(5,5);
        let upperNode: Vector = new Vector(5,4);
        let rightNode: Vector = new Vector(6,5);
        let bottomNode: Vector = new Vector(5,6);
        let leftNode: Vector = new Vector(4,5);

        return [centerNode, upperNode, rightNode, bottomNode, leftNode];
    }
}


