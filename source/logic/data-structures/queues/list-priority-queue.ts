import Node from "../node";
import DoublyLinkedStructure from "../doubly-linked-structure";
import {Equality} from "../../../system/equality";

export default class ListPriorityQueue<T extends Equality<T>> extends DoublyLinkedStructure<T> {

    public enqueue(element: T, priority: number): void {
        let nodeNumber: number = 0;

        if (this._startNode !== undefined) {
            let currentNode: Node<T> = this._startNode;
            let previousNode: Node<T>;

            // iterate over all positions until a position is found
            // at which the new elements' priority is bigger than/equal the position right of it
            while(currentNode !== undefined) {
                // @ts-ignore
                if (priority >= currentNode.priority) {
                    let newNode: Node<T> = new Node<T>(element);
                    newNode.priority = priority;

                    newNode.previous = currentNode.previous;
                    newNode.next = currentNode;

                    if (currentNode.previous !== undefined) {
                        currentNode.previous.next = newNode;
                    }

                    currentNode.previous = newNode;

                    if (nodeNumber === 0) {  // insertion at the first place
                        this._startNode = newNode;
                    }
                    break;
                }

                previousNode = currentNode;
                currentNode = currentNode.next;
                nodeNumber++;
            }

            if (currentNode === undefined) {  // inserting at the last position
                let newNode: Node<T> = new Node<T>(element, undefined, previousNode);
                newNode.priority = priority;
                previousNode.next = newNode;
                this._lastNode = newNode;
            }
        } else {  // case: no node is contained in the list
            this._startNode = new Node<T>(element);
            this._startNode.priority = priority;
            this._lastNode = this._startNode;
        }

        this.count++;
    }

    public dequeue(): T {
        let highestPriorityElement: T = this._lastNode.value;
        this.removeLast();
        return highestPriorityElement;
    }

    public remove(element: T): void {
        let previousNode: Node<T>;
        let currentNode: Node<T> = this._startNode;

        // @ts-ignore
        if (this._lastNode.value.equals(element)) {  // deletion at the front
            let noPrevious: boolean = this._lastNode.previous === undefined;

            if (noPrevious) {
                this._lastNode = undefined;
                this._startNode = this._lastNode;
            } else {  // reference previous.next to undefined
                this._lastNode.previous.next = undefined;
                this._lastNode = this._lastNode.previous;  // new last node
            }

            this.count--;
        }
        // @ts-ignore
        else if(this._startNode.value.equals(element)) {  // deletion at the back
            let noNext: boolean = this._startNode.next === undefined;

            if (noNext) {
                this._startNode = undefined;
                this._lastNode = this._startNode;
            } else {  // reference previous.next to undefined
                this._startNode.next.previous = undefined;
                this._startNode = this._startNode.next;  // new start node
            }

            this.count--;
        } else {
            while(currentNode !== undefined) {
                // @ts-ignore
                if (currentNode.value.equals(element)) {
                    currentNode.next.previous = previousNode;
                    previousNode.next = currentNode.next;
                    this.count--;
                    break;
                }

                previousNode = currentNode;
                currentNode = currentNode.next;
            }
        }
    }

    public front(): T {
        return this._lastNode.value;
    }

    public frontPriority(): number {
        return this._lastNode.priority;
    }
}