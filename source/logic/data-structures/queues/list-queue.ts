import Node from "../node";
import DoublyLinkedStructure from "../doubly-linked-structure";
import {Equality} from "../../../system/typing/equality";

export default class ListQueue<T extends Equality<T>> extends DoublyLinkedStructure<T> {

    public enqueue(element: T): void {
        if (this._startNode === undefined) {
            this._startNode = new Node<T>(element);
            this._lastNode = this._startNode;
        } else {
            this._lastNode.next = new Node<T>(element, null, this._lastNode);
            this._lastNode = this._lastNode.next;
        }

        this.count++;
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