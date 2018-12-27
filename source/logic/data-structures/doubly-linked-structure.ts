import DataStructure from "./data-structure";
import Node from "./node";
import {Equality} from "../../system/interfaces/equality";

export default class DoublyLinkedStructure<T extends Equality<T>> extends DataStructure<T> {
    protected _startNode: Node<T>;
    protected _lastNode: Node<T>;

    public get root(): Node<T> {
        return this._startNode;
    }

    public get leaf(): Node<T> {
        return this._lastNode;
    }

    public contains(element: T): boolean {
        let currentNode: Node<T> = this._startNode;

        while(currentNode !== undefined) {

            if (currentNode.value.equals(element)) {
                return true;
            }

            currentNode = currentNode.next;
        }

        return false;
    }

    protected removeFirst(): void {
        if (this.count > 0) {
            this._startNode = this._startNode.next;

            if (this._startNode !== null) {
                this._startNode.previous = undefined;
            }

            if (this.count === 1) {  // change pointer of lastNode
                this._lastNode = undefined;
            }

            this.count--;
        }
    }

    protected removeLast(): void {
        if (this.count > 0) {
            this._lastNode = this._lastNode.previous;

            if (this._lastNode !== null) {
                this._lastNode.next = undefined;
            }

            if (this.count === 1) {  // change pointer of firstNode
                this._startNode = undefined;
            }

            this.count--;
        }
    }
}