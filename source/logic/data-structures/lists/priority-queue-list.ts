import Node from "../node";
import DoublyLinkedList from "./doubly-linked-list";

export default class PriorityQueueList<T> extends DoublyLinkedList<T> {

    public insert(element: T, priority: number): void {
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
        let minValue: T = this._lastNode.value;
        this.removeLast();
        this.count--;
        return minValue;
    }

    public remove(element: T): void {
        let previousNode: Node<T>;
        let currentNode: Node<T> = this._startNode;

        while(currentNode !== undefined) {
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

    public contains(element: T): boolean {
        let currentNode: Node<T> = this._startNode;

        while(currentNode !== undefined) {
            currentNode = currentNode.next;

            // @ts-ignore
            if (currentNode.value.equals(element)) {
                return true;
            }
        }

        return false;
    }
}