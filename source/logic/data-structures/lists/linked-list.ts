import DataStructure from "../data-structure";
import Node from "../node";

export default class LinkedList<T> extends DataStructure<T> {
    protected _startNode: Node<T>;
    protected _lastNode: Node<T>;

    /**
     * Appends at the last position.
     */
    public append(value: T): void {
        if (this._startNode === undefined) {
            this._startNode = new Node<T>(value);
            this._lastNode = this._startNode;
        } else {
            this._lastNode.next = new Node<T>(value);
            this._lastNode = this._lastNode.next;
        }

        this.count++;
    }

    /**
     * Inserts after the given node position.
     */
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
            currentNode.next = new Node<T>(value, oldNextNode, undefined);

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
            this.count--;
        } else if (position > 0 && position < this.count) {
            let previousNode: Node<T> = new Node<T>();

            // search position
            for (let i: number = 0; i < position; i++) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }

            // remove
            previousNode.next = currentNode.next;
            // currentNode = undefined;  // not necessary since no more in data-structure after leaving this function

            if (position === this.count - 1) {  // after removing last
                this._lastNode = previousNode;
            }

            this.count--;
        }
    }

    private removeFirst(): void {
        if (this.count > 0) {
            this._startNode = this._startNode.next;

            if (this.count === 1) {  // change pointer of lastNode
                this._lastNode = undefined;
            }
        }
    }

    public get root(): Node<T> {
        return this._startNode;
    }
}