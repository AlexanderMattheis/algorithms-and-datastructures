import Node from "../node";
import DoublyLinkedList from "./doubly-linked-list";

export default class ListQueue<T> extends DoublyLinkedList<T> {

    public enqueue(element: T): void {
        this.append(element);
    }

    /**
     * Removes last position and shifts everything once to the right.
     */
    public dequeue(): T {
        if (this._startNode !== null) {
            let startNode: Node<T> = this._startNode;
            this.removeFirst();

            return startNode.value;
        }

        return null;
    }

    public front(): T {
        if (this._count > 0) {
            return this._startNode.value;
        }

        return null;
    }
}