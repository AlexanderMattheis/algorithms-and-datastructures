import LimitedStructure from "./limited-structure";

export default class Queue<T> extends LimitedStructure<T> {  // FIFO: First In - First Out

    public constructor(size: number) {
        super(size);
    }

    public enqueue(element: T): void {
        if (this._count < this._size) {
            this._count++;
            this._array[this._size - this._count] = element;
        }
    }

    /**
     * Removes last position and shifts everything once to the right.
     */
    public dequeue(): T {
        if (this._count > 0) {
            this._count--;

            let temp = this._array[this._size - 1];
            this.shift(this._array);  // this._array[this._size - 1] = undefined;
            return temp;
        }

        return null;
    }

    public front(): T {
        if (this._count > 0) {
            return this._array[this._size - 1];
        }

        return null;
    }
}