import DataStructure from "../data-structure";
import Node from "../node";

export default class DoublyLinkedList<T> extends DataStructure<T> {
    protected _startNode: Node<T>;
    protected _lastNode: Node<T>;

    public get root(): Node<T> {
        return this._startNode;
    }

    public get leaf(): Node<T> {
        return this._lastNode;
    }

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
            this.count--;
        } else if (position === this.count - 1) {  // removing last
            this.removeLast();
            this.count--;
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

    private removeFirst(): void {
        if (this.count > 0) {
            this._startNode = this._startNode.next;

            this._startNode.previous = undefined;

            if (this.count === 1) {  // change pointer of lastNode
                this._lastNode = undefined;
            }
        }
    }

    private removeLast(): void {
        if (this.count > 0) {
            this._lastNode = this._lastNode.previous;

            this._lastNode.next = undefined;

            if (this.count === 1) {  // change pointer of firstNode
                this._startNode = undefined;
            }
        }
    }
}