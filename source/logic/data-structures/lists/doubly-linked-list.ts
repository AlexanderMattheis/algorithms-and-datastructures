import Node from "../node";
import DoublyLinkedStructure from "../doubly-linked-structure";
import {Equality} from "../../../system/interfaces/equality";

export default class DoublyLinkedList<T extends Equality<T>> extends DoublyLinkedStructure<T> {

    public append(value: T): void {
        if (this._startNode === undefined) {
            this._startNode = new Node<T>(value);
            this._lastNode = this._startNode;
        } else {
            this._lastNode.next = new Node<T>(value, null, this._lastNode);
            this._lastNode = this._lastNode.next;
        }

        this.count++;
    }

    public insert(value: T, position: number): void {
        let currentNode: Node<T> = this._startNode;

        // inserting when list is empty or after the last position
        if ((position === 0 && this.count === 0) || position === this.count - 1) {
            this.append(value);
        } else if (position >= 0 && position < this.count) {  // this.count - 1 would also be correct
            // search position
            for (let i: number = 0; i < position; i++) {
                currentNode = currentNode.next;
            }

            // insert
            let oldNextNode: Node<T> = currentNode.next;
            let newNode: Node<T> = new Node<T>(value, oldNextNode, currentNode);

            currentNode.next.previous = newNode;
            currentNode.next = newNode;

            this.count++;
        }
    }

    /**
     * Deletes at the given position.
     */
    public delete(position: number): void {
        let currentNode: Node<T> = this._startNode;

        if (position === 0) {  // remove first
            this.removeFirst();
        } else if (position === this.count - 1) {  // removing last
            this.removeLast();
        } else if (position > 0 && position < this.count) {
            // search position
            for (let i: number = 0; i < position; i++) {
                currentNode = currentNode.next;
            }

            // remove
            currentNode.previous.next = currentNode.next;
            currentNode.next.previous = currentNode.previous;

            this.count--;
        }
    }
}