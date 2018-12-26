import DoublyLinkedList from "../source/logic/data-structures/lists/doubly-linked-list";
import Node from "../source/logic/data-structures/node";
import GraphNode from "../source/logic/algorithms/pathfinding/graph-node";
import ListPriorityQueue from "../source/logic/data-structures/queues/list-priority-queue";
import DoublyLinkedStructure from "../source/logic/data-structures/doubly-linked-structure";

export default class TestHelpers {
    public static fillQueue(nodes: GraphNode[]): ListPriorityQueue<GraphNode> {
        let testQueue: ListPriorityQueue<GraphNode> = new ListPriorityQueue();

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

    public static getFivePathNodes(): GraphNode[] {
        let centerNode: GraphNode = new GraphNode(5,5);
        let upperNode: GraphNode = new GraphNode(5,4);
        let rightNode: GraphNode = new GraphNode(6,5);
        let bottomNode: GraphNode = new GraphNode(5,6);
        let leftNode: GraphNode = new GraphNode(4,5);

        return [centerNode, upperNode, rightNode, bottomNode, leftNode];
    }
}


