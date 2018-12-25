import Node from "../node";
import DoublyLinkedList from "./doubly-linked-list";

export default class PriorityQueueList<T> extends DoublyLinkedList<T> {

    public insert(element: T, priority: number): void {
        let currentNode: Node<T> = this._startNode;

        while(currentNode !== null) {
            if (priority >= currentNode.priority) {
                let oldNextNode: Node<T> = currentNode.next;
                let newNode: Node<T> = new Node<T>(element, oldNextNode, currentNode);

                currentNode.next.previous = newNode;
                currentNode.next = newNode;
                break;
            }

            currentNode = currentNode.next;
        }

        this.count++;
    }

    public dequeue(): T {
        let minValue: T = this._lastNode.value;
        this.removeLast();
        this.count--;
        return minValue;
    }

    public remove(element: T): void {
        let previousNode: Node<T>;
        let currentNode: Node<T> = this._startNode;

        while(currentNode !== null) {
            previousNode = currentNode;
            currentNode = currentNode.next;

            // @ts-ignore
            if (currentNode.value.equals(element)) {
                currentNode.next.previous = previousNode;
                previousNode.next = currentNode.next;
                break;
            }
        }

        this.count--;
    }

    public front(): T {
        return this._lastNode.value;
    }

    public frontPriority(): number {
        return this._lastNode.priority;
    }

    public contains(element: T): void {
    }
}