import LinkedList from "./linked-list";
import Node from "../node";

export default class ListQueue<T> extends LinkedList<T> {

    public enqueue(element: T): void {
        this._startNode = new Node<T>(element, this._startNode, undefined);
    }

    /**
     * Removes last position and shifts everything once to the right.
     */
    public dequeue(): T {
        return null;
    }

    public front(): T {
        return null;
    }
}