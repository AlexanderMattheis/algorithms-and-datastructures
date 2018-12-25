import LimitedStructure from "./limited-structure";

export default class Stack<T> extends LimitedStructure<T> {  // LIFO: Last In - First Out

    public constructor(size: number) {
        super(size);
    }

    public push(element: T): void {
        if (this._count < this._size) {
            this._array[this._count] = element;
            this._count++;
        }
    }

    public pop(): T {
        if (this._count > 0) {
            this._count--;

            let temp = this._array[this._count];
            //this._array[this._count] = undefined;
            return temp;
        }

        return null;
    }

    public top(): T {
        if (this._count > 0) {
            return this._array[this._count - 1];
        }

        return null;
    }
}